import React, { useState, useEffect } from 'react';
import { Container, TextField, Typography, Accordion, AccordionSummary, AccordionDetails, Grid, Paper, CircularProgress } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavBar from '../components/navbar/NavBar';

function RoutinesByDayWithSearch() {
  const [clients, setClients] = useState([]);
  const [filteredClients, setFilteredClients] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  useEffect(() => {
    const fetchClients = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://127.0.0.1:8000/clients/');
        if (!response.ok) throw new Error('Error al obtener los datos');
        const data = await response.json();
  
        // Log para ver la estructura de los datos de clientes
        console.log("Datos de clientes obtenidos:", data);
  
        // Asegúrate de que cada cliente tenga una propiedad routines organizada por día
        const clientsWithDefaults = data.map((client) => {
          // Organizar las rutinas por día
          const organizedRoutines = daysOfWeek.reduce((acc, day) => {
            acc[day] = client.routines.filter((routine) => routine.day === day);
            return acc;
          }, {});
  
          return {
            ...client,
            routines: organizedRoutines,
          };
        });
  
        setClients(clientsWithDefaults);
        setFilteredClients(clientsWithDefaults);
      } catch (error) {
        console.error("Error al obtener los clientes:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchClients();
  }, []);
  

  // Filtrar los clientes basados en la búsqueda
  useEffect(() => {
    if (searchQuery) {
      const lowercasedQuery = searchQuery.toLowerCase();
      const filtered = clients.filter(client =>
        `${client.name} ${client.lastname}`.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredClients(filtered);
    } else {
      setFilteredClients(clients);
    }
  }, [searchQuery, clients]);

  return (
    <Container>
      <NavBar />
      <Typography variant="h4" gutterBottom>
        Rutinas de Clientes por Día
      </Typography>
      <TextField
        label="Buscar cliente"
        aria-label="Buscar cliente"
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
              <Typography>{client.name} {client.lastname}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                {daysOfWeek.map((day) => (
                  <Grid item xs={12} sm={6} md={4} key={day}>
                    <Paper elevation={3} style={{ padding: '10px', backgroundColor: '#f9f9f9', marginBottom: '10px' }}>
                      <Typography variant="h6" align="center" style={{ fontWeight: 'bold', color: '#3f51b5' }}>
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
