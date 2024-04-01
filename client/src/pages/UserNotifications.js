import {
    Box,
    Container,
    Typography,
    Button,
    IconButton,
    Avatar,
    Grid,
    Paper,
    styled,
} from '@mui/material';
import React from 'react';
import FilterNotifications from '../components/Notifications/FilterNotifications';
import ShowNotifications from '../components/Notifications/ShowNotifications';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '8px',
    marginBottom: '16px',
}));

function UserNotifications() {
    return (
        <Box>
            <FilterNotifications />
        </Box>
    );
}

export default UserNotifications;
