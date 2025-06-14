import React from "react";
import "../css/women.css";
import hostelImage1 from "../img/priyadharshini.jpg";
import hostelImage2 from "../img/AC Block.jpg";
import hostelImage3 from "../img/N-Square.jpg";
import hostelImage4 from "../img/Dellite.jpg";
import hostelImage5 from "../img/ellite.jpg";
import hostelImage6 from "../img/priyadharshini.jpg";
import wardenImage from "../img/person.jpg";
import heroImage from "../img/priyadharshini.jpg"; // Optional: Replace with your hero section image
import { useNavigate } from "react-router-dom";

const WomenHostelPage = () => {
  const navigate = useNavigate();

  const blocks = [
    {
      image: hostelImage1,
      title: "Main Block",
      description:
        "Priyadarshini Block is a vibrant and welcoming hostel with five spacious floors designed to accommodate students with comfort and convenience. Each floor is equipped with essential facilities such as clean drinking water stations, high-speed Wi-Fi, and well-maintained washrooms. The common areas on each floor are designed to encourage interaction and relaxation. The hostel also offers round-the-clock security, CCTV surveillance, and a resident warden for a safe and peaceful living environment. Each room is well-ventilated and furnished with the necessary amenities like study tables, beds, and cupboards. The block is known for its strong sense of community, making it a popular choice among students.",
      email: "block1@vignan.edu",
      phone: "+1234567890",
    },
    {
      image: hostelImage2,
      title: "AC Block",
      description:
        "AC Block offers a comfortable living experience with five air-conditioned floors to beat the summer heat. This block is specifically designed for those who prefer a cooler environment to study and rest. In addition to the cooling comfort of air conditioners, each floor has purified drinking water facilities and a dedicated space for washing clothes. The hostel ensures 24/7 power backup and Wi-Fi connectivity across all floors. The rooms are spacious, with comfortable beds and desks, and each floor has common areas for students to socialize or study. Regular housekeeping services maintain cleanliness, and the hostel is fully secured with CCTV cameras and an on-site security team.",
      email: "block2@vignan.edu",
      phone: "+1234567890",
    },
    {
      image: hostelImage3,
      title: "N-Square",
      description:
        "N Square Block is a modern and contemporary hostel that provides students with a balanced blend of comfort and privacy. Spread across five floors, each level of N Square is equipped with high-speed internet, purified drinking water dispensers, and common lounges to unwind. The rooms are designed for maximum comfort, featuring beds with storage, desks for studying, and ample closet space. Each floor has well-maintained bathrooms and laundry facilities for the convenience of the residents. In addition to these, the block offers recreational spaces such as indoor games rooms and quiet areas for reading. The block is also equipped with 24/7 security, ensuring students’ safety and peace of mind.",
      email: "block3@vignan.edu",
      phone: "+1234567890",
    },
    {
      image: hostelImage4,
      title: "Dellite",
      description:
        "Dellite Block stands out with its unique mix of luxury and practicality, spread over five well-designed floors. Each floor of Dellite Block offers a comfortable living space with fully equipped study desks, storage, and comfortable beds. There are drinking water stations on each floor to ensure students have easy access to clean water. The block also offers spacious common areas, providing a place for students to interact or relax between study sessions. The hostel is well-ventilated, with ample natural light, and offers facilities such as laundry, daily housekeeping, and power backup. Security is top-notch with round-the-clock monitoring and guards on duty, giving residents a safe and secure environment.",
      email: "block4@vignan.edu",
      phone: "+1234567890",
    },
    {
      image: hostelImage5,
      title: "Ellite",
      description:
        "Elitte Block is a premium hostel with five floors designed to provide a comfortable and stylish living experience. Each floor is furnished with modern amenities, including air conditioning, drinking water stations, and study areas for each student. Elitte offers a peaceful atmosphere with common spaces where residents can relax, chat, or collaborate on projects. The hostel ensures a high level of hygiene and cleanliness through daily housekeeping services, and it is equipped with a 24-hour security system to ensure the safety of students. Wi-Fi access is available throughout the block, allowing residents to stay connected at all times. Elitte Block is ideal for students who prioritize comfort and convenience during their stay.",
      email: "block5@vignan.edu",
      phone: "+1234567890",
    },
    {
      image: hostelImage6,
      title: "Galaxy",
      description:
        "Gallaxy Block is an impressive hostel with five floors, each designed to cater to the diverse needs of students. The block is equipped with reliable Wi-Fi, purified drinking water on every floor, and spacious rooms for students to study and rest. The common areas are well-lit and cozy, offering residents the opportunity to socialize or unwind after a long day. Gallaxy Block offers several facilities, including laundry services, a well-maintained kitchen on select floors, and ample security features such as CCTV surveillance and a security guard present throughout the day and night. The block also boasts of a clean and modern ambiance with good ventilation and natural light, making it an ideal choice for students who enjoy a peaceful yet connected environment.",
      email: "block6@vignan.edu",
      phone: "+1234567890",
    },
  ];

  return (
    <div className="hostel-page">
      {/* Hero Section */}
      <section className="hero-section">
        <img src={heroImage} alt="Hostel" className="hero-image" />
        <div className="hero-content">
          <h1 className="hero-title">Vignan's Women Hostel</h1>
          <button className="back-button" onClick={() => window.history.back()}>
            Back
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About Vignan's Women Hostel</h2>
        <p>
          Vignan's Women Hostel provides a safe, secure, and comfortable
          environment for female students. The hostel has
          <strong> 5 well-maintained blocks</strong> accommodating over
          <strong> 800 students</strong> with top-notch facilities, hygienic
          dining, and round-the-clock security. It ensures a peaceful stay for
          students away from home, fostering a community of learning,
          friendship, and personal growth.
        </p>
      </section>

      {/* Chief Warden Section */}
      <section className="warden-section">
        <div className="warden-content">
          <div className="warden-image-container">
            <img src={wardenImage} alt="Chief Warden" className="warden-image" />
            <div className="warden-details">
              <p><strong>Name:</strong> Mrs. Anitha Reddy</p>
              <p><strong>Designation:</strong> Chief Warden</p>
              <p><strong>Email:</strong> <a href="mailto:anitha.reddy@vignan.edu">anitha.reddy@vignan.edu</a></p>
              <p><strong>Phone:</strong> <a href="tel:+1234567890">+1234567890</a></p>
            </div>
          </div>
          <div className="warden-description">
            <h2>Chief Warden</h2>
            <p>
              Mrs. Anitha Reddy, our esteemed Chief Warden, has been dedicated
              to ensuring the safety and well-being of our hostel residents for
              over a decade. She leads the team with compassion and discipline,
              making the hostel a second home for all the students.
            </p>
            <p>
              With a background in social work and over 15 years of experience
              in hostel management, Mrs. Reddy is known for her leadership and
              tireless commitment to the students' welfare. Under her guidance, 
              the hostel has flourished, becoming a place of comfort, growth, 
              and support for all students.
            </p>
            <button
              className="staff-button"
              onClick={() => navigate("/girls-hostel-staff")}
            >
              Our Staff
            </button>
          </div>
        </div>
      </section>

      {/* Hostel Blocks Section */}
      {blocks.map((block, index) => (
        <section className="block-section" key={index}>
          <div className="block">
            <div className="block-image">
              <img src={block.image} alt={block.title} />
            </div>
            <div className="block-description">
              <h3>{block.title}</h3>
              <p>{block.description}</p>
              <p>Email: <a href={`mailto:${block.email}`}>{block.email}</a></p>
              <p>Phone: <a href={`tel:${block.phone}`}>{block.phone}</a></p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default WomenHostelPage;
