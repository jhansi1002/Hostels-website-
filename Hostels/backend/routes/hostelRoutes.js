const express = require("express");
const HostelEnrollment = require("../models/HostelEnrollment"); // Import model
const nodemailer = require("nodemailer"); // Import nodemailer
const router = express.Router();

// Configure Nodemailer (replace with your email credentials)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "hackthon95@gmail.com", // Replace with your email
    pass: "gbys snfh iufg hkpw", // Use an App Password if using Gmail
  },
});

// Hostel Enrollment Route
router.post("/enroll", async (req, res) => {
  try {
    const formData = req.body;

    // Generate a unique enrollment ID if not already generated
    formData.enrollmentId = `EID${Date.now()}`; // Unique ID based on timestamp

    // Save to MongoDB
    const newEnrollment = new HostelEnrollment(formData);
    await newEnrollment.save();

    // Email Content
    const mailOptions = {
      from: "hackthon95@gmail.com", // Replace with your email
      to: formData.email, // Send to student email
      subject: "Hostel Enrollment Confirmation",
      text: `Dear ${formData.fullName},\n\nYour hostel enrollment is successful!\nYour Enrollment ID: ${formData.enrollmentId}\n\nThank you!\nHostel Management Team`,
    };

    // Send Email
    await transporter.sendMail(mailOptions);

    res.status(201).json({
      message: "Enrollment successful!",
      enrollmentId: formData.enrollmentId,
    });

  } catch (error) {
    console.error("Error enrolling student:", error);
    res.status(500).json({ error: "Failed to enroll" });
  }
});

module.exports = router;