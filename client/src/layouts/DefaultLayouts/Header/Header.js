import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Logout from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PostAddIcon from '@mui/icons-material/PostAdd';
import UserAvatar from '../../../assets/images/avatar.jpeg';
import {
    Container,
    Box,
    TextField,
    InputAdornment,
    IconButton,
    Typography,
    Badge,
    ListItemText,
} from '@mui/material';
import logoWeb from '../../../assets/images/aikotoba-job.png';
import './Header.scss';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkIcon from '@mui/icons-material/Work';
import SmsIcon from '@mui/icons-material/Sms';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';

const styles = (TextField) => ({
    notchedOutline: {
        borderWidth: '1px',
        borderColor: 'yellow !important',
    },
});

function Header() {
    const navigate = useNavigate();
    const [isTextFieldFocused, setIsTextFieldFocused] = React.useState(false);
    const textFieldRef = React.useRef(null);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSearchIconClick = () => {
        if (textFieldRef.current) {
            textFieldRef.current.focus();
        }
    };

    const handleTextFieldFocus = () => {
        setIsTextFieldFocused(true);
    };

    const handleTextFieldBlur = () => {
        setIsTextFieldFocused(false);
    };

    return (
        <Box className={`header ${isTextFieldFocused ? 'focused' : ''} `}>
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexGrow: 1,
                    }}
                >
                    <Box sx={{ flexGrow: 1 }}>
                        <Link to="/">
                            <img src={logoWeb} alt="Logo Web" className="logo" />
                        </Link>
                    </Box>

                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        inputRef={textFieldRef}
                        onFocus={handleTextFieldFocus}
                        onBlur={handleTextFieldBlur}
                        sx={{
                            color: 'black',
                            flexGrow: 2,
                            '.MuiInputBase-root': {
                                fontSize: '16px',
                                height: '40px',
                                transition: 'width 0.3s',
                                // expand with when textfield is clicked
                                width: isTextFieldFocused ? '300px' : '200px',
                            },
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon onClick={handleSearchIconClick} />
                                </InputAdornment>
                            ),
                            classes: {
                                notchedOutline: styles.notchedOutline,
                            },

                            // cssOutlinedInput: { borderColor: 'red !important' },
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexGrow: 1,
                    }}
                >
                    <Box
                        className="nav__dir"
                        sx={{ '&:hover': { fontWeight: 'bold' } }}
                        onClick={() => navigate('/signed-in')}
                    >
                        <IconButton className="icon__btn" disableTouchRipple>
                            <HomeIcon
                                sx={{
                                    fontSize: '28px',
                                    color: '#666',
                                    '&:hover': {
                                        color: '#191919',
                                    },
                                }}
                            />
                        </IconButton>
                        <Typography sx={{ fontSize: '12px' }}>Home</Typography>
                    </Box>
                    <Box className="nav__dir" sx={{ '&:hover': { fontWeight: 'bold' } }}>
                        <IconButton className="icon__btn" disableTouchRipple>
                            <PeopleAltIcon
                                sx={{
                                    fontSize: '28px',
                                    color: '#666',
                                    '&:hover': {
                                        color: '#191919',
                                    },
                                }}
                            />
                        </IconButton>
                        <Typography sx={{ fontSize: '12px' }}>My Network</Typography>
                    </Box>
                    <Box>
                        <Badge
                            badgeContent={10}
                            max={9}
                            color="error"
                            className="active"
                            sx={{
                                '.MuiBadge-badge': {
                                    mt: '12px',
                                    mr: '22px',
                                    height: '20px',
                                    width: '20px',
                                    borderRadius: '50%',
                                    fontSize: '8px',
                                    fontWeight: 'bold',
                                },
                            }}
                        >
                            <Box className="nav__dir" sx={{ '&:hover': { fontWeight: 'bold' } }}>
                                <IconButton
                                    disableTouchRipple
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                        },
                                    }}
                                >
                                    <SmsIcon
                                        sx={{
                                            fontSize: '28px',
                                            color: '#666',
                                            '&:hover': {
                                                color: '#191919',
                                            },
                                        }}
                                    />
                                </IconButton>
                                <Typography sx={{ fontSize: '12px' }}>Messages</Typography>
                            </Box>
                        </Badge>
                    </Box>
                    <Box className="nav__dir" sx={{ '&:hover': { fontWeight: 'bold' } }}>
                        <IconButton className="icon__btn" disableTouchRipple>
                            <WorkIcon
                                sx={{
                                    fontSize: '28px',
                                    color: '#666',
                                    '&:hover': {
                                        color: '#191919',
                                    },
                                }}
                            />
                        </IconButton>
                        <Typography sx={{ fontSize: '12px' }}>Jobs</Typography>
                    </Box>
                    <Box>
                        <Badge
                            badgeContent={100}
                            max={99}
                            color="error"
                            className="active"
                            sx={{
                                '.MuiBadge-badge': {
                                    mt: '12px',
                                    mr: '22px',
                                    height: '20px',
                                    width: '20px',
                                    borderRadius: '50%',
                                    fontSize: '8px',
                                    fontWeight: 'bold',
                                },
                            }}
                        >
                            <Box className="nav__dir" sx={{ '&:hover': { fontWeight: 'bold' } }}>
                                <IconButton
                                    disableTouchRipple
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                        },
                                    }}
                                    onClick={() => navigate('/notifications')}
                                >
                                    <NotificationsIcon
                                        sx={{
                                            fontSize: '28px',
                                            color: '#666',
                                            '&:hover': {
                                                color: '#191919',
                                            },
                                        }}
                                    />
                                </IconButton>
                                <Typography sx={{ fontSize: '12px' }}>Notifications</Typography>
                            </Box>
                        </Badge>
                    </Box>
                    <AccountMenu />
                </Box>
            </Container>
        </Box>
    );
}

export default Header;

const authenticatedActions = [
    {
        icon: <AccountBoxIcon sx={{ fontSize: '20px' }} />,
        actionText: 'View Profile',
        navigateTo: '/user-profile',
    },
    {
        icon: <PostAddIcon sx={{ fontSize: '20px' }} />,
        actionText: 'Post & Activity',
        navigateTo: '/user/recent-activity/all',
    },
    {
        icon: <Logout sx={{ fontSize: '20px' }} />,
        actionText: 'Sign Out',
        navigateTo: '/',
    },
];

function AccountMenu() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleNavigateTo = (destination) => {
        navigate(destination);
    };
    return (
        // https://e1.pxfuel.com/desktop-wallpaper/502/361/desktop-wallpaper-rengoku-smile-rengoku-death.jpg
        <React.Fragment>
            <Box
                sx={{
                    display: 'grid',
                    gridColumn: '1',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: '18px',
                    // flexDirection: 'column',
                    // alignItems: 'center',
                    // justifyContent: 'center',
                }}
            >
                <Box onClick={handleClick}>
                    <IconButton
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: '36px', height: '36px' }}>
                            <img src={UserAvatar} className="authenticated_user" />
                        </Avatar>
                    </IconButton>

                    <Box
                        sx={{
                            display: 'flex',
                            ml: '25px',
                            opacity: '0.85',
                            color: '#666666',
                            '&:hover': { cursor: 'pointer', opacity: 1, fontWeight: 'bold' },
                        }}
                        // onClick={handleClick}
                    >
                        <Typography>Me</Typography>
                        <IconButton
                            disableTouchRipple
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                },
                                fontSize: '28px',
                                color: '#666',
                                width: '12px',
                                height: '12px',
                            }}
                        >
                            <ArrowDropDownIcon
                                sx={{
                                    fontSize: '24px',
                                }}
                            />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1,
                        ml: 2,
                        border: '1px solid #f2f2f2',
                        '& .MuiAvatar-root': {
                            width: 48,
                            height: 48,
                            ml: -0.5,
                            mr: 2,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem
                    onClick={handleClose}
                    sx={{
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    <Box
                        sx={{ display: 'flex', alignItems: 'center' }}
                        onClick={() => navigate('/user-profile')}
                    >
                        <Avatar
                            src={UserAvatar}
                            alt="User Avatar"
                            sx={{
                                zIndex: 4,
                                border: '4px solid #fff',
                                '&:hover': {
                                    cursor: 'pointer',
                                },
                            }}
                        />
                        <Box>
                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>
                                Huynh Dang Khoa
                            </Typography>
                            <Typography sx={{ fontSize: '12px' }}>Student at HCMUT</Typography>
                        </Box>
                    </Box>
                </MenuItem>
                <Divider />
                {authenticatedActions.map((action, index) => (
                    <MenuItem
                        onClick={() => handleNavigateTo(action.navigateTo)}
                        key={index}
                        sx={{
                            '&:hover': {
                                backgroundColor: 'transparent',
                                transform: 'scale(1.05)',
                            },
                        }}
                    >
                        <ListItemIcon>{action.icon}</ListItemIcon>
                        <ListItemText>
                            <Typography sx={{ fontSize: '12.5px' }}>{action.actionText}</Typography>
                        </ListItemText>
                    </MenuItem>
                ))}

                {/* <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem> */}
            </Menu>
        </React.Fragment>
    );
}
