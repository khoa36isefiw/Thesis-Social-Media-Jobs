import React, { useState } from 'react';
import { Box, Avatar, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import MissYou from '../../assets/images/missu.jpeg';
import { mobileScreen, tabletScreen, theme } from '../Theme/Theme';
import { useSelector } from 'react-redux';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ChatMenuSettings from './ChatMenuSettings';
import { useEffect } from 'react';

const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const strTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
    return strTime;
};

const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

const getTimeDisplay = (messageDate) => {
    const now = new Date();
    const timeDifference = now - messageDate;

    // Check if the message was sent within the last 24 hours
    const isRecent = timeDifference < 24 * 60 * 60 * 1000;
    return isRecent ? formatTime(messageDate) : formatDate(messageDate);
};

const countAttachments = (message) => {
    let count = 0;
    if (message[1] && message[1].length > 0) count += message[1].length; // Count images
    if (message[2] && message[2].length > 0) count += message[2].length; // Count files
    return count;
};

function ChatWithUserV2({ onClick }) {
    const [isHovered, setIsHovered] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);

    const openMenuChatSettings = Boolean(anchorEl);
    const isStarred = useSelector((state) => state.importantPerson.isHighlight);
    const isUserStarred = useSelector((state) => state.importantPerson.highlightedUser);
    const isMuted = useSelector((state) => state.mutePerson.isMutePerson);
    const messages = useSelector((state) => state.messages.messages);
    const isLatestMessageDeleted = useSelector((state) => state.messages.latestMessageDeleted);
    const latestMessage = messages.length ? messages[messages.length - 1] : null;
    const attachmentCount = latestMessage ? countAttachments(latestMessage) : 0;
    const isStartNewMessage = useSelector((state) => state.startAMessage.isClickSendMessage);
    const listUserInfor = useSelector((state) => state.startAMessage.listUserInformation);

    const messageTime = latestMessage ? getTimeDisplay(new Date(latestMessage[3])) : '11:09 AM';

    const menuChatSettings = [
        `${isStarred ? 'Remove star' : 'Star'}`,
        `${isMuted ? 'Unmute' : 'Mute'}`,
        'Delete conversation',
    ];

    const handleOpenMenuChatSettings = (event, user) => {
        setAnchorEl(event.currentTarget);
        setSelectedUser(user);
    };

    const handleCloseMenuChatSettings = () => {
        setAnchorEl(null);
        setSelectedUser(null);
    };

    return (
        <>
            {listUserInfor.length ? (
                listUserInfor.map((user, index) => (
                    <Box
                        key={user.userID || index}
                        sx={{
                            borderLeft: '4px solid #02754f',
                            width: '100%',
                            height: '90px',
                            backgroundColor: '#edf3f7',
                            p: 1,
                            mb: 1,
                            mt: 1,
                            borderBottom: `1px solid ${theme.palette.bgButtonHover}`,
                            position: 'relative',
                            '&:hover': {
                                cursor: 'pointer',
                                backgroundColor: '#eeecec',
                            },
                        }}
                        onClick={onClick}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                justifyContent: 'space-between',
                                [mobileScreen]: {
                                    justifyContent: 'space-between',
                                    flexGrow: 1,
                                },
                                [tabletScreen]: {
                                    justifyContent: 'space-between',
                                    flexGrow: 1,
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    height: '64px',
                                    width: '64px',
                                    position: 'relative',
                                    flexGrow: 1,
                                }}
                            >
                                <Avatar
                                    src={user.userImage}
                                    alt={'User Avatar'}
                                    sx={{
                                        height: '64px',
                                        width: '64px',
                                        border: `1px solid ${theme.palette.primaryText}`,
                                    }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        right: 0,
                                        height: '15px',
                                        width: '15px',
                                        borderRadius: '50%',
                                        border: '2px solid #fff',
                                        bgcolor: 'green',
                                    }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    width: '100%',
                                    ml: 1,
                                    [mobileScreen]: {
                                        flexGrow: 1,
                                    },
                                    [tabletScreen]: {
                                        flexGrow: 1,
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <CustomizeTypography fs="14px" sx={{ flexGrow: 1 }}>
                                        {user.userName}
                                    </CustomizeTypography>
                                    {isHovered ? (
                                        <IconButton
                                            disableTouchRipple
                                            sx={{
                                                padding: 0,
                                                '&:hover': {
                                                    bgcolor: 'transparent',
                                                },
                                                ml: 2,
                                            }}
                                            onClick={(event) =>
                                                handleOpenMenuChatSettings(event, user)
                                            }
                                        >
                                            <MoreHorizIcon
                                                sx={{
                                                    fontSize: '20px',
                                                }}
                                            />
                                        </IconButton>
                                    ) : (
                                        <CustomizeTypography
                                            sx={{
                                                fontSize: '14px',
                                                ml: 2,
                                                [mobileScreen]: {
                                                    ml: 0,
                                                },
                                            }}
                                        >
                                            {messageTime}
                                        </CustomizeTypography>
                                    )}
                                    <ChatMenuSettings
                                        anchorEl={anchorEl}
                                        handleCloseMenuChatSettings={handleCloseMenuChatSettings}
                                        menuChatSettings={menuChatSettings}
                                        userId={selectedUser?.userID}
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    {latestMessage ? (
                                        <Box>
                                            {isLatestMessageDeleted ? (
                                                <CustomizeTypography
                                                    sx={{
                                                        color: theme.palette.primaryText,
                                                        fontSize: '14px',
                                                        fontStyle: 'italic',
                                                    }}
                                                >
                                                    This message has been deleted
                                                </CustomizeTypography>
                                            ) : (
                                                <>
                                                    {attachmentCount > 0 ? (
                                                        <Box
                                                            sx={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                            }}
                                                        >
                                                            <IconButton sx={{ padding: 0 }}>
                                                                <AttachFileIcon
                                                                    sx={{
                                                                        transform: 'rotate(45deg)',
                                                                    }}
                                                                />
                                                            </IconButton>
                                                            <CustomizeTypography
                                                                sx={{
                                                                    color: theme.palette
                                                                        .primaryText,
                                                                    fontSize: '14px',
                                                                    ml: '4px',
                                                                }}
                                                            >
                                                                You sent{' '}
                                                                {attachmentCount > 1
                                                                    ? attachmentCount
                                                                    : ''}{' '}
                                                                {attachmentCount > 1
                                                                    ? 'attachments'
                                                                    : 'attachment'}
                                                            </CustomizeTypography>
                                                        </Box>
                                                    ) : (
                                                        <CustomizeTypography
                                                            sx={{
                                                                color: theme.palette.primaryText,
                                                                fontSize: '14px',
                                                            }}
                                                        >
                                                            {latestMessage[2].length > 30
                                                                ? latestMessage[2].substring(
                                                                      0,
                                                                      30,
                                                                  ) + '...'
                                                                : latestMessage[2]}
                                                        </CustomizeTypography>
                                                    )}
                                                </>
                                            )}
                                        </Box>
                                    ) : (
                                        <CustomizeTypography
                                            sx={{
                                                color: theme.palette.primaryText,
                                                fontSize: '13.5px',
                                            }}
                                        >
                                            No messages yet
                                        </CustomizeTypography>
                                    )}
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            height: '100%',
                                        }}
                                    >
                                        {isStarred && isUserStarred === user.userID && (
                                            <IconButton
                                                disableTouchRipple
                                                sx={{
                                                    '&:hover': {
                                                        bgcolor: 'transparent',
                                                    },
                                                    padding: 0,
                                                }}
                                            >
                                                <StarIcon
                                                    sx={{
                                                        fontSize: '20px',
                                                        color: '#c37d17',
                                                    }}
                                                />
                                            </IconButton>
                                        )}
                                        {isMuted && (
                                            <IconButton
                                                disableTouchRipple
                                                sx={{
                                                    '&:hover': {
                                                        bgcolor: 'transparent',
                                                    },
                                                    padding: 0,
                                                }}
                                            >
                                                <NotificationsOffIcon
                                                    sx={{
                                                        fontSize: '20px',
                                                    }}
                                                />
                                            </IconButton>
                                        )}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                ))
            ) : (
                <CustomizeTypography>No user information available.</CustomizeTypography>
            )}
        </>
    );
}

export default ChatWithUserV2;
