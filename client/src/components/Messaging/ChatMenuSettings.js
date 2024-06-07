import React, { useEffect, useState } from 'react';
import { Menu, MenuItem, MenuList, ListItemText, Typography, Divider, Modal } from '@mui/material';
import { useDispatch } from 'react-redux';
import { highlightPersonAction } from '../../redux/ImportantPerson/highlightPersonAction';
import { mutePersonAction } from '../../redux/MutePerson/mutePersonAction';
import DeleteConversation from './DeleteConversation';

const ChatMenuSettings = ({ anchorEl, handleCloseMenuChatSettings, menuChatSettings, userId }) => {
    const dispatch = useDispatch();
    const [hideMenu, setHideMenu] = useState(false);
    const [deleteConfirm, setDeleteConfirm] = useState(false);
    // check some case when click into menu
    const handleMenuItemClick = (action) => {
        console.log('ChatMenuSettings userID: ', userId);
        if (action === 'Remove star' || action === 'Star') {
            // dispatch(highlightPersonAction());
            dispatch(highlightPersonAction(userId));
            setHideMenu(true);
        } else if (action === 'Mute' || action === 'Unmute') {
            dispatch(mutePersonAction());
            setHideMenu(true); // hide Menu after 1s of clicking
        } else if (action === 'Delete conversation') {
            handleOpenDeleteConfirm();
        }
    };

    // hide Menu
    useEffect(() => {
        if (hideMenu) {
            // hide menu after 1s when user clicks into menu
            const timer = setTimeout(() => {
                handleCloseMenuChatSettings();
                setHideMenu(false);
            }, 1000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [hideMenu, handleCloseMenuChatSettings]);

    const handleOpenDeleteConfirm = () => {
        setDeleteConfirm(true);
    };

    const handleCloseDeleteConfirm = () => {
        setDeleteConfirm(false);
        handleCloseMenuChatSettings();
    };
    return (
        <>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenuChatSettings}
                sx={{
                    position: 'absolute',
                    '.MuiPaper-root': {
                        // backgroundColor: 'darkorange',
                        boxShadow: '2px 0px 5px rgba(0, 0, 0, 0.75)',
                    },
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuList
                    sx={{
                        width: '150px',
                        padding: 0,
                    }}
                >
                    {menuChatSettings.map((action, index) => (
                        <MenuItem key={index} onClick={() => handleMenuItemClick(action)}>
                            <ListItemText>
                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        color: '#191919',
                                    }}
                                >
                                    {action}
                                </Typography>
                                <Divider
                                    sx={{
                                        display: 'none',
                                    }}
                                />
                            </ListItemText>
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
            <Modal open={deleteConfirm} close={handleCloseDeleteConfirm}>
                <DeleteConversation handleModalClose={handleCloseDeleteConfirm} userId={userId} />
            </Modal>
        </>
    );
};

export default ChatMenuSettings;
