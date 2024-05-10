import React, { useState } from 'react';
import {
    Avatar,
    Box,
    Menu,
    MenuList,
    MenuItem,
    ListItemText,
    Typography,
    IconButton,
    ListItemIcon,
    Button,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { theme } from '../Theme/Theme';

const sendMessageActionsList = [
    { actionTitle: 'Press Enter to Send', actionSubTitle: 'Pressing Enter will send message' },
    { actionTitle: 'Click Send', actionSubTitle: 'Clicking Send will send message' },
];

function SendMessageActions({ handleSendButtonClick, isEmpty }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [showOptions, setShowOptions] = useState(false);
    // selected item in menu
    const [selectedOption, setSelectedOption] = useState(sendMessageActionsList[0]); // default value

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        // mở menu options khi click vào icon "more options"
        setShowOptions(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
        // đóng menu options khi click vào item trong menu
        // hoặc bất kỳ nơi nào khác trên màn hình
        setShowOptions(false);
    };

    const handleSelectedOption = (option) => {
        setSelectedOption(option);

        // close menu after choosing option
        handleClose();
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {selectedOption === sendMessageActionsList[0] ? (
                <Typography sx={{ fontSize: '13px', color: theme.palette.primaryText }}>
                    Press Enter to Send
                </Typography>
            ) : (
                <Button
                    variant="contained"
                    onClick={handleSendButtonClick}
                    sx={{
                        textTransform: 'initial',
                        fontSize: '14px',
                        padding: '2px 24px',
                        borderRadius: '24px',
                    }}
                    disabled={isEmpty}
                >
                    Send
                </Button>
            )}

            <IconButton>
                <MoreHorizIcon
                    sx={{ fontSize: '24px' }}
                    // show menu options
                    onClick={handleClick}
                />
            </IconButton>
            <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
                <Menu
                    anchorEl={anchorEl}
                    open={showOptions}
                    onClose={handleClose}
                    sx={{
                        // ml: -18,
                        position: 'absolute',
                        top: '-8%',
                        right: 0,
                    }}
                >
                    <MenuList sx={{ px: 0, py: 0 }}>
                        {sendMessageActionsList.map((action, index) => (
                            <MenuItem key={index} onClick={() => handleSelectedOption(action)}>
                                <ListItemIcon>
                                    {selectedOption === action ? (
                                        <CheckCircleIcon
                                            sx={{ fontSize: '24px', color: 'green' }}
                                        />
                                    ) : (
                                        <RadioButtonUncheckedIcon sx={{ fontSize: '24px' }} />
                                    )}
                                </ListItemIcon>
                                <Box>
                                    <ListItemText>
                                        <Typography
                                            sx={{
                                                fontSize: '14px',
                                                color: '#191919',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            {action.actionTitle}
                                        </Typography>
                                    </ListItemText>
                                    <Typography sx={{ fontSize: '13px', color: '#191919' }}>
                                        {action.actionSubTitle}
                                    </Typography>
                                </Box>
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>
            </Box>
        </Box>
    );
}

export default SendMessageActions;
