import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showGalleryPopup, setShowGalleryPopup] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleGalleryClick = () => {
    setShowGalleryPopup(true);
    setShowDropdown(false); // Close dropdown when opening gallery
  };

  const closeGalleryPopup = () => {
    setShowGalleryPopup(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const closeDropdown = (event) => {
      if (!event.target.closest(".dropdown") && !event.target.closest(".about-us")) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  // Sample images for the gallery slider
  const galleryImages = [
    "/src/assets/img/G1.jpg",
    "/src/assets/img/G2.jpg",
    "/src/assets/img/G3.jpg",
    "/src/assets/img/G4.jpg",
    "/src/assets/img/G5.jpg",
    "/src/assets/img/G6.jpg",
    "/src/assets/img/G7.jpg",
    "/src/assets/img/G8.jpg",
  ];

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <nav className="navbar">
      <div className="logo">Vignan Hostel</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/hostelform">Enrollment</Link></li>
        <li><Link to="/complaint">Complaints</Link></li>
        <li><Link to="/complaintList">Complaints list</Link></li>
        <li><Link to="/bookings">Bookings</Link></li>
        <li className="about-us" onClick={handleDropdown}>
          <span>About Us</span>
          {showDropdown && (
            <div className="dropdown">
              <span onClick={handleGalleryClick}>Gallery</span>
              <a
                href="/src/assets/files/menu.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dining & Food Menu
              </a>
              <a
                href="/src/assets/files/hostelrules.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hostel Rules & Policies
              </a>
            </div>
          )}
        </li>
      </ul>

      {showGalleryPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Gallery</h2>
            <Slider {...sliderSettings}>
              {galleryImages.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Gallery Photo ${index + 1}`}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              ))}
            </Slider>
            <button onClick={closeGalleryPopup}>Close</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
