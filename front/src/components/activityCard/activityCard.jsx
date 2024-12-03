import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

const ActividadCard = ({ titulo, descripcion, imagen, edadRecomendada }) => {
  // Estado para almacenar los títulos de las actividades
  const [titulosActividades, setTitulosActividades] = useState([]);

  // Función para agregar el título de la actividad
  const agregarActividad = () => {
    setTitulosActividades((prev) => [...prev, titulo]);
  };

  return (
    <Box sx={{ maxWidth: 345, margin: 'auto', mt: 2 }}>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={imagen}
          alt={titulo}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {descripcion}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 1 }}>
            Edad recomendada: {edadRecomendada}
          </Typography>
        </CardContent>
      </Card>
      {/* Mostrar los títulos almacenados */}
      {titulosActividades.length > 0 && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">Actividades Guardadas:</Typography>
          <ul>
            {titulosActividades.map((actividad, index) => (
              <li key={index}>{actividad}</li>
            ))}
          </ul>
        </Box>
      )}
    </Box>
  );
};

export default ActividadCard;
