import NavBar from "../components/navbar/NavBar"
import * as React from 'react';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom"
import "./Home.css"

function Home() {

    const navigate = useNavigate()

    const GoClients = () => {
        navigate('/clients')
    }
    const GoActivities = () => {
        navigate('/Activities')
    }

    const GoRoutines = () => {
        navigate('/Routines')
    }
    const GoProfessors = () => {
        navigate('/Instructor')
    }
    const GoTransactions = () => {
        navigate('/Transaction')
    }

    return (

        <main>
            <NavBar />

            <section className="sectionHome">
                <Button variant="contained" className='ClientsButton' onClick={GoClients}>CLIENTES</Button>
                <Button variant="contained" className='ProfessorsButton' onClick={GoProfessors}>PROFESORES</Button>
                <Button variant="contained" className='ActivitiesButton' onClick={GoActivities}>ACTIVIDADES</Button>
                <Button variant="contained" className='RoutinesButton' onClick={GoRoutines}>RUTINAS</Button>
                <Button variant="contained" className='TransactionsButton' onClick={GoTransactions}>TRANSACCIONES</Button>
                <div className="text">
                    <p>The app for your gym</p>
                </div>
            </section>

        </main>
    );
}

export default Home;
