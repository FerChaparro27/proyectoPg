import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import {FormControl} from '@mui/material';
import {InputLabel, Select, MenuItem} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import "./create_client.css"

const FormComponent = () => {

  const navigate = useNavigate()

  const VolverClientes= () => {
      navigate('/clients')
  }

  const [inputs, setInputs] = useState({
    dni: '',
    name: '',
    lastname: '',
    mail:'',
    phone_number: '',
    date_birth:'',
    location: '',
    gender:''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };


  const handleSubmit = async () => {
    console.log('Datos a enviar:', inputs);

    // Validación final antes de enviar
    if (!inputs.date_birth || typeof inputs.date_birth !== 'string' || inputs.date_birth.length !== 10) {
        console.error('Error: `date_birth` no es válida:', inputs.date_birth);
        return;
    }

    try {
        const response = await axios.post('http://127.0.0.1:8000/clients/', inputs);
        console.log('Respuesta del servidor:', response.data);
    } catch (error) {
        console.error('Error al enviar datos:', error.response?.data || error.message);
    }
    VolverClientes();
};

  const [selectedDate, setSelectedDate] = React.useState('');


  const handleDateChange = (event) => {
    const date = event.target.value; // Fecha cruda del input (e.g., "2024-12-13")
    const formattedDate = new Date(date).toISOString().split('T')[0]; // Formato "YYYY-MM-DD"

    // Actualizamos el estado de la fecha seleccionada
    setSelectedDate(formattedDate); // Ahora está seguro que es un string en formato "YYYY-MM-DD"

    // Actualizamos el estado de inputs
    setInputs((prevInputs) => ({
        ...prevInputs,
        date_birth: formattedDate, // Asegúrate de usar el nombre correcto del campo esperado por tu backend
    }));

    console.log('Fecha seleccionada:', formattedDate);
};

const fechaString = new Date(selectedDate);

  return(
    <main>
    <div className='all'>
        <Box className="cajaFormulario">
        <div className="formularioCliente">
                <TextField
                    name='dni'
                    label="Documento"
                    value={inputs.dni}
                    onChange={handleChange}
                />
            </div>
            <div className="formularioCliente">
                <TextField
                    name='name'
                    label="Nombre"
                    value={inputs.name}
                    onChange={handleChange}
                />
            </div>
            <div className="formularioCliente">
                <TextField
                    name='lastname'
                    label="Apellido"
                    value={inputs.lastname}
                    onChange={handleChange}
                />
            </div>
            <div className="formularioCliente">
                <TextField
                    name='mail'
                    label="Mail"
                    value={inputs.mail}
                    onChange={handleChange}
                />
            </div>
            <div className="formularioCliente">
                <TextField
                    name='phone_number'
                    label="Telefono"
                    value={inputs.phone_number}
                    onChange={handleChange}
                />
            </div>
            <div className="formularioCliente">
            <TextField
                name='date_birth'
                label="Nacimiento"
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            </div>
            <div className="formularioCliente">
                <TextField
                    name='location'
                    label="Localidad"
                    value={inputs.location}
                    onChange={handleChange}
                />
            </div>
            <div className="formularioCliente">
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
    </div>
</main>
  )
}

export default FormComponent;
