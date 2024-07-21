import React, { useState } from 'react';
import { Box, IconButton, Typography, Button, Divider, Avatar, Modal, Menu } from '@mui/material';

import VisibilityIcon from '@mui/icons-material/Visibility';

import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import { ipadProScreen, mobileScreen, tabletScreen, theme } from '../Theme/Theme';

import MenuItem from '@mui/material/MenuItem';
import Close from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';

const viewingRightsData = [
    {
        textAction: 'All Aikotoba members',
        subTextAction: 'Members signed into Aikotoba, including everyone in your network.',
    },
    {
        textAction: 'Your network',
        subTextAction: 'Only people follow you in Aikotoba.',
    },
];

export function ViewingRights({ changeColor = false }) {
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedRight, setSelectedRight] = React.useState(viewingRightsData[0]);
    const getViewingRights = useSelector((state) => state.manageRights.setViewingRights);
    const open = Boolean(anchorEl);

    // show menu
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // get value of menu
    const handleMenuItemClick = (right) => {
        setSelectedRight(right);
        handleClose();
    };

    // console.log('selectedRight: ', selectedRight);

    return (
        <Box>
            <Button
                onClick={handleClick}
                startIcon={
                    <VisibilityIcon
                        sx={{ color: changeColor ? 'black' : '#fff', fontSize: '14px' }}
                    />
                }
                sx={{
                    // px: 2,
                    padding: '2px 12px',
                    fontSize: '16px',
                    color: changeColor ? 'black' : '#fff',
                    borderRadius: '24px',
                    border: '1px solid #fff',
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                    transition: 'box-shadow 0.3s ease-in-out',
                    '&:hover': {
                        boxShadow: '0 0 0 2px #fff',
                    },
                    ml: 2,
                    [mobileScreen]: {
                        fontSize: '14px',
                    },
                }}
            >
                {selectedRight.textAction}
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                sx={{
                    mt: 5,
                    '.MuiPaper-root': {
                        width: '300px',
                    },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        p: 1,
                    }}
                >
                    <CustomizeTypography fw={true}>Visibility</CustomizeTypography>
                    <IconButton
                        disableTouchRipple
                        sx={{
                            padding: 0,
                            '&:hover': {
                                bgcolor: 'transparent',
                            },
                        }}
                        onClick={handleClose}
                    >
                        <Close sx={{ fontSize: '24px' }} />
                    </IconButton>
                </Box>

                <CustomizeTypography
                    fs="14px"
                    sx={{
                        p: 1,
                        [mobileScreen]: {
                            fontSize: '12.5px',
                        },
                    }}
                >
                    Choose who can see your profile photo
                </CustomizeTypography>

                <Divider />
                {viewingRightsData.map((right, index) => (
                    <Box key={index}>
                        <MenuItem
                            onClick={() => handleMenuItemClick(right)}
                            sx={{
                                '&:hover': {
                                    bgcolor: 'transparent',
                                },
                                px: 1,
                            }}
                        >
                            <PrivacyButtonPhoto
                                textAction={right.textAction}
                                subTextAction={right.subTextAction}
                                selected={selectedRight === viewingRightsData[index]}
                            />
                        </MenuItem>
                        {viewingRightsData.length - 1 !== index && <Divider />}
                    </Box>
                ))}
                {/* 
                <Box
                    sx={{
                        px: 2,
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-end',
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            padding: '2px 12px',
                            fontSize: '14px',
                            borderRadius: '24px',
                            fontWeight: 'bold',
                            textTransform: 'capitalize',
                        }}
                    >
                        Save
                    </Button>
                </Box> */}
            </Menu>
        </Box>
    );
}

const PrivacyButtonPhoto = ({ handleOnClick, textAction, subTextAction, selected }) => {
    // console.log('selected in Edit: ', selected);
    return (
        <Box>
            <Box
                sx={{
                    // '&:hover': { bgcolor: theme.palette.bgButtonHover, cursor: 'pointer' },

                    display: 'flex',
                    alignItems: 'center',
                }}
                onClick={handleOnClick}
            >
                <Box
                    sx={{
                        width: '20px',
                        height: '20px',
                        // color: theme.palette.bgButtonHover,
                        bgcolor: selected ? 'green' : '#fff',
                        borderRadius: '50%',
                        marginRight: 1,
                        border: `1px solid ${selected ? 'green' : '#333'}`,
                        position: 'relative',
                    }}
                >
                    {selected && (
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '12px',
                                height: '12px',
                                bgcolor: 'white',
                                color: theme.palette.bgButtonHover,
                                borderRadius: '50%',
                                border: '1px solid green',
                            }}
                        />
                    )}
                </Box>
                <CustomizeTypography
                    fw={true}
                    sx={{
                        flexGrow: 1,
                        fontSize: '14.5px',
                        [mobileScreen]: {
                            fontSize: '13px',
                        },
                    }}
                >
                    {/* Connections Only */}
                    {textAction}
                </CustomizeTypography>
            </Box>
            <Typography sx={{ whiteSpace: 'pre-wrap', fontSize: '12.5px' }}>
                {subTextAction}
            </Typography>
        </Box>
    );
};
