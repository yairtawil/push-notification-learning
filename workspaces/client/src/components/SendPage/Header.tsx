import { AppBar, Badge, IconButton, Popover, Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Notifications } from '@mui/icons-material';
import * as React from 'react';
import NotificationsList from './NotificationsList';

export default function Header({ user, signOut, messages }: { user: string; signOut: () => void; messages: any[] }) {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}>
            <Toolbar sx={{ flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <Typography variant="h6" color="inherit" noWrap>
                    Push Notifications Learning
                </Typography>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography color="primary" noWrap>
                        {user}
                    </Typography>

                    <IconButton onClick={handleClick} disabled={!messages?.length}>
                        <Badge badgeContent={messages?.length} color="primary" sx={{ ml: 1, mr: 1 }}>
                            <Notifications color={'action'} />
                        </Badge>
                    </IconButton>

                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left'
                        }}
                    >
                        <NotificationsList messages={messages} />
                    </Popover>

                    <Button variant="outlined" sx={{ my: 1, mx: 1.5 }} onClick={signOut}>
                        Logout
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
}
