import { AppBar, Button, Drawer, IconButton, Toolbar, Typography, Box } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu"

const navLinks = [
    {
        title: 'Mi cuenta', path: "#"
    },
    {
        title: 'Transacciones', path: "#"
    },
    {
        title: 'Cereales', path: "#"
    },
    {
        title: 'Animales', path: "#"
    },
    {
        title: 'Cerrar sesión', path: "/"
    }
]

export default function NavBar() {

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
                        flexGrow: 1
                    }}>3FT</Typography>

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