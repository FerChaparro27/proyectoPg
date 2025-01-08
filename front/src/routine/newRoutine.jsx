import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, MenuItem, Select, FormControl, InputLabel, Grid, CircularProgress } from '@mui/material';

function AddRoutine() {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [routineName, setRoutineName] = useState('');
  const [routineDetails, setRoutineDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  // Obtener clientes desde la API
  useEffect(() => {
    const fetchClients = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://127.0.0.1:8000/clients/'); // Reemplaza con tu endpoint real
        const data = await response.json();
        setClients(data);
      } catch (error) {
        console.error('Error al obtener los clientes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedClient || !selectedDay || !routineName) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const newRoutine = {
      clientId: selectedClient,
      day: selectedDay,
      name: routineName,
      details: routineDetails,
    };

    try {
      setLoading(true);
      const response = await fetch('http://127.0.0.1:8000/routine/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRoutine),
      });

      if (!response.ok) {
        throw new Error('Error al guardar la rutina');
      }

      setSuccessMessage('¡Rutina agregada exitosamente!');
      setRoutineName('');
      setRoutineDetails('');
      setSelectedDay('');
      setSelectedClient('');
    } catch (error) {
      console.error('Error al agregar la rutina:', error);
      alert('Hubo un problema al agregar la rutina.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Agregar Rutina para Cliente
      </Typography>
      {loading && <CircularProgress />}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {/* Seleccionar Cliente */}
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Seleccionar Cliente</InputLabel>
              <Select
                value={selectedClient}
                onChange={(e) => setSelectedClient(e.target.value)}
              >
                {clients.map((client) => (
                  <MenuItem key={client.id} value={client.id}>
                    {client.name} {client.lastname}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Seleccionar Día */}
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Seleccionar Día</InputLabel>
              <Select
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
              >
                {daysOfWeek.map((day) => (
                  <MenuItem key={day} value={day}>
                    {day}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Nombre de la Rutina */}
          <Grid item xs={12}>
            <TextField
              label="Nombre de la Rutina"
              fullWidth
              value={routineName}
              onChange={(e) => setRoutineName(e.target.value)}
            />
          </Grid>

          {/* Detalles de la Rutina */}
          <Grid item xs={12}>
            <TextField
              label="Detalles de la Rutina (Opcional)"
              fullWidth
              multiline
              rows={4}
              value={routineDetails}
              onChange={(e) => setRoutineDetails(e.target.value)}
            />
          </Grid>

          {/* Botón de Enviar */}
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Guardar Rutina
            </Button>
          </Grid>
        </Grid>
      </form>

      {/* Mensaje de éxito */}
      {successMessage && (
        <Typography variant="body1" color="success" style={{ marginTop: '20px' }}>
          {successMessage}
        </Typography>
      )}
    </Container>
  );
}

export default AddRoutine;
