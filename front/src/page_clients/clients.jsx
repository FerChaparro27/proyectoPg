import * as React from 'react';
import NavBar from '../components/navbar/NavBar';
import { useEffect, useState } from "react";
import axios from 'axios';
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'
import ClientCard from './clientCard';

import "./clients.css"


export default function Clients(){
    const navigate = useNavigate();

    const touch = () => {
        navigate('/create_client')
    }

    const [client, setClient] = useState([]);

    const searchData = () => {
        return axios.get('http://127.0.0.1:8000/clients/')
            .then(response => setClient(response.data))
    }

    useEffect(() => {
        searchData();
    }, [])

    return(
        <main>
            <NavBar />

            <Typography variant="h2" className="principalTitle">CLIENTS</Typography>

            <section className="infoGrids">
                        {client && client.length > 0 && client.map((clientObj, index) => (
                <ClientCard key={clientObj.id} client={clientObj} />
                ))}
            </section> 
                
            <div className='createClientButton'>
                <Button variant="contained" onClick={touch}>Create new client</Button>
            </div>
            
        </main>
    )}
