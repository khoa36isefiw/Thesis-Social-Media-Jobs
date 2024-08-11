import React, { useEffect, useState } from 'react';
import {
    Menu,
    MenuItem,
    MenuList,
    ListItemText,
    Typography,
    Divider,
    ListItemIcon,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { setHideComment } from '../../redux/ManagePost/managePostAction';

const PostMenuSettings = ({
    openMenuStatus,
    handleClosePostMenuSettings,
    postMenuSettingsList,
    postId,
    commnetIndex,
}) => {
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
        // setHideMenu(true);
        if (action.textAction === "I don't want to see this") {
            console.log('handleMenuItemClick: ', action);
            console.log(`comment ${commnetIndex} is selected in postID ${postId}`);
            dispatch(setHideComment(postId, commnetIndex));
        }
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
                    // position: 'absolute',
                    '.MuiPaper-root': {
                        // backgroundColor: 'darkorange',
                        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)',
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
                    {postMenuSettingsList.map((postSetting, index) => (
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
