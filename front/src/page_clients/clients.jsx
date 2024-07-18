import React, { useState, useEffect } from 'react';
import NavBar from '../components/navbar/NavBar';
import axios from 'axios';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ClientCard from './clientCard';
import './clients.css';

export default function Clients() {
    const navigate = useNavigate();

    const touch = () => {
        navigate('/create_client');
    };

    const [client, setClient] = useState([]);

    const searchData = () => {
        return axios.get('http://127.0.0.1:8000/clients/')
            .then(response => setClient(response.data));
    };

    useEffect(() => {
        searchData();
    }, []);

    const handleDelete = (id) => {
        setClient(client.filter(clientObj => clientObj.id !== id));
    };

    return (
        <main>
            <NavBar />
            <Typography variant="h2" className="principalTitle">CLIENTES</Typography>
            <section className="infoGrids">
                {client && client.length > 0 && client.map((clientObj, index) => (
                    <ClientCard key={clientObj.id} client={clientObj} onDelete={handleDelete} />
                ))}
            </section>
            <div className="createClientButton">
                <Button variant="contained" onClick={touch}>Create new client</Button>
            </div>
        </main>
    );
}
