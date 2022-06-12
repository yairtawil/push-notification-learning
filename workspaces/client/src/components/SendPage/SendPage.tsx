import * as React from 'react';
import { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { messaging } from '../../firebase';
import { useToken } from 'react-firebase-hooks/messaging';
import Header from './Header';
import { onMessage } from 'firebase/messaging';
import config from '../../config/config';
import axios from 'axios';

export default function SendPage({ user, signOut }: any) {
    const [token] = useToken(messaging, config.vapidKey);
    const [messages, setMessages] = useState<Array<{ id: string; from: string; title: string; message: string }>>([]);

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

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const title = data.get('title');
        const body = data.get('body');

        const response = await axios.post(`${config.serverUrl}/send`, { token, title, body });
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
                    <TextField name="title" fullWidth sx={{ height: 50 }} placeholder={'type your title here...'} />
                    <TextField name="body" fullWidth sx={{ height: 150 }} placeholder={'type your body here...'} />

                    <Button variant={'contained'} type={'submit'}>
                        Send!
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
