import { AppBar, Button, Drawer, IconButton, Toolbar, Typography, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const navLinks = [
    {
        title: 'Clientes', path: "/clients"
    },
    {
        title: 'Profesores', path: "/instructor"
    },
    {
        title: 'Actividades', path: "/activities"
    },
    {
        title: 'Rutinas', path: "/routines"
    },
    {
        title: 'Transacciones', path: "/transaction"
    },
    {
        title: 'Mi perfil', path: "/my-account"
    },
    {
        title: 'Cerrar sesión', path: "/" // No tiene una ruta, solo para activar el diálogo
    }
];

export default function NavBar() {
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false); // Controla la apertura del diálogo de confirmación

    const returnHomeTouch = () => {
        navigate("/home");
    };

    const handleDialogClose = () => {
        setDialogOpen(false); // Cierra el diálogo
    };

    const handleLogoutConfirm = () => {
        console.log("Cerrando sesión...");
        setDialogOpen(false); // Cierra el diálogo
        navigate("/"); // Redirige a la página de inicio
    };

    const handleLogoutClick = () => {
        setDialogOpen(true); // Abre el diálogo de confirmación
    };

    return (
        <>
            <AppBar position="relative" className="navBar">
                <Toolbar>
                    {/* Menú hamburguesa para pantallas menores a 900px */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton color="inherit" onClick={() => setOpen(true)}>
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    {/* Título/logo siempre visible */}
                    <Typography variant="h3" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={returnHomeTouch}>
                        ADN
                    </Typography>

                    {/* Opciones del menú (solo visibles si la pantalla es mayor o igual a 900px) */}
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        {navLinks.map((item) => (
                            <Button
                                color="inherit"
                                key={item.title}
                                component={item.title === 'Cerrar sesión' ? 'button' : 'a'}
                                href={item.title === 'Cerrar sesión' ? undefined : item.path}
                                onClick={item.title === 'Cerrar sesión' ? handleLogoutClick : undefined}
                            >
                                {item.title}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Drawer para menú hamburguesa */}
            <Drawer
                open={open}
                anchor="left"
                onClose={() => setOpen(false)}
                sx={{ display: { xs: 'flex', md: 'none' } }} // Solo visible en pantallas menores a 900px
            >
                <NavListDrawer navLinks={navLinks} />
            </Drawer>

            {/* Diálogo de confirmación de cierre de sesión */}
            <Dialog
                open={dialogOpen}
                onClose={handleDialogClose}
                aria-labelledby="logout-dialog-title"
                aria-describedby="logout-dialog-description"
            >
                <DialogTitle id="logout-dialog-title">{"Cerrar Sesión"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="logout-dialog-description">
                        ¿Estás seguro de que deseas cerrar sesión?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleLogoutConfirm} color="primary" autoFocus>
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

