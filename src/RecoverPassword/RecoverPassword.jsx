import { Typography } from "@mui/material"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "./Recover.css"

export default function RecoverPassword() {

    const navigate = useNavigate()

    const touchRecover = () => {
        navigate('/')
    }

    const [activeSection, setActiveSection] = useState('A');

    const handleNext = (nextSection) => {
        setActiveSection(nextSection);
    };
    
    const [verContraseña1, setVerContraseña1] = useState(false);
    const [verContraseña2, setVerContraseña2] = useState(false);
    
    const handleClickShowPassword1 = () => { 
        setVerContraseña1(!verContraseña1); 
    }
        
    const handleClickShowPassword2 = () => { 
        setVerContraseña2(!verContraseña2); 
    }
    return (
        <main className="mainRecuperacion">
            {/* Operador logico. Lo que dice es "Si * es igual a A entonces lo verifica como true y sigue" */}
            {activeSection === 'A' && (
                <section className="recuperacionA">
                    <div>
                        <Typography variant="h1">3FT</Typography>
                    </div>

                    <div className="textoLogueo">
                        <p><b>Recuperación de contraseña</b></p>
                        <p>Ingrese su correo electronico y enviaremos<br /> un codígo de verificación</p>
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
                    </Box>


                    {/* Dentro del button, el onclick se encarga de modificar el usestate del active section */}
                    <Button variant="contained" className='nextButton' onClick={() => handleNext('B')}>ENVIAR</Button>

                </section>
            )}

            {activeSection === 'B' && (
                <section className="recuperacionB">
                    <div>
                        <Typography variant="h1">3FT</Typography>
                    </div>

                    <div className="textoLogueo">
                        <p><b>Ingrese el codígo</b></p>
                        <p>Enviamos un codigo de verificación a su casilla de correo</p>
                    </div>

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '500px' },
                        }}
                        noValidate
                        autoComplete="off"
                        className='boxInputSectionB'>
                        <TextField id="outlined-basic" label="Codígo de verificación" variant="outlined" required />
                    </Box>


                    <Button variant="contained" className='nextButton' onClick={() => handleNext('C')}>CONFIRMAR</Button>

                </section>
            )}

            {activeSection === 'C' && (
                <section className="recuperacionC">
                    <div>
                        <Typography variant="h1">3FT</Typography>
                    </div>

                    <div className="textoLogueo">
                        <p><b>Ingrese su nueva contraseña</b></p>
                    </div>

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '500px' },
                        }}
                        noValidate
                        autoComplete="off"
                        className='boxInput'>
                        <TextField id="outlined-basic" label="Contraseña" variant="outlined" required type={verContraseña1 ? 'text' : 'password'}
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
                    </Box>

                    <div className="textoLogueo">
                        <p><b>Confirme su nueva contraseña</b></p>
                    </div>

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '500px' },
                        }}
                        noValidate
                        autoComplete="off"
                        className='boxInput'>
                        <TextField id="outlined-basic" label="Contraseña" variant="outlined" required type={verContraseña2 ? 'text' : 'password'} 
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


                    <Button variant="contained" className='nextButton' onClick={() => handleNext('D')}>CONFIRMAR</Button>


                </section>
            )}

            {activeSection === 'D' && (
                <section className="recuperacionD">
                    <div>
                        <Typography variant="h1">3FT</Typography>
                    </div>

                    <div className="textoLogueo">
                        <p><b>Su contraseña ha sido restablecida</b></p>
                    </div>


                    <Button variant="contained" className='nextButton' onClick={touchRecover}>INICIAR SESIÓN</Button>


                </section>
            )}
        </main>
    )
}