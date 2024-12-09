import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import "./activityCard.css"

const ActividadCard = ({ titulo, descripcion, imagen, edadRecomendada }) => {
  // Estado para almacenar los títulos de las actividades
  const [titulosActividades, setTitulosActividades] = useState([]);

  // Función para agregar el título de la actividad
  const agregarActividad = () => {
    setTitulosActividades((prev) => [...prev, titulo]);
  };

  const [data, setData] = useState(null);

  useEffect(()=>{
    fetch("http://127.0.0.1:8000/activity/")
    .then ((response) => response.json())
    .then ((data) => setData(data));

  },[]
)

  return (
    <Box className="boxAct">

    {data?.map((activity) => (
    <Card key={activity.id}  className='cardStyle'>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {activity.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {activity.description}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 1 }}>
          Edad recomendada: {activity.age}
        </Typography>
      </CardContent>
    </Card>
  ))}
      <Card>
        {/* <CardMedia
          component="img"
          height="140"
          image={imagen}
          alt={titulo}
        /> */}
      </Card>
    </Box>
  );
};

export default ActividadCard;
