import NavBar from "../components/navbar/NavBar"
import ActividadCard from "../components/activityCard/activityCard"
import { useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import "./activities.css"

export default function Activities(){
    const navigate = useNavigate()

    const IrNuevaActividad= () => {
        navigate('/add_activity')
    }

    return(
        <main>
            <NavBar/>
            <Box className="boton_actividades">
                <Button variant="contained" onClick={IrNuevaActividad} style={{width:'95%', marginBottom:'20px'}}>Añadir nueva actividad</Button>
            </Box>
            <ActividadCard
                titulo="Yoga"
                descripcion="Una actividad para mejorar la flexibilidad y reducir el estrés."
                imagen="https://via.placeholder.com/300"
                edadRecomendada="18+"
            />
        </main>
        
    )
}