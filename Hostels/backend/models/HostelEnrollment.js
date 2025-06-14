const mongoose = require("mongoose");

const hostelEnrollmentSchema = new mongoose.Schema(
  {
    enrollmentId: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female", "other"],
    },
    aadhar: {
      type: String,
      required: true,
      validate: {
        validator: function(v) {
          return /^\d{12}$/.test(v);
        },
        message: "Aadhar number must be exactly 12 digits"
      }
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      validate: {
        validator: function(v) {
          return /^\d{10}$/.test(v);
        },
        message: "Phone number must be exactly 10 digits"
      }
    },
    address: {
      type: String,
      required: true,
    },
    fatherMotherName: {
      type: String,
      required: true,
    },
    contact1: {
      type: String,
      required: true,
    },
    contact2: {
      type: String,
      required: true,
    },
    university: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    yearOfStudy: {
      type: String,
      required: true,
    },
    studentId: {
      type: String,
      required: true,
    },
    roomType: {
      type: String,
      required: true,
      enum: ["single", "shared"],
    },
    sharingOption: {
      type: String,
      required: function() {
        return this.roomType === "shared";
      },
    },
    foodPreference: {
      type: String,
      required: true,
      enum: ["veg", "non-veg"],
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected", "paid"],
      default: "pending",
    },
    enrollmentDate: {
      type: Date,
      default: Date.now,
    },
    paymentInfo: {
      amount: Number,
      transactionId: String,
      paymentDate: Date,
    },
  },
  { timestamps: true }
);

const HostelEnrollment = mongoose.model("HostelEnrollment", hostelEnrollmentSchema);

module.exports = HostelEnrollment;