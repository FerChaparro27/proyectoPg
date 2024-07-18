import React from 'react';
import './instructorCard.css'

const InstructorCard = ({ instructor }) => (
  <div className="instructorCard">
    <ul className="instructorTable">
      <li>id: {instructor.id}</li>
      <li>Name: {instructor.name}</li>
      <li>Lastname: {instructor.lastname}</li>
    </ul>
  </div>
);

export default InstructorCard;