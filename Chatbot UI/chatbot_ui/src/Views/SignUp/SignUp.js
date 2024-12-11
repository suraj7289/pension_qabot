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

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    };

    const handleSignUp = async () => {
        if (!firstName || !lastName) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Name Cannot be Empty !",
            });
            return;
        }

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
            const backendUrl = 'https://your-backend-api-url.com/SignUp';
            const payload = {
                data: {
                    email: email,
                    password: password
                }
            }
            const response = await axios.post(backendUrl, payload);

            if (response.ok) {
                console.log('SignUp successful:');
                // Handle successful SignUp, e.g., redirect to the chat page
            } else {
                throw new Error('SignUp failed. Please try again.');
            }
        } catch (error) {
            console.error('Error during SignUp:', error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message ? error.message : "SignUp Failed",
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
                    height: '75%',
                    backgroundColor: '#ffffff',
                    padding: 3,
                    borderRadius: 2,
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Stack spacing={3}>
                    <Typography variant="h4" sx={{ mb: 4 }}>
                        SignUp
                    </Typography>


                    <TextField
                        type="text"
                        label="FirstName"
                        variant="outlined"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        type="text"
                        label="LastName"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setLastName(e.target.value)}
                        fullWidth
                    />
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
                        onClick={handleSignUp}
                    >
                        SignUp
                    </Button>
                </Stack>
            </Box>

            {/* Footer Note */}
            <Typography
                variant="caption"
                sx={{ marginTop: 3, color: '#808080', textAlign: 'center' }}
            >
                Already have an account? {" "}
                <Link href="/" underline="hover" color="primary">
                    Login
                </Link>
            </Typography>
        </Box>
    );
};

export default SignUp;