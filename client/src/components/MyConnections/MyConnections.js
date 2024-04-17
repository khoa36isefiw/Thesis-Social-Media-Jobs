import React from 'react';
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
import { theme } from '../Theme/Theme';
import { ThemeProvider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const sortLists = ['Recently added', 'First name', 'Last name'];

function MyConnections() {
    const [sortMenuAnchorEl, setSortMenuAnchorEl] = React.useState(null);
    const [moreMenuAnchorEl, setMoreMenuAnchorEl] = React.useState(null);
    const [selectedSortItem, setSelectedSortItem] = React.useState(sortLists[0]); // Default to the first item

    const openSortMenu = Boolean(sortMenuAnchorEl);
    const openMoreMenu = Boolean(moreMenuAnchorEl);

    const handleSortMenuClick = (event) => {
        setSortMenuAnchorEl(event.currentTarget);
    };
    const handleMoreMenuClick = (event) => {
        setMoreMenuAnchorEl(event.currentTarget);
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
    return (
        <ThemeProvider theme={theme}>
            <CustomizeBox sx={{ padding: 0 }}>
                <Box sx={{ p: 2 }}>
                    {/* Number of connections */}
                    <Typography sx={{ color: theme.palette.normalText, fontSize: '16px' }}>
                        2 connections
                    </Typography>
                    {/* sorted */}
                    <Box
                        sx={{
                            display: 'flex',
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
                                    <ArrowDropDownIcon
                                        sx={{ color: theme.palette.headerTextColor }}
                                    />
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
                                    <MenuItem
                                        onClick={() => handleSortItemClick(sortItem)}
                                        key={index}
                                    >
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
                    </Box>
                </Box>
                <Divider />
                <Box
                    padding={2}
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar
                            src={
                                'https://cdn.mos.cms.futurecdn.net/FRdq8ZbPetwNDRV9R3hYpP-1200-80.jpg'
                            }
                            alt="User Avatar"
                            sx={{
                                height: '80px',
                                width: '80px',
                                zIndex: 4,
                                '&:hover': {
                                    cursor: 'pointer',
                                },
                            }}
                        />
                        {/* information */}
                        <Box sx={{ marginLeft: 1 }}>
                            {/* name */}
                            <Typography
                                sx={{
                                    color: theme.palette.headingTextColor,
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                }}
                            >
                                Candy Blue
                            </Typography>
                            {/* job position */}
                            <Typography
                                sx={{
                                    color: theme.palette.headerTextColor,
                                    fontSize: '13px',
                                }}
                            >
                                Producer
                            </Typography>
                            {/* time connect to them */}
                            <Typography
                                sx={{
                                    color: theme.palette.headerTextColor,
                                    fontSize: '13px',
                                }}
                            >
                                Connected 2 months ago
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
                                            color: theme.palette.headerTextColor,
                                        }}
                                    >
                                        Remove connections
                                    </Typography>
                                </ListItemText>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Box>
            </CustomizeBox>
        </ThemeProvider>
    );
}

export default MyConnections;
