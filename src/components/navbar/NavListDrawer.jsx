import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate } from 'react-router-dom'

export default function NavListDrawer({ navLinks }) {

    const navigate = useNavigate()

    const returnLogin = () => {
        navigate('/')
    }

    return <Box sx={{ width: 250 }}>
        <nav>
            <List>
                {
                    navLinks.map(item => (
                        <ListItem disablePadding key={item.title}>
                            <ListItemButton
                                component="a"
                                href={item.path}>
                                <ListItemText>{item.title}</ListItemText>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </nav>
        <Divider />
        <nav>
            <List>
                <ListItem disablePadding>
                    <ListItemButton
                        component="a"
                        href="#">
                        <ListItemText onClick={returnLogin}>Cerrar sesión</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </nav>
    </Box>
}