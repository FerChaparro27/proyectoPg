import NavBar from "../components/navbar/NavBar"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


import "./Home.css"

function Home() {

    return (

        <main>
            <NavBar />

            <section className="sectionHome">

                <article>
                    <div>
                        <h1 className="Bienvenida">Bienvenido usuario</h1>
                    </div>

                    <div>
                        <h1 className="Eleccion">Seleccione el area a trabajar</h1>
                    </div>
                </article>

                <div className="Botones">
                    <Stack spacing={10} direction="row">
                        <Button variant="contained" className='GanaderiaButton' >GANADERIA</Button>
                        <Button variant="contained" className='AgriculturaButton' >AGRICULTURA</Button>
                    </Stack>
                </div> 

            </section>

        </main>
    );
}

export default Home;
