import React from 'react';
import { Box, Avatar, IconButton } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { CustomizeTypography } from '../../CustomizeTypography/CustomizeTypography';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../../ScrollToTop/ScrollToTop';
import { mobileScreen, theme } from '../../Theme/Theme';
function UserEducation() {
    const navigate = useNavigate();
    const handleNavigateEducation = () => {
        navigate('/user-profile/details/education');
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
                p: 3,
                mt: 2,
                mb: 2,
                [mobileScreen]: {
                    borderRadius: 0,
                },
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <CustomizeTypography fs="20px" fw={true}>
                    Education
                </CustomizeTypography>
                <IconButton onClick={() => handleNavigateEducation()}>
                    <EditOutlinedIcon sx={{ fontSize: '28px' }} />
                </IconButton>
            </Box>
            <Box
                sx={{
                    mt: 1,
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                }}
            >
                <Avatar
                    // src={UserBackgroundImage}
                    src={
                        'https://media.istockphoto.com/id/835370890/photo/sunset-sunrise-with-clouds-light-rays-and-other-atmospheric-effect.jpg?s=612x612&w=0&k=20&c=zGDOBYVFY74wX2gUgkonYGtNl1zenev5mPotAqUlJbM='
                    }
                    alt="University Logo"
                    sx={{
                        borderRadius: '0px',
                        width: '40px',
                        height: '40px',
                        objectFit: 'contain',
                        zIndex: 2,
                    }}
                />

                <Box sx={{ ml: 1 }}>
                    <CustomizeTypography
                        sx={{
                            fontWeight: '600',
                            '&:hover': {
                                cursor: 'pointer',
                                textDecoration: 'underline',
                            },
                        }}
                        fs={'16px'}
                    >
                        HCMC University of Technology and Education
                    </CustomizeTypography>
                    <CustomizeTypography fs={'14px'} sx={{ color: theme.palette.primaryText }}>
                        Information Technology
                    </CustomizeTypography>
                    <CustomizeTypography fs={'14px'} sx={{ color: theme.palette.primaryText }}>
                        Grade: 3.06
                    </CustomizeTypography>
                </Box>
            </Box>
        </Box>
    );
}
export default UserEducation;
