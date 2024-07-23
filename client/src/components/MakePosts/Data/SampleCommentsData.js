import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import Liked from '../../../assets/images/like.png';
import { tabletScreen } from '../../Theme/Theme';
import { ActionsTypography } from '../CommentModal';

function SampleCommentsData() {
    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <Avatar
                    src={
                        'https://media.istockphoto.com/id/1061786950/photo/sky-in-the-pink-and-blue-colors-effect-of-light-pastel-colored-of-sunset-clouds-cloud-on-the.jpg?s=612x612&w=0&k=20&c=arnDjpYMJA8Pb-sbqTbOPAZDfmmiezOY1YxnTH8Q9Ks='
                    }
                    alt="User Image"
                    sx={{ height: '40px', width: '40px', objectFit: 'cover' }}
                />
                <Box
                    sx={{
                        border: '1px solid #f2f2f2',
                        maxHeight: '150px',
                        width: '100%',
                        p: 1,
                        borderRadius: '12px',
                        backgroundColor: '#f2f2f2',
                        ml: 1,
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '16px',
                            fontWeight: 'bold',
                            [tabletScreen]: {
                                fontSize: '14px',
                            },
                        }}
                    >
                        Tim Tran
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '14px',
                            [tabletScreen]: {
                                fontSize: '13.5px',
                            },
                        }}
                    >
                        Where did you go? Please share with me the information about your
                        journey.What should I need to prepare for this trip?
                    </Typography>
                </Box>
            </Box>
            {/* Like, Reply actions */}

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    mt: 1,
                    ml: 1,
                    [tabletScreen]: {
                        mx: 4,
                    },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <ActionsTypography sx={{ ml: 1 }}>Like</ActionsTypography>
                    <ActionsTypography sx={{ ml: 1 }}>-</ActionsTypography>
                    <Avatar
                        src={Liked}
                        sx={{
                            height: '16px',
                            width: '16px',
                            borderRadius: '0',
                            zIndex: 10,
                            ml: 1,
                        }}
                        alt="Liked a Post"
                    />
                </Box>
                <Box
                    sx={{
                        width: '1px',
                        bgcolor: 'gray',
                    }}
                />
                <ActionsTypography>Reply</ActionsTypography>
                {/* The number of responses */}
                <ActionsTypography>-</ActionsTypography>
                <ActionsTypography sx={{ fontWeight: 'normal' }}>1 Reply</ActionsTypography>
            </Box>

            {/* responses */}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', mt: 1, ml: 6 }}>
                    <Avatar
                        src={'https://i.scdn.co/image/ab67616d0000b27339f24c41b07bad078b64b146'}
                        alt="User Image"
                        sx={{ height: '32px', width: '32px', objectFit: 'cover' }}
                    />
                    <Box
                        sx={{
                            border: '1px solid #f2f2f2',
                            maxHeight: '150px',
                            width: '100%',
                            p: 1,
                            borderRadius: '10px',
                            backgroundColor: '#f2f2f2',
                            ml: 1,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '16px',
                                fontWeight: 'bold',
                                [tabletScreen]: {
                                    fontSize: '14px',
                                },
                            }}
                        >
                            October
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                [tabletScreen]: {
                                    fontSize: '13.5px',
                                },
                            }}
                        >
                            Depends on the trip you take
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        ml: 11,
                        mt: 1,
                        alignItems: 'center',
                    }}
                >
                    <ActionsTypography sx={{ ml: 1 }}>Like</ActionsTypography>
                    <Box
                        sx={{
                            width: '1px',
                            height: '21px',
                            bgcolor: 'gray',
                            ml: 2,
                        }}
                    />
                    <ActionsTypography sx={{ ml: 2 }}>Reply</ActionsTypography>
                </Box>
            </Box>
        </div>
    );
}

export default SampleCommentsData;
