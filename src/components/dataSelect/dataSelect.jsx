import React from "react"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import './dataSelect.css'

export default function DataSelect() {
    const [campo, setCampo] = React.useState('');
      
    const handleChange = (event) => {
        setCampo(event.target.value);
    }
    return(
        <Box className="contenedorSelect">
            <div>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Campo</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={campo}
                    label="Campo"
                    onChange={handleChange}
                    >
                    <MenuItem value={1}>Campo 1</MenuItem>
                    <MenuItem value={2}>Campo 2</MenuItem>
                    <MenuItem value={3}>Campo 3</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            </div>
        </Box>
    )
}

