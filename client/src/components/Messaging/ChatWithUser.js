import React from 'react';
import { Box, Avatar, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import MissYou from '../../assets/images/missu.jpeg';

import { mobileScreen, tabletScreen, theme } from '../Theme/Theme';
// List user are chating
function ChatWithUser({ onClick }) {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderLeft: '4px solid #02754f', // this border is shown for chat is being focused
                width: '100%',
                height: '90px',
                backgroundColor: '#edf3f7',
                p: 1,
                mb: 1,
                borderBottom: `1px solid ${theme.palette.bgButtonHover}`,
            }}
            onClick={onClick}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    [mobileScreen]: {
                        justifyContent: 'space-between',
                        flexGrow: 1,
                    },
                    [tabletScreen]: {
                        justifyContent: 'space-between',
                        flexGrow: 1,
                    },
                }}
            >
                <Box
                    sx={{
                        height: '64px',
                        width: '64px',
                        position: 'relative',
                    }}
                >
                    <Avatar
                        src={MissYou}
                        alt={'User Avatar'}
                        sx={{
                            height: '64px',
                            width: '64px',
                            border: `1px solid ${theme.palette.primaryText}`,
                        }}
                    />
                    {/* This circle represents people who are online*/}
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            height: '15px',
                            width: '15px',
                            borderRadius: '50%',
                            border: '2px solid #fff',
                            bgcolor: 'green',
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        mt: 1,
                        ml: 1,
                        [mobileScreen]: {
                            flexGrow: 1,
                        },
                        [tabletScreen]: {
                            flexGrow: 1,
                        },
                    }}
                >
                    {/* chat with */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <CustomizeTypography fs="14px">Melody Fall Topic</CustomizeTypography>

                        {/* the time of the last message was sent */}
                        <CustomizeTypography
                            sx={{
                                fontSize: '14px',
                                ml: 2,
                                [mobileScreen]: {
                                    ml: 0,
                                },
                            }}
                        >
                            8:33 AM
                        </CustomizeTypography>
                    </Box>

                    {/* quick view of the last message */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <CustomizeTypography
                            sx={{
                                color: theme.palette.primaryText,
                                fontSize: '14px',
                            }}
                        >
                            You: tests
                        </CustomizeTypography>
                        <IconButton>
                            <StarIcon
                                sx={{
                                    fontSize: '20px',
                                    color: '#c37d17',
                                    mt: 2,
                                }}
                            />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default ChatWithUser;
