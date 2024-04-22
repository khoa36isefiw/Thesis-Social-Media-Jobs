import React from 'react';
import { Box, Typography, Link, Button, IconButton, Popper, Paper, Fade } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import FPTCop from '../../../assets/images/fpt_logo.png';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import CloseIcon from '@mui/icons-material/Close';
import { mobileScreen } from '../../../components/Theme/Theme';

function Footer() {
    const listFooterLink = ['About', 'accessbility', 'help center', 'Privacy and Terms'];
    return (
        <Box>
            <Box
                sx={{
                    minHeight: '30vh',
                    width: '100%',
                    backgroundColor: '#fff',
                    borderRadius: '13px',
                    border: '1px solid #d3d3d3',
                    boxShadow: '4px 8px 4px #d9d9d9',
                    mb: 2,
                    p: 1,
                    [mobileScreen]: {
                        borderRadius: 0,
                    },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mt: 1,
                    }}
                >
                    <Typography
                        sx={{ color: 'text.secondary', fontSize: '15px', fontWeight: 'bold' }}
                    >
                        Add to your feed
                    </Typography>
                    {/* <YourComponent /> */}

                    <PositionedPopper />
                </Box>

                {/* company information */}
                <Box>
                    <FollowCompany />
                    <FollowCompany />
                </Box>
            </Box>

            <Box sx={{ textAlign: 'center', mt: 2 }}>
                {listFooterLink.map((item) => (
                    <Link
                        href="#"
                        underline="hover"
                        key={item}
                        sx={{ color: 'black', textTransform: 'capitalize' }}
                    >
                        <Typography sx={{ mb: 1, fontSize: '13px' }}>{item}</Typography>
                    </Link>
                ))}
            </Box>
            <Typography sx={{ textAlign: 'center', fontSize: '13px' }}>
                Aikotoba Corporation &copy; 2023
            </Typography>
        </Box>
    );
}

export default Footer;

function FollowCompany() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
            <img
                src={FPTCop}
                style={{ height: '60px', width: '60px', objectFit: 'contain', flexGrow: 1 }}
            />
            <Box sx={{ ml: 2 }}>
                <Typography
                    sx={{ fontWeight: 'bold', color: 'text.secondary', fontSize: '13.5px' }}
                >
                    FPT Information System
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '12.5px' }}>
                    Accompany your digital transformation
                </Typography>
                <Button variant="outlined" sx={{ borderRadius: '24px', p: '4px', mt: '2px' }}>
                    <PersonAddIcon />
                    <Typography
                        sx={{
                            fontSize: '12.5px',
                            textTransform: 'capitalize',
                            fontWeight: 'bold',
                            ml: 1,
                        }}
                    >
                        Follow
                    </Typography>
                </Button>
            </Box>
        </Box>
    );
}

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function PositionedPopper() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
        // Hide Popper after 3 seconds
        setTimeout(() => {
            setOpen(false);
        }, 2000);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            <Popper
                sx={{ zIndex: 1200 }}
                open={open}
                anchorEl={anchorEl}
                placement={placement}
                transition
            >
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper
                            sx={{
                                maxWidth: '300px',
                                borderRadius: '12px',
                                border: '1px solid #d3d3d3',
                                boxShadow: '2px 4px 4px #aeaeae ',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: 2,
                                }}
                            >
                                <Typography sx={{ fontSize: '13px' }}>
                                    Follow things that interest you to personalize your feed.
                                </Typography>
                                <IconButton
                                    onClick={handleClose}
                                    size="small"
                                    disableTouchRipple
                                    sx={{
                                        opacity: '0.65',
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                            cursor: 'pointer',
                                            opacity: 1,
                                        },
                                    }}
                                >
                                    <CloseIcon />
                                </IconButton>
                            </Box>
                        </Paper>
                    </Fade>
                )}
            </Popper>

            <IconButton
                onClick={handleClick('left')}
                disableTouchRipple
                sx={{
                    opacity: '0.65',
                    '&:hover': {
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                        opacity: 1,
                    },
                }}
            >
                <HelpCenterIcon />
            </IconButton>
        </Box>
    );
}
