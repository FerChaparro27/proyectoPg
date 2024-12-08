import { textAlign } from "@mui/system"
import NavBar from "../components/navbar/NavBar"
import FormComponent from "./create_client"

import "./form_client.css"

export default function FormCreateClient(){
    return(
        <main>
            <NavBar/>
            <h1 className="title">Genera un nuevo cliente</h1>
            <FormComponent/>
        </main>
    )
}