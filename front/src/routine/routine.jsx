import React, { useState, useEffect } from 'react';
import { Container, TextField, Typography, Accordion, AccordionSummary, AccordionDetails, Grid, Paper, CircularProgress } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function RoutinesByDayWithSearch() {
  const [clients, setClients] = useState([]);
  const [filteredClients, setFilteredClients] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  // Obtener clientes desde la API
  useEffect(() => {
    const fetchClients = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://tu-api.com/clients'); // Reemplaza con tu endpoint real
        const data = await response.json();
        setClients(data);
        setFilteredClients(data); // Inicialmente, todos los clientes están visibles
      } catch (error) {
        console.error("Error al obtener los clientes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  // Actualizar la lista filtrada según la búsqueda
  useEffect(() => {
    const results = clients.filter((client) =>
      client.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredClients(results);
  }, [searchQuery, clients]);

  return (
    <Container>
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
      {loading ? (
        <CircularProgress />
      ) : filteredClients.length > 0 ? (
        filteredClients.map((client) => (
          <Accordion key={client.id}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{client.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                {daysOfWeek.map((day) => (
                  <Grid item xs={12} sm={6} md={4} key={day}>
                    <Paper elevation={3} style={{ padding: '10px' }}>
                      <Typography variant="h6" align="center">
                        {day}
                      </Typography>
                      {client.routines[day] && client.routines[day].length > 0 ? (
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
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        <Typography variant="body2" color="textSecondary">
          No se encontraron clientes con ese nombre.
        </Typography>
      )}
    </Container>
  );
}

export default RoutinesByDayWithSearch;
