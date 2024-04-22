import React, { useState } from 'react';
import { Avatar, Box, Button, Container, Divider, Grid, Tab, Typography } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { CustomizeBox } from '../CustomizeBox/CustomizeBox';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import { ipadProScreen, mobileScreen, tabletScreen, theme } from '../Theme/Theme';

function FollowingAndFollowers() {
    return (
        <CustomizeBox sx={{ p: 0 }}>
            <CustomizeTypography sx={{ p: 2 }}>Your Name's Network</CustomizeTypography>
            <Divider />
            <LabTabs />
        </CustomizeBox>
    );
}

export default FollowingAndFollowers;

function LabTabs() {
    const [value, setValue] = React.useState('following');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange}>
                        <Tab
                            sx={{
                                '&:hover': {
                                    backgroundColor: '#cecece',
                                },
                            }}
                            label={
                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        textTransform: 'capitalize',
                                    }}
                                >
                                    Following
                                </Typography>
                            }
                            value="following"
                        />
                        <Tab
                            sx={{
                                '&:hover': {
                                    backgroundColor: '#b7b5b5',
                                },
                            }}
                            label={
                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        textTransform: 'capitalize',
                                    }}
                                >
                                    Followers
                                </Typography>
                            }
                            value="followers"
                        />
                    </TabList>
                </Box>
                <TabPanel value="following">
                    <IsFollowing />
                </TabPanel>
                <TabPanel value="followers">
                    <YourFollowers />
                </TabPanel>
            </TabContext>
        </Box>
    );
}

const listIsFollowing = [
    {
        userImage:
            'https://mf.b37mrtl.ru/rbthmedia/images/2023.01/article/63c54448fa390f007f458924.jpg',
        userName: 'Siberian Husky',
        userPosition: 'Backend Developer, Tech Lead',
    },
    {
        userImage:
            'https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTk2NzAyNjMyNjI1MDU1MjU3/pros-and-cons-of-owning-siberian-huskies.jpg',
        userName: 'Husky Brown',
        userPosition: 'Front-end Developer, Designer',
    },
    {
        userImage:
            'https://highlandcanine.com/wp-content/uploads/2021/01/siberian-husky-in-the-snow.jpg',
        userName: 'Red Siberian',
        userPosition: 'Cloud Solution, Data Scientist',
    },
];

function IsFollowing() {
    return (
        <Box>
            <CustomizeTypography fs="14px">
                You are following 3 people out of your network
            </CustomizeTypography>
            {/* image, name, position, buton is following */}
            {listIsFollowing.map((user, index) => (
                <Box>
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            py: 2,
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Box
                                sx={{
                                    height: '60px',
                                    width: '60px',
                                    position: 'relative',
                                    [mobileScreen]: {
                                        height: '50px',
                                        width: '50px',
                                    },
                                    [tabletScreen]: {
                                        height: '60px',
                                        width: '60px',
                                    },
                                    [ipadProScreen]: {
                                        height: '70px',
                                        width: '70px',
                                    },
                                }}
                            >
                                <Avatar
                                    src={user.userImage}
                                    alt={user.userName}
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        zIndex: 2,
                                        '&:hover': {
                                            cursor: 'pointer',
                                        },
                                        objectFit: 'cover',
                                        // position: 'relative',
                                    }}
                                />
                            </Box>
                            {/* information */}
                            <Box sx={{ marginLeft: 1 }}>
                                {/* name */}
                                <Typography
                                    sx={{
                                        color: theme.palette.headingTextColor,
                                        fontSize: '18px',
                                        fontWeight: 'bold',

                                        [mobileScreen]: {
                                            fontSize: '13.5px',
                                        },
                                    }}
                                >
                                    {user.userName}
                                </Typography>
                                {/* job position */}
                                <Typography
                                    sx={{
                                        color: theme.palette.headerTextColor,
                                        fontSize: '13px',
                                        [mobileScreen]: {
                                            fontSize: '12px',
                                        },
                                    }}
                                >
                                    {user.userPosition}
                                </Typography>
                                {/* time connect to them */}
                                <Typography
                                    sx={{
                                        color: theme.palette.headerTextColor,
                                        fontSize: '13px',
                                        [mobileScreen]: {
                                            fontSize: '12px',
                                        },
                                    }}
                                >
                                    {user.connectionTime}
                                </Typography>
                            </Box>
                        </Box>

                        <Box>
                            <Button
                                variant="outlined"
                                sx={{
                                    textTransform: 'initial',
                                    fontSize: '14px',
                                    borderRadius: '24px',
                                    px: 3,
                                    [mobileScreen]: {
                                        fontSize: '12px',
                                        px: 2,
                                    },
                                }}
                            >
                                Following
                            </Button>
                        </Box>
                    </Box>
                    {index === listIsFollowing.length - 1 ? (
                        ''
                    ) : (
                        <Box sx={{ ml: 9, [mobileScreen]: { ml: 9 } }}>
                            <Divider />
                        </Box>
                    )}
                </Box>
            ))}
        </Box>
    );
}

// function for followers who are following us
const listFollowers = [
    {
        userImage:
            'https://cdn.tgdd.vn/Files/2021/04/16/1343844/tim-hieu-ve-giong-cho-shiba-nguon-goc-dac-diem-cach-nuoi-bang-gia-202203281530392436.jpg',
        userName: 'Shiba ',
        userPosition: 'Backend Developer, Tech Lead',
    },
    {
        userImage:
            'https://image.sggp.org.vn/w1000/Uploaded/2024/dufkxmeyxq/2021_11_09/screenshotatnov0922-08-46_LCRP.png.webp',
        userName: 'Inu Bitcoin',
        userPosition: 'Front-end Developer, Designer',
    },
];

function YourFollowers() {
    return (
        <Box>
            <CustomizeTypography fs="14px">2 people are following you</CustomizeTypography>
            {/* image, name, position, buton is following */}
            {listFollowers.map((user, index) => (
                <Box>
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            py: 2,
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Box
                                sx={{
                                    height: '60px',
                                    width: '60px',
                                    position: 'relative',
                                    [mobileScreen]: {
                                        height: '50px',
                                        width: '50px',
                                    },
                                    [tabletScreen]: {
                                        height: '60px',
                                        width: '60px',
                                    },
                                    [ipadProScreen]: {
                                        height: '70px',
                                        width: '70px',
                                    },
                                }}
                            >
                                <Avatar
                                    src={user.userImage}
                                    alt={user.userName}
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        zIndex: 2,
                                        '&:hover': {
                                            cursor: 'pointer',
                                        },
                                        objectFit: 'cover',
                                        // position: 'relative',
                                    }}
                                />
                            </Box>
                            {/* information */}
                            <Box sx={{ marginLeft: 1 }}>
                                {/* name */}
                                <Typography
                                    sx={{
                                        color: theme.palette.headingTextColor,
                                        fontSize: '18px',
                                        fontWeight: 'bold',

                                        [mobileScreen]: {
                                            fontSize: '13.5px',
                                        },
                                    }}
                                >
                                    {user.userName}
                                </Typography>
                                {/* job position */}
                                <Typography
                                    sx={{
                                        color: theme.palette.headerTextColor,
                                        fontSize: '13px',
                                        [mobileScreen]: {
                                            fontSize: '12px',
                                        },
                                    }}
                                >
                                    {user.userPosition}
                                </Typography>
                                {/* time connect to them */}
                                <Typography
                                    sx={{
                                        color: theme.palette.headerTextColor,
                                        fontSize: '13px',
                                        [mobileScreen]: {
                                            fontSize: '12px',
                                        },
                                    }}
                                >
                                    {user.connectionTime}
                                </Typography>
                            </Box>
                        </Box>

                        <Box>
                            <Button
                                variant="outlined"
                                sx={{
                                    textTransform: 'initial',
                                    fontSize: '14px',
                                    borderRadius: '24px',
                                    px: 3,
                                    [mobileScreen]: {
                                        fontSize: '12px',
                                        px: 2,
                                    },
                                }}
                            >
                                Following
                            </Button>
                        </Box>
                    </Box>
                    {index === listFollowers.length - 1 ? (
                        ''
                    ) : (
                        <Box sx={{ ml: 9, [mobileScreen]: { ml: 9 } }}>
                            <Divider />
                        </Box>
                    )}
                </Box>
            ))}
        </Box>
    );
}
