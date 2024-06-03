import react from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import { Typography } from "@mui/material";

import "./SignIn.css"

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const SignIn = () => {

    const navigate = useNavigate()  //Esto es un hook que necesita de un elemento funcional
    //x eso se pone adentro de la app

    const touch = () => {
        navigate('/Home')
    }

    const touchRecover = () => {
        navigate('/RecoverPassword')
    }

    const touchRegister = () => {
        navigate('/Register')
    }

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
                <TextField id="outlined-basic" label="Contraseña" variant="outlined" required type="password" />
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
                    <li onClick={touchRegister}>¿No tienes una cuenta todavia?</li>
                </ul>
            </div>

        </section>
    );
}

export default SignIn;