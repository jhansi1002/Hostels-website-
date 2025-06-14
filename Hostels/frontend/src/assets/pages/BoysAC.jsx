import { useState } from "react";
import BackButton from "./BackButton";
import { useNavigate } from "react-router-dom";

const boysHostels = [
  {
    id: 1,
    name: "Galaxy Boys Hostel",
    mainImage: "https://upload.wikimedia.org/wikipedia/commons/9/97/DPS_BAREILLY_BOYS_HOSTEL.jpg",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU2SRCNGMneMrrAXC2mK57TJy4TJ0Y6KKxHQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU2SRCNGMneMrrAXC2mK57TJy4TJ0Y6KKxHQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU2SRCNGMneMrrAXC2mK57TJy4TJ0Y6KKxHQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU2SRCNGMneMrrAXC2mK57TJy4TJ0Y6KKxHQ&s",
    ],
    description:
      "A premium AC hostel featuring fully furnished rooms, high-speed Wi-Fi, study areas, and a hygienic mess facility. Equipped with biometric security and CCTV surveillance.",
    floors: 5,
    roomsPerFloor: 10,
    membersPerRoom: 3,
    bedsAvailable: 15,
  },
  {
    id: 2,
    name: "Sunrise Boys Hostel",
    mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHFbhelcmmToUJTEQzQBqiNv9nmEX_ZMkdkw&s",
    images: [
      "https://3.imimg.com/data3/RB/WL/MY-8424402/boys-hostel-service-500x500.png",
      "https://3.imimg.com/data3/RB/WL/MY-8424402/boys-hostel-service-500x500.png",
      "https://3.imimg.com/data3/RB/WL/MY-8424402/boys-hostel-service-500x500.png",
      "https://3.imimg.com/data3/RB/WL/MY-8424402/boys-hostel-service-500x500.png",
    ],
    description:
      "Modern hostel with well-ventilated rooms, attached bathrooms, and a 24/7 security system. Offers a dedicated gaming zone and rooftop cafeteria.",
    floors: 4,
    roomsPerFloor: 8,
    membersPerRoom: 4,
    bedsAvailable: 20,
  },
  {
    id: 3,
    name: "Elite Residency",
    mainImage: "https://www.peoplesuniversity.edu.in/Dental/wp-content/uploads/2017/10/boyas-hostel-1024x649.jpg",
    images: [
      "https://presidencyuniversity.in/assets/images/boys-hostel-images-1.webp",
      "https://presidencyuniversity.in/assets/images/boys-hostel-images-1.webp",
      "https://presidencyuniversity.in/assets/images/boys-hostel-images-1.webp",
      "https://presidencyuniversity.in/assets/images/boys-hostel-images-1.webp",
    ],
    description:
      "Luxury AC rooms with spacious interiors, ergonomic study desks, and personalized storage. Includes a gym, recreational hall, and weekly laundry services.",
    floors: 6,
    roomsPerFloor: 12,
    membersPerRoom: 2,
    bedsAvailable: 12,
  },
];

function BoysAC() {
  const [selectedHostel, setSelectedHostel] = useState(null);
  const navigate = useNavigate();

  const handleHostelClick = (hostel) => {
    setSelectedHostel(hostel);
  };

  const handleClose = () => {
    setSelectedHostel(null);
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        color: "#fff",
        marginTop: 100,
      }}
    >
      <h1>Boys AC Hostel Details</h1>

      {/* If no hostel is selected, display hostel options */}
      {!selectedHostel ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            gap: "20px",
            width: "100%",
          }}
        >
          {boysHostels.map((hostel) => (
            <div
              key={hostel.id}
              onClick={() => handleHostelClick(hostel)}
              style={{
                border: "2px solid white",
                padding: "15px",
                cursor: "pointer",
                borderRadius: "10px",
                width: "40%",
                textAlign: "center",
                transition: "all 0.3s ease",
                backgroundColor: "#1e1e1e",
                boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.3)",
              }}
            >
              <img
                src={hostel.mainImage}
                alt={hostel.name}
                style={{
                  width: "100%",
                  height: "300px",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
              <h3 style={{ color: "#007bff", margin: "10px 0" }}>{hostel.name}</h3>
              <p style={{ color: "#bbb" }}>{hostel.description}</p>
            </div>
          ))}
        </div>
      ) : (
        // If a hostel is selected, display details and images
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "#fff",
            color: "#000",
            textAlign: "center",
            width: "80%",
            margin: "20px auto",
            position: "relative",
          }}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            ✖
          </button>

          <h2>{selectedHostel.name} Details</h2>
          <img
            src={selectedHostel.mainImage}
            alt={selectedHostel.name}
            style={{
              width: "80%",
              height: "400px",
              borderRadius: "10px",
              objectFit: "cover",
              marginBottom: "20px",
            }}
          />
          <p style={{ fontSize: "18px" }}>
            <strong>Floors:</strong> {selectedHostel.floors}
          </p>
          <p style={{ fontSize: "18px" }}>
            <strong>Rooms per Floor:</strong> {selectedHostel.roomsPerFloor}
          </p>
          <p style={{ fontSize: "18px" }}>
            <strong>Members per Room:</strong> {selectedHostel.membersPerRoom}
          </p>
          <p style={{ fontSize: "18px" }}>
            <strong>Beds Available:</strong> {selectedHostel.bedsAvailable}
          </p>

          {/* Display additional images */}
          <h3>Hostel Views</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              flexWrap: "wrap",
              marginTop: "10px",
            }}
          >
            {selectedHostel.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Hostel View ${index + 1}`}
                style={{
                  width: "45%",
                  height: "250px",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
            ))}
          </div>
            {/* Buttons Below the Images */}
            <div style={{ marginTop: "20px" }}>
            <button style={{ marginRight: "10px", padding: "10px 20px", fontSize: "18px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
            onClick={() => navigate("/boys-hostel")}>
              Explore
            </button>
            <button style={{ padding: "10px 20px", fontSize: "18px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
            onClick={() => navigate("/payment")}>
              Book Now
            </button>
          </div>
        </div>
      )}
       

      

      <BackButton />
    </div>
  );
}

export default BoysAC;
