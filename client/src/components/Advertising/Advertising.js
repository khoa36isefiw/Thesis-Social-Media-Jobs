import React from 'react';
import FindingJobs from '../../assets/images/FindingSuitableJobs.png';
import { Box } from '@mui/material';
function Advertising() {
    return (
        <Box>
            <img
                src={FindingJobs}
                alt="Finding Suitable Jobs"
                style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    borderRadius: '14px',
                    border: '1px solid #d3d3d3',
                }}
            />
        </Box>
    );
}

export default Advertising;
