import React, { useEffect } from 'react';
import { CustomizeBox } from '../CustomizeBox/CustomizeBox';
import {
    Avatar,
    Box,
    Button,
    Divider,
    IconButton,
    InputAdornment,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    TextField,
    Typography,
} from '@mui/material';
import { ipadProScreen, mobileScreen, tabletScreen, theme } from '../Theme/Theme';
import WestIcon from '@mui/icons-material/West';
import SearchIcon from '@mui/icons-material/Search';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { blue } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ChatIcon from '@mui/icons-material/Chat';
const sortLists = ['Recently comments', 'All comments'];
const filterCommentLists = [
    {
        commentText: 'Recently comments',
        commentSubtitle: 'See all comments, from newest to oldest over time',
        commentIcon: <ScheduleIcon sx={{ fontSize: '24px', color: '#333' }} />,
    },
    {
        commentText: 'All comments',
        commentSubtitle: 'See all comments over time',
        commentIcon: <ChatIcon sx={{ fontSize: '24px', color: '#333' }} />,
    },
];

function FilterComments() {
    const [getFilterComment, setGetFilterComment] = React.useState(null);
    // Default to the first item
    const [selectedOptionFilter, setSelectedOptionFilter] = React.useState(
        filterCommentLists[0]?.commentText,
    );
    const [isMobile, setIsMobile] = React.useState(false);

    const openSortMenu = Boolean(getFilterComment);

    const handleSortMenuClick = (event) => {
        setGetFilterComment(event.currentTarget);
    };

    const handleSortMenuClose = () => {
        setGetFilterComment(null);
    };

    const handleGetFilterComment = (item) => {
        setSelectedOptionFilter(item);
        setGetFilterComment(null);
    };

    //choose the screen size
    const handleResize = () => {
        if (window.innerWidth <= 599) {
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
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                my: 1,
            }}
        >
            <Typography sx={{ color: theme.palette.normalText, fontSize: '14px' }}>
                Filter Comments:
            </Typography>
            <Button
                disableTouchRipple
                endIcon={<ArrowDropDownIcon sx={{ color: theme.palette.headerTextColor }} />}
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
                    {selectedOptionFilter}
                </Typography>
            </Button>
            <Menu
                anchorEl={getFilterComment}
                open={openSortMenu}
                onClose={handleSortMenuClose}
                sx={{
                    '.MuiList-root': { p: 0 },
                    '.MuiPaper-rounded': { borderRadius: '12px' },
                    '.MuiPaper-root': {
                        // boxShadow: '2px 4px 4px #b3b3b3',
                        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.75)',
                    },
                }}
            >
                {filterCommentLists.map((filterComment, index) => (
                    <MenuItem
                        onClick={() => handleGetFilterComment(filterComment.commentText)}
                        key={index}
                        sx={{ display: 'flex', alignItems: 'flex-start' }}
                    >
                        {/* <Box > */}
                        <ListItemIcon>{filterComment.commentIcon}</ListItemIcon>
                        <ListItemText
                            sx={{
                                p: 0,
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: '14px',
                                    color: theme.palette.headerTextColor,
                                    fontWeight: 'bold',
                                }}
                            >
                                {filterComment.commentText}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '13px',
                                    color: theme.palette.headerTextColor,
                                    width: '200px',
                                    overflow: 'hidden',
                                    whiteSpace: 'wrap',
                                }}
                            >
                                {filterComment.commentSubtitle}
                            </Typography>
                        </ListItemText>
                        {/* </Box> */}
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}

export default FilterComments;
