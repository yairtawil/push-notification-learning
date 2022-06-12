import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Fragment } from 'react';

export default function NotificationsList({ messages }: { messages: any[] }) {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {messages.map(({ id, from, title, message }) => (
                <Fragment key={id}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={title}
                            secondary={
                                <React.Fragment>
                                    <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                                        {from}:
                                    </Typography>
                                    {message}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </Fragment>
            ))}
        </List>
    );
}
