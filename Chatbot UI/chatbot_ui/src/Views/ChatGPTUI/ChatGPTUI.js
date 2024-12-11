import React, { useState } from 'react';
import { Box, TextField, Typography, Button, InputAdornment, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import axios from 'axios';
import Header from '../Header/Header';

const ChatGPTUI = () => {

    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const handleSend = async () => {
        if (!message.trim()) return;
        console.log('message : ', message);

        try {
            const backendUrl = 'https://your-backend-api-url.com/chat';
            const response = await axios.post(backendUrl, { message });
            setResponse(response.data.reply);
        } catch (error) {
            console.error('Error sending message:', error);
            setResponse('Failed to send message. Please try again.');
        }
    };

    return (
        <Box>
            <Header />
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
                <Typography variant="h4" sx={{ marginBottom: 3 }}>
                    What can I help with?
                </Typography>

                <TextField
                    variant="outlined"
                    placeholder="Message ChatGPT"
                    fullWidth
                    onChange={(e) => setMessage(e.target.value)}
                    sx={{
                        maxWidth: '500px',
                        backgroundColor: '#ffffff',
                        borderRadius: 2,
                        marginBottom: 2,
                    }}
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton style={{ color: '#757575' }}
                                        onClick={handleSend}
                                    >
                                        <ArrowCircleRightRoundedIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }
                    }}
                />

                {response && (
                    <Typography
                        variant="body1"
                        sx={{
                            marginTop: 2,
                            marginBottom: 5,
                            maxWidth: '500px',
                            padding: 2,
                            backgroundColor: '#ffffff',
                            borderRadius: 2,
                            boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        {response}
                    </Typography>
                )}

                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <Button variant="outlined" fullWidth>Create image</Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Button variant="outlined" fullWidth>Surprise me</Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Button variant="outlined" fullWidth>Analyze images</Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Button variant="outlined" fullWidth>Brainstorm</Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Button variant="outlined" fullWidth>Make a plan</Button>
                    </Grid>
                </Grid>

                <Typography
                    variant="caption"
                    sx={{ marginTop: 3, color: '#808080', textAlign: 'center' }}
                >
                    ChatGPT can make mistakes. Check important info.
                </Typography>
            </Box>
        </Box>
    );
};

export default ChatGPTUI;