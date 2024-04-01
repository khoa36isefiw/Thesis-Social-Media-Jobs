import React from 'react';
import Hiring from '../../assets/images/hiring.jpeg';
import { Box } from '@mui/material';
function HiringCareer() {
    return (
        <Box>
            <img
                src={Hiring}
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

export default HiringCareer;
