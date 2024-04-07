import React from 'react';
import { Avatar, Box, Button, Divider, Typography } from '@mui/material';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import { blue } from '@mui/material/colors';

function CompaniesAndShoolsAreFollowing({ data }) {
    return (
        <Box>
            {data.map((item, index) => (
                <Box key={index}>
                    <Box
                        sx={{
                            p: 2,
                            display: 'flex',
                            alignItems: 'start',
                            justifyContent: 'flex-start',
                        }}
                    >
                        <Avatar
                            src={item.avatar}
                            alt={item.name}
                            sx={{
                                height: '48px',
                                width: '48px',
                                borderRadius: 0,
                                cursor: 'pointer',
                            }}
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                ml: 2,
                            }}
                        >
                            <Box sx={{ mb: 1, cursor: 'pointer' }}>
                                <CustomizeTypography
                                    fs="14px"
                                    fw={true}
                                    sx={{
                                        display: 'flex !important',
                                        flexWrap: 'wrap',
                                        overflow: 'hidden',
                                        width: '100%',
                                        '&:hover': {
                                            textDecoration: 'underline',
                                            color: blue[800],
                                        },
                                    }}
                                >
                                    {item.name}
                                </CustomizeTypography>
                                <CustomizeTypography fs="12px">
                                    {item.numberOfFollowers} followers
                                </CustomizeTypography>
                            </Box>
                            <Button
                                variant="outlined"
                                startIcon={<CheckOutlinedIcon />}
                                sx={{
                                    borderRadius: '24px',
                                    borderColor: '#404040',
                                    color: '#404040',
                                    maxWidth: '120px',
                                    textTransform: 'initial',
                                    fontWeight: 'bold',
                                    fontSize: '14px',
                                    '&:hover': {
                                        borderColor: 'black',
                                        // backgroundColor: '#404040',
                                    },
                                }}
                            >
                                Following
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{ m: '0 16px' }}>{index === data.length - 1 ? null : <Divider />}</Box>
                </Box>
            ))}
        </Box>
    );
}

export default CompaniesAndShoolsAreFollowing;
