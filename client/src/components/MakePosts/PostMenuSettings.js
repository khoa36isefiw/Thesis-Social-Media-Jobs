import React, { useEffect, useState } from 'react';
import {
    Menu,
    MenuItem,
    MenuList,
    ListItemText,
    Typography,
    Divider,
    Modal,
    ListItemIcon,
} from '@mui/material';
import { useDispatch } from 'react-redux';

import CancelIcon from '@mui/icons-material/Cancel';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LinkIcon from '@mui/icons-material/Link';

const postMenuSettings = [
    {
        textAction: 'Copy to link post',
        iconActionn: (
            <LinkIcon sx={{ fontSize: '20px', color: 'black', transform: 'rotate(-45deg)' }} />
        ),
    },
    {
        textAction: "I don't to see it",
        iconActionn: <VisibilityOffIcon sx={{ fontSize: '20px', color: 'black' }} />,
    },
    {
        textAction: 'Unfollow User Name Here',
        iconActionn: <CancelIcon sx={{ fontSize: '20px', color: 'black' }} />,
    },
];
const PostMenuSettings = ({ openMenuStatus, handleClosePostMenuSettings, postId }) => {
    const dispatch = useDispatch();
    const [hideMenu, setHideMenu] = useState(false);

    // check some case when click into menu
    const handleMenuItemClick = (action) => {
        console.log('PostMenuSettings userID: ', postId);
        // if (action === 'Remove star' || action === 'Star') {
        //     // dispatch(highlightPersonAction());
        //     dispatch(highlightPersonAction(postId));
        // } else if (action === 'Mute' || action === 'Unmute') {
        //     // dispatch(mutePersonAction());
        //     dispatch(mutePersonAction(postId));
        // } else if (action === 'Delete conversation') {
        //     handleOpenDeleteConfirm();
        // }
        setHideMenu(true);
    };

    // hide Menu
    useEffect(() => {
        if (hideMenu) {
            // hide menu after 1s when user clicks into menu
            const timer = setTimeout(() => {
                setHideMenu(false);
            }, 1000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [hideMenu]);

    return (
        <>
            <Menu
                anchorEl={openMenuStatus}
                open={Boolean(openMenuStatus)}
                onClose={handleClosePostMenuSettings}
                sx={{
                    position: 'absolute',
                    '.MuiPaper-root': {
                        // backgroundColor: 'darkorange',
                        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.75)',
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
                        // width: '200px',
                        padding: 0,
                    }}
                >
                    {postMenuSettings.map((postSetting, index) => (
                        <MenuItem key={index} onClick={() => handleMenuItemClick(postSetting)}>
                            <ListItemIcon>{postSetting.iconActionn}</ListItemIcon>
                            <ListItemText>
                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        color: '#191919',
                                        // fontWeight: '500',
                                    }}
                                >
                                    {postSetting.textAction}
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
        </>
    );
};

export default PostMenuSettings;
