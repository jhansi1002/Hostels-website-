import { Link } from "react-router-dom";
import BackButton from "./BackButton";

function GirlsHostels() {
  return (
    <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      backgroundImage: "url('https://vignan.ac.in/naacdownload/generalfacilities/Hostel_Girls2.jpeg')", // Example of a beautiful hostel/campus
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      textAlign: "center",
    }}  
    >
      {/* Dark Overlay for Readability */}
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
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          padding: "40px",
          borderRadius: "15px",
          backdropFilter: "blur(8px)",
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
          width: "50%",
          maxWidth: "600px",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Girls Hostel Options
        </h1>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
          }}
        >
          <Link to="/bookings/girls/ac" style={{ textDecoration: "none" }}>
            <div
              style={{
                padding: "15px",
                fontSize: "20px",
                fontWeight: "bold",
                backgroundColor: "#e83e8c",
                color: "white",
                borderRadius: "8px",
                textAlign: "center",
                transition: "transform 0.2s, background-color 0.3s",
                boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.backgroundColor = "#c82364";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.backgroundColor = "#e83e8c";
              }}
            >
              AC Hostel
            </div>
          </Link>

          <Link to="/bookings/girls/non-ac" style={{ textDecoration: "none" }}>
            <div
              style={{
                padding: "15px",
                fontSize: "20px",
                fontWeight: "bold",
                backgroundColor: "#f6993f",
                color: "white",
                borderRadius: "8px",
                textAlign: "center",
                transition: "transform 0.2s, background-color 0.3s",
                boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.backgroundColor = "#e07d2a";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.backgroundColor = "#f6993f";
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

export default GirlsHostels;
