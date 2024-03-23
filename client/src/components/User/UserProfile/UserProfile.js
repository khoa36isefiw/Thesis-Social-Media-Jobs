import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Box,
    Avatar,
    Typography,
    IconButton,
    styled,
    Button,
    Menu,
    MenuItem,
    Paper,
    MenuList,
    ListItemIcon,
    ListItemText,
    Tabs,
    Tab,
    Divider,
} from '@mui/material';

import { blue } from '@mui/material/colors';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import EditNoteIcon from '@mui/icons-material/EditNote';
import SendIcon from '@mui/icons-material/Send';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import UserAvatar from '../../../assets/images/avatar.jpeg';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FPTCop from '../../../assets/images/fpt_logo.png';
import HCMUTELogo from '../../../assets/images/hcmute.jpeg';

const CustomizeTypography = styled(Typography)(({ fontSize, isBold = false }) => ({
    fontSize: fontSize || '16px',
    fontWeight: isBold ? 'bold' : 'normal',
}));
const CustomizeButton = styled(Button)(({}) => ({
    py: 1,
    px: 3,
    borderRadius: '25px',
    fontSize: '14px',
    textTransform: 'capitalize',
    fontWeight: 'bold',
}));

function UserProfile() {
    return (
        <Box>
            <ProfileRegion />
            <AboutRegion />
            <EducationRegion />
            <InterestRegion />
        </Box>
    );
}

export default UserProfile;

const moreActionLists = [
    { icon: <SendIcon sx={{ fontSize: '20px' }} />, actionText: 'Send profile in a message' },
    { icon: <SaveAltIcon sx={{ fontSize: '20px' }} />, actionText: 'Save to PDF' },
];

function ProfileRegion() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box
            sx={{
                minHeight: '50px',
                width: '100%',
                borderRadius: '12px',
                border: '1px solid #d9d9d9',
                backgroundColor: '#fff',
            }}
        >
            <Box sx={{ position: 'relative' }}>
                {/* Background Image */}
                <Avatar
                    // src={UserBackgroundImage}
                    src={
                        'https://media.istockphoto.com/id/835370890/photo/sunset-sunrise-with-clouds-light-rays-and-other-atmospheric-effect.jpg?s=612x612&w=0&k=20&c=zGDOBYVFY74wX2gUgkonYGtNl1zenev5mPotAqUlJbM='
                    }
                    alt="User Backgorund Image"
                    sx={{
                        borderTopLeftRadius: '12px',
                        borderTopRightRadius: '12px',
                        borderBottomLeftRadius: '0',
                        borderBottomRightRadius: '0',
                        width: '100%',
                        height: '200px',
                        objectFit: 'contain',
                        zIndex: 2,
                    }}
                />
                {/* Camera Icon */}
                <Box sx={{ position: 'absolute', top: 0, right: 0, zIndex: 3, p: 2 }}>
                    <Avatar sx={{ backgroundColor: '#fff' }}>
                        <IconButton
                            disableTouchRipple
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                },
                            }}
                        >
                            <PhotoCameraIcon
                                sx={{
                                    fontSize: '24px',
                                    color: blue[500],
                                }}
                            />
                        </IconButton>
                    </Avatar>
                </Box>
            </Box>

            {/* User Avatar */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Avatar
                    src={UserAvatar}
                    alt="User Avatar"
                    sx={{
                        mx: 3,
                        height: '164px',
                        width: '164px',
                        mt: -13,
                        zIndex: 4,
                        border: '4px solid #fff',
                        '&:hover': {
                            cursor: 'pointer',
                        },
                    }}
                />

                <IconButton
                    disableTouchRipple
                    sx={{
                        marginRight: 1,
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    <EditNoteIcon
                        sx={{
                            fontSize: '32px',
                        }}
                    />
                </IconButton>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    mt: 3,
                }}
            >
                {/* User Information */}
                <Box sx={{ px: 3 }}>
                    {/* Name */}
                    <CustomizeTypography fontSize="20px" isBold={true}>
                        Huynh Dang Khoa
                    </CustomizeTypography>
                    {/* studied at */}
                    <CustomizeTypography>Student at HCMUT</CustomizeTypography>
                    {/* Address contact */}
                    <CustomizeTypography fontSize="14px" sx={{ mt: 1 }}>
                        Thủ Đức, Ho Chi Minh City, Vietnam
                    </CustomizeTypography>
                    {/* connections --> Link to network tab */}
                    {/* <Link to="/network">
                        <CustomizeTypography fontSize="14px" sx={{ mt: 1 }}>
                            2 connections
                        </CustomizeTypography>
                    </Link> */}
                    <CustomizeTypography
                        fontSize="14px"
                        sx={{
                            mt: 1,
                            fontWeight: 'bold',
                            color: blue[500],
                            '&:hover': {
                                textDecoration: 'underline',
                                cursor: 'pointer',
                            },
                        }}
                        onClick={() => navigate('/network')}
                    >
                        2 connections
                    </CustomizeTypography>
                </Box>
                {/* about Education */}
                <Box sx={{ display: 'flex', px: 3, alignItems: 'center' }}>
                    <Avatar
                        // src={UserBackgroundImage}
                        src={
                            'https://media.istockphoto.com/id/835370890/photo/sunset-sunrise-with-clouds-light-rays-and-other-atmospheric-effect.jpg?s=612x612&w=0&k=20&c=zGDOBYVFY74wX2gUgkonYGtNl1zenev5mPotAqUlJbM='
                        }
                        alt="University Logo"
                        sx={{
                            borderRadius: '0px',
                            width: '40px',
                            height: '40px',
                            objectFit: 'contain',
                            zIndex: 2,
                        }}
                    />

                    <Box sx={{ width: '200px', ml: 1 }}>
                        <CustomizeTypography
                            sx={{
                                fontWeight: '600',
                                '&:hover': {
                                    cursor: 'pointer',
                                    textDecoration: 'underline',
                                },
                            }}
                            fontSize={'14px'}
                        >
                            HCMC University of Technology and Education
                        </CustomizeTypography>
                    </Box>
                </Box>
            </Box>
            {/* Buttons section */}
            <Box sx={{ px: 3, my: 2 }}>
                <CustomizeButton variant="contained" startIcon={<SendIcon />}>
                    Message
                </CustomizeButton>
                <CustomizeButton
                    variant="outlined"
                    sx={{
                        ml: 1,
                    }}
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    endIcon={<MoreVertIcon />}
                >
                    More
                </CustomizeButton>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuList>
                        {moreActionLists.map((item, index) => (
                            <MenuItem key={index} onClick={handleClose}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText>
                                    <Typography sx={{ fontSize: '13px' }}>
                                        {item.actionText}
                                    </Typography>
                                </ListItemText>
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>
            </Box>
        </Box>
    );
}

function AboutRegion() {
    return (
        <Box
            sx={{
                minHeight: '50px',
                width: '100%',
                borderRadius: '12px',
                border: '1px solid #d9d9d9',
                backgroundColor: '#fff',
                p: 3,
                mt: 2,
                mb: 2,
            }}
        >
            <CustomizeTypography fontSize="20px" isBold={true}>
                About
            </CustomizeTypography>
            <CustomizeTypography fontSize={'14px'} sx={{ textAlign: 'justify' }}>
                As a backend intern, I aim to improve skills such as designing solutions for
                software features, writing high-quality code to implement software features or fix
                bugs, as well as performing unit testing. Through these efforts, I intend to acquire
                specialized knowledge that can be applied to the company's corresponding business
                needs, thereby assisting the company in future projects. My long-term goal is to
                advance to the role of Backend Developer within three years and, further down the
                road, to become a Fullstack Developer.
            </CustomizeTypography>
        </Box>
    );
}

function EducationRegion() {
    return (
        <Box
            sx={{
                minHeight: '50px',
                width: '100%',
                borderRadius: '12px',
                border: '1px solid #d9d9d9',
                backgroundColor: '#fff',
                p: 3,
                mt: 2,
                mb: 2,
            }}
        >
            <CustomizeTypography fontSize="20px" isBold={true}>
                Education
            </CustomizeTypography>
            <Box
                sx={{
                    mt: 1,
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                }}
            >
                <Avatar
                    // src={UserBackgroundImage}
                    src={
                        'https://media.istockphoto.com/id/835370890/photo/sunset-sunrise-with-clouds-light-rays-and-other-atmospheric-effect.jpg?s=612x612&w=0&k=20&c=zGDOBYVFY74wX2gUgkonYGtNl1zenev5mPotAqUlJbM='
                    }
                    alt="University Logo"
                    sx={{
                        borderRadius: '0px',
                        width: '40px',
                        height: '40px',
                        objectFit: 'contain',
                        zIndex: 2,
                    }}
                />

                <Box sx={{ ml: 1 }}>
                    <CustomizeTypography
                        sx={{
                            fontWeight: '600',
                            '&:hover': {
                                cursor: 'pointer',
                                textDecoration: 'underline',
                            },
                        }}
                        fontSize={'16px'}
                    >
                        HCMC University of Technology and Education
                    </CustomizeTypography>
                    <CustomizeTypography fontSize={'14px'}>
                        Information Technology
                    </CustomizeTypography>
                    <CustomizeTypography fontSize={'14px'}>Grade: 3.06</CustomizeTypography>
                </Box>
            </Box>
        </Box>
    );
}

const TabPanel = ({ children, value, index, ...other }) => (
    <div
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
        {...other}
    >
        {value === index && <Box p={0}>{children}</Box>}
    </div>
);

function InterestRegion() {
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
                aria-label="Tabs example"
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

function FollowCompany() {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
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
                <Button variant="outlined" sx={{ borderRadius: '24px', p: '4px', mt: '2px' }}>
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
                </Button>
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
    const [showMore, setShowMore] = useState(false);
    const toggleShowMore = () => {
        setShowMore(!showMore);
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
                    mt: 4,
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
                            <Button
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
                            </Button>
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
                        onClick={toggleShowMore}
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
