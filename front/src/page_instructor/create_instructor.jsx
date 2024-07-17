import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormComponent = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    dni: '',
    name: '',
    lastname: '',
    mail:'',
    phone_number: '',
    date_birth:'',
    location: '',
    gender:'Masculino'
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'http://127.0.0.1:8000/instructor/';

    console.log(formData);

    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'application/json',
        }});
      setResponseMessage('Datos enviados exitosamente');
      console.log('Respuesta:', response.data);
      navigate('/clients');
    } catch (error) {
      setResponseMessage('Error al enviar los datos');
      console.error('Error:', error);
    }
  };

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>dni:</label>
          <input
            type="text"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>lastname:</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>mail:</label>
          <input
            type="text"
            name="mail"
            value={formData.mail}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>phone:</label>
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>dateBirth:</label>
          <input
            type="date"
            name="date_birth"
            value={formData.date_birth}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>localidad:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>genero:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Indefinido">Prefiero no decir</option>
          </select>
        </div>
        <button type="submit">Enviar</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  )
}

export default FormComponent;
