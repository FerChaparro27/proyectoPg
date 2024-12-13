import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

import "./create_instructor.css";

const FormComponent = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    dni: '',
    name: '',
    lastname: '',
    mail: '',
    phone_number: '',
    date_birth: '',
    location: '',
    gender: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'http://127.0.0.1:8000/instructor/';

    console.log(inputs);

    try {
      const response = await axios.post(url, inputs, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setResponseMessage('Datos enviados exitosamente');
      console.log('Respuesta:', response.data);
      navigate('/instructor');
    } catch (error) {
      setResponseMessage('Error al enviar los datos');
      console.error('Error:', error);
    }
  };

  return (
    <div className='all'>
      <Box className="cajaFormulario">
        <div className="formularioProfesor">
          <TextField
            name="dni"
            label="Documento"
            value={inputs.dni}
            onChange={handleChange}
          />
        </div>
        <div className="formularioProfesor">
          <TextField
            name="name"
            label="Nombre"
            value={inputs.name}
            onChange={handleChange}
          />
        </div>
        <div className="formularioProfesor">
          <TextField
            name="lastname"
            label="Apellido"
            value={inputs.lastname}
            onChange={handleChange}
          />
        </div>
        <div className="formularioProfesor">
          <TextField
            name="mail"
            label="Mail"
            value={inputs.mail}
            onChange={handleChange}
          />
        </div>
        <div className="formularioProfesor">
          <TextField
            name="phone_number"
            label="Teléfono"
            value={inputs.phone_number}
            onChange={handleChange}
          />
        </div>
        <div className="formularioProfesor">
          <TextField
            name="date_birth"
            label="Nacimiento"
            type="date"
            value={inputs.date_birth}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="formularioProfesor">
          <TextField
            name="location"
            label="Localidad"
            value={inputs.location}
            onChange={handleChange}
          />
        </div>
        <div className="formularioProfesor">
          <FormControl sx={{ width: '250px' }}>
            <InputLabel id="gender-label">Selecciona</InputLabel>
            <Select
              labelId="gender-label"
              id="gender"
              name="gender"
              value={inputs.gender}
              onChange={handleChange}
            >
              <MenuItem value="male">Masculino</MenuItem>
              <MenuItem value="female">Femenino</MenuItem>
              <MenuItem value="other">Otro</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className='containerButton'>
          <Button variant="contained" type="submit" onClick={handleSubmit}>Enviar</Button>
        </div>
      </Box>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default FormComponent;
