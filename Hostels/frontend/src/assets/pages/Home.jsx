import React, { useState, useEffect } from "react";
import "../css/Home.css";
import accomadation from "../img/accommodation.jpg";
import boyshostel from "../img/boyshostel.jpg";
import d1 from "../img/d1.jpg";
import girlshostel from "../img/girlshostel.jpg";
import gym from "../img/gym.jpg";
import international from "../img/internationalhostel.webp";
import laundary from "../img/lundary.jpg";
import security from "../img/security.jpg";
import wifi from "../img/wifi.jpg";
import hostelImage from "../img/Home.jpg"; // Add this image for the top section
import { useNavigate } from "react-router-dom";
import person from "../img/person.jpg"

const Home = () => {
  const [popupContent, setPopupContent] = useState(null);
  const navigate = useNavigate();

  // Function to handle popup
  const handlePopup = (content) => {
    setPopupContent(content);
  };

  // Function to close popup
  const closePopup = () => {
    setPopupContent(null);
  };

  return (
    <div className="home-page">
      {/* Full-viewport image at the top */}
      <section className="hero-section">
        <img src={hostelImage} alt="Hostel" className="hero-image" />
        <div className="hero-overlay">
          <h1 class="home">Welcome to Vignan Hostel</h1>
          <p>Your home away from home</p>
          <button className="enroll-btn"><a href="#hostels" class="active" style={{color: "white", fontSize:"1.2rem"}}>Explore</a></button>
        </div>
      </section>

      {/* All About Student Accommodation & Facilities Section */}
      <section className="about-accommodation">
        <h2>All About Student Accommodation & Facilities</h2>
        <div className="facilities-grid">
          <div className="facility-card">
            <img src={accomadation} alt="Accommodation" />
            <h3>Comfortable Living Spaces</h3>
            <p>Experience comfort like never before! Our hostels offer spacious, fully-furnished rooms with modern amenities, ensuring a peaceful and cozy stay for all students.</p>
          </div>
          <div className="facility-card">
            <img src={d1} alt="Dining" />
            <h3>Nutritious Dining</h3>
            <p>Enjoy delicious, well-balanced meals prepared in hygienic conditions. Our dining services cater to diverse dietary needs, ensuring every student gets nutritious and tasty food.</p>
          </div>
          <div className="facility-card">
            <img src={wifi} alt="Wi-Fi" />
            <h3>High-Speed Internet</h3>
            <p>Stay connected at all times with our ultra-fast Wi-Fi. Whether it's online learning, research, or entertainment, enjoy uninterrupted internet access across the campus.</p>
          </div>
          <div className="facility-card">
            <img src={gym} alt="Gym" />
            <h3>Fitness Centers</h3>
            <p>Maintain a healthy lifestyle with our state-of-the-art gym facilities. Equipped with modern fitness equipment, the gym is open to all residents to support their well-being.</p>
          </div>
          <div className="facility-card">
            <img src={security} alt="Security" />
            <h3>24/7 Security</h3>
            <p>Your safety is our priority! Our hostels are monitored round-the-clock with CCTV surveillance and dedicated security personnel to ensure a safe living environment.</p>
          </div>
          <div className="facility-card">
            <img src={laundary} alt="Laundry" />
            <h3>Laundry Services</h3>
            <p>No more laundry worries! Our well-maintained laundry rooms provide efficient washing and drying facilities, ensuring fresh and clean clothes with ease.</p>
          </div>
        </div>
      </section>

      {/* Hostel Directorate Section */}
      <section className="hostel-directorate">
        <h2>Hostel Directorate</h2>
        <div className="directorate-grid">
          <div className="director-info">
            <div className="director-details">
              <h3>Dr. Rajesh Kumar</h3>
              <p>Chief Warden</p>
              <p>PhD in Student Affairs Management</p>
              <p>Experience: 15+ years in hostel administration</p>
              <p>Email: chief.warden@vignan.ac.in</p>
              <p>Phone: +91-9876543210</p>
            </div>
            <div className="director-photo">
              <img src={person} alt="Hostel Director" />
            </div>
          </div>
        </div>

        <div className="directorate-mission">
          <h3>Our Mission</h3>
          <p>At Vignan University, our hostel directorate is dedicated to creating a safe, inclusive, and inspiring residential environment where students can thrive academically and personally. We envision the hostel as a second home, fostering camaraderie, well-being, and intellectual growth. With a commitment to comfort, security, and holistic development, we strive to ensure that every student experiences a balanced and enriching campus life.</p>
        </div>
      </section>

      {/* Vision Board Section */}
      <section className="vision-board">
        <h2>Vision Board</h2>
        <p>Our vision is to establish a world-class residential community that embodies excellence, diversity, and personal transformation. We aim to cultivate an atmosphere where students excel in academics, develop essential life skills, and embrace global perspectives. Through engaging activities, cultural exchange, and personal development programs, we empower students to become well-rounded individuals, ready to navigate the challenges of the future with confidence and resilience.</p>
      </section>

      {/* Hostel Grid Section */}
      <section className="hostel-grid" id="hostels">
        <h2>Our Hostels</h2>
        <div className="hostel-grid-container">
          <div className="grid-item" onClick={() => navigate("/boys-hostel")}>
            <img src={boyshostel} alt="Boys Hostel" />
            <h3>Boys Hostel</h3>
            <p>There are 3 blocks allotted for Men of capacity varying from 200 to 1000 students in each block. The total capacity for Men’s hostel is about 7500.</p>
          </div>
          <div className="grid-item" onClick={() => navigate("/girls-hostel")}>
            <img src={girlshostel} alt="Girls Hostel" />
            <h3>Girls Hostel</h3>
            <p>There are 6 blocks allotted for Women students of capacity varying from 250 to 700 in each block. The total capacity for Women’s hostel is about 4000.</p>
          </div>
          <div className="grid-item" onClick={() => navigate("/international")}>
            <img src={international} alt="International Hostel" />
            <h3>International Hostel</h3>
            <p>There are two blocks for intrernational women and men. International students come in huge numbers to SRM for its outstanding learning environment that fulfills their academic aspirations.</p>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="eligibility-section">
        <h2>Eligibility Categories</h2>
        <div className="eligibility-grid">
          <div className="eligibility-card">
            <h3>Undergraduate Students</h3>
            <p>Full-time undergraduate students enrolled in any program at Vignan University are eligible for hostel accommodation.</p>
          </div>
          <div className="eligibility-card">
            <h3>Postgraduate Students</h3>
            <p>Full-time postgraduate students can apply for special PG blocks with enhanced amenities.</p>
          </div>
          <div className="eligibility-card">
            <h3>Research Scholars</h3>
            <p>PhD students and research scholars can apply for single-occupancy rooms in designated research blocks.</p>
          </div>
          <div className="eligibility-card">
            <h3>International Students</h3>
            <p>Students from other countries can apply for the international hostel with specialized facilities.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <div className="ladies-hostel">
            <h3>Ladies Hostel</h3>
            <p>Email: ladies.hostel@vignan.ac.in</p>
            <p>Phone: +91-9876543214</p>
            <p>Address: Vignan University Campus, Vadlamudi, Guntur District</p>
          </div>
          <div className="gents-hostel">
            <h3>Boys Hostel</h3>
            <p>Email: boys.hostel@vignan.ac.in</p>
            <p>Phone: +91-9876543215</p>
            <p>Address: Vignan University Campus, Vadlamudi, Guntur District</p>
          </div>
        </div>
        <div className="social-media">
          <a href="https://www.facebook.com/login" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://twitter.com/login" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://www.instagram.com/vignanuniversityofficial" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://www.youtube.com/@VignanUniversity" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i> YouTube
          </a>
        </div>
        <div className="copyright">
          <p>&copy; 2025 Vignan Hostel. All rights reserved.</p>
        </div>
      </section>

      {/* Popup */}
      {popupContent && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>&times;</span>
            <h3>{popupContent.title}</h3>
            <p>{popupContent.details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;