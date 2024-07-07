import React from 'react';
import { Box, IconButton, Typography, Button, Divider, Avatar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DefaultBackgroundImage from '../../assets/images/pn.jpeg';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import { ipadProScreen, mobileScreen, tabletScreen } from '../Theme/Theme';
function ChangePhoto({ imgUrl, handleCloseChange }) {
    return (
        <Box
            sx={{
                position: 'relative',
                backgroundColor: '#fff',
                width: '50%',
                minHeight: '300px',
                margin: 'auto',
                mt: '64px',
                borderRadius: '8px',
                boxShadow: '0 4px 4px #333',
                //  close icon doesn't overflow
                overflow: 'hidden',
                [ipadProScreen]: {
                    width: '70%',
                },
                [tabletScreen]: {
                    width: '90%',
                },
                [mobileScreen]: {
                    width: '100%',
                    height: '460px',
                },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 1,
                }}
            >
                <CustomizeTypography fs={'20px'} fw={true}>
                    Change photo
                </CustomizeTypography>
                <IconButton
                    disableFocusRipple
                    sx={{
                        '&:hover': {
                            backgroundColor: '#d9d9d9',
                        },
                    }}
                    onClick={handleCloseChange}
                >
                    <CloseIcon fontSize="large" />
                </IconButton>
            </Box>

            <Divider sx={{ mb: 2 }} />
            <CustomizeTypography fs="18px" sx={{ color: '#191919', textAlign: 'center', py: 2 }}>
                Huynh, help others recognize you!
            </CustomizeTypography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Avatar
                    src={DefaultBackgroundImage}
                    alt="Default User Background Image"
                    sx={{
                        height: '248px',
                        width: '248px',
                        [mobileScreen]: {
                            height: '200px',
                            width: '200px',
                        },
                    }}
                />
                <Box
                    sx={{
                        width: '60%',
                        textAlign: 'center',
                        p: 1,
                        [mobileScreen]: { textAlign: 'left', width: '90%' },
                    }}
                >
                    <CustomizeTypography fs="18px" sx={{ color: '#191919' }}>
                        Showcase your personality, interests, team moments or notable milestones
                    </CustomizeTypography>
                    <CustomizeTypography fs="13px" sx={{ color: 'text.primary', mt: 2 }}>
                        A good photo will help you stand out.
                    </CustomizeTypography>
                </Box>
            </Box>
            <Divider sx={{ mt: 2, mb: 2 }} />
            <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                <Button
                    variant="contained"
                    sx={{
                        fontSize: '14px',
                        textTransform: 'initial',
                        fontWeight: 'bold',
                        width: '200px',
                        borderRadius: '24px',
                        mb: 2,
                        mx: 2,
                        mr: '20px',
                    }}
                >
                    Upload photo
                </Button>
            </Box>
        </Box>
    );
}

export default ChangePhoto;
