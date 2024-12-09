import NavBar from "../components/navbar/NavBar";
import { TextField, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./nuevaActividad.css";

export default function NuevaActivity() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    id: "null",
    name: "",
    description: "",
    age: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const url = "http://127.0.0.1:8000/activity/";

    try {
      const response = await axios.post(url, inputs);
      console.log("Response:", response.data);
      navigate("/activities");
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <main>
      <NavBar />
      <div className="all">
        <h2>Añadir Actividad</h2>
        <Box className="cajaFormulario">
          <div className="formularioTransaccion">
            <TextField
              required
              name="name"
              type="text"
              label="Actividad"
              value={inputs.name}
              onChange={handleChange}
            />
          </div>
          <div className="formularioTransaccion">
            <TextField
              required
              name="description"
              type="text"
              label="Descripción"
              value={inputs.description}
              onChange={handleChange}
            />
          </div>
          <div className="formularioTransaccion">
            <TextField
              required
              name="age"
              type="text"
              label="Edad recomendada"
              value={inputs.age}
              onChange={handleChange}
            />
          </div>
          <div className="formularioTransaccion">
            <Button variant="contained" onClick={handleSubmit}>
              Guardar actividad
            </Button>
          </div>
        </Box>
      </div>
    </main>
  );
}
