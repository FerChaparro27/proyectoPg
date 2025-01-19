import React, { useState, useEffect } from 'react';
import { Container, TextField, Typography, Accordion, AccordionSummary, AccordionDetails, Grid, Paper, CircularProgress, Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavBar from '../components/navbar/NavBar';
import axios from 'axios';

function RoutinesByDayWithSearch() {
  const [clients, setClients] = useState([]);
  const [filteredClients, setFilteredClients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [newRoutine, setNewRoutine] = useState({ day: 'Lunes', name: '', details: '' });

  const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  useEffect(() => {
    const fetchClients = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://127.0.0.1:8000/clients/');
        const data = response.data;
        if (!Array.isArray(data)) throw new Error('La API no devolvió un array válido');

        const clientsWithDefaults = data.map((client) => {
          const organizedRoutines = daysOfWeek.reduce((acc, day) => {
            acc[day] = (client.routines || []).filter((routine) => routine.day === day);
            return acc;
          }, {});
          return { ...client, routines: organizedRoutines };
        });

        setClients(clientsWithDefaults);
        setFilteredClients(clientsWithDefaults);
      } catch (error) {
        console.error('Error al obtener los clientes:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const lowercasedQuery = searchQuery.toLowerCase();
      const filtered = clients.filter((client) =>
        `${client.name || ''} ${client.lastname || ''}`.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredClients(filtered);
    } else {
      setFilteredClients(clients);
    }
  }, [searchQuery, clients]);

  const handleDialogOpen = (client) => {
    setSelectedClient(client);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setSelectedClient(null);
    setNewRoutine({ day: 'Lunes', name: '', details: '' });
  };

  const handleAddRoutine = async () => {
    console.log('Datos que se enviarán:', {
      client: selectedClient.id,
      day: newRoutine.day,
      name: newRoutine.name,
      details: newRoutine.details,
    });
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/routine/', {
        client: selectedClient.id,
        day: newRoutine.day,
        name: newRoutine.name,
        details: newRoutine.details,
      });
      const addedRoutine = response.data;
  
      setClients((prevClients) =>
        prevClients.map((client) =>
          client.id === selectedClient.id
            ? {
                ...client,
                routines: {
                  ...client.routines,
                  [newRoutine.day]: [...(client.routines[newRoutine.day] || []), addedRoutine],
                },
              }
            : client
        )
      );
  
      setFilteredClients((prevClients) => [...prevClients]); // Actualizar el estado filtrado
      handleDialogClose();
    } catch (error) {
      console.error('Error al añadir rutina:', error);
    }
  };

  return (
    <Container>
      <NavBar />
      <Typography variant="h4" gutterBottom>
        Rutinas de Clientes por Día
      </Typography>
      <TextField
        label="Buscar cliente"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {error && <Typography color="error">{error}</Typography>}
      {loading ? (
        <CircularProgress />
      ) : filteredClients.length > 0 ? (
        filteredClients.map((client) => (
          <Accordion key={client.id}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                {client.name || 'Nombre Desconocido'} {client.lastname || ''}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                {daysOfWeek.map((day) => (
                  <Grid item xs={12} sm={6} md={4} key={day}>
                    <Paper
                      elevation={3}
                      style={{ padding: '10px', backgroundColor: '#f9f9f9', marginBottom: '10px' }}
                    >
                      <Typography variant="h6" align="center" style={{ fontWeight: 'bold', color: '#3f51b5' }}>
                        {day}
                      </Typography>
                      {client.routines[day]?.length > 0 ? (
                        client.routines[day].map((routine) => (
                          <Typography key={routine.id} variant="body2">
                            • {routine.name}: {routine.details}
                          </Typography>
                        ))
                      ) : (
                        <Typography variant="body2" color="textSecondary">
                          Sin rutinas
                        </Typography>
                      )}
                    </Paper>
                  </Grid>
                ))}
              </Grid>
              <Button variant="outlined" onClick={() => handleDialogOpen(client)} fullWidth>
                Añadir Rutina
              </Button>
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        <Typography variant="body2" color="textSecondary">
          No se encontraron clientes con ese nombre.
        </Typography>
      )}

      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Añadir Rutina</DialogTitle>
        <DialogContent>
          <Select
            fullWidth
            value={newRoutine.day}
            onChange={(e) => setNewRoutine((prev) => ({ ...prev, day: e.target.value }))}
          >
            {daysOfWeek.map((day) => (
              <MenuItem key={day} value={day}>
                {day}
              </MenuItem>
            ))}
          </Select>
          <TextField
            label="Nombre de la rutina"
            fullWidth
            margin="normal"
            value={newRoutine.name}
            onChange={(e) => setNewRoutine((prev) => ({ ...prev, name: e.target.value }))}
          />
          <TextField
            label="Detalles"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={newRoutine.details}
            onChange={(e) => setNewRoutine((prev) => ({ ...prev, details: e.target.value }))}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleAddRoutine} color="primary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default RoutinesByDayWithSearch;

