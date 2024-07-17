import NavBar from "../components/navbar/NavBar"
import FormComponent from "./create_instructor"

export default function FormCreateInstructor(){
    return(
        <main>
            <NavBar/>
            <h1>Genera un nuevo instructor</h1>
            <FormComponent/>
        </main>
    )
}