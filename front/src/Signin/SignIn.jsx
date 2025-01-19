import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { Typography } from "@mui/material";
import axios from 'axios'; // Importamos axios
import "./SignIn.css";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const SignIn = () => {
    const navigate = useNavigate();
<<<<<<< HEAD
    
    const touch = () => {
        navigate('/home');
    };

    const touchRegister = () => {
        navigate('/register');
    };

    const [verContraseña, setVerContraseña] = useState(false);

    const handleClickShowPassword = () => {
        setVerContraseña(!verContraseña);
=======
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verContraseña, setVerContraseña] = useState(false);
    const [error, setError] = useState("");

    const handleClickShowPassword = () => {
        setVerContraseña(!verContraseña);
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login/', {
                email: email,
                password: password
            });
            console.log(response.data);
            // Redirige al usuario a la página deseada después del login
            navigate('/home');
        } catch (error) {
            console.error(error);
            setError('Mail o Contraseña incorrecto/a.'); // Actualizamos el estado de error
        }
>>>>>>> 6cc357dc8026a027802df03ec2d6e1610d6926fd
    };

    return (
        <section className="sectionSignIn">
            <div>
                <Typography variant="h1">3FT</Typography>
            </div>

            <div className="textoLogueo">
                <p>Login</p>
            </div>

<<<<<<< HEAD
            <Box component="form" noValidate autoComplete="off" className="boxInput">
=======
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '500px' } }}
                noValidate
                autoComplete="off"
                className='boxInput'
            >
>>>>>>> 6cc357dc8026a027802df03ec2d6e1610d6926fd
                <TextField 
                    id="outlined-basic" 
                    label="Correo Electronico" 
                    variant="outlined" 
                    required 
<<<<<<< HEAD
=======
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Almacenamos el email
>>>>>>> 6cc357dc8026a027802df03ec2d6e1610d6926fd
                />
                <TextField
                    id="outlined-password-input" 
                    label="Contraseña" 
                    variant="outlined" 
                    required 
                    type={verContraseña ? 'text' : 'password'}
<<<<<<< HEAD
=======
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Almacenamos la contraseña
>>>>>>> 6cc357dc8026a027802df03ec2d6e1610d6926fd
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleClickShowPassword} edge="end">
                                    {verContraseña ? <VisibilityOff /> : <Visibility />}
<<<<<<< HEAD
                                </IconButton>
=======
                                </IconButton> 
>>>>>>> 6cc357dc8026a027802df03ec2d6e1610d6926fd
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>

            {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Mostrar mensaje de error si lo hay */}

            <div className="checkBoxLogin">
                <Checkbox {...label} defaultChecked />
                <p>Recordame</p>
            </div>

<<<<<<< HEAD
            <Stack spacing={2} direction="row" justifyContent="center">
                <Button 
                    variant="contained" 
                    className="ingresarButton" 
                    onClick={touch}>
                    INGRESAR
                </Button>
=======
            <Stack spacing={2} direction="row">
                <Button variant="contained" className='ingresarButton' onClick={handleLogin}>INGRESAR</Button>
>>>>>>> 6cc357dc8026a027802df03ec2d6e1610d6926fd
            </Stack>

            <div className="questionsRoots">
                <ul>
<<<<<<< HEAD
                    <li onClick={touchRegister}>
                        ¿No tienes una cuenta todavía?
                    </li>
=======
                    <li onClick={() => navigate('/register')}>¿No tienes una cuenta todavía?</li>
>>>>>>> 6cc357dc8026a027802df03ec2d6e1610d6926fd
                </ul>
            </div>
        </section>
    );
}

export default SignIn;


