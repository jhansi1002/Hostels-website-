const express = require("express");
const Complaint = require("../models/Complaint");
const HostelEnrollment = require("../models/HostelEnrollment"); // Import enrollment model
const router = express.Router();

// Route to submit a complaint
router.post("/submit", async (req, res) => {
  try {
    const { enrollmentId, fullName, email, complaintText } = req.body;

    // Check if the student exists in the enrollment database
    const student = await HostelEnrollment.findOne({ enrollmentId });

    if (!student) {
      return res.status(400).json({ error: "Invalid enrollment ID. You are not enrolled!" });
    }

    // Save the complaint in MongoDB
    const newComplaint = new Complaint({ enrollmentId, fullName, email, complaintText });
    await newComplaint.save();

    res.status(201).json({ message: "Complaint submitted successfully!" });
  } catch (error) {
    console.error("Error submitting complaint:", error);
    res.status(500).json({ error: "Failed to submit complaint" });
  }
});

// Route to fetch complaints by enrollment ID (for students)
router.get("/:enrollmentId", async (req, res) => {
  try {
    const { enrollmentId } = req.params;

    // Check if student exists
    const student = await HostelEnrollment.findOne({ enrollmentId });

    if (!student) {
      return res.status(400).json({ error: "Invalid enrollment ID" });
    }

    // Fetch complaints for the student
    const complaints = await Complaint.find({ enrollmentId });

    res.status(200).json(complaints);
  } catch (error) {
    console.error("Error fetching complaints:", error);
    res.status(500).json({ error: "Failed to fetch complaints" });
  }
});

module.exports = router;
