import NavBar from "../components/navbar/NavBar";
import { TextField, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"; // Importa axios
import "./nuevaActividad.css";

export default function NuevaActivity() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: "",
    activity: "",
    description: "",
    age: "",
  });

  const [image, setImage] = useState(null); // Estado para la imagen
  const [preview, setPreview] = useState(""); // Estado para la previsualización
  const [responseMessage, setResponseMessage] = useState(""); // Mensaje de respuesta

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Genera una URL temporal para previsualizar
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://127.0.0.1:8000/activity";

    // Usa FormData para enviar datos del formulario y archivo
    const data = new FormData();
    data.append("activity", formData.activity);
    data.append("description", formData.description);
    data.append("age", formData.age);
    if (image) {
      data.append("image", image); // Añade la imagen solo si existe
    }

    try {
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "multipart/form-data", // Importante para subir archivos
        },
      });
      setResponseMessage("Datos enviados exitosamente");
      console.log("Respuesta:", response.data);
      navigate("/activities");
    } catch (error) {
      setResponseMessage("Error al enviar los datos");
      console.error("Error:", error);
    }
  };

  return (
    <main>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <div className="all">
          <h2>Añadir Actividad</h2>
          <Box className="cajaFormulario">
            <div className="formularioTransaccion">
              <TextField
                required
                name="activity"
                type="text"
                label="Actividad"
                value={formData.activity} // Usa el estado correcto
                onChange={handleChange}
              />
            </div>
            <div className="formularioTransaccion">
              <TextField
                required
                name="description"
                type="text"
                label="Descripción"
                value={formData.description} // Usa el estado correcto
                onChange={handleChange}
              />
            </div>
            <div className="formularioTransaccion">
              <TextField
                
                type="file"
                onChange={handleImageChange}
                name="image"
              />
              {preview && <img src={preview} alt="Preview" style={{ maxWidth: "110px", marginTop: "10px" }} />}
            </div>
            <div className="formularioTransaccion">
              <TextField
                required
                name="age"
                type="text"
                label="Edad recomendada"
                onChange={handleChange}
                value={formData.age} // Usa el estado correcto
              />
            </div>
            <div className="formularioTransaccion">
              <Button variant="contained" type="submit">
                Guardar actividad
              </Button>
            </div>
            {responseMessage && <p>{responseMessage}</p>}
          </Box>
        </div>
      </form>
    </main>
  );
}
