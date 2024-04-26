import React, { useState, useEffect } from 'react';
import {
    Avatar,
    Box,
    Button,
    Container,
    Divider,
    Grid,
    Tab,
    Typography,
    mobileStepperClasses,
} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { CustomizeBox } from '../CustomizeBox/CustomizeBox';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import { ipadProScreen, mobileScreen, tabletScreen, theme } from '../Theme/Theme';

function FollowingAndFollowers() {
    return (
        <CustomizeBox
            sx={{
                padding: 0,
                [mobileScreen]: {
                    borderRadius: 0,
                },
            }}
        >
            <CustomizeTypography sx={{ p: 2 }}>Your Name's Network</CustomizeTypography>
            <Divider />
            <LabTabs />
        </CustomizeBox>
    );
}

export default FollowingAndFollowers;

function LabTabs() {
    const [value, setValue] = useState('following');

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
                <TabPanel value="following" sx={{ p: 2, [mobileScreen]: { p: 0 } }}>
                    <IsFollowing />
                </TabPanel>
                <TabPanel value="followers" sx={{ p: 2, [mobileScreen]: { p: 0 } }}>
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
    // check the screen of device if it is mobile
    // const [isMobile, setIsMobile] = useState(false);
    // //choose the screen size
    // const handleResize = () => {
    //     if (window.innerWidth <= 599) {
    //         setIsMobile(true);
    //     } else {
    //         setIsMobile(false);
    //     }
    // };

    // // create an event listener
    // useEffect(() => {
    //     window.addEventListener('resize', handleResize);
    // });

    return (
        <Box>
            <CustomizeTypography
                fs="14px"
                sx={{
                    [mobileScreen]: {
                        px: 2,
                        pt: 2,
                    },
                }}
            >
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
                            [mobileScreen]: {
                                p: 2,
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Box
                                sx={{
                                    height: '60px',
                                    width: '60px',
                                    position: 'relative',
                                    [ipadProScreen]: {
                                        height: '70px',
                                        width: '70px',
                                    },
                                    [mobileScreen]: {
                                        height: '50px',
                                        width: '50px',
                                    },
                                    [tabletScreen]: {
                                        height: '60px',
                                        width: '60px',
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
                                        [mobileScreen]: {
                                            height: '50px',
                                            width: '50px',
                                            // display: 'none',
                                        },
                                        // position: 'relative',
                                    }}
                                />
                            </Box>
                            {/* information */}
                            <Box
                                sx={{
                                    marginLeft: 1,
                                }}
                            >
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

                        {/* <Box>
                            <Button
                                variant="outlined"
                                sx={{
                                    textTransform: 'initial',
                                    fontSize: '14px',
                                    borderRadius: '24px',
                                    color: theme.palette.headerTextColor,
                                    fontWeight: 'bold',
                                    px: 3,
                                    borderColor: theme.palette.headerTextColor,
                                    '&:hover': {
                                        borderColor: theme.palette.headerTextColor,
                                        // backgroundColor: theme.palette.headerTextColor,
                                        backgroundColor: '#eeeeee',
                                    },
                                    [mobileScreen]: {
                                        fontSize: '12px',
                                        px: 2,
                                    },
                                }}
                            >
                                Following
                            </Button>
                        </Box> */}
                        <ButtonFollowing />
                    </Box>
                    {index === listIsFollowing.length - 1 ? (
                        ''
                    ) : (
                        <Box
                            sx={{
                                ml: 9,
                                [mobileScreen]: {
                                    ml: 0,
                                },
                            }}
                        >
                            <Divider />
                        </Box>
                    )}
                </Box>
            ))}
            <Box
                sx={{
                    [mobileScreen]: {
                        px: 2,
                    },
                }}
            >
                <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                        textTransform: 'initial',
                        borderRadius: '24px',
                        borderColor: '#404040',
                        color: '#404040',
                        fontSize: '14px',
                        '&:hover': {
                            borderColor: theme.palette.headerTextColor,
                            // backgroundColor: theme.palette.headerTextColor,
                            backgroundColor: '#eeeeee',
                            fontWeight: 'bold',
                        },
                        [mobileScreen]: {
                            fontSize: '12px',
                            fullWidth: false,
                            mb: 3,
                        },
                    }}
                >
                    Show more results
                </Button>
            </Box>
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
            <CustomizeTypography
                fs="14px"
                sx={{
                    [mobileScreen]: {
                        px: 2,
                        pt: 2,
                    },
                }}
            >
                2 people are following you
            </CustomizeTypography>
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
                            [mobileScreen]: {
                                p: 2,
                            },
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
                                    [ipadProScreen]: {
                                        height: '70px',
                                        width: '70px',
                                    },
                                    [mobileScreen]: {
                                        height: '50px',
                                        width: '50px',
                                    },
                                    [tabletScreen]: {
                                        height: '60px',
                                        width: '60px',
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
                                        [mobileScreen]: {
                                            height: '50px',
                                            width: '50px',
                                        },
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

                        {/* <Box>
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
                        </Box> */}
                        <ButtonFollowing />
                    </Box>
                    {index === listFollowers.length - 1 ? (
                        ''
                    ) : (
                        <Box sx={{ ml: 9, [mobileScreen]: { ml: 0 } }}>
                            <Divider />
                        </Box>
                    )}
                </Box>
            ))}
        </Box>
    );
}

//dating many people doesn't mean you're beautiful. A cheap product attracts many customers
// define button following
const ButtonFollowing = () => {
    return (
        <Button
            variant="outlined"
            sx={{
                textTransform: 'initial',
                fontSize: '14px',
                borderRadius: '24px',
                color: theme.palette.headerTextColor,
                fontWeight: 'bold',
                px: 3,
                borderColor: theme.palette.headerTextColor,
                '&:hover': {
                    borderColor: theme.palette.headerTextColor,
                    // backgroundColor: theme.palette.headerTextColor,
                    backgroundColor: '#eeeeee',
                },
                [mobileScreen]: {
                    fontSize: '12px',
                    px: 2,
                },
            }}
        >
            Following
        </Button>
    );
};
