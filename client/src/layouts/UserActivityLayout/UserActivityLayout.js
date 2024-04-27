import React from 'react';
import Header from '../UserHomePageLayout/Header/Header';
import { Box, Typography, Container, Avatar, styled, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { blue } from '@mui/material/colors';
import UserActivityAvatar from '../../assets/images/avatar.jpeg';
import { CustomizeTypography } from '../../components/CustomizeTypography/CustomizeTypography';
import HiringCareer from '../../components/Advertising/HiringCareer';
import SimilarFollowers from '../UserProfileLayout/SimilarFollowers/SimilarFollowers';
import Advertising from '../../components/Advertising/Advertising';

const TypographyPeopleActivity = styled(Typography)(({ fs, fw = false, cl = false }) => ({
    fontSize: fs || '14px',
    fontWeight: fw ? 'bold' : 'normal',
    marginBottom: '8px',
    color: cl ? '#666' : '#333',
}));

function UserActivityLayout({ children }) {
    return (
        <Box sx={{ backgroundColor: '#f3f2f0', minHeight: '100vh', position: 'relative' }}>
            <Header />
            <Container sx={{ mt: 12, paddingBottom: '50px' }}>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <UserInformationLayout />
                    </Grid>
                    <Grid item xs={6}>
                        <Box>{children}</Box>
                    </Grid>
                    <Grid item xs={3}>
                        <HiringCareer />
                        <SimilarFollowers />
                        <Advertising />
                    </Grid>
                </Grid>
            </Container>
            <Typography
                sx={{
                    fontSize: '14px',
                    py: 2,
                    color: 'text.secondary',
                    textAlign: 'center',
                    position: 'absolute',
                    bottom: '0',
                    width: '100%',
                }}
            >
                Aikotoba Corporation &copy; 2023
            </Typography>
        </Box>
    );
}

export default UserActivityLayout;

function UserInformationLayout() {
    return (
        <Box
            sx={{
                minHeight: '50px',
                width: '100%',
                backgroundColor: '#fff',
                borderRadius: '12px',
                border: '1px solid #d9d9d9',
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar
                    // src={UserBackgroundImage}
                    src={
                        'https://media.istockphoto.com/id/835370890/photo/sunset-sunrise-with-clouds-light-rays-and-other-atmospheric-effect.jpg?s=612x612&w=0&k=20&c=zGDOBYVFY74wX2gUgkonYGtNl1zenev5mPotAqUlJbM='
                    }
                    alt="User Backgorund Image"
                    sx={{
                        borderTopLeftRadius: '12px',
                        borderTopRightRadius: '12px',
                        borderBottomLeftRadius: '0',
                        borderBottomRightRadius: '0',
                        width: '100%',
                        height: '80px',
                        objectFit: 'cover',
                        zIndex: 2,
                    }}
                />
                <Avatar
                    src={UserActivityAvatar}
                    alt="User Avatar"
                    sx={{
                        height: '80px',
                        width: '80px',
                        mt: '-40px',
                        border: '4px solid #fff',
                        zIndex: 99,
                    }}
                />

                <CustomizeTypography fw={true} mt={2}>
                    Huynh Dang Khoa
                </CustomizeTypography>

                <TypographyPeopleActivity>Student at HCMUTE</TypographyPeopleActivity>
            </Box>
            <Box sx={{ height: '1px', width: '100%', border: '1px solid #d9d9d9', mb: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 2 }}>
                <TypographyPeopleActivity fs={'13px'} cl={true} fw={true}>
                    Followers
                </TypographyPeopleActivity>
                <TypographyPeopleActivity
                    fs={'13px'}
                    fw={true}
                    sx={{
                        color: blue[800],
                        '&:hover': {
                            cursor: 'pointer',
                            textDecoration: 'underline',
                        },
                    }}
                >
                    2
                </TypographyPeopleActivity>
            </Box>

            {/* this button will display when i access to another user pages */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    variant="contained"
                    fullWidth={true}
                    sx={{
                        fontSize: '16px',
                        textTransform: 'capitalize',
                        borderRadius: '24px',
                        mx: 2,
                        mb: 2,
                        fontWeight: 'bold',
                    }}
                >
                    Message
                </Button>
            </Box>
        </Box>
    );
}
