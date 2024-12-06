import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./Register.css";

export default function Register() {
    const navigate = useNavigate();

    const touchRecover = () => {
        navigate('/');
    };

    const [activeSection, setActiveSection] = useState('A');
    const [email, setEmail] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [contraseña1, setContraseña1] = useState("");
    const [contraseña2, setContraseña2] = useState("");

    const handleNext = (nextSection) => {
        setActiveSection(nextSection);
    };

    const [verContraseña1, setVerContraseña1] = useState(false);
    const [verContraseña2, setVerContraseña2] = useState(false);

    const handleClickShowPassword1 = () => { 
        setVerContraseña1(!verContraseña1); 
    };

    const handleClickShowPassword2 = () => { 
        setVerContraseña2(!verContraseña2); 
    };

    const handleSubmit = () => {
        if (contraseña1 === contraseña2) {
            axios.post('http://127.0.0.1:8000/', {
                name: nombre,
                lastname: apellido,
                mail: email,
                passsword: contraseña1
            })
            .then(response => {
                console.log(response);
                handleNext('D');
            })
            .catch(error => {
                console.error("Hubo un error al crear la cuenta:", error);
            });
        } else {
            alert("Las contraseñas no coinciden.");
        }
    };

    return (
        <main className="mainRegister">
            {activeSection === 'A' && (
                <section className="registroA">
                    <div>
                        <Typography variant="h1">3FT</Typography>
                    </div>

                    <div className="textoRegistro">
                        <p><b>Crear cuenta</b></p>
                        <p>Ingrese su correo electronico para registrarse</p>
                    </div>

                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '500px' } }}
                        noValidate
                        autoComplete="off"
                        className='boxInput'>
                        <TextField 
                            id="registro-basic" 
                            label="Registrarse con correo" 
                            variant="outlined" 
                            required 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </Box>

                    <Button variant="contained" className='ingresarButton' onClick={() => handleNext('B')}>CONTINUAR</Button>
                </section>
            )}

            {activeSection === 'B' && (
                <section className="registroB">
                    <div>
                        <Typography variant="h1">3FT</Typography>
                    </div>

                    <div className="textoRegistro">
                        <p><b>Crear cuenta</b></p>
                    </div>

                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '500px' } }}
                        noValidate
                        autoComplete="off"
                        className='boxInput'>
                        <TextField 
                            id="registro-basic" 
                            label="nombre" 
                            variant="outlined" 
                            required 
                            value={nombre} 
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </Box>

                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '500px' } }}
                        noValidate
                        autoComplete="off"
                        className='boxInput'>
                        <TextField 
                            id="registro-basic" 
                            label="apellido" 
                            variant="outlined" 
                            required 
                            value={apellido} 
                            onChange={(e) => setApellido(e.target.value)}
                        />
                    </Box>

                    <Button variant="contained" className='ingresarButton' onClick={() => handleNext('C')}>CONTINUAR</Button>
                </section>
            )}

            {activeSection === 'C' && (
                <section className="registroC">
                    <div>
                        <Typography variant="h1">3FT</Typography>
                    </div>

                    <div className="textoRegistro">
                        <p><b>Crear cuenta</b></p>
                        <p>Ingrese su contraseña</p>
                    </div>

                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '500px' } }}
                        noValidate
                        autoComplete="off"
                        className='boxInput'>
                        <TextField 
                            id="registro-basic2" 
                            label="Ingrese su contraseña" 
                            variant="outlined" 
                            required 
                            type={verContraseña1 ? 'text' : 'password'} 
                            value={contraseña1}
                            onChange={(e) => setContraseña1(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleClickShowPassword1} edge="end">
                                            {verContraseña1 ? <VisibilityOff /> : <Visibility />}
                                        </IconButton> 
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField 
                            id="registro-basic3" 
                            label="Vuelva a ingresar su contraseña" 
                            variant="outlined" 
                            required 
                            type={verContraseña2 ? 'text' : 'password'} 
                            value={contraseña2}
                            onChange={(e) => setContraseña2(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleClickShowPassword2} edge="end">
                                            {verContraseña2 ? <VisibilityOff /> : <Visibility />}
                                        </IconButton> 
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>

                    <Button variant="contained" className='ingresarButton' onClick={handleSubmit}>CONFIRMAR</Button>

                    <div className="textoRegistro">
                        <p>Esto podría tardar varios minutos</p>
                    </div>
                </section>
            )}

            {activeSection === 'D' && (
                <section className="registroD">
                    <div>
                        <Typography variant="h1">3FT</Typography>
                    </div>

                    <div className="textoRegistro">
                        <p><b>Tu cuenta se ha creado con éxito</b></p>
                    </div>

                    <Button variant="contained" className='ingresarButton' onClick={touchRecover}>Volver al inicio</Button>
                </section>
            )}
        </main>
    );
}
