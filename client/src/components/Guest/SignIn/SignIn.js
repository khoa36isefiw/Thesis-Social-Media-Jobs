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
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import SnackbarShowNotifications from '../../SnackbarShowNotifications/SnackbarShowNotifications';
import WarningIcon from '@mui/icons-material/Warning';
import CheckValidation from '../../CheckValidation/CheckValidation';

function SignIn() {
    const [isShow, setIsShow] = useState(true);
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [showNotifications, setShowNotifications] = useState(false);
    const [emailValidation, setEmailValidation] = useState(false);
    const [passwordValidation, setPasswordValidation] = useState(false);
    const [checkLogin, setCheckLogin] = useState(true);

    const listAccount = useSelector((state) => state.manageAccounts.accountsList);

    const handleShowPassword = () => {
        setIsShow(!isShow);
    };

    const handleSignIn = () => {
        // userName or email is the same
        const email = emailRef.current.value.trim();
        const password = passwordRef.current.value.trim();
        const user = listAccount.find(
            (account) => account.userName === email && account.password === password,
        );

        if (email === '') {
            setEmailValidation(true);
        } else if (password === '') {
            setPasswordValidation(true);
        } else {
            if (!email.includes('@')) {
                setEmailValidation(true);
            } else if (email.startsWith('@')) {
            } else {
                setEmailValidation(false);
                setPasswordValidation(false);
                if (user) {
                    // login successfully

                    console.log('login successfully ');
                    navigate('/signed-in');
                } else {
                    // can't login
                    setCheckLogin(false);
                    setShowNotifications(true);
                }
            }
        }
    };

    const handleCloseSnackbar = () => {
        setShowNotifications(false);
    };
    return (
        <Box
            sx={{
                backgroundColor: '#f3f2f0',
                minHeight: '80vh',
            }}
        >
            <Container>
                <Container
                    sx={{
                        width: '420px',
                        minhHeight: '420px',
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        p: 2,
                        mt: 8,
                        [mobileScreen]: {
                            width: '100%',
                            height: '100%',
                        },

                        boxShadow: '0px 2px 4px rgba(0,0,0,0.4)',
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
                            error={emailValidation}
                            // error={emailValidation ? true : !checkLogin ? false : true}
                            helperText={
                                emailValidation && 'Please enter an email address or phone number'
                            }
                            inputRef={emailRef}
                            id="outlined-email"
                            variant="outlined"
                            fullWidth={true}
                            sx={{
                                flexGrow: 2,
                                '.MuiInputBase-root': {
                                    borderColor: !emailValidation ? '#333' : 'red',
                                    fontSize: '14px',
                                    height: '40px',
                                },

                                '& .MuiFormHelperText-root': {
                                    fontSize: '12.5px',
                                    color: 'red',
                                    mx: 1,
                                },
                            }}
                        />
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <CustomizeTypography sx={{ fontWeight: 'bold', mb: '2px' }}>
                            Password
                        </CustomizeTypography>
                        <TextField
                            error={passwordValidation}
                            // error={passwordValidation ? true : !checkLogin ? true : false}
                            helperText={
                                passwordValidation && (
                                    <Typography sx={{ color: 'red', fontSize: '12.5px' }}>
                                        Please enter a password
                                    </Typography>
                                )
                            }
                            inputRef={passwordRef}
                            type={!isShow ? 'text' : 'password'}
                            fullWidth={true}
                            sx={{
                                '.MuiInputBase-root': {
                                    borderColor: '#333',
                                    fontSize: '14px',
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
                                                        fontSize: '13px',
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
                                                        fontSize: '13px',
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
                    {!checkLogin && (
                        <Typography
                            // onClick={() => navigate('/forgot-password')}
                            sx={{
                                fontSize: '13px',
                                mt: 2,
                                color: 'red',
                            }}
                        >
                            Wrong email or password. Try again or{' '}
                            <Box
                                component={'span'}
                                sx={{
                                    fontWeight: 'bold',
                                    textDecoration: 'underline',
                                    '&:hover': {
                                        cursor: 'pointer',
                                    },
                                }}
                                onClick={() => navigate('/sign-up')}
                            >
                                create an account
                            </Box>
                        </Typography>
                    )}
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
                        onClick={handleSignIn}
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
                <SnackbarShowNotifications
                    mainText={'Login failed! Please try again'}
                    isOpen={showNotifications}
                    onClose={handleCloseSnackbar}
                    warning={true}
                    icon={<WarningIcon sx={{ fontSize: '24px', color: 'orange' }} />}
                />
            </Container>
        </Box>
    );
}

export default SignIn;
