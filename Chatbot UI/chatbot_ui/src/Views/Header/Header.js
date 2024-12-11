import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useTheme } from '@mui/material/styles';

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen size is below 600px

    const handleLogout = () => {
        console.log('Logout clicked');
    };

    const handleAdminPanel = () => {
        console.log('Admin Panel clicked');
    };

    const handleNotifications = () => {
        console.log('Notifications clicked');
    };

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#1976d2' }}>
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                {/* Hamburger Icon for Mobile */}
                {isMobile && (
                    <IconButton
                        color="inherit"
                        edge="start"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                )}

                {/* Centered App Name */}
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 'bold',
                        textAlign: 'center',
                        flexGrow: isMobile ? 1 : 0,
                    }}
                >
                    Employee Chatbot
                </Typography>

                {/* Icon Buttons */}
                {!isMobile && (
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <IconButton
                            color="inherit"
                            onClick={handleNotifications}
                            aria-label="Notifications"
                        >
                            <NotificationsIcon />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            onClick={handleAdminPanel}
                            aria-label="Admin Panel"
                        >
                            <AdminPanelSettingsIcon />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            onClick={handleLogout}
                            aria-label="Logout"
                        >
                            <LogoutIcon />
                        </IconButton>
                    </Box>
                )}
            </Toolbar>

            {/* Drawer for Mobile Menu */}
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box
                    sx={{
                        width: 250,
                        paddingTop: 2,
                    }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        <ListItem button onClick={handleNotifications}>
                            <ListItemIcon>
                                <NotificationsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Notifications" />
                        </ListItem>
                        <ListItem button onClick={handleAdminPanel}>
                            <ListItemIcon>
                                <AdminPanelSettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Admin Panel" />
                        </ListItem>
                        <ListItem button onClick={handleLogout}>
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItem>
                    </List>
                    <Divider />
                </Box>
            </Drawer>
        </AppBar>
    );
};

export default Header;
