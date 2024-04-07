// this layout for another user
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Avatar,
    Typography,
    IconButton,
    styled,
    Button,
    Menu,
    MenuItem,
    MenuList,
    ListItemIcon,
    ListItemText,
    Modal,
} from '@mui/material';
import { blue } from '@mui/material/colors';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import EditNoteIcon from '@mui/icons-material/EditNote';
import SendIcon from '@mui/icons-material/Send';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UserAvatar from '../../../assets/images/avatar.jpeg';
import BackgroundImageModal from '../../BackgroundImageModal/BackgroundImageModal';
import EditUserBackgroundImage from '../../EditUserBackgroundImage/EditUserBackgroundImage';
import EditUserProfile from '../../EditUserProfile/EditUserProfile';

// define
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

// define button following by schools and companies

const moreActionLists = [
    { icon: <SendIcon sx={{ fontSize: '20px' }} />, actionText: 'Send profile in a message' },
    { icon: <SaveAltIcon sx={{ fontSize: '20px' }} />, actionText: 'Save to PDF' },
];

// User information section
export function UserProfile() {
    const navigate = useNavigate();
    const [activeModal, setActiveModal] = useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOpenModal = (modalType) => {
        setActiveModal(modalType);
    };

    const handleCloseModal = () => {
        setActiveModal(null);
    };

    const handleOpenUserProfile = () => {
        setIsUserProfileOpen(true);
    };

    const handleCloseUserProfile = () => {
        setIsUserProfileOpen(false);
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
                    onClick={() => handleOpenModal('userBackground')}
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
                        '&:hover': {
                            cursor: 'pointer',
                        },
                    }}
                />
                {/* Camera Icon */}
                <Box
                    sx={{ position: 'absolute', top: 0, right: 0, zIndex: 3, p: 2 }}
                    onClick={() => handleOpenModal('editUserBackground')}
                >
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
                                    // color: blue[700],
                                    color: '#0b66c2',
                                    '&:hover': { color: blue[900] },
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
                        mr: 3,
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                    }}
                    // onClick={() => handleOpenModal('editUserProfile')}
                    onClick={handleOpenUserProfile}
                >
                    <EditNoteIcon
                        sx={{
                            fontSize: '28px',
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

                    {/* Address contact and Contact user Information*/}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <CustomizeTypography
                            fontSize="14px"
                            sx={{
                                mt: 1,
                            }}
                        >
                            Thủ Đức, Ho Chi Minh City, Vietnam
                        </CustomizeTypography>
                        <Box
                            sx={{
                                mt: 1,
                                width: '2px',
                                height: '2px',
                                bgcolor: '#333',
                                borderRadius: '50%',
                                ml: 1,
                            }}
                        />
                        {/* not yet --> must add a modal to show user contact information */}
                        <CustomizeTypography
                            fontSize={'14px'}
                            sx={{
                                mt: 1,
                                ml: 1,
                                color: blue[500],

                                '&:hover': {
                                    color: blue[700],
                                    cursor: 'pointer',
                                    textDecoration: 'underline',
                                    fontWeight: 'bold',
                                },
                            }}
                        >
                            Contact info
                        </CustomizeTypography>
                    </Box>

                    {/* connections --> Link to network tab */}
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

            {/* Open user background image - show the backgroud image of user */}
            <Modal open={activeModal === 'userBackground'} onClose={handleCloseModal}>
                <BackgroundImageModal
                    imgUrl={
                        'https://media.istockphoto.com/id/835370890/photo/sunset-sunrise-with-clouds-light-rays-and-other-atmospheric-effect.jpg?s=612x612&w=0&k=20&c=zGDOBYVFY74wX2gUgkonYGtNl1zenev5mPotAqUlJbM='
                    }
                    handleClose={handleCloseModal}
                />
            </Modal>

            {/* edit user background image */}
            <Modal open={activeModal === 'editUserBackground'} onClose={handleCloseModal}>
                <EditUserBackgroundImage handleClose={handleCloseModal} />
            </Modal>

            {/* Open modal to edit user profile/ information */}

            <EditUserProfile isOpen={isUserProfileOpen} handleClose={handleCloseUserProfile} />
        </Box>
    );
}
