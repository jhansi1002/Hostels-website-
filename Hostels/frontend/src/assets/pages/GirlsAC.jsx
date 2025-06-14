import { useState } from "react";
import BackButton from "./BackButton";
import { useNavigate } from "react-router-dom";

const girlsHostels = [
  {
    id: 1,
    name: "Lotus Girls Hostel",
    mainImage: "https://vignan.ac.in/naacdownload/generalfacilities/Hostel_Girls2.jpeg",
    images: [
      "https://www.charusat.ac.in/assets/images/girls_hostel_life/h5.webp",
      "https://www.charusat.ac.in/assets/images/girls_hostel_life/h5.webp",
      "https://www.charusat.ac.in/assets/images/girls_hostel_life/h5.webp",
      "https://www.charusat.ac.in/assets/images/girls_hostel_life/h5.webp",
    ],
    extraImages: [
      "https://example.com/room1.jpg",
      "https://example.com/room2.jpg",
      "https://example.com/room3.jpg",
      "https://example.com/room4.jpg",
      "https://example.com/room5.jpg",
    ],
    floors: 5,
    roomsPerFloor: 8,
    membersPerRoom: 3,
    bedsAvailable: 18,
  },
  {
    id: 2,
    name: "Sunshine Girls Hostel",
    mainImage: "https://cims.pk/wp-content/uploads/2023/04/girls-hoste-1024x683.jpg",
    images: [
      "https://www.srustiacademy.org/User/images/girlshostel1.jpg",
      "https://www.srustiacademy.org/User/images/girlshostel1.jpg",
      "https://www.srustiacademy.org/User/images/girlshostel1.jpg",
      "https://www.srustiacademy.org/User/images/girlshostel1.jpg",
    ],
    extraImages: [
      "https://example.com/room6.jpg",
      "https://example.com/room7.jpg",
      "https://example.com/room8.jpg",
      "https://example.com/room9.jpg",
      "https://example.com/room10.jpg",
    ],
    floors: 4,
    roomsPerFloor: 10,
    membersPerRoom: 4,
    bedsAvailable: 22,
  },
];

function GirlsAC() {
  const [selectedHostel, setSelectedHostel] = useState(null);
  const [showAllRooms, setShowAllRooms] = useState(false);
  const navigate = useNavigate();

  const handleHostelClick = (hostel) => {
    setSelectedHostel(hostel);
    setShowAllRooms(false);
  };

  const handleClose = () => {
    setSelectedHostel(null);
    setShowAllRooms(false);
  };

  const handleFacilityClick = (facility) => {
    if (facility === "All Rooms") {
      setShowAllRooms(true);
    } else {
      setShowAllRooms(false);
    }
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
      <h1>Girls AC Hostel Details</h1>

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
          {girlsHostels.map((hostel) => (
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
              <h3 style={{ color: "#ff4081", margin: "10px 0" }}>{hostel.name}</h3>

              <p><strong>Floors:</strong> {hostel.floors}</p>
              <p><strong>Rooms per Floor:</strong> {hostel.roomsPerFloor}</p>
              <p><strong>Members per Room:</strong> {hostel.membersPerRoom}</p>
              <p><strong>Beds Available:</strong> {hostel.bedsAvailable}</p>
            </div>
          ))}
        </div>
      ) : (
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

          {/* Facilities Section */}
          <h3 style={{ marginTop: "20px", color: "#ff4081" }}>Facilities</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            {[
              "All Rooms",
              "Lawn",
              "Amenities",
              "Mess",
              "Dispensary",
              "Reception",
              "Cafeteria",
              "Parlour",
              "Vending Machine",
            ].map((facility, index) => (
              <div
                key={index}
                onClick={() => handleFacilityClick(facility)}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#1e1e1e",
                  color: "#fff",
                  borderRadius: "5px",
                  cursor: "pointer",
                  boxShadow: "0px 4px 8px rgba(255, 255, 255, 0.2)",
                  transition: "all 0.3s ease",
                }}
              >
                {facility}
              </div>
            ))}
          </div>

          {/* Gallery Images */}
          <h3 style={{ marginTop: "20px", color: "#ff4081" }}>Our Gallery</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              flexWrap: "wrap",
              marginTop: "10px",
            }}
          >
            {(showAllRooms ? selectedHostel.extraImages : selectedHostel.images).map((img, index) => (
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
        </div>
      )}
      <button
              style={{
                margin: "5px",
                padding: "10px",
                marginTop:"50px",
                width: "200px",
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

      <BackButton />
    </div>
  );
}

export default GirlsAC;
