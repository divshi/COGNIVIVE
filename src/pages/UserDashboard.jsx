import React from "react";

const UserDashboard = () => {
  return (
    <div className="container">
      <h2>User Dashboard</h2>
      <textarea placeholder="Explain your problem"></textarea>
      <button>Submit</button>
      <h3>Features:</h3>
      <ul>
        <li>📄 View Reports</li>
        <li>📞 Call & Recordings</li>
        <li>📅 Book Appointment</li>
        <li>🎮 Play Games & Tests</li>
        <li>👫 Make Friends for Support</li>
        <li>💊 View Medications</li>
      </ul>
    </div>
  );
};

export default UserDashboard;
