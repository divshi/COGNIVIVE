import React from "react";

const PsychologistDashboard = () => {
  return (
    <div className="container">
      <h2>Psychologist Dashboard</h2>
      <h3>Patient Reports</h3>
      <button>View Problem Statements</button>
      <button>Submit Reports</button>
      <h3>Features:</h3>
      <ul>
        <li>📞 Call & Recordings</li>
        <li>📅 Appointment Requests</li>
        <li>🎮 View Game & Test Results</li>
        <li>💊 Prescribe Medication</li>
      </ul>
    </div>
  );
};

export default PsychologistDashboard;
