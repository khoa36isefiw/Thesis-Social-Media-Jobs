import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import CheckIcon from '@mui/icons-material/Check';
import StartOutlinedIcon from '@mui/icons-material/StartOutlined';
import { ipadProScreen, mobileScreen, theme } from '../Theme/Theme';

// difine button for this component
const FollowButton = () => {
    return (
        <Button
            variant="outlined"
            sx={{
                borderRadius: '24px',
                mt: 1,
                [mobileScreen]: {
                    padding: '5px 8px',
                },
            }}
            startIcon={<CheckIcon sx={{ color: '#808080' }} />}
        >
            <Typography
                sx={{
                    fontSize: '12.5px',
                    textTransform: 'capitalize',
                    fontWeight: 'bold',
                    color: 'gray',
                    px: '4px',
                }}
            >
                Following
            </Typography>
        </Button>
    );
};

function ShowUserInterestCompaniesAndSchools({ listData }) {
    const showData = listData.slice(0, 4); // only show 4 items for schools

    const navigate = useNavigate();
    const handleNavigateToDetailsPage = () => {
        navigate('/user/details/interests');
    };

    return (
        <Box sx={{ px: 1 }}>
            <Grid container>
                {showData.map((dataItem, index) => (
                    <Grid item xs={12} lg={6} key={index}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                p: 2,
                            }}
                        >
                            <Box>
                                <img
                                    src={dataItem.avatar}
                                    style={{ height: '50px', width: '50px', objectFit: 'contain' }}
                                    alt={dataItem.name}
                                />
                            </Box>
                            <Box sx={{ ml: 2, flexGrow: 1 }}>
                                <Typography
                                    sx={{
                                        fontWeight: 'bold',
                                        color: 'text.secondary',
                                        fontSize: '13.5px',
                                        '&:hover': {
                                            textDecoration: 'underline',
                                            color: blue[700],
                                            cursor: 'pointer',
                                        },
                                    }}
                                >
                                    {dataItem.name}
                                </Typography>
                                <Typography sx={{ color: 'text.secondary', fontSize: '13px' }}>
                                    {dataItem.numberOfFollowers} followers
                                </Typography>
                            </Box>
                            <Box>
                                <FollowButton />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: 'none',
                                mx: 2,
                                [ipadProScreen]: {
                                    display: 'block',
                                },
                            }}
                        >
                            {index !== showData.length - 1 && <Divider />}
                        </Box>
                    </Grid>
                ))}
            </Grid>
            {/* Nút "show more" */}
            <Divider />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {showData.length > 2 && (
                    <Button
                        fullWidth
                        variant="text"
                        onClick={handleNavigateToDetailsPage}
                        endIcon={<StartOutlinedIcon />}
                        sx={{
                            textTransform: 'capitalize',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            '&:hover': {
                                bgcolor: theme.palette.bgButtonHover,
                            },
                        }}
                    >
                        Show more
                    </Button>
                )}
            </Box>
        </Box>
    );
}
export default ShowUserInterestCompaniesAndSchools;
