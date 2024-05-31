import { Typography } from "@mui/material"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Register (){

    const navigate = useNavigate()

    const touchRegister=()=>{
        navigate('/')
    }

    const [activeSection, setActiveSection] = useState('A');

    const handleNext = (nextSection) => {
        setActiveSection(nextSection);
    };
    
    return(
        <section>
            {activeSection === 'A' && (
            <section ClassName="registroA">
                <div>
                    <Typography variant="h1">3FT</Typography>
                </div>

                <div className="textoRegistro">
                    <p><b>Crear cuenta</b></p>
                    <p>Ingrese su correo electronico para regsitrarse</p>
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

                <Stack spacing={2} direction="row">
                    {/* Dentro del button, el onclick se encarga de modificar el usestate del active section */}
                    <Button variant="contained" className='ingresarButton' onClick={() => handleNext('B')}>REGISTRARSE</Button>
                </Stack>

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
                    <TextField id="registro-basic2" label="Ingrese su contraseña" variant="outlined" required />
                    <TextField id="registro-basic3" label="Vuelva a ingresar su contraseña" variant="outlined" required type="password" />
                </Box>

                <Stack spacing={2} direction="row">
                    {/* Dentro del button, el onclick se encarga de modificar el usestate del active section */}
                    <Button variant="contained" className='ingresarButton' onClick={() => handleNext('C')}>CONFIRMAR</Button>
                </Stack>

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
                    <p><b>Tu cuenta se ha creado con éxito y hemos enviado un correo de verificación a tu Email</b></p>
                </div>
                
                <Stack spacing={2} direction="row">
                    {/* Dentro del button, el onclick se encarga de modificar el usestate del active section */}
                    <Button variant="contained" className='ingresarButton' onClick={() => handleNext('touchRegister')}>Volver al inicio</Button>
                </Stack>

            </section>
            )}

        </section>
    )
}