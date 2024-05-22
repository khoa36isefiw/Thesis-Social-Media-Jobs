import React, { useState } from 'react';
import { Box, Divider, Typography, Menu, MenuList, MenuItem, ListItemText } from '@mui/material';
import { mobileScreen } from '../Theme/Theme';
const chatWithUserSettingsList = ['Forward', 'Delete', 'Edit'];
export default function ChatWithUserSettings() {
    const chatWithUserSettingsList = ['Forward', 'Delete', 'Edit'];
    const [anchorEl, setAnchorEl] = useState(null);
    const [showOptions, setShowOptions] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        // mở menu options khi click vào biểu tượng "more options"
        setShowOptions(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
        // đóng menu options khi click vào một tùy chọn hoặc bất kỳ nơi nào khác trên màn hình
        setShowOptions(false);
    };

    const handleDelete = () => {
        handleClose();
    };

    return (
        <Menu
            anchorEl={anchorEl}
            // Hiển thị menu options khi showOptions là true
            open={showOptions}
            onClose={handleClose}
            sx={{
                position: 'absolute',

                '.MuiPaper-root': {
                    // borderTopLeftRadius: '8px',
                    // borderTopRightRadius: '8px',
                    // borderBottomLeftRadius: '8px',
                    // borderBottomRightRadius: '0',
                    // backgroundColor: 'darkorange',
                    boxShadow: '2px 0px 5px  rgba(0,0,0,0.75)',
                },
            }}
        >
            <MenuList
                sx={{
                    width: '150px',
                    padding: 0,
                }}
            >
                {chatWithUserSettingsList.map((action, index) => (
                    // if deleteAble is false and action is not Delete --> Menu not render 'Delete' --> render the others

                    <MenuItem
                        key={index}
                        onClick={action === 'Delete' ? handleDelete : handleClose}
                        sx={{
                            [mobileScreen]: {
                                minHeight: '36px',
                                px: 0,
                                py: 0,
                            },
                        }}
                    >
                        <ListItemText>
                            <Typography
                                sx={{
                                    fontSize: '14px',
                                    color: '#191919',
                                    // fontWeight: '600',
                                    [mobileScreen]: {
                                        p: 1,
                                    },
                                }}
                            >
                                {action}
                            </Typography>
                            <Divider
                                sx={{
                                    display: 'none',
                                    [mobileScreen]: {
                                        display: 'block',
                                    },
                                }}
                            />
                        </ListItemText>
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}
