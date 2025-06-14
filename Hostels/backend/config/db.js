// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     mongoose.set("strictQuery", false);
//     await mongoose.connect("mongodb://localhost:27017/hostelDB", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB Connected Successfully!");
//   } catch (error) {
//     console.error("MongoDB Connection Failed:", error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;
const mongoose = require("mongoose");
const HostelEnrollment = require("../models/HostelEnrollment");

const connectDB = () => {
  // Set mongoose connection options
  mongoose.set('strictQuery', false);
  
  // Set MongoDB connection timeout to higher value
  const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
    socketTimeoutMS: 45000,
    family: 4 // Use IPv4, skip trying IPv6
  };

  // Create MongoDB connection
  return new Promise((resolve, reject) => {
    mongoose.connect(process.env.MONGO_URI, connectionOptions)
      .then(() => {
        console.log('✅ MongoDB Connected Successfully!');
        
        // Get the default connection
        const db = mongoose.connection;
        
        // Set up error event handlers
        db.on('error', (err) => {
          console.error('MongoDB connection error:', err);
        });
        
        db.on('disconnected', () => {
          console.warn('MongoDB disconnected. Attempting to reconnect...');
        });
        
        db.on('reconnected', () => {
          console.log('MongoDB reconnected successfully!');
        });
        
        // Return the connection
        resolve({
          EnrollDB: mongoose.connection,
          complaintsDB: mongoose.connection,
          hostelenrollments:mongoose.connection
        });
      })
      .catch(err => {
        console.error('❌ MongoDB Connection Error:', err.message);
        console.error('Please check:');
        console.error('1. MongoDB is running');
        console.error('2. MONGO_URI is correct in your .env file');
        console.error('3. Network connectivity to MongoDB server');
        console.error('4. MongoDB user has proper permissions');
        reject(err);
      });
  });
};

module.exports = connectDB;