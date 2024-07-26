import React, { useState } from 'react';
import NavBar from '../components/navbar/NavBar';
import { Avatar, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import './my_account.css';

export default function MyAccount() {
  const [imageSrc, setImageSrc] = useState('/static/images/avatar/1.jpg');

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
      <div className="avatar-container">
        <Avatar alt="User image" src={imageSrc} className="avatarLogo"  style={{ minHeight: '100px', minWidth: '100px' }}/>
        <IconButton className="edit-icon" component="label" style={{
          width: '60px', 
          height: '60px',
          bottom: '20px',
          right: '-45px' 
        }}>
          <EditIcon />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
        </IconButton>
      </div>
    </main>
  );
}
