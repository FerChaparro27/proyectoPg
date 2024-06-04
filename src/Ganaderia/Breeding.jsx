import React from "react";
import NavBar from "../components/navbar/NavBar";
import DataSelect from "../components/dataSelect/dataSelect"
import "./Breeding.css";
import InformationAbout from "../components/informationAbout/information.jsx"


function Breeding() {

    return(
        <main>
            <NavBar/>
            <div className="contenedor">
                <DataSelect/>
                <InformationAbout/>
            </div>
        </main>
    )
}

export default Breeding;