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
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verContraseña, setVerContraseña] = useState(false);
    const [error, setError] = useState("");

    const handleClickShowPassword = () => {
        setVerContraseña(!verContraseña);
    };

    // Función para manejar el inicio de sesión
    const handleLogin = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', {
                email: email,
                password: password
            });

            // Si la respuesta es exitosa, redirigimos al usuario
            if (response.data.success) {
                navigate('/home');
            } else {
                setError("Credenciales incorrectas");
            }
        } catch (err) {
            console.error("Error en el login:", err);
            setError("Hubo un problema al iniciar sesión");
        }
    };

    return (
        <section className="sectionSignIn">
            <div>
                <Typography variant="h1">3FT</Typography>
            </div>

            <div className="textoLogueo">
                <p>Login</p>
            </div>

            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '500px' } }}
                noValidate
                autoComplete="off"
                className='boxInput'
            >
                <TextField 
                    id="outlined-basic" 
                    label="Correo Electronico" 
                    variant="outlined" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Almacenamos el email
                />
                <TextField
                    id="outlined-password-input" 
                    label="Contraseña" 
                    variant="outlined" 
                    required 
                    type={verContraseña ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Almacenamos la contraseña
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleClickShowPassword} edge="end">
                                    {verContraseña ? <VisibilityOff /> : <Visibility />}
                                </IconButton> 
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>

            {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Mostrar mensaje de error si lo hay */}

            <div className="checkBoxLogin">
                <div className='boxCheck'>
                    <Checkbox {...label} defaultChecked />
                </div>
                <p>Recordame</p>
            </div>

            <Stack spacing={2} direction="row">
                <Button variant="contained" className='ingresarButton' onClick={handleLogin}>INGRESAR</Button>
            </Stack>

            <div className="questionsRoots">
                <ul>
                    <li onClick={() => navigate('/register')}>¿No tienes una cuenta todavía?</li>
                </ul>
            </div>

        </section>
    );
}

export default SignIn;
