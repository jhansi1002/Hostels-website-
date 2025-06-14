import { useState } from "react";
import BackButton from "./BackButton";
import { useNavigate } from "react-router-dom";

const boysNonACHostels = [
  {
    id: 1,
    name: "Vignan Boys Hostel",
    mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZt0cUBtf1d6AOuTLVVEKPAzkGa8RykS93Tg&s",
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/641700455.jpg?k=40135750b7a99de314765695df4c6e3d76119dfa0a0392a7d54cd2d232a1eaa2&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/641700455.jpg?k=40135750b7a99de314765695df4c6e3d76119dfa0a0392a7d54cd2d232a1eaa2&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/641700455.jpg?k=40135750b7a99de314765695df4c6e3d76119dfa0a0392a7d54cd2d232a1eaa2&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/641700455.jpg?k=40135750b7a99de314765695df4c6e3d76119dfa0a0392a7d54cd2d232a1eaa2&o=&hp=1",
    ],
    description:
      "Spacious rooms with proper ventilation, Wi-Fi access, and a well-maintained mess facility. Includes study areas and 24/7 security monitoring.",
    floors: 3,
    roomsPerFloor: 8,
    membersPerRoom: 3,
    bedsAvailable: 18,
  },
  {
    id: 2,
    name: "Sun view Residency",
    mainImage: "https://content.jdmagicbox.com/comp/hosur/q5/9999p4344.4344.200113104717.l2q5/catalogue/rajeswari-pg-for-gents-hosur-1ustndr1qc.jpg",
    images: [
      "https://c9.shauryasoft.com/media/bny-wcp-2412191531-1730076133-1.jpg",
      "https://c9.shauryasoft.com/media/bny-wcp-2412191531-1730076133-1.jpg",
      "https://c9.shauryasoft.com/media/bny-wcp-2412191531-1730076133-1.jpg",
      "https://c9.shauryasoft.com/media/bny-wcp-2412191531-1730076133-1.jpg",
    ],
    description:
      "A well-maintained hostel with comfortable non-AC rooms, a hygienic dining facility, and a student-friendly environment. Includes indoor sports and recreational areas.",
    floors: 4,
    roomsPerFloor: 10,
    membersPerRoom: 4,
    bedsAvailable: 24,
  },
  {
    id: 3,
    name: "Elite Heritage",
    mainImage: "https://content.jdmagicbox.com/comp/guntur/q4/9999px863.x863.170602231214.f4q4/catalogue/sri-sai-ganesh-boys-hostel-vadlamudi-guntur-hostel-for-boy-students-knw0h6afxr.jpg",
    images: [
      "https://5.imimg.com/data5/HF/UD/EO/SELLER-9549927/mens-hostel.jpg",
      "https://5.imimg.com/data5/HF/UD/EO/SELLER-9549927/mens-hostel.jpg",
      "https://5.imimg.com/data5/HF/UD/EO/SELLER-9549927/mens-hostel.jpg",
      "https://5.imimg.com/data5/HF/UD/EO/SELLER-9549927/mens-hostel.jpg",
    ],
    description:
      "Non-AC rooms with ample space, ergonomic study desks, and high-speed Wi-Fi. Includes a cafeteria, gym, and weekly cleaning services.",
    floors: 5,
    roomsPerFloor: 12,
    membersPerRoom: 2,
    bedsAvailable: 14,
  },
];

function BoysNonAC() {
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
      <h1>Boys Non-AC Hostel Details</h1>

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
          {boysNonACHostels.map((hostel) => (
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

export default BoysNonAC;
