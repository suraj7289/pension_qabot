import React, { useState } from 'react';
import {
    Box,
    TextField,
    Typography,
    Button,
    Stack,
    Link
} from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    };

    const handleLogin = async () => {
        if (!email) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Email Cannot be Empty !",
            });
            return;
        }

        if (!email.split('@')[1]) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Invalid Email !",
            });
            return;
        }

        if (!password) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Passwod Cannot be Empty !",
            });
            return;
        }

        if (!validatePassword(password)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Invalid Password !",
            });
            return;
        }

        try {
            const backendUrl = 'https://your-backend-api-url.com/login';
            const payload = {
                data: {
                    email: email,
                    password: password
                }
            }
            const response = await axios.post(backendUrl, payload);

            if (response.ok) {
                console.log('Login successful:');
                // Handle successful login, e.g., redirect to the chat page
            } else {
                throw new Error('Login failed. Please try again.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message ? error.message : "Login Failed",
            });
        }
    };

    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f5f5f5',
                padding: 2,
            }}
        >

            {/* Input Fields */}
            <Box
                component="form"
                sx={{
                    maxWidth: '400px',
                    width: '100%',
                    height: '60%',
                    backgroundColor: '#ffffff',
                    padding: 3,
                    borderRadius: 2,
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Stack spacing={5}>
                    <Typography variant="h4" sx={{ marginBottom: 6 }}>
                        Login
                    </Typography>
                    <TextField
                        type="email"
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        type="password"
                        label="Password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleLogin}
                    >
                        Login
                    </Button>
                </Stack>
            </Box>

            {/* Footer Note */}
            <Typography
                variant="caption"
                sx={{ marginTop: 3, color: '#808080', textAlign: 'center' }}
            >
                Don't have an account? {" "}
                <Link href="/signup" underline="hover" color="primary">
                    SignUp
                </Link>
            </Typography>
        </Box>
    );
};

export default Login;