import React, { useState, useEffect, useRef } from "react";
import "../css/BoysHostel.css";
import hostelImage from "../img/clg.jpg";
import { useNavigate } from "react-router-dom";
import BlockVihar from "../img/boys-block1.jpg";
import BlockAC from "../img/boys-block2.jpg";
import BlockVignan from "../img/boys-block3.jpg";
import person from "../img/person.jpg";

const BoysHostel = () => {
  const [visibleBlocks, setVisibleBlocks] = useState([]);
  const blockRefs = useRef([]);
  const navigate = useNavigate();

  // Initialize refs array
  useEffect(() => {
    blockRefs.current = Array(3).fill().map((_, i) => blockRefs.current[i] || React.createRef());
  }, []);

  // Set up intersection observer for animation
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const blockIndex = blockRefs.current.findIndex(ref => ref.current === entry.target);
          if (blockIndex !== -1 && !visibleBlocks.includes(blockIndex)) {
            setVisibleBlocks(prev => [...prev, blockIndex]);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    blockRefs.current.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      blockRefs.current.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [visibleBlocks]);

  // Facility data with descriptions
  const facilities = [
    {
      title: "24/7 Wi-Fi",
      description: "High-speed internet access throughout the hostel with dedicated bandwidth for each student. Multiple access points ensure seamless connectivity for academic and personal needs."
    },
    {
      title: "Modern Gym",
      description: "Fully equipped fitness center with cardio machines, weight training equipment, and a dedicated area for yoga and stretching. Personal trainers available on request."
    },
    {
      title: "Study Rooms",
      description: "Quiet, well-lit study spaces on each floor with ergonomic furniture, power outlets, and bookshelf facilities. Group study rooms available with whiteboards and projectors."
    },
    {
      title: "Dining Hall",
      description: "Spacious dining area serving nutritious meals three times a day. Special diet options available on request. Weekend special menus feature diverse cuisines."
    },
    {
      title: "Recreation Area",
      description: "Common rooms with TVs, board games, table tennis, and foosball tables. Outdoor recreation space with basketball court and seating areas for social gatherings."
    },
    {
      title: "Laundry Service",
      description: "Modern self-service laundry facility open 24/7 with washers and dryers. Professional laundry and dry cleaning service also available twice a week at additional cost."
    }
  ];

  return (
    <div className="boys">
    <div className="boys-hostel">
      {/* Hero Section */}
      <div className="hero">
        <img src={hostelImage} alt="Boys Hostel" className="hero-img" />
        <div className="hero-text">
          <h1>Welcome to Boys Hostel</h1>
          <button className="book-btn" onClick={() => navigate("/payment")}>Book Now</button>
        </div>
      </div>

      <div className="section-container">
        {/* Chief Warden Section - Image on right with details below, content on left */}
        <div className="warden-card">
          <div className="warden-content">
            <h2>Chief Warden</h2>
            <p>Welcome to our Boys Hostel. As the Chief Warden, I am committed to ensuring that our students have a comfortable, safe, and enriching stay during their academic journey. Our team works tirelessly to maintain the highest standards of accommodation and support services.</p>
            <p>With over 15 years of experience in hostel management, I oversee all operational aspects including maintenance, security, and student welfare. We strive to create a home away from home for our residents, fostering a community that supports academic excellence and personal growth.</p>
            <p>Feel free to reach out to me or any of our block wardens if you have questions or concerns during your stay with us.</p>
            <button
      className="staff-button"
      onClick={() => navigate("/boys-hostel-staff")}  // Use navigate instead of history.push
    >
      Our Staff
    </button>
          </div>
          <div className="warden-img-container">
            <img src={person} alt="Chief Warden" className="warden-img" />
            <div className="warden-details">
              <p><strong>Name:</strong> Dr. John Doe</p>
              <p><strong>Contact:</strong> +1234567890</p>
              <p><strong>Email:</strong> warden@boyshostel.com</p>
              <p><strong>Office Hours:</strong> Monday-Friday, 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>

        {/* Facilities Grid - With hover descriptions */}
        <div className="facilities-section">
          <h2 className="facilities-title">Our Facilities</h2>
          <div className="facilities-grid">
            {facilities.map((facility, index) => (
              <div className="facility-item" key={index}>
                <div className="facility-title">{facility.title}</div>
                <div className="facility-description">{facility.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hostel Blocks - With animated images */}
        <div className="blocks-section">
          <h2 className="blocks-title">Hostel Blocks</h2>
          
          <div className="block-card" ref={blockRefs.current[0]}>
            <div className="block-img-container">
              <img 
                src={BlockVihar} 
                alt="Block A" 
                className={`block-img ${visibleBlocks.includes(0) ? 'slide-in' : ''}`}
              />
            </div>
            <div className="block-info">
              <h3>Vignan Vihar Hostel</h3>
              <div className="block-description">
                <p>Vignan Vihar Block (5 Floors)
                Vignan Vihar Block is a well-established and vibrant hostel that accommodates students in a comfortable and secure environment. The block spans five floors, each equipped with high-speed internet access, purified drinking water stations, and spacious rooms that cater to the needs of students. Common areas on each floor encourage socializing, studying, or relaxation. The hostel offers round-the-clock security, CCTV surveillance, and a warden to ensure a safe living environment. Laundry services and daily housekeeping are provided for convenience, and students can enjoy a peaceful atmosphere, making it a great place for focused study and relaxation. With ample natural light and good ventilation, Vignan Vihar fosters a productive and comfortable atmosphere for all residents.</p>
              </div>
              <div className="block-warden">
                <p><strong>Block Warden:</strong> Mr. Robert Smith</p>
                <p><strong>Contact:</strong> +1234567891</p>
              </div>
            </div>
          </div>
          
          <div className="block-card" ref={blockRefs.current[1]}>
            <div className="block-img-container">
              <img 
                src={BlockAC}
                alt="Block B" 
                className={`block-img ${visibleBlocks.includes(1) ? 'slide-in' : ''}`}
              />
            </div>
            <div className="block-info">
              <h3>AC Block</h3>
              <div className="block-description">
                <p>AC Block is a modern hostel with five floors dedicated to providing students with a comfortable and cool living environment, especially during the hotter months. Each floor is air-conditioned for maximum comfort, ensuring a pleasant atmosphere throughout the year. The block offers reliable Wi-Fi, clean drinking water facilities on every floor, and common areas where students can interact, relax, or study together. The rooms are well-furnished with beds, desks, and storage space to ensure students have a conducive environment for both study and rest. The block has 24/7 security surveillance, ensuring the safety of all residents. With power backup available, students can rely on uninterrupted services, and the regular cleaning and maintenance of the hostel add to its appeal.</p>
              </div>
              <div className="block-warden">
                <p><strong>Block Warden:</strong> Dr. Emily Johnson</p>
                <p><strong>Contact:</strong> +1234567892</p>
              </div>
            </div>
          </div>
          
          <div className="block-card" ref={blockRefs.current[2]}>
            <div className="block-img-container">
              <img 
                src={BlockVignan}
                alt="Block C" 
                className={`block-img ${visibleBlocks.includes(2) ? 'slide-in' : ''}`}
              />
            </div>
            <div className="block-info">
              <h3>Vignan Boys Block</h3>
              <div className="block-description">
                <p>AC Block is a modern hostel with five floors dedicated to providing students with a comfortable and cool living environment, especially during the hotter months. Each floor is air-conditioned for maximum comfort, ensuring a pleasant atmosphere throughout the year. The block offers reliable Wi-Fi, clean drinking water facilities on every floor, and common areas where students can interact, relax, or study together. The rooms are well-furnished with beds, desks, and storage space to ensure students have a conducive environment for both study and rest. The block has 24/7 security surveillance, ensuring the safety of all residents. With power backup available, students can rely on uninterrupted services, and the regular cleaning and maintenance of the hostel add to its appeal.</p>
              </div>
              <div className="block-warden">
                <p><strong>Block Warden:</strong> Prof. Michael Chang</p>
                <p><strong>Contact:</strong> +1234567893</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BoysHostel;