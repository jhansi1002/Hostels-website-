import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../pages/FormContext";
import "../css/hostelform.css";

const HostelForm = () => {
  const navigate = useNavigate();
  const { setFormData: setContextFormData } = useContext(FormContext);
  
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    aadhar: "",
    email: "",
    phone: "",
    address: "",
    fatherMotherName: "",
    contact1: "",
    contact2: "",
    university: "",
    branch: "",
    yearOfStudy: "",
    studentId: "",
    roomType: "single",
    sharingOption: "",
    foodPreference: "veg",
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Validate phone and Aadhar numbers
    if (name === "phone" || name === "contact1" || name === "contact2") {
      if (!/^\d{0,10}$/.test(value)) {
        alert("Phone number should be exactly 10 digits.");
        return;
      }
    }

    if (name === "aadhar") {
      if (!/^\d{0,12}$/.test(value)) {
        alert("Aadhar number should be exactly 12 digits.");
        return;
      }
    }

    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const sendEmail = (data) => {
    const { studentName, gender, registrationNumber, yearOfStudy, department, eventName, email, participantID } = data;

    const mailOptions = {
      from: "hackthon95@gmail.com",
      to: email,
      subject: "Hostel Enrollment Confirmation",
      text: `Dear ${fullName},\n\nYour hostel enrollment is successful!\nYour Enrollment ID: ${newEnrollment.enrollmentId}\n\nThank you!\nHostel Management Team`,
    }
    };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.agreement) {
      alert("Please confirm that the details provided are correct.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/hostel/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert("Enrollment successful! Your ID: " + data.enrollmentId);
        const updatedFormData = { ...formData, enrollmentId: data.enrollmentId };
        setContextFormData(updatedFormData);
        localStorage.setItem("hostelFormData", JSON.stringify(updatedFormData));
        navigate("/details");
      } else {
        alert("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form.");
    }
  };
  

  return (
    <div className="form-container">
      <h2>Hostel Enrollment Form</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Details</legend>
          <label>Full Name:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

          <label>Date of Birth:</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />

          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label>Aadhar Number:</label>
          <input type="text" name="aadhar" value={formData.aadhar} onChange={handleChange} required maxLength="12" />

          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Phone Number:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required maxLength="10" />

          <label>Address:</label>
          <textarea name="address" value={formData.address} onChange={handleChange} required />
        </fieldset>

        <fieldset>
          <legend>Parent Details</legend>
          <label>Father/Mother Name:</label>
          <input type="text" name="fatherMotherName" value={formData.fatherMotherName} onChange={handleChange} required />

          <label>Contact Number 1:</label>
          <input type="tel" name="contact1" value={formData.contact1} onChange={handleChange} required maxLength="10" />

          <label>Contact Number 2:</label>
          <input type="tel" name="contact2" value={formData.contact2} onChange={handleChange} required maxLength="10" />
        </fieldset>

        <fieldset>
          <legend>Academic Details</legend>
          <label>University Name:</label>
          <input type="text" name="university" value={formData.university} onChange={handleChange} required />

          <label>Branch:</label>
          <input type="text" name="branch" value={formData.branch} onChange={handleChange} required />

          <label>Year of Study:</label>
          <input type="text" name="yearOfStudy" value={formData.yearOfStudy} onChange={handleChange} required />

          <label>Student ID:</label>
          <input type="text" name="studentId" value={formData.studentId} onChange={handleChange} required />
        </fieldset>

        <fieldset>
          <legend>Hostel Preferences</legend>
          <label>Room Type:</label>
          <div>
            <input type="radio" name="roomType" value="single" checked={formData.roomType === "single"} onChange={handleChange} /> Single
            <input type="radio" name="roomType" value="shared" checked={formData.roomType === "shared"} onChange={handleChange} /> Shared
          </div>

          {formData.roomType === "shared" && (
            <>
              <label>Sharing Option:</label>
              <select name="sharingOption" value={formData.sharingOption} onChange={handleChange}>
                <option value="">Select</option>
                <option value="3">3 Sharing</option>
                <option value="4">4 Sharing</option>
                <option value="5">5 Sharing</option>
                <option value="8">8 Sharing</option>
              </select>
            </>
          )}

          <label>Food Preferences:</label>
          <div>
            <input type="radio" name="foodPreference" value="veg" checked={formData.foodPreference === "veg"} onChange={handleChange} /> Veg
            <input type="radio" name="foodPreference" value="non-veg" checked={formData.foodPreference === "non-veg"} onChange={handleChange} /> Non-Veg
          </div>
        </fieldset>

        <fieldset>
          <legend>Declaration & Submission</legend>
          <div className="declaration">
            <input type="checkbox" name="agreement" checked={formData.agreement} onChange={handleChange} />
            <label>I confirm that the details provided are correct</label>
          </div>
        </fieldset>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HostelForm;