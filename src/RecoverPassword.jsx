import { Typography } from "@mui/material"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
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

                    <Stack spacing={2} direction="row">
                        {/* Dentro del button, el onclick se encarga de modificar el usestate del active section */}
                        <Button variant="contained" className='ingresarButton' onClick={() => handleNext('B')}>ENVIAR</Button>
                    </Stack>
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
                        className='boxInput'>
                        <TextField id="outlined-basic" label="Codígo de verificación" variant="outlined" required />
                    </Box>

                    <Stack spacing={2} direction="row">
                        <Button variant="contained" className='ingresarButton' onClick={() => handleNext('C')}>CONFIRMAR</Button>
                    </Stack>
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
                        <TextField id="outlined-basic" label="Contraseña" variant="outlined" required type="password" />
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
                        <TextField id="outlined-basic" label="Contraseña" variant="outlined" required type="password" />
                    </Box>

                    <Stack spacing={2} direction="row">
                        <Button variant="contained" className='ingresarButton' onClick={() => handleNext('D')}>CONFIRMAR</Button>
                    </Stack>

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

                    <Stack spacing={2} direction="row">
                        <Button variant="contained" className='ingresarButton' onClick={touchRecover}>INICIAR SESIÓN</Button>
                    </Stack>

                </section>
            )}
        </main>
    )
}