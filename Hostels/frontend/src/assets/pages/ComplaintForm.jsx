import { useState } from "react";
import "../css/ComplaintForm.css";
const ComplaintForm = () => {
  const [complaintData, setComplaintData] = useState({
    enrollmentId: "",
    fullName: "",
    email: "",
    complaintText: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setComplaintData({ ...complaintData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/complaints/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(complaintData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Complaint submitted successfully!");
        setComplaintData({ enrollmentId: "", fullName: "", email: "", complaintText: "" });
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      console.error("Error submitting complaint:", error);
      setMessage("Failed to submit complaint.");
    }
  };

  return (
    <div className="complaint-container">
      <h2>File a Complaint</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>Enrollment ID:</label>
        <input type="text" name="enrollmentId" value={complaintData.enrollmentId} onChange={handleChange} required />

        <label>Full Name:</label>
        <input type="text" name="fullName" value={complaintData.fullName} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={complaintData.email} onChange={handleChange} required />

        <label>Complaint:</label>
        <textarea name="complaintText" value={complaintData.complaintText} onChange={handleChange} required />

        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
};

export default ComplaintForm;
