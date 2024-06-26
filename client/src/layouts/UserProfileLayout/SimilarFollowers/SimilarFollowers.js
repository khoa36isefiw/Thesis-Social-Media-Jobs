import React from 'react';
import { Box, Typography, Avatar, Button, Divider } from '@mui/material';

import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { mobileScreen, theme } from '../../../components/Theme/Theme';

function SimilarFollowers() {
    return (
        <Box>
            <Box
                sx={{
                    miheight: '30vh',
                    width: '100%',
                    backgroundColor: '#fff',
                    borderRadius: '13px',
                    border: '1px solid #d3d3d3',
                    // boxShadow: '4px 8px 4px #d9d9d9',
                    mb: 2,
                    // p: 1,
                    [mobileScreen]: {
                        borderRadius: 0,
                    },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mt: 1,
                        p: 1,
                    }}
                >
                    <Typography
                        sx={{ color: 'text.primary', fontSize: '16px', fontWeight: 'bold' }}
                    >
                        People you may know
                    </Typography>
                </Box>

                <Box>
                    <PeopleMayKnow />
                </Box>
            </Box>
        </Box>
    );
}

export default SimilarFollowers;

const connectPeople = [
    {
        userImgUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Sky_over_Munich_02.jpg/280px-Sky_over_Munich_02.jpg',
        userName: 'Skype',
        userPosition: 'Intern Frontend',
    },
    {
        userImgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        userName: 'Kiyoshi',
        userPosition: 'Web Developer',
    },
    {
        userImgUrl: 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg',
        userName: 'Bling Coffee',
        userPosition: 'Seller',
    },
    {
        userImgUrl: 'https://cdn.mos.cms.futurecdn.net/FRdq8ZbPetwNDRV9R3hYpP-320-80.jpg',
        userName: 'Macbook',
        userPosition: 'CEO of Marketing',
    },
];

function PeopleMayKnow() {
    return (
        // only show 4 people --> and show button show more --> show modal
        <Box>
            <Box sx={{ p: 1 }}>
                {connectPeople.map((person, index) => (
                    <Box key={index}>
                        <Box
                            sx={{
                                display: 'flex',
                                // justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                mt: 1,
                                cursor: 'pointer',
                                // flexGrow: 1,
                                [mobileScreen]: {
                                    alignItems: 'center',
                                },
                            }}
                        >
                            <Avatar
                                src={person.userImgUrl}
                                alt="User Avatar"
                                sx={{
                                    height: '50px',
                                    width: '50px',
                                    zIndex: 4,
                                }}
                            />
                            <Box
                                sx={{
                                    ml: 2,
                                    flexGrow: 1,
                                    [mobileScreen]: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    },
                                }}
                            >
                                <Box>
                                    <Typography
                                        sx={{
                                            fontWeight: 'bold',
                                            color: 'text.primary',
                                            fontSize: '14.5px',
                                            '&:hover': {
                                                textDecoration: 'underline',
                                                cursor: 'pointer',
                                            },
                                        }}
                                    >
                                        {/* FPT Information System */}
                                        {person.userName}
                                    </Typography>
                                    <Typography
                                        sx={{ color: 'text.secondary', fontSize: '12.5px' }}
                                    >
                                        {/* Accompany your digital transformation */}
                                        {person.userPosition}
                                    </Typography>
                                </Box>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        borderRadius: '24px',
                                        mt: '2px',
                                        borderColor: theme.palette.primaryText,
                                        '&:hover': {
                                            borderColor: theme.palette.primaryText,
                                            backgroundColor: theme.palette.bgButtonHover,
                                        },
                                        [mobileScreen]: {
                                            // ml: 9,
                                        },
                                    }}
                                    startIcon={<PersonAddAlt1Icon sx={{ color: '#808080' }} />}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: '12.5px',
                                            textTransform: 'capitalize',
                                            fontWeight: 'bold',
                                            color: 'gray',
                                            px: 1,
                                        }}
                                    >
                                        Follow
                                    </Typography>
                                </Button>
                            </Box>
                        </Box>
                        {index !== connectPeople.length - 1 ? (
                            <Divider sx={{ mb: 3, mt: 1 }} />
                        ) : null}
                    </Box>
                ))}
            </Box>
            <Divider sx={{ p: 0, mt: 1 }} />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Button
                    disableTouchRipple
                    variant="text"
                    fullWidth={true}
                    sx={{
                        fontSize: '14px',
                        textTransform: 'capitalize',
                        opacity: '0.85',
                        '&:hover': {
                            backgroundColor: 'transparent',
                            opacity: 1,
                            fontWeight: 'bold',
                        },
                    }}
                >
                    show more
                </Button>
            </Box>
        </Box>
    );
}
