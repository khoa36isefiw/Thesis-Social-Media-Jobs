import React from 'react';
import { CustomizeBox } from '../../CustomizeBox/CustomizeBox';
import { Box, Button, Divider, IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../../ScrollToTop/ScrollToTop';
import { CustomizeTypography } from '../../CustomizeTypography/CustomizeTypography';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { blue } from '@mui/material/colors';
import StartOutlinedIcon from '@mui/icons-material/StartOutlined';
function UserActivity() {
    const navigate = useNavigate();
    const handleNavigateToActivity = () => {
        navigate('/user/recent-activity/all');
        scrollToTop();
    };
    return (
        <Box
            sx={{
                minHeight: '50px',
                width: '100%',
                borderRadius: '12px',
                border: '1px solid #d9d9d9',
                backgroundColor: '#fff',
            }}
        >
            <Box sx={{ p: 3, mb: 2 }}>
                <Box
                    sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <Box>
                        <CustomizeTypography fs="20px" fw={true}>
                            Activity
                        </CustomizeTypography>
                        <CustomizeTypography
                            fs="14px"
                            sx={{
                                color: blue[800],
                                fontWeight: 'bold',
                                '&:hover': {
                                    textDecoration: 'underline',
                                },
                            }}
                        >
                            2 followers
                        </CustomizeTypography>
                    </Box>
                    <Box>
                        <Button
                            sx={{
                                textTransform: 'initial',
                                fontSize: '16px',
                                borderRadius: '24px',
                                fontWeight: 'bold',
                            }}
                            variant="outlined"
                        >
                            Create a post
                        </Button>
                        <IconButton
                        // onClick={() => handleNavigateEducation()}
                        >
                            <EditOutlinedIcon sx={{ fontSize: '28px' }} />
                        </IconButton>
                    </Box>
                </Box>
                <Box
                    sx={{
                        mt: 1,
                        // display: 'flex',
                        // alignItems: 'flex-start',
                        // justifyContent: 'flex-start',
                    }}
                >
                    <CustomizeTypography fs="16px" fw={true} sx={{ color: '#404040' }}>
                        You haven't posted yet
                    </CustomizeTypography>
                    <CustomizeTypography fs="14px" sx={{ color: '#404040' }}>
                        Posts you share will be displayed here.
                    </CustomizeTypography>
                </Box>
            </Box>
            <Divider />
            <Button
                fullWidth={true}
                sx={{
                    textTransform: 'initial',
                    color: '#404040',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '14px',
                    fontWeight: 'bold',
                }}
                onClick={handleNavigateToActivity}
            >
                {/* <CustomizeTypography>Show all activity</CustomizeTypography> */}
                Show all activity
                <IconButton
                    disableTouchRipple
                    sx={{ '&:hover': { backgroundColor: 'transparent' } }}
                >
                    <StartOutlinedIcon sx={{ fontSize: '24px', color: '#404040' }} />
                </IconButton>
            </Button>
        </Box>
    );
}
export default UserActivity;
