import { Link } from "react-router-dom";
import BackButton from "./BackButton";

function BoysHostels() {
  return (
    <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      backgroundImage: "url('https://vignan.ac.in/naacdownload/generalfacilities/Hostel_Boys.jpeg')", // Example of a beautiful hostel/campus
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      textAlign: "center",
    }}  
    >
      {/* Dark Overlay for better visibility */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
        }}
      ></div>

      {/* Centered Content */}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          padding: "40px",
          borderRadius: "15px",
          backdropFilter: "blur(10px)",
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
          width: "60%",
          maxWidth: "500px",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontFamily: "Arial, sans-serif",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Boys Hostel Options
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
          }}
        >
          <Link to="/bookings/boys/ac" style={{ textDecoration: "none" }}>
            <div
              style={{
                padding: "15px",
                fontSize: "20px",
                fontWeight: "bold",
                backgroundColor: "#007bff",
                color: "white",
                borderRadius: "8px",
                textAlign: "center",
                transition: "transform 0.2s, background-color 0.3s",
                boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.backgroundColor = "#0056b3";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.backgroundColor = "#007bff";
              }}
            >
              AC Hostel
            </div>
          </Link>

          <Link to="/bookings/boys/non-ac" style={{ textDecoration: "none" }}>
            <div
              style={{
                padding: "15px",
                fontSize: "20px",
                fontWeight: "bold",
                backgroundColor: "#28a745",
                color: "white",
                borderRadius: "8px",
                textAlign: "center",
                transition: "transform 0.2s, background-color 0.3s",
                boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.backgroundColor = "#1e7e34";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.backgroundColor = "#28a745";
              }}
            >
              Non-AC Hostel
            </div>
          </Link>
        </div>

        <div style={{ marginTop: "30px" }}>
          <BackButton />
        </div>
      </div>
    </div>
  );
}

export default BoysHostels;
