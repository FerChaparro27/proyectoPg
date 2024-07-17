import * as React from 'react';
import NavBar from '../components/navbar/NavBar';
import { useEffect, useState } from "react";
import axios from 'axios';
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'

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
                <ul className="clientTable">
                    <li>id</li>
                    {client && client.length > 0 && client.map((clientObj, index) => (
                        <li key={clientObj.id}>{clientObj.id}</li>
                    ))}
                </ul>
                <ul className="clientTable">
                    <li>Name</li>
                        {client && client.length > 0 && client.map((clientObj, index) => (
                            <li key={clientObj.id}>{clientObj.name}</li>
                        ))}
                    </ul>
                <ul className="clientTable">
                    <li>Lastname</li>
                        {client && client.length > 0 && client.map((clientObj, index) => (
                            <li key={clientObj.id}>{clientObj.lastname}</li>
                        ))}
                    </ul>
            </section> 
                
            <div className='createClientButton'>
                <Button variant="contained" onClick={touch}>Create new client</Button>
            </div>
            
        </main>
    )}
