import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../pages/FormContext";
import "../css/DetailsPage.css";

const DetailsPage = () => {
  const navigate = useNavigate();
  const { formData: contextFormData } = useContext(FormContext);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    if (contextFormData) {
      setFormData(contextFormData);
      return;
    }

    const storedData = localStorage.getItem("hostelFormData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    } else {
      alert("No form data found. Please fill the form first.");
      navigate("/");
    }
  }, [contextFormData, navigate]);

  const handlePayNow = () => {
    navigate("/payment"); // Redirect to Payment Page
  };

  const handleBack = () => {
    navigate("/");
  };

  if (!formData) {
    return <div className="loading">Loading details...</div>;
  }

  return (
    <div className="details-container">
      <h2>Hostel Enrollment Details</h2>
      <div className="details-section">
      <h3>Enrollment Details</h3>
      <div className="detail-row">
        <span className="detail-label">Enrollment ID:</span>
        <span className="detail-value">{formData.enrollmentId}</span>
      </div>
    </div>
      <div className="details-section">
        <h3>Personal Details</h3>
        <div className="detail-row">
          <span className="detail-label">Full Name:</span>
          <span className="detail-value">{formData.fullName}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Date of Birth:</span>
          <span className="detail-value">{formData.dob}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Gender:</span>
          <span className="detail-value">{formData.gender}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Aadhar Number:</span>
          <span className="detail-value">{formData.aadhar}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Email:</span>
          <span className="detail-value">{formData.email}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Phone Number:</span>
          <span className="detail-value">{formData.phone}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Address:</span>
          <span className="detail-value">{formData.address}</span>
        </div>
      </div>

      <div className="details-section">
        <h3>Parent Details</h3>
        <div className="detail-row">
          <span className="detail-label">Father/Mother Name:</span>
          <span className="detail-value">{formData.fatherMotherName}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Contact Number 1:</span>
          <span className="detail-value">{formData.contact1}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Contact Number 2:</span>
          <span className="detail-value">{formData.contact2}</span>
        </div>
      </div>

      <div className="details-section">
        <h3>Academic Details</h3>
        <div className="detail-row">
          <span className="detail-label">University Name:</span>
          <span className="detail-value">{formData.university}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Branch:</span>
          <span className="detail-value">{formData.branch}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Year of Study:</span>
          <span className="detail-value">{formData.yearOfStudy}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Student ID:</span>
          <span className="detail-value">{formData.studentId}</span>
        </div>
      </div>

      <div className="details-section">
        <h3>Hostel Preferences</h3>
        <div className="detail-row">
          <span className="detail-label">Room Type:</span>
          <span className="detail-value">{formData.roomType === "single" ? "Single" : "Shared"}</span>
        </div>
        {formData.roomType === "shared" && (
          <div className="detail-row">
            <span className="detail-label">Sharing Option:</span>
            <span className="detail-value">{formData.sharingOption} Sharing</span>
          </div>
        )}
        <div className="detail-row">
          <span className="detail-label">Food Preference:</span>
          <span className="detail-value">{formData.foodPreference === "veg" ? "Vegetarian" : "Non-Vegetarian"}</span>
        </div>
      </div>

      <div className="button-group">
        <button className="back-button" onClick={() => navigate("/hostelform")}>Back to Form</button>
        <button className="pay-button" onClick={() => navigate("/payment")}>Pay Now</button>
      </div>
    </div>
  );
};

export default DetailsPage;
