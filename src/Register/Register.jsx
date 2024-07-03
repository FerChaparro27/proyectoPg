import { Typography } from "@mui/material"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "./Register.css"

export default function Register() {

    const navigate = useNavigate()

    const touchRecover = () => {
        navigate('/')
    }

    const [activeSection, setActiveSection] = useState('A');

    const handleNext = (nextSection) => {
        setActiveSection(nextSection);
    };

    const [verContraseña1, setVerContraseña1] = useState(false);
    const [verContraseña2, setVerContraseña2]= useState(false);
    
    const handleClickShowPassword1 = () => { 
        setVerContraseña1(!verContraseña1); 
    };

    const handleClickShowPassword2 = () => { 
        setVerContraseña2(!verContraseña2); 
    };
    
    return (
        <main className="mainRegister">
            {activeSection === 'A' && (
                <section ClassName="registroA">
                    <div>
                        <Typography variant="h1">3FT</Typography>
                    </div>

                    <div className="textoRegistro">
                        <p><b>Crear cuenta</b></p>
                        <p>Ingrese su correo electronico para registrarse</p>
                    </div>

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '500px' },
                        }}
                        noValidate
                        autoComplete="off"
                        className='boxInput'>
                        <TextField id="registro-basic" label="Registrarse con correo" variant="outlined" required />
                    </Box>

                   
                    {/* Dentro del button, el onclick se encarga de modificar el usestate del active section */}
                    <Button variant="contained" className='ingresarButton' onClick={() => handleNext('B')}>REGISTRARSE</Button>
                

                </section>
            )}

            {activeSection === 'B' && (
                <section ClassName="registroB">
                    <div>
                        <Typography variant="h1">3FT</Typography>
                    </div>

                    <div className="textoRegistro">
                        <p><b>Crear cuenta</b></p>
                        <p>Ingrese su contraseña</p>
                    </div>

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '500px' },
                        }}
                        noValidate
                        autoComplete="off"
                        className='boxInput'>
                        <TextField id="registro-basic2" label="Ingrese su contraseña" variant="outlined" required type={verContraseña1? 'text' : 'password'} 
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleClickShowPassword1}
                                        edge="end">
                                        {verContraseña1 ? <VisibilityOff /> : <Visibility />}
                                    </IconButton> 
                                </InputAdornment>
                            ),
                        }}
                        />
                        <TextField id="registro-basic3" label="Vuelva a ingresar su contraseña" variant="outlined" required type={verContraseña2 ? 'text' : 'password'} 
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleClickShowPassword2}
                                        edge="end">
                                        {verContraseña2 ? <VisibilityOff /> : <Visibility />}
                                    </IconButton> 
                                </InputAdornment>
                            ),
                        }}
                        />
                    </Box>

                
                    {/* Dentro del button, el onclick se encarga de modificar el usestate del active section */}
                    <Button variant="contained" className='ingresarButton' onClick={() => handleNext('C')}>CONFIRMAR</Button>
                

                    <div className="textoRegistro">
                        <p>Esto podría tardar varios minutos</p>
                    </div>
                </section>
            )}

            {activeSection === 'C' && (
                <section ClassName="registroC">
                    <div>
                        <Typography variant="h1">3FT</Typography>
                    </div>

                    <div className="textoRegistro">
                        <p><b>Tu cuenta se ha creado con éxito y<br /> hemos enviado un correo de verificación a<br /> tu Email</b></p>
                    </div>

                
                    {/* Dentro del button, el onclick se encarga de modificar el usestate del active section */}
                    <Button variant="contained" className='ingresarButton' onClick={touchRecover}>Volver al inicio</Button>
                    

                </section>
            )}

        </main>
    )
}