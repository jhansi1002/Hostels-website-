// const express = require("express");
// const HostelEnrollment = require("../models/HostelEnrollment");
// const router = express.Router();

// // Validate Enrollment ID
// router.post("/validate-enrollment", async (req, res) => {
//   const { enrollmentId } = req.body;
    
//   if (!enrollmentId) {
//     return res.status(400).json({ valid: false, message: "Enrollment ID is required" });
//   }
  
//   try {
//     const enrollment = await HostelEnrollment.findOne({ enrollmentId });
        
//     if (enrollment) {
//       // Return student details to auto-populate the form
//       res.status(200).json({
//         valid: true,
//         student: {
//           fullName: enrollment.fullName,
//           email: enrollment.email,
//           studentId: enrollment.studentId
//         }
//       });
//     } else {
//       res.status(200).json({ valid: false, message: "Invalid enrollment ID" });
//     }
//   } catch (error) {
//     console.error("Error validating enrollment ID:", error);
//     res.status(500).json({ valid: false, message: "Error validating enrollment ID" });
//   }
// });

// // Process payment (mock)
// router.post("/process", async (req, res) => {
//   const { enrollmentId, paymentDetails } = req.body;
    
//   try {
//     // Verify the enrollment ID is valid
//     const enrollment = await HostelEnrollment.findOne({ enrollmentId });
        
//     if (!enrollment) {
//       return res.status(404).json({ success: false, message: "Invalid enrollment ID" });
//     }
        
//     // Your payment processing logic here
//     // This is just a mock success response
        
//     res.status(200).json({ success: true, message: "Payment processed successfully" });
//   } catch (error) {
//     console.error("Payment processing error:", error);
//     res.status(500).json({ success: false, message: "Error processing payment" });
//   }
// });

// module.exports = router;
// In your backend server file (e.g., routes/payment.js)
const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
const crypto = require('crypto');

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'your_key_id',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'your_key_secret'
});

// Validate enrollment ID
router.post('/validate-enrollment', async (req, res) => {
  try {
    const { enrollmentId } = req.body;
    
    // Replace this with your actual validation logic
    // This is just a placeholder
    const isValid = enrollmentId && enrollmentId.length > 5;
    
    // Mock student data - replace with database query
    const studentData = isValid ? {
      fullName: "John Doe",
      studentId: "ST12345",
      email: "john.doe@example.com"
    } : null;
    
    res.json({
      valid: isValid,
      student: studentData
    });
  } catch (error) {
    console.error("Error validating enrollment:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Create Razorpay order
router.post('/create-order', async (req, res) => {
  try {
    const { amount, enrollmentId, studentName, email } = req.body;
    
    // Create a new Razorpay order
    const options = {
      amount: amount * 100, // Razorpay expects amount in paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: {
        enrollmentId: enrollmentId,
        studentName: studentName,
        email: email
      }
    };
    
    const order = await razorpay.orders.create(options);
    
    res.json(order);
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ error: "Failed to create payment order" });
  }
});

// Verify payment signature
router.post('/verify', async (req, res) => {
  try {
    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      enrollmentId
    } = req.body;
    
    // Verify the payment signature
    const generated_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET || 'your_key_secret')
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");
    
    if (generated_signature === razorpay_signature) {
      // Payment is successful
      
      // Save payment details to database
      // This is a placeholder - replace with your actual database code
      console.log("Payment successful:", {
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
        enrollmentId: enrollmentId
      });
      
      res.json({
        success: true,
        message: "Payment verified successfully"
      });
    } else {
      // Payment verification failed
      res.status(400).json({
        success: false,
        message: "Payment verification failed"
      });
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    res.status(500).json({
      success: false,
      message: "Server error during verification"
    });
  }
});

module.exports = router;