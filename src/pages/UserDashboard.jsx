import React, { useState } from "react";
import "../styles/Dashboard.css";

const features = [
  { text: "View Reports", icon: "📄", bg: "reports.jpg" },
  { text: "Call & Recordings", icon: "📞", bg: "calls.jpg" },
  { text: "Book Appointment", icon: "📅", bg: "appointment.jpg" },
  { text: "Play Games and Tests", icon: "🎮", bg: "games.jpg" },
  { text: "Make Friends for Support", icon: "👫", bg: "friends.jpg" },
  { text: "View Medications", icon: "💊", bg: "medications.jpg" },
];

const UserDashboard = () => {
  const [showCallPopup, setShowCallPopup] = useState(false);
  const [showAppointmentPopup, setShowAppointmentPopup] = useState(false);

  const handleFeatureClick = (feature) => {
    if (feature.text === "Call & Recordings") {
      setShowCallPopup(true);
    } else if (feature.text === "Book Appointment") {
      setShowAppointmentPopup(true);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>User Dashboard</h2>
      <textarea className="problem-input" placeholder="Explain your problem"></textarea>
      <button className="submit-button">Submit</button>
      <h3>Features:</h3>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card"
            style={{ backgroundImage: `url(/images/${feature.bg})` }}
            onClick={() => handleFeatureClick(feature)}
          >
            <div className="overlay"></div>
            <p>{feature.icon} {feature.text}</p>
          </div>
        ))}
      </div>

      {/* Call & Recordings Popup */}
      {showCallPopup && (
        <div className="popup">
          <h3>Choose Call Type</h3>
          <button onClick={() => alert("Starting Live Voice Call...")}>Live Voice</button>
          <button onClick={() => alert("Starting Live Video Call...")}>Live Video</button>
          <button onClick={() => alert("Recording Voice...")}>Record Voice</button>
          <button onClick={() => alert("Recording Video...")}>Record Video</button>
          <button onClick={() => setShowCallPopup(false)}>Close</button>
        </div>
      )}

      {/* Book Appointment Popup */}
      {showAppointmentPopup && (
        <div className="popup">
          <h3>Book an Appointment</h3>
          <button onClick={() => alert("Appointment booked with a Psychologist")}>Psychologist</button>
          <button onClick={() => alert("Appointment booked with a Psychiatrist")}>Psychiatrist</button>
          <button onClick={() => setShowAppointmentPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;