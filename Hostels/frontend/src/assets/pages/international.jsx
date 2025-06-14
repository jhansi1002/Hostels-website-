import React from "react";
import "../css/international.css";
import heroImage from "../img/priyadharshini.jpg";
import wardenImage from "../img/priyadharshini.jpg";
import { useNavigate } from "react-router-dom";
import additionalImage1 from "../img/international-girls.jpg" ;
import additionalImage2 from "../img/international-boys.jpg" ;


const InternationalStudents = () => {
    const navigate = useNavigate();
  return (
    <div className="international">
    <div className="international-container">
      {/* Hero Section with Background Image */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="hero-overlay">
          <h1>Welcome International Students</h1>
          <p>Experience comfort and culture at Vignan University</p>
        </div>
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
                    onClick={() => navigate("/international-staff")}
                  >
                    Our Staff
                  </button>
                </div>
              </div>
            </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About the International Hostel</h2>
        <p>
          Vignan University's International Hostel offers a home-like atmosphere
          for students from around the globe. With top-notch facilities and a
          multicultural environment, we ensure your academic journey is seamless
          and enjoyable.
        </p>
      </section>

      {/* Second Additional Block: Description on Left, Photo on Right */}
      <section className="additional-block reverse">
        <div className="additional-block-left">
          <h3>International Girls Hostel</h3>
          <p>
          The International Girl's Hostel offers a vibrant, multicultural environment, providing students from around the world with a home away from home. It features a diverse range of cultural cuisines, allowing residents to enjoy traditional meals from their own countries and explore others. The hostel celebrates global traditions and festivals, promoting cultural exchange and unity. With comfortable living spaces, common areas for socializing, and facilities that cater to international students needs, the hostel ensures a warm, supportive atmosphere where students can connect, share experiences, and create lifelong friendships while pursuing their studies.
          </p>
        </div>
            <div className="additional-block-right">
          <img
            src={additionalImage1}
            alt="Community"
            className="additional-img"
          />
        </div>
      </section>

      {/* Third Additional Block: Description on Left, Photo on Right */}
      <section className="additional-block reverse">
      <div className="additional-block-left">
        <h3>International Boys Hostel</h3>
        <p>
        The International Boys' Hostel provides a dynamic and inclusive living space for male students from across the globe. It offers a rich cultural experience where students can enjoy a variety of international cuisines, with meals from different parts of the world prepared to suit diverse tastes and dietary needs. The hostel organizes cultural events and celebrations, fostering an environment of global unity and exchange. Along with comfortable rooms and modern amenities, the hostel includes common areas for socializing and studying, where students can bond over shared experiences and traditions. Additionally, dedicated staff members provide support to ensure international students have a smooth transition, offering assistance with both academic and personal matters, making the hostel a perfect place for students to thrive in a multicultural atmosphere.
        </p>
      </div>
      <div className="additional-block-right">
        <img
        src={additionalImage2}
        alt="Facilities"
        className="additional-img"
      />
   </div>
  </section>


      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: international@vignan.ac.in</p>
        <p>Phone: +91-98765-43210</p>
      </section>
    </div>
  </div>
  );
};

export default InternationalStudents;
