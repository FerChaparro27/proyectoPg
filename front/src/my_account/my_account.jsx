import React, { useState, useEffect } from 'react';
import NavBar from '../components/navbar/NavBar';
import { Avatar, IconButton, TextField, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import './my_account.css';

export default function MyAccount() {
  const [imageSrc, setImageSrc] = useState('/static/images/avatar/1.jpg');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');

  // Llamada a la API para obtener datos del usuario
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/"); // URL de tu API
        const data = await response.json();

        // Actualizar los estados con los datos obtenidos
        setName(data.name || '');
        setSurname(data.surname || '');
        setEmail(data.email || '');
        setPhoneNumber(data.phoneNumber || '');
        setCountry(data.country || '');
        setImageSrc(data.profileImage || '/static/images/avatar/1.jpg'); // Manejo de imagen predeterminada
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main>
      <NavBar />
      <div className="account-container">
        <div className="avatar-container">
          <Avatar
            alt="User image"
            src={imageSrc}
            className="avatarLogo"
            style={{ minHeight: '100px', minWidth: '100px' }}
          />
          <IconButton
            className="edit-icon"
            component="label"
            style={{
              width: '60px',
              height: '60px',
              bottom: '20px',
              right: '-45px',
            }}
          >
            <EditIcon />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
          </IconButton>
        </div>

        <div className="user-details">
          <Typography variant="h6" gutterBottom>Full Name:</Typography>
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            value={`${name} ${surname}`}
            disabled
            style={{ marginBottom: '16px' }}
          />

          <Typography variant="h6" gutterBottom>Email:</Typography>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            disabled
            style={{ marginBottom: '16px' }}
          />

          <Typography variant="h6" gutterBottom>Phone Number:</Typography>
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            value={phoneNumber}
            disabled
            style={{ marginBottom: '16px' }}
          />

          <Typography variant="h6" gutterBottom>Country:</Typography>
          <TextField
            label="Country"
            variant="outlined"
            fullWidth
            value={country}
            disabled
            style={{ marginBottom: '16px' }}
          />
        </div>
      </div>
    </main>
  );
}
