import React from 'react';
import { Box, IconButton, Typography, Button, Divider, Avatar, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DefaultBackgroundImage from '../../assets/images/pn.jpeg';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { ipadProScreen, mobileScreen, tabletScreen, theme } from '../Theme/Theme';
import { suggestedLists } from '../MyNetwork/MyNetwork';

function MoreConnectionsModal({ handleClose }) {
    return (
        <Box
            sx={{
                position: 'relative',
                backgroundColor: '#fff',
                width: '800px',
                minHeight: '50px',
                margin: 'auto',
                mt: '32px',
                borderRadius: '8px',
                boxShadow: '0 4px 4px #333',
                //  close icon doesn't overflow

                // responsive
                [ipadProScreen]: {
                    mt: '96px',
                    width: '70%',
                },
                [mobileScreen]: {
                    width: '100%',
                    mt: '12px',
                },
                [tabletScreen]: {
                    width: '96%',
                },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    p: 2,
                    [ipadProScreen]: {
                        height: '60px',
                    },
                    [mobileScreen]: {
                        height: '80px',
                    },
                    [tabletScreen]: {
                        height: '60px',
                    },
                }}
            >
                <CustomizeTypography
                    fs={'20px'}
                    fw={true}
                    sx={{
                        [mobileScreen]: {
                            fontSize: '16px',
                            maxWidth: '360px',
                        },
                    }}
                >
                    People you may know based on your recent activity
                </CustomizeTypography>
                <IconButton
                    disableFocusRipple
                    sx={{
                        '&:hover': {
                            backgroundColor: '#d9d9d9',
                        },
                        [ipadProScreen]: {},
                        [mobileScreen]: {
                            position: 'absolute',
                            top: '1%',
                            right: '1%',
                        },
                    }}
                    onClick={handleClose}
                >
                    <CloseIcon fontSize="large" />
                </IconButton>
            </Box>

            <Divider sx={{ mb: 2 }} />
            <Box
                sx={{
                    overflow: 'scroll',
                    height: '600px',
                    [ipadProScreen]: {
                        height: '750px',
                        // overflow: 'scroll',
                    },
                    [mobileScreen]: {
                        height: '650px',
                        // overflow: 'scroll',
                    },
                    [tabletScreen]: {
                        height: '700px',
                        // overflow: 'scroll',
                    },
                }}
            >
                <Grid
                    container
                    spacing={2}
                    sx={{
                        px: 2,
                        mb: 4,
                    }}
                >
                    {suggestedLists.map((user, index) => (
                        <Grid item key={index} xs={6} sm={6} md={6} lg={4} xl={3}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    height: '280px',
                                    // width: '160px',
                                    border: '1px solid #d9d9d9',
                                    borderRadius: '8px',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        boxShadow: '0 4px 4px #d9d9d9',
                                    },
                                    [mobileScreen]: {
                                        // width: '170px',
                                    },
                                }}
                            >
                                {/* default background image */}
                                <Avatar
                                    src={DefaultBackgroundImage}
                                    alt="Default User Background Image"
                                    sx={{
                                        height: '72px',
                                        width: '100%',
                                        borderRadius: 0,
                                        objectFit: 'cover',
                                        position: 'relative',
                                        borderTopLeftRadius: '8px',
                                        borderTopRightRadius: '8px',
                                    }}
                                />
                                <Avatar
                                    sx={{
                                        position: 'absolute',
                                        zIndex: 2,
                                        top: 4,
                                        right: 4,
                                        width: '32px',
                                        height: '32px',
                                        backgroundColor: '#0a66c2',
                                    }}
                                >
                                    <IconButton>
                                        <CloseIcon sx={{ color: 'white', fontSize: '24px' }} />
                                    </IconButton>
                                </Avatar>
                                <Box
                                    sx={{
                                        mb: '30px',
                                        px: 2,
                                        [mobileScreen]: {
                                            px: 0,
                                        },
                                    }}
                                >
                                    <Avatar
                                        src={user.userImage}
                                        alt="Default User Background Image"
                                        sx={{
                                            height: '96px',
                                            width: '96px',
                                            objectFit: 'cover',
                                            border: '4px solid white',
                                            mx: 'auto',
                                            mt: '-42px',
                                            zIndex: 2,
                                        }}
                                    />

                                    {/* name */}
                                    <Typography
                                        sx={{
                                            fontSize: '16px',
                                            color: '#404040',
                                            fontWeight: 'bold',
                                            '&:hover': {
                                                textDecoration: 'underline',
                                            },
                                        }}
                                    >
                                        {/* Luan Zoro */}
                                        {user.userName}
                                    </Typography>
                                    {/* position */}
                                    <Typography
                                        sx={{
                                            fontSize: '14px',
                                            color: '#0009',
                                            [mobileScreen]: {
                                                fontSize: '12px',
                                            },
                                        }}
                                    >
                                        {/* Backend Developer */}
                                        {user.userPosition}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography
                                        sx={{
                                            fontSize: '12px',
                                            color: '#0009',
                                            [mobileScreen]: {
                                                fontSize: '10px',
                                            },
                                        }}
                                    >
                                        Based on your profile
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        sx={{ padding: '8px 28px', borderRadius: '24px', mt: 1 }}
                                        startIcon={<PersonAddIcon />}
                                    >
                                        Connect
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}

export default MoreConnectionsModal;
