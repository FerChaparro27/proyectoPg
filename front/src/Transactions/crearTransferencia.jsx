import * as React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import {Button} from '@mui/material';
import {Box} from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./crearTransferencia.css";
import { color } from '@mui/system';
import NavBar from '../components/navbar/NavBar';



function NuevaTransferencia(){
    const navigate = useNavigate()

    const VolverTransferencias= () => {
        navigate('/transaction')
    }

    const [inputs, setInputs] = useState({
        id:'null',
        date: '',
        origin: '',
        destination: '', 
        amount: '',
        responsable:'', // Puedes agregar más campos según sea necesario
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
          const response = await axios.post('http://127.0.0.1:8000/transactions/', inputs);
          console.log('Response:', response.data);
        } catch (error) {
          console.error('Error posting data:', error);
        }
        VolverTransferencias();
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
            <NavBar></NavBar>
            <div className='all'>
                <h2>Crear Transaccion</h2>
                <Box className="cajaFormulario">
                    <div className="formularioTransaccion">
                        <TextField
                            name='date'
                            label="Select Date"
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
                            required
                            name="origin"
                            label="Origen"
                            value={inputs.origin}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="formularioTransaccion">
                        <TextField
                            required
                            name="destination"
                            label="Destinatario"
                            value={inputs.destination}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="formularioTransaccion">
                        <FormControl>
                            <InputLabel htmlFor="outlined-adornment-amount">Monto</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                required
                                name="amount"
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                label="Monto"
                                value={inputs.amount}
                                onChange={handleChange}
                            />
                        </FormControl>
                    </div>
                    <div className="formularioTransaccion">
                        <TextField
                            required
                            name="responsable"
                            label="Responsable"
                            value={inputs.responsable}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="formularioTransaccion">
                        <Button variant="contained" onClick={handleSubmit}>Guardar transferencia</Button>
                    </div>
                </Box>
            </div>
        </main>
    )

}

export default NuevaTransferencia;