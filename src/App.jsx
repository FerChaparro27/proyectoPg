import react from "react";
import LockIcon from '@mui/icons-material/Lock';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import "./App.css"

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const App = () => {
    return (
        <section>

            <div className="logoBloqueo">
                <LockIcon />
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
                <Button variant="contained" className='ingresarButton'>INGRESAR</Button>
            </Stack>

            <div className="questionsRoots">
                <ul>
                    <li>¿Olvidaste tu contraseña?</li>
                    <li>¿No tienes una cuenta todavia?</li>
                </ul>
            </div>

        </section>
    );
}

export default App;