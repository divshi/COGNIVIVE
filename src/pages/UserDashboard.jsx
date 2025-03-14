import React from "react";
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
          >
            <div className="overlay"></div>
            <p>{feature.icon} {feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
