import React, { useEffect } from 'react';
import { CustomizeBox } from '../CustomizeBox/CustomizeBox';
import {
    Avatar,
    Box,
    Button,
    Divider,
    IconButton,
    InputAdornment,
    ListItemText,
    Menu,
    MenuItem,
    TextField,
    Typography,
} from '@mui/material';
import { mobileScreen, tabletScreen, theme } from '../Theme/Theme';
import WestIcon from '@mui/icons-material/West';
import SearchIcon from '@mui/icons-material/Search';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { blue } from '@mui/material/colors';

const sortLists = ['Recently added', 'First name', 'Last name'];
const listConnections = [
    {
        userConnectionImage: 'https://cdn.mos.cms.futurecdn.net/FRdq8ZbPetwNDRV9R3hYpP-1200-80.jpg',
        userConnectionName: 'Candy Blue',
        userConnectionPosition: 'Producer',
        connectionTime: 'Connected 2 months ago',
    },
    {
        userConnectionImage:
            'https://static.wixstatic.com/media/ef92aa_f122790bd7e54ec4b378debe6b8907ba~mv2.jpg/v1/fill/w_980,h_545,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ef92aa_f122790bd7e54ec4b378debe6b8907ba~mv2.jpg',
        userConnectionName: 'Tiffany',
        userConnectionPosition: 'Front-end Developer',
        connectionTime: 'Connected 3 months ago',
    },
    {
        userConnectionImage:
            'https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTk2NzAyNjMyNjI1MDU1MjU3/pros-and-cons-of-owning-siberian-huskies.jpg',
        userConnectionName: 'Siberian Huskies',
        userConnectionPosition: 'Tester',
        connectionTime: 'Connected 3 months ago',
    },
    {
        userConnectionImage:
            '    https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9VjOpCi54d6luijP_fFpWQstePYMKMZT00OvBnUiM-P7rnLqnuymklLU6PZinN2vlmq4&usqp=CAU',
        userConnectionName: 'Husky Sakhalin',
        userConnectionPosition: 'Back-end Developer',
        connectionTime: 'Connected 3 months ago',
    },
];

function MyConnections() {
    const [sortMenuAnchorEl, setSortMenuAnchorEl] = React.useState(null);
    const [moreMenuAnchorEl, setMoreMenuAnchorEl] = React.useState(null);
    // Default to the first item
    const [selectedSortItem, setSelectedSortItem] = React.useState(sortLists[0]);
    const [isMobile, setIsMobile] = React.useState(false);

    const openSortMenu = Boolean(sortMenuAnchorEl);
    const openMoreMenu = Boolean(moreMenuAnchorEl);

    const handleSortMenuClick = (event) => {
        setSortMenuAnchorEl(event.currentTarget);
    };
    const handleMoreMenuClick = (event) => {
        setMoreMenuAnchorEl(event.currentTarget);
        console.log('Test mobile: ', isMobile);
    };
    const handleSortMenuClose = () => {
        setSortMenuAnchorEl(null);
    };
    const handleMoreMenuClose = () => {
        setMoreMenuAnchorEl(null);
    };

    const handleSortItemClick = (item) => {
        setSelectedSortItem(item);
        setSortMenuAnchorEl(null);
    };

    //choose the screen size
    const handleResize = () => {
        if (window.innerWidth <= 739) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    // create an event listener
    useEffect(() => {
        window.addEventListener('resize', handleResize);
    });

    return (
        // <ThemeProvider theme={theme}>
        <CustomizeBox
            sx={{
                padding: 0,
                [mobileScreen]: {
                    borderRadius: 0,
                },
            }}
        >
            <Box sx={{ p: 2 }}>
                {/* Number of connections */}

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {/* back to previous step */}
                    {isMobile ? (
                        <IconButton>
                            <WestIcon sx={{ fontSize: '24px' }} />
                        </IconButton>
                    ) : null}
                    <Typography sx={{ color: theme.palette.normalText, fontSize: '16px' }}>
                        2 connections
                    </Typography>
                </Box>
                {/* sorted */}
                <Box
                    sx={{
                        display: 'flex',
                        [mobileScreen]: {
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                        },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Typography sx={{ color: theme.palette.normalText, fontSize: '16px' }}>
                            Sort by:
                        </Typography>
                        <Button
                            disableTouchRipple
                            endIcon={
                                <ArrowDropDownIcon sx={{ color: theme.palette.headerTextColor }} />
                            }
                            sx={{
                                textTransform: 'initial',
                                color: theme.palette.headerTextColor,
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                },
                            }}
                            onClick={handleSortMenuClick}
                        >
                            <Typography
                                sx={{
                                    fontSize: '14px',
                                    color: theme.palette.headerTextColor,
                                    fontWeight: 'bold',
                                }}
                            >
                                {/* Recently added */}
                                {/* get sort item just selected */}
                                {selectedSortItem}
                            </Typography>
                        </Button>
                        <Menu
                            anchorEl={sortMenuAnchorEl}
                            open={openSortMenu}
                            onClose={handleSortMenuClose}
                            sx={{
                                '.MuiList-root': { p: 0 },
                                '.MuiPaper-rounded': { borderRadius: '12px' },
                                '.MuiPaper-root': {
                                    boxShadow: '2px 4px 4px #b3b3b3',
                                },
                            }}
                        >
                            {sortLists.map((sortItem, index) => (
                                <MenuItem onClick={() => handleSortItemClick(sortItem)} key={index}>
                                    <ListItemText
                                        sx={{
                                            p: 0,
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: '13px',
                                                color: theme.palette.headerTextColor,
                                            }}
                                        >
                                            {sortItem}
                                        </Typography>
                                    </ListItemText>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <TextField
                            placeholder="Search by name..."
                            sx={{
                                '.MuiInputBase-root': {
                                    height: '35px',
                                    fontSize: '12.5px',
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Typography
                            sx={{
                                ml: 1,
                                fontSize: '13px',
                                color: blue[700],
                                fontWeight: 'bold',
                                '&:hover': {
                                    textDecoration: 'underline',
                                    cursor: 'pointer',
                                },
                            }}
                        >
                            Search with filters
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Divider />
            {listConnections.map((user, index) => (
                <Box>
                    <Box
                        key={index}
                        padding={2}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
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
                                    height: '80px',
                                    width: '80px',
                                    position: 'relative',
                                    [mobileScreen]: {
                                        height: '50px',
                                        width: '50px',
                                    },
                                }}
                            >
                                <Avatar
                                    src={user.userConnectionImage}
                                    alt={user.userConnectionName}
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
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        height: '20px',
                                        width: '20px',
                                        backgroundColor: 'green',
                                        right: 0,
                                        bottom: 0,
                                        borderRadius: '50%',
                                        border: '2px solid white',
                                        zIndex: 3,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            left: '50%',
                                            top: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            height: '8px',
                                            width: '8px',
                                            backgroundColor: 'white',
                                            borderRadius: '50%',
                                            zIndex: 4,
                                        }}
                                    />
                                </Box>
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
                                    {user.userConnectionName}
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
                                    {user.userConnectionPosition}
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
                                Message
                            </Button>
                            <IconButton onClick={handleMoreMenuClick}>
                                <MoreHorizIcon sx={{ fontSize: '24px' }} />
                            </IconButton>
                            <Menu
                                anchorEl={moreMenuAnchorEl}
                                open={openMoreMenu}
                                onClose={handleMoreMenuClose}
                                sx={{
                                    '.MuiList-root': { p: 0 },
                                    '.MuiPaper-rounded': { borderRadius: '12px' },
                                    '.MuiPaper-root': {
                                        boxShadow: '2px 4px 4px #b3b3b3',
                                    },
                                }}
                            >
                                <MenuItem onClick={handleMoreMenuClose}>
                                    <DeleteForeverIcon sx={{ fontSize: '24px' }} />
                                    <ListItemText>
                                        <Typography
                                            sx={{
                                                ml: 1,
                                                fontSize: '13px',
                                                color: theme.palette.headingTextColor,
                                            }}
                                        >
                                            Remove connections
                                        </Typography>
                                    </ListItemText>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Box>
                    {index === listConnections.length - 1 ? (
                        ''
                    ) : (
                        <Box sx={{ ml: 13, [mobileScreen]: { ml: 9 } }}>
                            <Divider />
                        </Box>
                    )}
                </Box>
            ))}
        </CustomizeBox>
        // </ThemeProvider>
    );
}

export default MyConnections;
