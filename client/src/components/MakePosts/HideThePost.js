import React from 'react';
import { Box, Button, Typography } from '@mui/material';

function HideThePost({ handleShowPostAgain }) {
    return (
        <Box
            sx={{
                border: '1px solid #d3d3d3',
                backgroundColor: '#fff',
                borderRadius: '12px',
                px: 2,
                py: 1,
                mb: 2,
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography sx={{ fontSize: '13.5px', fontWeight: 'bold', color: '#404040' }}>
                    Post removed from your feed
                </Typography>
                <Button
                    sx={{
                        fontSize: '14px',
                        textTransform: 'capitalize',
                        fontWeight: 'bold',
                        // '&:hover': {
                        //     backgroundColor: 'transparent',
                        // },
                    }}
                    onClick={handleShowPostAgain}
                >
                    Undo
                </Button>
            </Box>
        </Box>
    );
}

export default HideThePost;
