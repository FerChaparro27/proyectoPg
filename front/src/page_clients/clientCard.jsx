import React from 'react';
import './clientCard.css'

const ClientCard = ({ client }) => (
  <div className="clientCard">
    <ul className="clientTable">
      <li>id: {client.id}</li>
      <li>Name: {client.name}</li>
      <li>Lastname: {client.lastname}</li>
    </ul>
  </div>
);

export default ClientCard;