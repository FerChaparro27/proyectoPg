import NavBar from "../components/navbar/NavBar"
import FormComponent from "./create_instructor"

import "./form_instructor.css"

export default function FormCreateInstructor(){
    return(
        <main>
            <NavBar/>
            <h1>Genera un nuevo profesor</h1>
            <FormComponent/>
        </main>
    )
}