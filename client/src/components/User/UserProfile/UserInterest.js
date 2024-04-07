import React, { useState } from 'react';
import { Box, Tab, Tabs, Typography, Divider, Button } from '@mui/material';
import { TabPanel } from '../../TabPanel/TabPanel';
import { blue } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';
import FPTCop from '../../../assets/images/fpt_logo.png';
import HCMUTELogo from '../../../assets/images/hcmute.jpeg';
import { useNavigate } from 'react-router-dom';

const FollowButton = () => {
    return (
        <Button
            variant="outlined"
            sx={{ borderRadius: '24px', mt: '2px', mt: 1 }}
            startIcon={<AddIcon sx={{ color: '#808080' }} />}
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
    );
};

function UserInterest() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                minHeight: '25px',
                width: '100%',
                borderRadius: '12px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                px: 3,
                py: 1,
                my: 2,
            }}
        >
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="Tabs Interest"
                sx={{ borderBottom: '1px solid #333' }}
            >
                <Tab
                    sx={{
                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        },
                    }}
                    label={
                        <Typography sx={{ fontSize: '14px', textTransform: 'capitalize' }}>
                            Companies
                        </Typography>
                    }
                />
                <Tab
                    sx={{
                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        },
                    }}
                    label={
                        <Typography sx={{ fontSize: '14px', textTransform: 'capitalize' }}>
                            Schools
                        </Typography>
                    }
                />
            </Tabs>
            <TabPanel value={value} index={0}>
                {/* Tab 1 Content */}
                <FollowCompany />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <FollowSchool />
            </TabPanel>
        </Box>
    );
}

export default UserInterest;

function FollowCompany() {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', my: 1, mt: 2, mx: 2 }}>
            <img src={FPTCop} style={{ height: '30px', width: '30px', objectFit: 'contain' }} />
            <Box sx={{ ml: 2 }}>
                <Typography
                    sx={{ fontWeight: 'bold', color: 'text.secondary', fontSize: '13.5px' }}
                >
                    FPT Information System
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '12.5px' }}>
                    6,969,696 followers
                </Typography>
                {/* <Button variant="outlined" sx={{ borderRadius: '24px', p: '4px', mt: '2px' }}>
                    <PersonAddIcon />
                    <Typography
                        sx={{
                            fontSize: '12.5px',
                            textTransform: 'capitalize',
                            fontWeight: 'bold',
                            ml: 1,
                        }}
                    >
                        Follow
                    </Typography>
                </Button> */}
                <FollowButton />
            </Box>
        </Box>
    );
}

const schools = [
    {
        schoolImgSrc:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Logo_Hust.png/1200px-Logo_Hust.png',
        schoolName: 'Hanoi University of Science and Technology',
        schoolFollowers: '35,822',
    },
    {
        schoolImgSrc: HCMUTELogo,
        schoolName: 'HCMC University of Technology and Education',
        schoolFollowers: '6,969',
    },
];
function FollowSchool() {
    const navigate = useNavigate();
    const [showMore, setShowMore] = useState(false);
    const handleNavigateToDetailsPage = () => {
        // setShowMore(!showMore);
        navigate('/user/details/interests');
    };
    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    my: 1,
                    mt: 2,
                    mx: 2,
                }}
            >
                {schools.map((school, index) => (
                    <Box sx={{ display: 'flex' }} key={index}>
                        <Box>
                            <img
                                src={school.schoolImgSrc}
                                style={{ height: '50px', width: '50px', objectFit: 'contain' }}
                            />
                        </Box>
                        <Box sx={{ ml: 2 }}>
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
                                {/* HCMC University of Technology and Education */}
                                {school.schoolName}
                            </Typography>
                            <Typography sx={{ color: 'text.secondary', fontSize: '13px' }}>
                                {school.schoolFollowers} followers
                            </Typography>
                            {/* <Button
                                variant="outlined"
                                sx={{ borderRadius: '24px', p: '4px', mt: '2px' }}
                            >
                                <PersonAddIcon />
                                <Typography
                                    sx={{
                                        fontSize: '12.5px',
                                        textTransform: 'capitalize',
                                        fontWeight: 'bold',
                                        ml: 1,
                                    }}
                                >
                                    Follow
                                </Typography>
                            </Button> */}

                            {/* follower button */}
                            {/* <Button
                                variant="outlined"
                                sx={{ borderRadius: '24px', mt: '2px' }}
                                startIcon={<AddIcon sx={{ color: '#808080' }} />}
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
                            </Button> */}
                            <FollowButton />
                        </Box>
                    </Box>
                ))}
                {/* show more button */}
            </Box>
            <Divider sx={{ mt: 3 }} />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {schools.length >= 2 && !showMore && (
                    <Button
                        variant="text"
                        onClick={handleNavigateToDetailsPage}
                        sx={{
                            textTransform: 'capitalize',
                            fontSize: '14px',
                            fontWeight: 'bold',
                        }}
                        fullWidth={true}
                    >
                        show more
                    </Button>
                )}
            </Box>
        </Box>
    );
}
