import React, { useState } from 'react';
import { CustomizeBox } from '../CustomizeBox/CustomizeBox';
import {
    Avatar,
    Box,
    Button,
    ThemeProvider,
    Typography,
    Grid,
    Modal,
    IconButton,
} from '@mui/material';
import DefaultBackgroundImage from '../../assets/images/pn.jpeg';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { mobileScreen, tabletScreen, theme } from '../Theme/Theme';
import MoreConnectionsModal from '../MoreConnectionsModal/MoreConnectionsModal';
import CloseIcon from '@mui/icons-material/Close';
export const suggestedLists = [
    {
        userImage:
            'https://preview.redd.it/if-zoro-got-lost-and-ended-up-in-the-back-rooms-do-you-v0-404t0gtyebcb1.png?width=640&crop=smart&auto=webp&s=a102db19e4adb7807318f61c492c91d693142d68',
        userName: 'Luân Zoro',
        userPosition: 'Backend Developer',
    },
    {
        userImage:
            'https://png.pngtree.com/background/20230408/original/pngtree-mountain-view-in-the-morning-picture-image_2336856.jpg',
        userName: 'Westifle',
        userPosition: 'Blockchain',
    },
    {
        userImage:
            'https://png.pngtree.com/background/20230408/original/pngtree-mountain-view-in-the-morning-picture-image_2336856.jpg',
        userName: 'Westifle',
        userPosition: 'Blockchain',
    },
    {
        userImage:
            'https://png.pngtree.com/background/20230408/original/pngtree-mountain-view-in-the-morning-picture-image_2336856.jpg',
        userName: 'Westifle',
        userPosition: 'Blockchain',
    },
    {
        userImage:
            'https://png.pngtree.com/background/20230408/original/pngtree-mountain-view-in-the-morning-picture-image_2336856.jpg',
        userName: 'Westifle',
        userPosition: 'Blockchain',
    },
    {
        userImage:
            'https://png.pngtree.com/background/20230408/original/pngtree-mountain-view-in-the-morning-picture-image_2336856.jpg',
        userName: 'Westifle',
        userPosition: 'Blockchain',
    },
    {
        userImage:
            'https://png.pngtree.com/background/20230408/original/pngtree-mountain-view-in-the-morning-picture-image_2336856.jpg',
        userName: 'Westifle',
        userPosition: 'Blockchain',
    },
    {
        userImage:
            'https://png.pngtree.com/background/20230408/original/pngtree-mountain-view-in-the-morning-picture-image_2336856.jpg',
        userName: 'Westifle',
        userPosition: 'Blockchain',
    },
    {
        userImage:
            'https://png.pngtree.com/background/20230408/original/pngtree-mountain-view-in-the-morning-picture-image_2336856.jpg',
        userName: 'Westifle',
        userPosition: 'Blockchain',
    },
    {
        userImage:
            'https://png.pngtree.com/background/20230408/original/pngtree-mountain-view-in-the-morning-picture-image_2336856.jpg',
        userName: 'Westifle',
        userPosition: 'Blockchain',
    },
];

function MyNetwork() {
    const [isOpenModalConnections, setIsOpenModalConnections] = useState(false);
    const handleOpenConnectionsModal = () => {
        setIsOpenModalConnections(!isOpenModalConnections);
    };
    const handleCloseConnectionsModal = () => {
        setIsOpenModalConnections(false);
    };
    // only get 8 items from suggestedLists
    const displayedUsers = suggestedLists.slice(0, 8);
    return (
        <ThemeProvider theme={theme}>
            <CustomizeBox
                sx={{
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
                        mb: 1,
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '15px',
                            color: theme.palette.headingTextColor,
                            [mobileScreen]: {
                                maxWidth: '250px',
                                mb: 2,
                            },
                            [tabletScreen]: {
                                width: '250px',
                                mb: 2,
                            },
                        }}
                    >
                        People you may know based on your recent activity
                    </Typography>
                    <Button
                        sx={{
                            fontSize: '13px',
                            color: '#404040',
                            textTransform: 'initial',
                            fontWeight: 'bold',
                            '&:hover': {
                                backgroundColor: '#d9d9d9',
                            },
                        }}
                        onClick={handleOpenConnectionsModal}
                    >
                        See More
                    </Button>
                </Box>
                <Grid container spacing={2}>
                    {displayedUsers.map((user, index) => (
                        <Grid item key={index} xs={6} sm={6} md={6} lg={4} xl={3}>
                            <Box
                                sx={{
                                    height: '290px',
                                    border: '1px solid #d9d9d9',
                                    borderRadius: '8px',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    position: 'relative',
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
                                        mb: '40px',
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
            </CustomizeBox>
            <Modal open={isOpenModalConnections} onClose={handleCloseConnectionsModal}>
                <MoreConnectionsModal handleClose={handleCloseConnectionsModal} />
            </Modal>
        </ThemeProvider>
    );
}

export default MyNetwork;
