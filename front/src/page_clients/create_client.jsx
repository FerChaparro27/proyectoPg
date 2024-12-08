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
    id: "NULL",
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
    try {
      const response = await axios.post('http://127.0.0.1:8000/clients/', inputs);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error posting data:', error);
    }
    VolverClientes();
  };

  const [selectedDate, setSelectedDate] = React.useState('');

  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
    const formattedDate = new Date(date).toISOString().split('T')[0];
    setInputs((prevInputs) => ({
        ...prevInputs,
        date:formattedDate, // Actualizamos el campo de fecha en inputs
      }));
    console.log(selectedDate)
  };

const fechaString = new Date(selectedDate);

  return(
    <main>
    <div className='all'>
        <Box className="cajaFormulario">
        <div className="formularioTransaccion">
                <TextField
                    name='dni'
                    label="Documento"
                    value={inputs.dni}
                    onChange={handleChange}
                />
            </div>
            <div className="formularioTransaccion">
                <TextField
                    name='name'
                    label="Nombre"
                    value={inputs.name}
                    onChange={handleChange}
                />
            </div>
            <div className="formularioTransaccion">
                <TextField
                    name='lastname'
                    label="Apellido"
                    value={inputs.lastname}
                    onChange={handleChange}
                />
            </div>
            <div className="formularioTransaccion">
                <TextField
                    name='mail'
                    label="Mail"
                    value={inputs.mail}
                    onChange={handleChange}
                />
            </div>
            <div className="formularioTransaccion">
                <TextField
                    name='phone_number'
                    label="Telefono"
                    value={inputs.phone_number}
                    onChange={handleChange}
                />
            </div>
            <div className="formularioTransaccion">
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
            <div className="formularioTransaccion">
                <TextField
                    name='location'
                    label="Localidad"
                    value={inputs.location}
                    onChange={handleChange}
                />
            </div>
            <div className="formularioTransaccion">
            <FormControl fullWidth>
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
            <div>
             <Button variant="contained" type="submit" onClick={handleSubmit}>Enviar</Button>
       </div>
        </Box>
    </div>
</main>
  )
}

export default FormComponent;
