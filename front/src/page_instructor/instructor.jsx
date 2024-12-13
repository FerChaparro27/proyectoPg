import * as React from 'react';
import NavBar from '../components/navbar/NavBar';
import { useEffect, useState } from "react";
import axios from 'axios';
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'
import InstructorCard from './instructorCard';

import "./instructor.css"


export default function Instructor(){
    const navigate = useNavigate();

    const touch = () => {
        navigate('/create_instructor')
    }

    const [instructor, setInstructor] = useState([]);

    const searchData = () => {
        return axios.get('http://127.0.0.1:8000/instructor/')
            .then(response => setInstructor(response.data))
    }

    useEffect(() => {
        searchData();
    }, [])

    const handleDelete = (id) => {
        setInstructor(instructor.filter(instructorObj => instructorObj.id !== id));
    };

    return(
        <main>
            <NavBar />

            <div className='createInstructorButton'>
                <Button variant="contained" onClick={touch} style={{width:'95%', marginBottom:'20px'}}>Añadir profesor</Button>
            </div>

            <Typography variant="h2" className="principalTitle">Profesores</Typography>

            <section className="infoGrids">
                        {instructor && instructor.length > 0 && instructor.map((instructorObj, index) => (
                <InstructorCard key={instructorObj.id} instructor={instructorObj} onDelete={handleDelete}/>
                ))}
            </section> 
        </main>
    )}
