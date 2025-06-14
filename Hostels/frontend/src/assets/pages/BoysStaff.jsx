import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../css/BoysStaff.css";

const BoysStaffPage = () => {
  const navigate = useNavigate();

  // Data for leads and caretakers
  const leads = [
    { name: "Lead 1", mobile: "+1234567890", qualification: "MSc in Management", block: "Block 1" },
    { name: "Lead 2", mobile: "+0987654321", qualification: "MBA", block: "Block 2" },
    { name: "Lead 3", mobile: "+1122334455", qualification: "BSc in Science", block: "Block 3" },
    { name: "Lead 4", mobile: "+1231231234", qualification: "MCom", block: "Block 4" },
    { name: "Lead 5", mobile: "+1456789054", qualification: "MA in English", block: "Block 5" },
    { name: "Lead 6", mobile: "+9876543210", qualification: "BBA", block: "Block 6" },
  ];

  const caretakers = [
    { name: "Caretaker 1", mobile: "+1234567890", block: "Block 1" },
    { name: "Caretaker 2", mobile: "+1234567891", block: "Block 2" },
    { name: "Caretaker 3", mobile: "+1234567892", block: "Block 3" },
    { name: "Caretaker 4", mobile: "+1234567893", block: "Block 4" },
    { name: "Caretaker 5", mobile: "+1234567894", block: "Block 5" },
    { name: "Caretaker 6", mobile: "+1234567895", block: "Block 6" },
    { name: "Caretaker 7", mobile: "+1234567896", block: "Block 7" },
    { name: "Caretaker 8", mobile: "+1234567897", block: "Block 8" },
    { name: "Caretaker 9", mobile: "+1234567898", block: "Block 9" },
    { name: "Caretaker 10", mobile: "+1234567899", block: "Block 10" },
    { name: "Caretaker 11", mobile: "+1234567800", block: "Block 11" },
    { name: "Caretaker 12", mobile: "+1234567801", block: "Block 12" },
    { name: "Caretaker 13", mobile: "+1234567802", block: "Block 13" },
    { name: "Caretaker 14", mobile: "+1234567803", block: "Block 14" },
    { name: "Caretaker 15", mobile: "+1234567804", block: "Block 15" },
    { name: "Caretaker 16", mobile: "+1234567805", block: "Block 16" },
    { name: "Caretaker 17", mobile: "+1234567806", block: "Block 17" },
    { name: "Caretaker 18", mobile: "+1234567807", block: "Block 18" },
    { name: "Caretaker 19", mobile: "+1234567808", block: "Block 19" },
    { name: "Caretaker 20", mobile: "+1234567809", block: "Block 20" },
    { name: "Caretaker 21", mobile: "+1234567810", block: "Block 21" },
    { name: "Caretaker 22", mobile: "+1234567811", block: "Block 22" },
    { name: "Caretaker 23", mobile: "+1234567812", block: "Block 23" },
    { name: "Caretaker 24", mobile: "+1234567813", block: "Block 24" },
    { name: "Caretaker 25", mobile: "+1234567814", block: "Block 25" },
    { name: "Caretaker 26", mobile: "+1234567815", block: "Block 26" },
    { name: "Caretaker 27", mobile: "+1234567816", block: "Block 27" },
    { name: "Caretaker 28", mobile: "+1234567817", block: "Block 28" },
    { name: "Caretaker 29", mobile: "+1234567818", block: "Block 29" },
    { name: "Caretaker 30", mobile: "+1234567819", block: "Block 30" },
  ];

  return (
    <div class="boys-staff">
      <button class="back" onClick={() => navigate("/boys-hostel")} >Back</button>

      {/* Chief Warden Section */}
      <section className="chief-warden-section">
        <h1>Chief Warden Details</h1>
        <div className="warden-details">
          <p>Name: Mrs. Anitha Reddy</p>
          <p>Designation: Chief Warden</p>
          <p>Email: <a href="mailto:anitha.reddy@vignan.edu">anitha.reddy@vignan.edu</a></p>
          <p>Phone: <a href="tel:+1234567890">+1234567890</a></p>
        </div>
      </section>

      {/* Leads Section */}
      <section className="leads-section">
        <h2>Our Leads</h2>
        <div className="leads-grid">
          {leads.map((lead, index) => (
            <div className="lead" key={index}>
              <div className="lead-details">
                <p><strong>{lead.name}</strong></p>
                <p>Mobile: {lead.mobile}</p>
                <p>Qualifications: {lead.qualification}</p>
                <p>Block: {lead.block}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Caretakers Section */}
      <section className="caretakers-section">
        <h2>Our Caretakers</h2>
        <div className="caretakers-grid">
          {caretakers.map((caretaker, index) => (
            <div className="caretaker" key={index}>
              <div className="caretaker-details">
                <p><strong>{caretaker.name}</strong></p>
                <p>Mobile: {caretaker.mobile}</p>
                <p>Block: {caretaker.block}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BoysStaffPage;