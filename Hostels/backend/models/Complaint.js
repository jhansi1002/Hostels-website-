const mongoose = require("mongoose");

const ComplaintSchema = new mongoose.Schema({
  enrollmentId: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  complaintText: { type: String, required: true },
  status: { type: String, default: "Pending" }, // Default status
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Complaint", ComplaintSchema);
