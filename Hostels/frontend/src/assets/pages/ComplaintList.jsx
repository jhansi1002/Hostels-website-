import { useState } from "react";
import "../css/ComplaintList.css";
const ComplaintList = () => {
  const [enrollmentId, setEnrollmentId] = useState("");
  const [complaints, setComplaints] = useState([]);
  const [message, setMessage] = useState("");

  const fetchComplaints = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/complaints/${enrollmentId}`);
      const data = await response.json();
      if (response.ok) {
        setComplaints(data);
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      console.error("Error fetching complaints:", error);
      setMessage("Failed to fetch complaints.");
    }
  };

  return (
    <div className="complaint-list-container">
      <h2>View Your Complaints</h2>
      <input
        type="text"
        placeholder="Enter your Enrollment ID"
        value={enrollmentId}
        onChange={(e) => setEnrollmentId(e.target.value)}
      />
      <button onClick={fetchComplaints}>Fetch Complaints</button>

      {message && <p className="message">{message}</p>}

      {complaints.length > 0 ? (
        <ul>
          {complaints.map((complaint) => (
            <li key={complaint._id}>
              <strong>Complaint:</strong> {complaint.complaintText} <br />
              <strong>Status:</strong> {complaint.status}
            </li>
          ))}
        </ul>
      ) : (
        <p>No complaints found.</p>
      )}
    </div>
  );
};

export default ComplaintList;
