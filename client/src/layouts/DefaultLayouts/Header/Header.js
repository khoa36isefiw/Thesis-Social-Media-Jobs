import * as React from 'react';
import {
    Container,
    Box,
    TextField,
    InputAdornment,
    IconButton,
    Typography,
    Badge,
    ListItemText,
    Menu,
    MenuItem,
    ListItemIcon,
    Divider,
    Avatar,
} from '@mui/material';
import './Header.scss';
import { Link, useNavigate } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PostAddIcon from '@mui/icons-material/PostAdd';
import UserAvatar from '../../../assets/images/avatar.jpeg';
import logoWeb from '../../../assets/images/aikotoba-job.png';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkIcon from '@mui/icons-material/Work';
import SmsIcon from '@mui/icons-material/Sms';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Logout from '@mui/icons-material/Logout';

const styles = (TextField) => ({
    notchedOutline: {
        borderWidth: '1px',
        borderColor: 'yellow !important',
    },
});

// define some constant icon button
const HeaderIconButton = ({ icon, text, destination, isActive, onClick }) => {
    const navigate = useNavigate();
    return (
        <Box
            className={`nav__dir ${isActive ? 'active' : ''}`}
            sx={{ '&:hover': { fontWeight: 'bold' } }}
            onClick={() => {
                onClick();
                navigate(destination);
            }}
        >
            {/* <IconButton className="icon__btn" disableTouchRipple>
                {icon}
            </IconButton> */}
            <IconButton
                className="icon__btn"
                disableTouchRipple
                sx={isActive ? { ...iconStyles, color: 'green' } : iconStyles}
            >
                {icon}
            </IconButton>

            <Typography className="text__btn" sx={{ fontSize: '12px' }}>
                {text}
            </Typography>
        </Box>
    );
};

const HeaderIconNotification = ({ icon, text, maxNotifications, numberOfNotifications }) => {
    return (
        <Box className="nav__dir" sx={{ '&:hover': { fontWeight: 'bold', position: 'relative' } }}>
            <IconButton
                disableTouchRipple
                sx={{
                    '&:hover': {
                        backgroundColor: 'transparent',
                    },
                }}
            >
                {icon}
                <Badge
                    badgeContent={numberOfNotifications}
                    max={maxNotifications}
                    color="error"
                    className="active"
                    sx={{
                        position: 'absolute',
                        top: '20%',
                        right: '20%',
                        '.MuiBadge-badge': {
                            // mt: '8px',
                            height: '20px',
                            width: '20px',
                            borderRadius: '50%',
                            fontSize: '8px',
                            fontWeight: 'bold',
                        },
                    }}
                />
            </IconButton>
            <Typography className="text__btn" sx={{ fontSize: '12px' }}>
                {text}
            </Typography>
        </Box>
    );
};
// define icon styles
const iconStyles = {
    fontSize: '28px',
    color: '#666',
    '&:hover': {
        color: '#191919',
    },
};

// Define a variable for the media query condition
const mobileScreen = '@media only screen and (max-width: 48.1875em)';
const tabletScreen = '@media only screen between (min-width: 46.25em) and (max-width:63.9375em)';
const desktopScreen = '@media only screen and (min-width: 64em)';
function Header() {
    const navigate = useNavigate();
    const [isTextFieldFocused, setIsTextFieldFocused] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [activeIcon, setActiveIcon] = React.useState(false);
    const textFieldRef = React.useRef(null);

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

    const handleIconClick = () => {
        setActiveIcon(true);
    };

    return (
        <Box className={`header ${isTextFieldFocused ? 'focused' : ''} `}>
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
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
                        className="search__field"
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
                    <HeaderIconButton
                        icon={
                            <HomeIcon
                                sx={activeIcon ? { ...iconStyles, color: '#191919' } : iconStyles}
                            />
                        }
                        text={'Home'}
                        destination={'/signed-in'}
                        isActive={activeIcon}
                        onClick={handleIconClick}
                    />

                    <HeaderIconButton
                        icon={
                            <PeopleAltIcon
                                sx={activeIcon ? { ...iconStyles, color: '#191919' } : iconStyles}
                            />
                        }
                        text={'My Network'}
                        destination={'/my-network'}
                        isActive={activeIcon}
                        onClick={handleIconClick}
                    />
                    <HeaderIconNotification
                        text={'Message'}
                        icon={<SmsIcon sx={iconStyles} />}
                        numberOfNotifications={10}
                        maxNotifications={9}
                        isActive={activeIcon}
                        onClick={handleIconClick}
                    />

                    <HeaderIconButton
                        icon={
                            <WorkIcon
                                sx={activeIcon ? { ...iconStyles, color: '#191919' } : iconStyles}
                            />
                        }
                        text={'Jobs'}
                        destination={''}
                        isActive={activeIcon}
                        onClick={handleIconClick}
                    />

                    <HeaderIconNotification
                        text={'Notifications'}
                        icon={<NotificationsIcon sx={iconStyles} />}
                        numberOfNotifications={100}
                        maxNotifications={99}
                        isActive={activeIcon}
                        onClick={handleIconClick}
                    />

                    <Box
                        sx={{
                            [mobileScreen]: {
                                display: 'none',
                            },
                        }}
                    >
                        <AccountMenu />
                    </Box>
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
            </Menu>
        </React.Fragment>
    );
}
