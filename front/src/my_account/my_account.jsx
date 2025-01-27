import React, { useState, useEffect } from 'react';
import NavBar from '../components/navbar/NavBar';
import { Avatar, IconButton, TextField, Typography, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import './my_account.css';

export default function MyAccount() {
  const [imageSrc, setImageSrc] = useState(() =>
    localStorage.getItem('profileImage') || '/static/images/avatar/1.jpg'
  );
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState(localStorage.getItem('phone') || ''); // Phone number
  const [nationality, setNationality] = useState(localStorage.getItem('nationality') || ''); // Nationality
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/user'); 
        if (!response.ok) {
          throw new Error(`Failed to fetch user data: ${response.status}`);
        }

        const userData = await response.json();
        console.log('Fetched user data:', userData);

        if (userData && userData.name && userData.lastname && userData.mail) {
          setName(userData.name);
          setLastname(userData.lastname);
          setMail(userData.mail);
          if (!localStorage.getItem('profileImage')) {
            setImageSrc(userData.profileImage || '/static/images/avatar/1.jpg');
          }
        } else {
          console.error('Invalid user data structure:', userData);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

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

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
  };

  const handleSaveChanges = () => {
    // Save phone number and nationality to localStorage
    localStorage.setItem('phone', phone);
    localStorage.setItem('nationality', nationality);
    alert("Changes saved successfully!");
  };

  if (isLoading) {
    return (
      <main>
        <NavBar />
        <Typography variant="h6" style={{ textAlign: 'center', marginTop: '20px' }}>
          Loading user data...
        </Typography>
      </main>
    );
  }

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
            disabled
            style={{ marginBottom: '16px' }}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            value={lastname}
            disabled
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
            disabled
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
