import {
    Avatar,
    Box,
    IconButton,
    Typography,
    styled,
    Menu,
    MenuList,
    MenuItem,
    ListItemIcon,
    ListItemText,
    Button,
} from '@mui/material';
import React, { useState } from 'react';
import MoreIcon from '@mui/icons-material/More';
import { blue } from '@mui/material/colors';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';

import NorthIcon from '@mui/icons-material/North';
import { ipadProScreen, mobileScreen, tabletScreen } from '../Theme/Theme';

// notifications were seen - old notifications
const notificationsSeen = [
    {
        userImgUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Sky_over_Munich_02.jpg/280px-Sky_over_Munich_02.jpg',
        userName: 'Skype',
        notificationTitle: 'How to become a Professional Front-end Developer?',
        userPosition: 'Intern Frontend',
        timePosted: '12h',
        status: true,
    },
    {
        userImgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        userName: 'Kiyoshi',
        notificationTitle: 'What is future of Website Developing?',
        userPosition: 'Web Developer',
        timePosted: '13h',
        status: false,
    },
    {
        userImgUrl: 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg',
        userName: 'Bling Coffee',
        notificationTitle: 'How to sell 1,800 cups of coffee in a day?',
        userPosition: 'Seller',
        timePosted: '20h',
        status: false,
    },
    {
        userImgUrl: 'https://cdn.mos.cms.futurecdn.net/FRdq8ZbPetwNDRV9R3hYpP-320-80.jpg',
        userName: 'Macbook',
        notificationTitle:
            "I'm a new person. Which laptop should I choose to study? MacOS or Windows?, I'm a new person. Which laptop should I choose to study? MacOS or Windows?I'm a MacOS or WindowsI'm a new person. Which laptop should I choose to study? MacOS or Windows?, I'm a new person. Which laptop should I choose to study? MacOS or Windows?I'm a MacOS or Windows ",
        userPosition: 'CEO of Marketing',
        timePosted: '1d',
        status: false,
    },
];

// notifications were not seen - new notifcations

// define constant

const moreActions = [
    {
        icon: <DeleteForeverIcon sx={{ fontSize: '20px', color: '#191919' }} />,
        actionText: 'Delete notification',
    },
    {
        icon: <NotificationsOffIcon sx={{ fontSize: '20px', color: '#191919' }} />,
        actionText: 'Turn off this notification',
    },
];

const CustomizeNotificationsTypography = styled(Typography)(({ fs, fw = false }) => ({
    fontSize: fs || '14px',
    fontWeight: fw ? 'bold' : 'normal',
    color: 'text.primary',
    // maxWidth: '600px',
    // textOverflow: 'ellipsis',
}));

function ShowNotifications() {
    // console.log('Check Length of the String: ', TextString.length);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box>
            <Box
                // #e6e6e6
                sx={{
                    border: '1px solid #d9d9d9',
                    borderRadius: '12px',
                    backgroundColor: '#fff',
                    width: '100%',
                    position: 'relative',
                    [mobileScreen]: {
                        borderRadius: 0,
                    },
                }}
            >
                <Box sx={{ position: 'relative' }}>
                    {notificationsSeen.map((notification, index) => (
                        <Box>
                            {notification.status ? (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        backgroundColor: blue[100],
                                        borderTopRightRadius: '12px',
                                        borderTopLeftRadius: '12px',
                                        py: 1,
                                        px: 2,
                                        cursor: 'pointer',
                                        '&:hover': {
                                            backgroundColor: blue[200],
                                        },
                                        [ipadProScreen]: {
                                            px: 1,
                                        },
                                        [mobileScreen]: {
                                            borderRadius: 0,
                                            px: 0,
                                        },
                                        [tabletScreen]: {
                                            px: 1,
                                        },
                                    }}
                                    key={index}
                                >
                                    <Box
                                        sx={{
                                            height: '10px',
                                            width: '10px',
                                            borderRadius: '50%',
                                            bgcolor: blue[800],
                                            mr: 1,
                                            [mobileScreen]: {
                                                height: '10px',
                                                width: '12px',
                                                // borderRadius: '50%',
                                            },
                                        }}
                                    />
                                    <Avatar
                                        src={notification.userImgUrl}
                                        alt="User Avatar"
                                        sx={{
                                            zIndex: 4,
                                            border: '4px solid #fff',
                                            width: 64,
                                            height: 64,
                                            '&:hover': {
                                                cursor: 'pointer',
                                            },
                                            [mobileScreen]: {
                                                width: 48,
                                                height: 48,
                                            },
                                        }}
                                    />
                                    <Box sx={{ flexGrow: 1, ml: 1 }}>
                                        <CustomizeNotificationsTypography
                                            fs={16}
                                            fw={true}
                                            sx={{
                                                [ipadProScreen]: { fontSize: '15px' },
                                                [mobileScreen]: {
                                                    fontSize: '14px',
                                                },
                                                [tabletScreen]: {
                                                    fontSize: '14px',
                                                },
                                            }}
                                        >
                                            {notification.userName}
                                        </CustomizeNotificationsTypography>
                                        <CustomizeNotificationsTypography
                                            sx={{
                                                [ipadProScreen]: { fontSize: '15px' },
                                                [mobileScreen]: {
                                                    fontSize: '14px',
                                                },
                                                [tabletScreen]: {
                                                    fontSize: '14px',
                                                },
                                            }}
                                        >
                                            {notification.notificationTitle}
                                        </CustomizeNotificationsTypography>
                                    </Box>

                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            padding: '10px',
                                            mr: 2,
                                            [ipadProScreen]: {
                                                // mr: 1,
                                            },
                                            [mobileScreen]: {
                                                mr: 1,
                                            },
                                            [tabletScreen]: { mr: 0 },
                                        }}
                                    >
                                        <Typography>{notification.timePosted}</Typography>
                                        <Box
                                            sx={{
                                                width: '15px',
                                                mt: 1,
                                                border: '1px solid #ccc',
                                            }}
                                        />
                                        <Box>
                                            {/* More action button */}
                                            <IconButton
                                                disableTouchRipple
                                                sx={{
                                                    opacity: 0.65,
                                                    '&:hover': {
                                                        backgroundColor: 'transparent',
                                                        opacity: 1,
                                                    },
                                                }}
                                            >
                                                <MoreIcon
                                                    sx={{ fontSize: '20px' }}
                                                    onClick={handleClick}
                                                />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                </Box>
                            ) : (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        py: 1,
                                        px: 4,
                                        '&:hover': {
                                            cursor: 'pointer',
                                            backgroundColor: '#e6e6e6',
                                            borderBottomLeftRadius:
                                                index === notificationsSeen.length - 1
                                                    ? '12px'
                                                    : '0',
                                            borderBottomRightRadius:
                                                index === notificationsSeen.length - 1
                                                    ? '12px'
                                                    : '0',
                                        },
                                        [ipadProScreen]: {
                                            px: 3,
                                        },
                                        [mobileScreen]: {
                                            px: 2,
                                        },
                                        [tabletScreen]: {
                                            px: 3,
                                        },
                                    }}
                                    key={index}
                                >
                                    <Avatar
                                        src={notification.userImgUrl}
                                        alt="User Avatar"
                                        sx={{
                                            zIndex: 4,
                                            // border: '4px solid #fff',
                                            width: 64,
                                            height: 64,
                                            '&:hover': {
                                                cursor: 'pointer',
                                            },
                                            [mobileScreen]: {
                                                width: 48,
                                                height: 48,
                                            },
                                        }}
                                    />
                                    {/* <Box
                                        sx={{
                                            flexGrow: 1,
                                            ml: 1,

                                            textOverflow: 'ellipsis',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <CustomizeNotificationsTypography
                                            fs={16}
                                            fw={true}
                                            sx={{
                                                [mobileScreen]: {
                                                    fontSize: '14px',
                                                },
                                            }}
                                        >
                                            {notification.userName}
                                        </CustomizeNotificationsTypography>
                                        <CustomizeNotificationsTypography
                                        // sx={{ textOverflow: 'ellipsis' }}
                                        >
                                            {notification.notificationTitle}
                                        </CustomizeNotificationsTypography>
                                    </Box> */}
                                    <Box
                                        sx={{
                                            flexGrow: 1,
                                            ml: 1,
                                            overflow: 'hidden',
                                            // display: '-webkit-box',
                                            // WebkitLineClamp: 2,
                                            // WebkitBoxOrient: 'vertical',
                                            whiteSpace: 'normal',
                                        }}
                                    >
                                        <CustomizeNotificationsTypography
                                            fs={16}
                                            fw={true}
                                            sx={{ [mobileScreen]: { fontSize: '14px' } }}
                                        >
                                            {notification.userName}
                                        </CustomizeNotificationsTypography>
                                        {/* <CustomizeNotificationsTypography>
                                            {notification.notificationTitle}
                                        </CustomizeNotificationsTypography> */}

                                        <TruncateText
                                            text={notification.notificationTitle}
                                            maxLines={2}
                                        />
                                    </Box>

                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            padding: '10px',
                                            [mobileScreen]: { mr: -1 },
                                            [tabletScreen]: { mr: -2 },
                                        }}
                                    >
                                        <Typography>{notification.timePosted}</Typography>
                                        <Box
                                            sx={{
                                                width: '15px',
                                                mt: 1,
                                                border: '1px solid #ccc',
                                            }}
                                        />
                                        <Box>
                                            {/* More action button */}
                                            <IconButton
                                                onClick={handleClick}
                                                disableTouchRipple
                                                sx={{
                                                    opacity: 0.65,
                                                    '&:hover': {
                                                        backgroundColor: 'transparent',
                                                        opacity: 1,
                                                    },
                                                }}
                                            >
                                                <MoreIcon sx={{ fontSize: '20px' }} />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                </Box>
                            )}
                        </Box>
                    ))}
                    <Button
                        variant="contained"
                        sx={{
                            textTransform: 'capitalize',
                            // p: 1,
                            borderRadius: '24px',
                            position: 'absolute',
                            m: 'auto 0',
                            top: '-20px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            boxShadow: '0 4px 4px #333',
                            zIndex: 99,
                            '&:hover': {
                                boxShadow: '0 4px 4px #333',
                            },
                        }}
                        startIcon={<NorthIcon />}
                    >
                        <Typography sx={{ mr: 1, fontSize: '12px' }}>New notifications</Typography>
                    </Button>
                </Box>
            </Box>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                sx={{
                    ml: -18,
                    [ipadProScreen]: {
                        ml: 0,
                    },
                    [mobileScreen]: {
                        ml: 0,
                    },
                    [tabletScreen]: {
                        ml: 0,
                    },
                }}
            >
                <MenuList
                    sx={{
                        py: 0,
                        [mobileScreen]: {
                            py: 0,
                        },
                    }}
                >
                    {moreActions.map((action, index) => (
                        <MenuItem key={index} onClick={handleClose}>
                            <ListItemIcon>{action.icon}</ListItemIcon>
                            <ListItemText>
                                <Typography sx={{ fontSize: '14px', color: '#191919' }}>
                                    {action.actionText}
                                </Typography>
                            </ListItemText>
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </Box>
    );
}

export default ShowNotifications;

export function TruncateText({ text, maxLines }) {
    const truncateText = (text, maxLines) => {
        const words = text.split(' ');
        let truncatedText = '';
        let lineCount = 0;
        let maxStringLength = 60;
        // maxLength for mobile and other device
        if (window.innerWidth < 739) {
            // for mobile device
            maxStringLength = 60;
        } else {
            // for other devices
            maxStringLength = 150;
        }

        console.log(maxStringLength);
        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            if (lineCount < maxLines) {
                if (truncatedText.length + word.length <= maxStringLength) {
                    // Điều chỉnh độ dài tối đa của văn bản
                    truncatedText += word + ' ';
                } else {
                    truncatedText += '...';
                    break;
                }
                if (word.includes('\n')) {
                    lineCount++;
                }
            } else {
                truncatedText += '...';
                break;
            }
        }
        return truncatedText;
    };

    return (
        <CustomizeNotificationsTypography>
            {truncateText(text, maxLines)}
        </CustomizeNotificationsTypography>
    );
}
