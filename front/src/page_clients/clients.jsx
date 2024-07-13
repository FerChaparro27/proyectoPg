import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import NavBar from '../components/navbar/NavBar';

import "./clients.css"

export default function Clients(){
    return(
        <main>
            <NavBar />

            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Box>
        </main> 
    )
}