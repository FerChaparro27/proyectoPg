import React from "react"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import "./informationAbout.css"

export default function InformationAbout() {
    return(
        <Box className="contenedorInfo">
            <div className="divInfo">
                <p className="tituloInformacion">INFORMACION SOBRE</p>
                <p>El resumen es:  xxx</p>
                <p>El resumen es:  xxx</p>
                <p>El resumen es:  xxx</p>
            </div>
            <div className="botonInfo">
                <Button variant="contained" fullWidth>Contained</Button>
            </div>
            
        </Box>

    )
      
}