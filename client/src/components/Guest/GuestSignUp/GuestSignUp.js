import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    TextField,
    InputAdornment,
    IconButton,
    Button,
    Link,
} from '@mui/material';
import Logo from '../../../assets/images/aikotoba-job.png';
import { useNavigate } from 'react-router-dom';
import { CustomizeTypography } from '../../CustomizeTypography/CustomizeTypography';
import { CustomizeTextField } from '../../CustomizeTextField/CustomizeTextField';
import { mobileScreen } from '../../Theme/Theme';
function GuestLogin() {
    const [isShow, setIsShow] = useState(true);

    const handleShowPassword = () => {
        setIsShow(!isShow);
    };
    const navigate = useNavigate();
    return (
        <Box sx={{ minHeight: '100vh' }}>
            <Container>
                <Typography
                    sx={{
                        textAlign: 'center',
                        fontSize: '26px',
                        mb: 2,
                        fontWeight: 'bold',
                        mt: 8,
                        [mobileScreen]: {
                            mt: 0,
                        },
                    }}
                >
                    Make the most of your professional life
                </Typography>
                <Container
                    sx={{
                        width: '420px',
                        height: '420px',
                        backgroundColor: '#f9f9f9',
                        borderRadius: '6px',
                        p: 2,
                        [mobileScreen]: {
                            width: '100%',
                            height: '100%',
                        },
                    }}
                >
                    <Box sx={{ mt: 2 }}>
                        <CustomizeTypography sx={{ fontWeight: 'bold', mb: '2px' }}>
                            Email
                        </CustomizeTypography>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            fullWidth={true}
                            sx={{
                                color: 'black',
                                flexGrow: 2,
                                '.MuiInputBase-root': {
                                    fontSize: '16px',
                                    height: '40px',
                                },
                            }}
                        />
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <CustomizeTypography sx={{ fontWeight: 'bold', mb: '2px' }}>
                            Password
                        </CustomizeTypography>
                        <TextField
                            type={!isShow ? 'text' : 'password'}
                            fullWidth={true}
                            sx={{
                                flexGrow: 2,
                                '.MuiInputBase-root': {
                                    fontSize: '16px',
                                    height: '40px',
                                },
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            edge="end"
                                            onClick={handleShowPassword}
                                            disableTouchRipple
                                            sx={{
                                                '&:hover': {
                                                    backgroundColor: 'transparent',
                                                },
                                            }}
                                        >
                                            {!isShow ? (
                                                // <VisibilityIcon />
                                                <Typography
                                                    sx={{
                                                        fontWeight: 'bold',
                                                        color: 'blue',
                                                        '&:hover': {
                                                            textDecoration: 'underline',
                                                        },
                                                    }}
                                                >
                                                    Hide
                                                </Typography>
                                            ) : (
                                                // <VisibilityOffIcon />
                                                <Typography
                                                    sx={{
                                                        fontWeight: 'bold',
                                                        color: 'blue',
                                                        '&:hover': {
                                                            textDecoration: 'underline',
                                                        },
                                                    }}
                                                >
                                                    Show
                                                </Typography>
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                                fontSize: '16px',
                            }}
                        />
                    </Box>
                    <Typography sx={{ fontSize: '13px', textAlign: 'center', mt: 2 }}>
                        By clicking Agree & Join, you agree to the Aikotoba User Agreement, Privacy
                        Policy, and Cookie Policy.
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            mt: 2,
                            fontWeight: 'bold',
                            fontSize: '14px',
                            textTransform: 'capitalize',
                            borderRadius: '24px',
                        }}
                        fullWidth={true}
                    >
                        Agree and Join
                    </Button>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 2,
                            mb: 2,
                            mt: 2,
                        }}
                    >
                        <Box sx={{ borderBottom: 1, borderColor: 'text.secondary', flexGrow: 1 }} />
                        <CustomizeTypography variant="body2" sx={{ fontWeight: '600' }}>
                            or
                        </CustomizeTypography>
                        <Box sx={{ borderBottom: 1, borderColor: 'text.secondary', flexGrow: 1 }} />
                    </Box>
                    {/* Already have an account */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            textAlign: 'center',
                            justifyContent: 'center',
                            mt: 4,
                        }}
                    >
                        <Typography sx={{ fontSize: '14px' }}>Already on Aikotoba?</Typography>
                        <Typography
                            onClick={() => navigate('/sign-in')}
                            sx={{
                                color: 'blue',
                                fontWeight: 'bold',
                                fontSize: '14px',
                                ml: 1,

                                '&:hover': {
                                    textDecoration: 'underline',
                                    cursor: 'pointer',
                                },
                            }}
                        >
                            Sign In
                        </Typography>
                    </Box>
                </Container>
            </Container>
        </Box>
    );
}

export default GuestLogin;
