import React, { useState } from "react";
import "../styles/Dashboard.css";
import { FaVideo, FaMicrophone, FaComments } from "react-icons/fa";

const features = [
  { text: "View Reports", icon: "📄", bg: "reports.jpg" },
  { text: "Call & Recordings", icon: "📞", bg: "calls.jpg" },
  { text: "Book Appointment", icon: "📅", bg: "appointment.jpg" },
  { text: "Play Games and Tests", icon: "🎮", bg: "games.jpg" },
  { text: "Make Friends for Support", icon: "👫", bg: "friends.jpg" },
  { text: "View Medications", icon: "💊", bg: "medications.jpg" },
  { text: "Virtual Reality", icon: "🕶️", bg: "vr.jpg" }
];

const UserDashboard = () => {
  const [showCallPopup, setShowCallPopup] = useState(false);
  const [showAppointmentPopup, setShowAppointmentPopup] = useState(false);
  const [showVRPopup, setShowVRPopup] = useState(false);
  const [showVRAppointmentPopup, setShowVRAppointmentPopup] = useState(false);

  const handleFeatureClick = (feature) => {
    if (feature.text === "Call & Recordings") {
      setShowCallPopup(true);
    } else if (feature.text === "Book Appointment") {
      setShowAppointmentPopup(true);
    } else if (feature.text === "Virtual Reality") {
      setShowVRPopup(true);
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
            {feature.text === "Make Friends for Support" && (
              <div className="shortcut-icons">
                <button className="icon-button" onClick={() => alert("Starting Video Call...")}> 
                  <FaVideo className="icon video" /> Video Call
                </button>
                <button className="icon-button" onClick={() => alert("Starting Voice Call...")}> 
                  <FaMicrophone className="icon mic" /> Voice Call
                </button>
                <button className="icon-button" onClick={() => alert("Opening Chat...")}> 
                  <FaComments className="icon chat" /> Chat
                </button>
              </div>
            )}
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
          <button className="psychologist" onClick={() => alert("Appointment booked with a Psychologist")}>Psychologist</button>
          <button className="psychiatrist" onClick={() => alert("Appointment booked with a Psychiatrist")}>Psychiatrist</button>
          <button onClick={() => setShowAppointmentPopup(false)}>Close</button>
        </div>
      )}

      {/* Virtual Reality Popup */}
      {showVRPopup && (
        <div className="popup">
          <h3>Virtual Reality Options</h3>
          <button onClick={() => alert("Viewing Recordings in VR Mode...")}>View Recording</button>
          <button onClick={() => setShowVRAppointmentPopup(true)}>Book Appointment</button>
          <button onClick={() => setShowVRPopup(false)}>Close</button>
        </div>
      )}

      {/* VR Book Appointment Popup */}
      {showVRAppointmentPopup && (
        <div className="popup">
          <h3>Book an Appointment in VR</h3>
          <button className="psychologist" onClick={() => alert("VR Appointment booked with a Psychologist")}>Psychologist</button>
          <button className="psychiatrist" onClick={() => alert("VR Appointment booked with a Psychiatrist")}>Psychiatrist</button>
          <button onClick={() => setShowVRAppointmentPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;