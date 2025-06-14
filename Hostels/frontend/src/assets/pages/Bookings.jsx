import { Link } from "react-router-dom";

function Bookings() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundImage: "url('https://aadindia.com/uploads/projects/151428288502.jpg')", // Example of a beautiful hostel/campus
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        textAlign: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Slight dark overlay for visibility
          padding: "30px",
          borderRadius: "10px",
        }}
      >
        <h1 style={{ color: "white", fontSize: "2.5rem", marginBottom: "20px" }}>
          Choose Your Booking
        </h1>
        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/bookings/boys">
            <button
              style={{
                padding: "15px 30px",
                fontSize: "18px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            >
              Boys Hostel
            </button>
          </Link>
          <Link to="/bookings/girls">
            <button
              style={{
                padding: "15px 30px",
                fontSize: "18px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            >
              Girls Hostel
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Bookings;
