import * as React from 'react';
import NavBar from '../components/navbar/NavBar';
import { useEffect, useState } from "react";
import axios from 'axios';
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'

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

    return(
        <main>
            <NavBar />

            <Typography variant="h2" className="principalTitle">INSTRUCTORS</Typography>

             <section className="infoGrids">
                <ul className="instructorTable">
                    <li>id</li>
                    {instructor && instructor.length > 0 && instructor.map((instructorObj, index) => (
                        <li key={instructorObj.id}>{instructorObj.id}</li>
                    ))}
                </ul>
                <ul className="instructorTable">
                    <li>Name</li>
                        {instructor && instructor.length > 0 && instructor.map((instructorObj, index) => (
                            <li key={instructorObj.id}>{instructorObj.name}</li>
                        ))}
                    </ul>
                <ul className="instructorTable">
                    <li>Lastname</li>
                        {instructor && instructor.length > 0 && instructor.map((instructorObj, index) => (
                            <li key={instructorObj.id}>{instructorObj.lastname}</li>
                        ))}
                    </ul>
            </section> 
                
            <div className='createInstructorButton'>
                <Button variant="contained" onClick={touch}>Create new instructor</Button>
            </div>
            
        </main>
    )}
