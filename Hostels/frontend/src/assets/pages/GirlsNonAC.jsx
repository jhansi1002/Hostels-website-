import { useState, useRef } from "react";
import BackButton from "./BackButton";
import { useNavigate } from "react-router-dom";

const girlsHostels = [
  {
    id: 1,
    name: "Elite Hostel",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUj7P7msCUt0B_JYDrbuBcA2zBU8HQVF-4UQ&s",
    description: "Elite Hostel offers spacious, well-ventilated rooms with natural cooling. Facilities include 24/7 security, study-friendly dormitories, common reading areas, and a cafeteria serving nutritious meals. The hostel provides high-speed Wi-Fi, laundry services, and a dedicated recreational space.",
    floors: 6,
    roomsPerFloor: 12,
    membersPerRoom: 3,
  },
  {
    id: 2,
    name: "N-square Residency",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQqy3qHQ5_kvYYE0fc4awcHKIIQmcQ3bo1xw&s",
    description: "A well-maintained non-AC hostel offering comfortable shared accommodations. Each room includes individual storage spaces, study desks, and attached washrooms. The hostel has a common dining hall, CCTV surveillance, and a 24/7 help desk for student support.",
    floors: 5,
    roomsPerFloor: 10,
    membersPerRoom: 2,
  },
  {
    id: 3,
    name: "Delight Women's Block",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjmzwABmQwGUx5YH2bgq2rRK6VwHMC7NwY8w&s",
    description: "Delight Women's Block is designed for a comfortable stay with ample sunlight, open terraces, and a homely atmosphere. Facilities include a fully functional mess hall, group study rooms, a mini library, and a sports area. The hostel follows strict safety protocols and offers affordable meal plans.",
    floors: 7,
    roomsPerFloor: 15,
    membersPerRoom: 4,
  },
];

function GirlsNonAC() {
  const [selectedHostel, setSelectedHostel] = useState(null);
  const detailsRef = useRef(null);
  const navigate = useNavigate();

  const handleHostelClick = (hostel) => {
    setSelectedHostel(hostel);

    // Smooth scroll to the details section
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", width: "100vw" , marginTop: 100}}>
      <h1>Girls Non-AC Hostel Details</h1>

      {/* Display hostel options */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          marginTop: "20px",
          width: "100vw",
        }}
      >
        {girlsHostels.map((hostel) => (
          <div
            key={hostel.id}
            onClick={() => handleHostelClick(hostel)}
            style={{
              border: "2px solid black",
              padding: "15px",
              cursor: "pointer",
              borderRadius: "10px",
              width: "30%",
              textAlign: "center",
              transition: "all 0.3s ease",
              backgroundColor: selectedHostel?.id === hostel.id ? "#f8f9fa" : "black",
              boxShadow: selectedHostel?.id === hostel.id ? "0px 4px 10px rgba(0, 0, 0, 0.96)" : "none",
              minWidth: "280px",
            }}
          >
            <img
              src={hostel.image}
              alt={hostel.name}
              style={{
                width: "100%",
                height: "200px",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
            <h3 style={{ color: "#007bff", margin: "10px 0" }}>{hostel.name}</h3>
            <p style={{ color: "#ccc" }}>{hostel.description}</p>
          </div>
        ))}
      </div>

      {/* Display selected hostel details */}
      {selectedHostel && (
        <div
          ref={detailsRef}
          style={{
            marginTop: "20px",
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "white",
            color: "black",
            textAlign: "center",
            width: "80%",
            margin: "20px auto",
          }}
        >
          <h2 style={{ color: "#333" }}>{selectedHostel.name} Details</h2>
          <p style={{ fontSize: "18px" }}>
            <strong>Floors:</strong> {selectedHostel.floors}
          </p>
          <p style={{ fontSize: "18px" }}>
            <strong>Rooms per Floor:</strong> {selectedHostel.roomsPerFloor}
          </p>
          <p style={{ fontSize: "18px" }}>
            <strong>Members per Room:</strong> {selectedHostel.membersPerRoom}
          </p>

          {/* Explore and Book Now Buttons */}
          <div style={{ marginTop: "15px" }}>
            <button
              style={{
                margin: "5px",
                padding: "10px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
            >
              Explore
            </button>
            <button
              style={{
                margin: "5px",
                padding: "10px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1d7a31")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#28a745")}
              onClick={() => navigate("/payment")}
            >
              Book Now
            </button>
          </div>
        </div>
      )}

      <BackButton />
    </div>
  );
}
export default GirlsNonAC;
