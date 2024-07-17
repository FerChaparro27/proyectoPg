import { AppBar, Button, Drawer, IconButton, Toolbar, Typography, Box } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu"
import { useNavigate } from "react-router-dom";

const navLinks = [
    {
        title: 'Clientes', path: "/clients"
    },
    {
        title: 'Profesores', path: "/instructor"
    },
    {
        title: 'Actividades', path: "#"
    },
    {
        title: 'Rutinas', path: "#"
    },
    {
        title: 'Transacciones', path: "/transaction"
    },
    {
        title: 'Mi perfil', path: "#"
    },
    {
        title:'Cerrar sesion', path: "/"
    }
]

export default function NavBar() {
    const navigate = useNavigate()

    const returnHomeTouch=()=>{
        navigate("/home")
    }

    const [open, setOpen] = useState(false)

    return (
        <>
            <AppBar position="static" className="navBar">
                <Toolbar>

                    <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>

                        <IconButton color="inherit" onClick={() => setOpen(true)}>
                            <MenuIcon />
                        </IconButton>

                    </Box>

                    <Typography variant="h3" sx={{
                        flexGrow: 1, cursor:'pointer'
                    }} onClick={returnHomeTouch}>ADN</Typography>

                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

                        {navLinks.map(item => (
                            <Button color="inherit" key={item.title} component="a" href={item.path}>
                                {item.title}
                            </Button>
                        ))}

                    </Box>

                </Toolbar>
            </AppBar>

            <Drawer
                open={open}
                anchor="left"
                onClose={() => setOpen(false)}
                sx={{ display: { xs: 'flex', sm: 'none' } }}
            >
                <NavListDrawer navLinks={navLinks} />
            </Drawer>

        </>
    )
}