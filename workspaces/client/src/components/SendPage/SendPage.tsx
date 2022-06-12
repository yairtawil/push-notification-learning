import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { AppBar, TextField, Toolbar } from '@mui/material';
import Button from '@mui/material/Button';
import { messaging } from '../../firebase';
import { useToken } from 'react-firebase-hooks/messaging';
import { useEffect, useState } from 'react';
import Header from './Header';
import { onMessage } from 'firebase/messaging';
import config from '../../config/config';
import axios from 'axios';

export default function SendPage({ user, signOut }: any) {
    const [token, loading, error] = useToken(messaging, config.vapidKey);
    const [messages, setMessages] = useState<Array<{ id: string; from: string; title: string; message: string }>>([]);

    console.log('error?', error);

    useEffect(() => {
        if (token) {
            console.log('token?', token);
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    console.log('Notification permission granted.');
                }
            });
        }
    }, [token]);

    useEffect(() => {
        const unsubscribeOnMessage = onMessage(messaging, payload => {
            const item = {
                id: payload.messageId,
                from: payload.from,
                title: payload.notification?.title!,
                message: payload.notification?.body!
            };

            setMessages([...messages, item]);
        });

        return () => {
            unsubscribeOnMessage();
        };
    }, [messages]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const response = await axios.post(`${config.serverUrl}/send`, { token, what: 'send' });
        console.log('response?', response?.data);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh'
            }}
        >
            <CssBaseline />

            <Header user={user} signOut={signOut} messages={messages} />

            <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField fullWidth sx={{ height: 150 }} placeholder={'type your message here...'} />

                    <Button variant={'contained'} type={'submit'}>
                        Send!
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
