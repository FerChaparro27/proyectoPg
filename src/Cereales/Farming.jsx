import React from "react";
import NavBar from "../components/navbar/NavBar.jsx";
import DataSelect from "../components/dataSelect/dataSelect.jsx"
import InformationAbout from "../components/informationAbout/information.jsx"
import "./Farming.css";

function Farming() {

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

export default Farming;