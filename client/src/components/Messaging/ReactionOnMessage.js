import React, { useState, useEffect } from 'react';
import {
    Avatar,
    Box,
    Menu,
    MenuList,
    MenuItem,
    ListItemText,
    Typography,
    Divider,
} from '@mui/material';
import MoreOption from '../../assets/images/option_reactions.png';
import ReplyMessage from '../../assets/images/left_reactions.png';

import { ipadProScreen, mobileScreen, tabletScreen } from '../Theme/Theme';
import { useDispatch } from 'react-redux';
import { isReplyMessage } from '../../redux/ReplyMessage/replyMessageAction';

const moreActionsList = ['Forward', 'Delete', 'Edit'];

function ReactionOnMessage({
    listDataReactions,
    handCloseReactions,
    onReactionSelect,
    msgIndex,
    imgAndFileIndex = null,
    deleteMessage,
    deleteAble, // true ---> can delete and show button delete on menu
    setIsReactionExist,
    messageReply, // list message
}) {
    const dispatch = useDispatch();
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
        handCloseReactions();
    };

    const handleReactionSelection = (reaction) => {
        // đóng menu reactions sau khi đã chọn
        handCloseReactions();
        setIsReactionExist(true);
        onReactionSelect(reaction, msgIndex);
    };

    const handleDelete = () => {
        deleteMessage(msgIndex, imgAndFileIndex);
        handleClose();
    };

    const handleClickReplyAction = () => {
        // setIsReplyMessage(true);
        // setIsReplyMessage(dispatch(isReplyMessage()));
        dispatch(isReplyMessage(messageReply));
    };

    return (
        <Box
            sx={{
                height: '30px',
                width: '150px',
                backgroundColor: '#fff',
                border: '1px solid #d9d9d9',
                borderRadius: '8px',
                p: '4px',
                mt: -4,
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    px: '4px',
                }}
            >
                {listDataReactions.map((reaction, index) => (
                    <Box
                        key={index}
                        sx={{
                            '&:hover': {
                                cursor: 'pointer',
                                transform: 'scale(1.25)',
                            },
                        }}
                        // onClick={handleClose} // Ẩn menu reactions khi click vào một reaction on message
                        onClick={() => handleReactionSelection(reaction)}
                    >
                        <Avatar
                            src={reaction.reactionsImage}
                            sx={{
                                height: '20px',
                                width: '20px',
                                borderRadius: '0',
                                zIndex: 2,
                            }}
                            alt={reaction.reactionsName}
                        />
                    </Box>
                ))}
                {/* reply message options */}
                <Box
                    sx={{
                        '&:hover': {
                            cursor: 'pointer',
                            transform: 'scale(1.25)',
                        },
                    }}
                    // show  menu options khi click vào biểu tượng "more options"
                    onClick={handleClickReplyAction}
                >
                    <Avatar
                        src={ReplyMessage}
                        sx={{
                            height: '20px',
                            width: '20px',
                            borderRadius: '0',
                            zIndex: 2,
                        }}
                        alt="Reply Message"
                    />
                </Box>
                {/* delete message option */}
                <Box
                    sx={{
                        '&:hover': {
                            cursor: 'pointer',
                            transform: 'scale(1.25)',
                        },
                    }}
                    // show  menu options khi click vào biểu tượng "more options"
                    onClick={handleClick}
                >
                    <Avatar
                        src={MoreOption}
                        sx={{
                            height: '20px',
                            width: '20px',
                            borderRadius: '0',
                            zIndex: 2,
                        }}
                        alt="More Options"
                    />
                </Box>
            </Box>
            {/* menu: delete, forward, edit option */}
            <Box>
                <Menu
                    anchorEl={anchorEl}
                    // Hiển thị menu options khi showOptions là true
                    open={showOptions}
                    onClose={handleClose}
                    sx={{
                        mt: '-4px',
                        ml: '6px',
                        '.MuiPaper-root': {
                            borderTopLeftRadius: '8px',
                            borderTopRightRadius: '8px',
                            borderBottomLeftRadius: '8px',
                            borderBottomRightRadius: '0',
                            // backgroundColor: 'darkorange',
                            boxShadow: '2px 0px 5px  rgba(0,0,0,0.75)',
                        },
                    }}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                >
                    <MenuList
                        sx={{
                            width: '150px',
                            padding: 0,
                        }}
                    >
                        {moreActionsList.map((action, index) =>
                            // if deleteAble is false and action is not Delete --> Menu not render 'Delete' --> render the others
                            action !== 'Delete' || deleteAble ? ( // show all menu --> if it's true
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
                                        {}
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
                            ) : null,
                        )}
                    </MenuList>
                </Menu>
            </Box>
        </Box>
    );
}

export default ReactionOnMessage;
