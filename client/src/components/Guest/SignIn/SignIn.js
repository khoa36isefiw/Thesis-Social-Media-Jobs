import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    TextField,
    InputAdornment,
    IconButton,
    Button,
} from '@mui/material';
import Logo from '../../../assets/images/aikotoba-job.png';
import { useNavigate } from 'react-router-dom';
import { CustomizeTypography } from '../../CustomizeTypography/CustomizeTypography';
import { ipadProScreen, mobileScreen, tabletScreen } from '../../Theme/Theme';
function SignIn() {
    const [isShow, setIsShow] = useState(true);

    const handleShowPassword = () => {
        setIsShow(!isShow);
    };
    const navigate = useNavigate();
    return (
        <Box sx={{ backgroundColor: '#f3f2f0', minHeight: '80vh' }}>
            <Container>
                {/* <Box onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
                    <img src={Logo} alt="Logo" style={{ height: '100px', width: '100px' }} />
                </Box> */}

                <Container
                    sx={{
                        width: '420px',
                        minhHeight: '420px',
                        backgroundColor: '#ffffff',
                        borderRadius: '6px',
                        p: 2,
                        mt: 8,
                        [mobileScreen]: {
                            width: '100%',
                            height: '100%',
                        },
                    }}
                >
                    <Box>
                        <Typography sx={{ fontSize: '26px', fontWeight: 'bold' }}>
                            Sign In
                        </Typography>
                        <Typography sx={{ fontSize: '16px', mb: 2 }}>
                            Stay updated on your professional world
                        </Typography>
                        <CustomizeTypography sx={{ fontWeight: 'bold', mb: '2px' }}>
                            Email
                        </CustomizeTypography>
                        <TextField
                            id="outlined-email"
                            variant="outlined"
                            fullWidth={true}
                            sx={{
                                flexGrow: 2,
                                '.MuiInputBase-root': {
                                    borderColor: '#333',
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
                            sx={{ fontSize: '16px' }}
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
                    <Typography
                        onClick={() => navigate('/forgot-password')}
                        sx={{
                            fontSize: '14px',
                            mt: 2,
                            fontWeight: 'bold',
                            color: 'blue',
                            '&:hover': {
                                textDecoration: 'underline',
                                cursor: 'pointer',
                            },
                        }}
                    >
                        Forgot Password?
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
                        Sign In
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
                        <Typography sx={{ fontSize: '14px' }}>New to Aikotoba?</Typography>
                        <Typography
                            onClick={() => navigate('/sign-up')}
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
                            Join Now
                        </Typography>
                    </Box>
                </Container>
            </Container>
        </Box>
    );
}

export default SignIn;
