// src/components/nurses/Nurse.jsx
import React from 'react';
import './nurse.scss';

const Nurse = () => {
  return (
    <div className="nurses">
      <section className="top-section">
        <div className="imgContainer">
          <h1 className="image-title">Nurses' platform</h1>
          <img src="pics/s1.webp" alt="" />
        </div>
      </section>
      <section className="patient-info-section">
        <div className="patient-info-container">
          <label>Patient Name:</label>
          <input type="text" placeholder="Enter patient's name" />

          <label>Patient ID:</label>
          <input type="text" placeholder="Enter patient's ID" />
        </div>
        <button className="patient-id-button">Generate Information</button>
      </section>

      <div className="typing-platform">
        <textarea
          placeholder="Enter patients Id and press enter to Generate Information"
        />
        {/* Add a placeholder for "Remarks" below the textarea */}
        <textarea
          placeholder="Remarks"
          rows="3" // Adjust the number of rows as needed
        />
      </div>
      <div className="button-container">
        <button className="custom-button">Update</button>
      </div>
      <section className="drug-administration-section">
        <div className="column"></div>
        
        <div className="column">
          <label>Drug:</label>
          <input type="text" placeholder="Enter drug name" />

          <label>Time Duration:</label>
          <input type="text" placeholder="Enter time duration" />
        </div>
      </section>
      <div className="button-container">
        <button className="custom-button">Submit</button>
        <button className="custom-button">Logout</button>
      </div>
    </div>
  );
};

export default Nurse;
