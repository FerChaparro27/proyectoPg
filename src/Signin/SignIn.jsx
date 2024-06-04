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
import "./SignIn.css";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const SignIn = () => {
    const navigate = useNavigate(); // Esto es un hook que necesita de un elemento funcional
    
    const touch = () => {
        navigate('/Home');
    }

    const touchRecover = () => {
        navigate('/RecoverPassword');
    }

    const touchRegister = () => {
        navigate('/Register');
    }
  const [verContraseña, setVerContraseña] = useState(false); // Estado para manejar si ver la contraseña o no 
    const handleClickShowPassword = () => { //Funcion para al hacer click cambie el estado
        setVerContraseña(!verContraseña); 
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
                sx={{
                    '& > :not(style)': { m: 1, width: '500px' },
                }}
                noValidate
                autoComplete="off"
                className='boxInput'>
                <TextField id="outlined-basic" label="Correo Electronico" variant="outlined" required />
                <TextField
                    id="outlined-password-input" label="Contraseña" variant="outlined" required type={verContraseña ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClickShowPassword}
                                    edge="end">
                                    {verContraseña ? <VisibilityOff /> : <Visibility />}
                                </IconButton> 
                            </InputAdornment> //Funcion de mui para agregar iconos adentro de un input
                        ),
                    }}
                />
            </Box>

            <div className="checkBoxLogin">
                <div className='boxCheck'>
                    <Checkbox {...label} defaultChecked />
                </div>
                <p>Recordame</p>
            </div>

            <Stack spacing={2} direction="row">
                <Button variant="contained" className='ingresarButton' onClick={touch}>INGRESAR</Button>
            </Stack>

            <div className="questionsRoots">
                <ul>
                    <li onClick={touchRecover}>¿Olvidaste tu contraseña?</li>
                    <li onClick={touchRegister}>¿No tienes una cuenta todavía?</li>
                </ul>
            </div>

        </section>
    );
}

export default SignIn;
