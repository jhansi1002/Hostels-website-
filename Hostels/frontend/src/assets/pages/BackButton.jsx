import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate("/bookings")} 
      style={{
        marginTop: "20px",
        padding: "10px",
        width: "200px",
        marginLeft:"20px",
        backgroundColor: "#ff4d4d",
        color: "white",
        border: "none",
        cursor: "pointer"
      }}
    >
      Back to Home
    </button>
  );
}

export default BackButton;
