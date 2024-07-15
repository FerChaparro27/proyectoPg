import NavBar from "../components/navbar/NavBar"
import FormComponent from "./create_client"

export default function FormCreateClient(){
    return(
        <main>
            <NavBar/>
            <h1>Genera un nuevo cliente</h1>
            <FormComponent/>
        </main>
    )
}