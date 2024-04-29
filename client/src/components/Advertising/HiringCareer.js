import React from 'react';
import Hiring from '../../assets/images/hiring.jpeg';
import { Avatar, Box } from '@mui/material';
import { mobileScreen } from '../Theme/Theme';
function HiringCareer() {
    return (
        <Box>
            <Avatar
                src={Hiring}
                alt="Finding Suitable Jobs"
                sx={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    borderRadius: '14px',
                    border: '1px solid #d3d3d3',
                    mb: 1,
                    [mobileScreen]: {
                        borderRadius: 0,
                    },
                }}
            />
        </Box>
    );
}

export default HiringCareer;
