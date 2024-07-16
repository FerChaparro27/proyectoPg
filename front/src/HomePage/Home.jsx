import NavBar from "../components/navbar/NavBar"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"
import "./Home.css"

function Home() {

    const navigate = useNavigate()

        const IrClientes= () => {
         navigate('/Clientes')
     }
         const IrActividades= () => {
         navigate('/Actividades')
     }

        const IrRutinas= () => {
        navigate('/Rutinas')
    }
        const IrProfesores= () => {
        navigate('/Profesores')
    }
        const IrTransacciones= () => {
        navigate('/Transacciones')
    }
        
    return (
        
        <main>
            <NavBar />

            {<section className="sectionHome">

                <article>
                    <div>
                        <h1 className="Bienvenida">Hola usuario</h1>
                    </div>

                    <div>
                        <h1 className="Eleccion">Seleccione el area deseada</h1>
                    </div>
                </article>

                <div className="Botones">
                <Stack spacing={2} direction="column">
                        <Button variant="contained" className='ClientesButton' onClick={IrClientes} >CLIENTES</Button>
                        <Button variant="contained" className='ProfesoresButton' onClick={IrProfesores}>PROFESORES</Button>
                    <div className="ActividadesRutinasContainer">
                            <Button variant="contained" className='ActividadesButton' onClick={IrActividades}>ACTIVIDADES</Button>
                            <Button variant="contained" className='RutinasButton' onClick={IrRutinas}>RUTINAS</Button>
                    </div>
                        <Button variant="contained" className='TransaccionesButton' onClick={IrTransacciones}>TRANSACCIONES</Button>
                </Stack>
                </div> 

            </section> }

        </main>
    );
}

export default Home;
