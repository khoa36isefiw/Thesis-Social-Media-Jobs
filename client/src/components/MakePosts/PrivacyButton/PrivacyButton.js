import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { CustomizeTypography } from '../../CustomizeTypography/CustomizeTypography';

import { theme } from '../../Theme/Theme';

export const PrivacyButton = ({ icon, handleOnClick, textAction, selected }) => {
    return (
        <Box
            sx={{
                '&:hover': { bgcolor: theme.palette.bgButtonHover, cursor: 'pointer' },
                p: 2,
                display: 'flex',
                alignItems: 'center',
            }}
            onClick={handleOnClick}
        >
            <IconButton
                disableTouchRipple
                sx={{
                    '&:hover': { bgcolor: 'transparent' },
                    bgcolor: '#f4f2ee',
                    width: '50px',
                    height: '50px',
                    mr: 2,
                }}
            >
                {/* <PublicIcon sx={{ fontSize: '24px' }} /> */}
                {icon}
            </IconButton>
            <CustomizeTypography fw={true} fs={'16px'} sx={{ flexGrow: 1 }}>
                {/* Connections Only */}
                {textAction}
            </CustomizeTypography>
            <Box
                sx={{
                    width: '25px',
                    height: '25px',
                    // color: theme.palette.bgButtonHover,
                    bgcolor: selected ? 'green' : '#fff',
                    borderRadius: '50%',
                    border: `1px solid ${selected ? 'green' : '#333'}`,

                    position: 'relative',
                }}
            >
                {selected && (
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '12px',
                            height: '12px',
                            bgcolor: 'white',
                            color: theme.palette.bgButtonHover,
                            borderRadius: '50%',
                            border: '1px solid green',
                        }}
                    />
                )}
            </Box>
        </Box>
    );
};
