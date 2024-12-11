import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import "./activityCard.css";

const ActividadCard = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);

  // Cargar actividades desde el servidor
  useEffect(() => {
    fetch("http://127.0.0.1:8000/activity/")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Abrir diálogo de confirmación
  const handleClickOpen = (activity) => {
    setSelectedActivity(activity);
    setOpen(true);
  };

  // Cerrar diálogo de confirmación
  const handleClose = () => {
    setSelectedActivity(null);
    setOpen(false);
  };

  // Confirmar eliminación de actividad
  const handleConfirmDelete = () => {
    if (!selectedActivity) return;

    axios.delete(`http://127.0.0.1:8000/activityRetrieve/${selectedActivity.id}`)
      .then(() => {
        // Actualizar el estado para eliminar la actividad eliminada
        setData((prevData) => prevData.filter((activity) => activity.id !== selectedActivity.id));
        handleClose(); // Cerrar el diálogo
      })
      .catch((error) => {
        console.error("There was an error deleting the activity!", error);
      });
  };

  return (
    <Box className="boxAct">
      {data?.map((activity) => (
        <Card key={activity.id} className='cardStyle'>
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
            <IconButton onClick={() => handleClickOpen(activity)}>
              <DeleteIcon />
            </IconButton>
          </CardContent>
        </Card>
      ))}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete {selectedActivity?.name}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={handleConfirmDelete} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ActividadCard;
