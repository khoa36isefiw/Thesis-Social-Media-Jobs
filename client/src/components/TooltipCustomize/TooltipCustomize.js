import React from 'react';
import { Box, Typography, IconButton, Popper, Paper, Fade } from '@mui/material';

import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import CloseIcon from '@mui/icons-material/Close';

function TooltipCustomize({ tooltipContent, status }) {
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
                sx={{ zIndex: 19999 }}
                open={status}
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
                                    {/* Follow things that interest you to personalize your feed. */}
                                    {tooltipContent}
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

            {/* <IconButton
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
            </IconButton> */}
        </Box>
    );
}

export default TooltipCustomize;
