import React from 'react';
import { Box } from '@mui/material';
import { CustomizeTypography } from '../../CustomizeTypography/CustomizeTypography';

export default function AboutUser() {
    return (
        <Box
            sx={{
                minHeight: '50px',
                width: '100%',
                borderRadius: '12px',
                border: '1px solid #d9d9d9',
                backgroundColor: '#fff',
                p: 3,
                mt: 2,
                mb: 2,
            }}
        >
            <CustomizeTypography fs="20px" fw={true}>
                About
            </CustomizeTypography>
            <CustomizeTypography fs={'14px'} sx={{ textAlign: 'justify' }}>
                As a backend intern, I aim to improve skills such as designing solutions for
                software features, writing high-quality code to implement software features or fix
                bugs, as well as performing unit testing. Through these efforts, I intend to acquire
                specialized knowledge that can be applied to the company's corresponding business
                needs, thereby assisting the company in future projects. My long-term goal is to
                advance to the role of Backend Developer within three years and, further down the
                road, to become a Fullstack Developer.
            </CustomizeTypography>
        </Box>
    );
}
