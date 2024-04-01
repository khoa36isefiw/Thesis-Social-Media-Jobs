import React, { useState } from 'react';
import {
    Box,
    Menu,
    MenuItem,
    MenuList,
    Typography,
    ListItemIcon,
    ListItemText,
    Button,
} from '@mui/material';

// const moreActionLists = [
//     { icon: <SendIcon sx={{ fontSize: '20px' }} />, actionText: 'Send profile in a message' },
//     { icon: <SaveAltIcon sx={{ fontSize: '20px' }} />, actionText: 'Save to PDF' },
// ];

function MoreButtonModal({ anchorEl, setAnchorEl, open, handleClick, handleClose, lists }) {
    // const [anchorEl, setAnchorEl] = useState(null);
    // const open = Boolean(anchorEl);
    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    return (
        <Box>
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
                    {lists.map((item, index) => (
                        <MenuItem key={index} onClick={handleClose}>
                            <ListItemIcon>{item}</ListItemIcon>
                            <ListItemText>
                                <Typography sx={{ fontSize: '13px' }}>{item}</Typography>
                            </ListItemText>
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </Box>
    );
}

export default MoreButtonModal;
