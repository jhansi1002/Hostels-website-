// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");
// const hostelRoutes = require("./routes/hostelRoutes");
// const complaintRoutes = require("./routes/complaintRoutes");
// dotenv.config();
// connectDB();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/api/hostel", hostelRoutes);
// app.use("/api/complaints", complaintRoutes);
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const hostelRoutes = require("./routes/hostelRoutes");
const complaintRoutes = require("./routes/complaintRoutes");
const paymentRoute = require("./routes/paymentRoute");

// Load environment variables
dotenv.config();
console.log("Starting server...");
console.log("MongoDB URI:", process.env.MONGO_URI ? "✓ Defined" : "✗ Missing!");

// Initialize Express
const app = express();
app.use(express.json());
app.use(cors());

// Add request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Connect to database first, then start the server
const startServer = async () => {
  try {
    // Connect to database
    const { EnrollDB, complaintsDB } = await connectDB();
    console.log("Database connection established");

    // Use routes
    app.use("/api/hostel", hostelRoutes);
    app.use("/api/complaints", complaintRoutes);
    app.use("/api/payment", paymentRoute);

    // Error handling middleware
    app.use((err, req, res, next) => {
      console.error("Server error:", err);
      res.status(500).json({ 
        message: "Internal server error", 
        error: process.env.NODE_ENV === 'development' ? err.message : 'An unexpected error occurred' 
      });
    });

    // Start the server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

// Start the server
startServer();