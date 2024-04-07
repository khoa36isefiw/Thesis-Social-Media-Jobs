import React, { useState } from 'react';
import { Avatar, Box, Grid, Typography, Button, styled } from '@mui/material';
import { green } from '@mui/material/colors';
import ShowNotifications from './ShowNotifications';
import NoActivity from '../../assets/images/tele-removebg-preview.png';
import { useNavigate } from 'react-router-dom';

const CustomFilterNotifications = () => {
    const [activeButton, setActiveButton] = useState('All');

    const handleButtonClick = (label) => {
        setActiveButton(label);
    };

    return (
        <Box>
            <Box
                sx={{
                    border: '1px solid #d9d9d9',
                    width: '100%',
                    p: 1,
                    borderRadius: '12px',
                    bgcolor: '#fff',
                    mb: 3,
                }}
            >
                <FilterButton
                    label="All"
                    active={activeButton === 'All'}
                    onClick={() => handleButtonClick('All')}
                />
                <FilterButton
                    label="My posts"
                    active={activeButton === 'My posts'}
                    onClick={() => handleButtonClick('My posts')}
                />
            </Box>
            {activeButton === 'My posts' ? <MyPostsLayout /> : <ShowNotifications />}
        </Box>
    );
};

const FilterButton = ({ label, active, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{
                textTransform: 'capitalize',
                fontSize: '14px',
                padding: '6px 16px',
                backgroundColor: active ? green[800] : '#fff',
                color: active ? 'white' : '#333',
                border: '1px solid #b2b2b2',
                borderRadius: '24px',
                marginLeft: '2px',
                marginRight: '8px',
                cursor: 'pointer',
            }}
        >
            {label}
        </button>
    );
};

const MyPostsLayout = () => {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                minHeight: '50px',
                width: '100%',
                borderRadius: '12px',
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1px solid #d9d9d9',
                p: 1,
            }}
        >
            <Avatar
                src={NoActivity}
                alt="No Activity"
                sx={{ height: '400px', width: '400px', borderRadius: '0px' }}
            />
            <CustomizeText fs="24px" fw={true} sx={{ mt: '-20px' }}>
                No new post activities
            </CustomizeText>
            <CustomizeText>View your previous post activity on your profile</CustomizeText>
            <Button
                variant="outlined"
                sx={{ borderRadius: '24px', mt: 2, mb: 2 }}
                onClick={() => navigate('/user-profile')}
            >
                <CustomizeText sx={{ textTransform: 'initial', px: 2 }} fw={true}>
                    View previous activity
                </CustomizeText>
            </Button>
        </Box>
    );
};

export default CustomFilterNotifications;

const CustomizeText = styled(Typography)(({ fs, fw = false }) => ({
    fontSize: fs || '16px',
    fontWeight: fw ? 'bold' : 'normal',
}));
