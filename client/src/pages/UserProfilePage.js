import { Box } from '@mui/material';
import React from 'react';
import { UserProfile } from '../components/User/UserProfile/UserProfile';
import AboutUser from '../components/User/UserProfile/AboutUser';
import UserEducation from '../components/User/UserProfile/UserEducation';
import UserInterest from '../components/User/UserProfile/UserInterest';
import UserActivity from '../components/User/UserProfile/UserActivity';

function UserProfilePage() {
    return (
        <Box>
            <UserProfile />
            <AboutUser />
            <UserActivity />
            <UserEducation />
            <UserInterest />
        </Box>
    );
}

export default UserProfilePage;
