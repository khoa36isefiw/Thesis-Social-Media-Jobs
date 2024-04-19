import React from 'react';
import FindingJobs from '../../assets/images/FindingSuitableJobs.png';
import { Avatar, Box } from '@mui/material';
import { mobileScreen } from '../Theme/Theme';

function Advertising() {
    return (
        <Box>
            <Avatar
                src={FindingJobs}
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
                        mb: 4,
                    },
                }}
            />
        </Box>
    );
}

export default Advertising;
