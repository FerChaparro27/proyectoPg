import NavBar from "../components/navbar/NavBar"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"
import "./Home.css"

function Home() {

    const navigate = useNavigate()

        const GoClients= () => {
         navigate('/clients')
     }
         const GoActivities= () => {
         navigate('/Activities')
     }

        const GoRoutines= () => {
        navigate('/Routines')
    }
        const GoProfessors= () => {
        navigate('/Professors')
    }
        const GoTransactions= () => {
        navigate('/Transaction')
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
                        <Button variant="contained" className='ClientsButton' onClick={GoClients} >CLIENTES</Button>
                        <Button variant="contained" className='ProfessorsButton' onClick={GoProfessors}>PROFESORES</Button>
                    <div className="ActivitiesRoutinesContainer">
                            <Button variant="contained" className='ActivitiesButton' onClick={GoActivities}>ACTIVIDADES</Button>
                            <Button variant="contained" className='RoutinesButton' onClick={GoRoutines}>RUTINAS</Button>
                    </div>
                        <Button variant="contained" className='TransactionsButton' onClick={GoTransactions}>TRANSACCIONES</Button>
                </Stack>
                </div> 

            </section> }

        </main>
    );
}

export default Home;
