import React, { useState } from 'react';
import NavBar from '../components/navbar/NavBar';
import { Avatar, IconButton, TextField, Typography, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import './my_account.css';

export default function MyAccount() {
  const [imageSrc, setImageSrc] = useState(() =>
    localStorage.getItem('profileImage') || '/static/images/avatar/1.jpg'
  );
  const [name, setName] = useState(localStorage.getItem('name') || ''); // Name from localStorage
  const [lastname, setLastname] = useState(localStorage.getItem('lastname') || ''); // Lastname from localStorage
  const [mail, setMail] = useState(localStorage.getItem('mail') || ''); // Mail from localStorage
  const [phone, setPhone] = useState(localStorage.getItem('phone') || ''); // Phone number
  const [nationality, setNationality] = useState(localStorage.getItem('nationality') || ''); // Nationality

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result;
        setImageSrc(imageData);
        localStorage.setItem('profileImage', imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLastnameChange = (event) => {
    setLastname(event.target.value);
  };

  const handleMailChange = (event) => {
    setMail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
  };

  const handleSaveChanges = () => {
    // Save all data to localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('lastname', lastname);
    localStorage.setItem('mail', mail);
    localStorage.setItem('phone', phone);
    localStorage.setItem('nationality', nationality);
    alert("Changes saved successfully!");
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
          <Typography variant="h6" gutterBottom>
            Full Name:
          </Typography>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={handleNameChange}
            style={{ marginBottom: '16px' }}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            value={lastname}
            onChange={handleLastnameChange}
            style={{ marginBottom: '16px' }}
          />

          <Typography variant="h6" gutterBottom>
            Email:
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={mail}
            onChange={handleMailChange}
            style={{ marginBottom: '16px' }}
          />

          <Typography variant="h6" gutterBottom>
            Phone Number:
          </Typography>
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            value={phone}
            onChange={handlePhoneChange}
            style={{ marginBottom: '16px' }}
          />

          <Typography variant="h6" gutterBottom>
            Nationality:
          </Typography>
          <TextField
            label="Nationality"
            variant="outlined"
            fullWidth
            value={nationality}
            onChange={handleNationalityChange}
            style={{ marginBottom: '16px' }}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveChanges}
            style={{ marginTop: '16px' }}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </main>
  );
}
