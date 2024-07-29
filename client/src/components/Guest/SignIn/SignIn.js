import React, { useRef, useState } from 'react';
import {
    Box,
    Container,
    Typography,
    TextField,
    InputAdornment,
    IconButton,
    Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SnackbarShowNotifications from '../../SnackbarShowNotifications/SnackbarShowNotifications';
import WarningIcon from '@mui/icons-material/Warning';
import { validateEmail, validatePassword } from '../../CheckValidation/CheckValidation';

import { CustomizeTypography } from '../../CustomizeTypography/CustomizeTypography';
import { mobileScreen } from '../../Theme/Theme';
import { setLoggedInUser } from '../../../redux/ManageAccount/manageAccountAction';
import { useEffect } from 'react';

function SignIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [isShow, setIsShow] = useState(true);
    const [showNotifications, setShowNotifications] = useState(false);
    const [emailValidation, setEmailValidation] = useState('');
    const [passwordValidation, setPasswordValidation] = useState('');
    const [checkLogin, setCheckLogin] = useState(true);

    const listAccount = useSelector((state) => state.manageAccounts.accountsList);
    // console.log('current list: ', listAccount);

    const handleShowPassword = () => {
        setIsShow(!isShow);
    };

    const handleSignIn = () => {
        const email = emailRef.current.value.trim();
        const password = passwordRef.current.value.trim();

        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);

        if (emailError) {
            setEmailValidation(emailError);
        } else if (passwordError) {
            setPasswordValidation(passwordError);
        } else {
            const user = listAccount.find(
                (account) => account.userName === email && account.password === password,
            );

            if (user) {
                setShowNotifications(false);
                // get user information and save it who logged into website
                dispatch(setLoggedInUser(user));
                console.log('login successfully');
                navigate('/signed-in');
            } else {
                setCheckLogin(false);
                setShowNotifications(true);
            }
        }
    };

    const handleEnterToSignIn = (event) => {
        if (event.key === 'Enter') {
            handleSignIn();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleEnterToSignIn);
        return () => {
            window.removeEventListener('keydown', handleEnterToSignIn);
        };
    });

    const handleEmailBlur = () => {
        const email = emailRef.current.value.trim();
        const emailError = validateEmail(email); // check validate data input
        setEmailValidation(emailError);
    };

    const handlePasswordBlur = () => {
        const password = passwordRef.current.value.trim();
        const passwordError = validatePassword(password);
        setPasswordValidation(passwordError);
    };

    const handleCloseSnackbar = () => {
        setShowNotifications(false);
    };

    return (
        <Box
            sx={{
                backgroundColor: '#f3f2f0',
                minHeight: '100vh',
            }}
        >
            <Container>
                <Container
                    sx={{
                        width: '420px',
                        minHeight: '420px',
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        p: 2,
                        mt: 8,
                        boxShadow: '0px 2px 4px rgba(0,0,0,0.4)',
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
                            error={!!emailValidation}
                            helperText={
                                emailValidation && (
                                    <Typography sx={{ color: 'red', fontSize: '12.5px' }}>
                                        {emailValidation}
                                    </Typography>
                                )
                            }
                            inputRef={emailRef}
                            variant="outlined"
                            fullWidth
                            sx={{
                                '.MuiInputBase-root': {
                                    borderColor: emailValidation ? 'red' : '#333',
                                    fontSize: '14px',
                                    height: '40px',
                                },
                                '& .MuiFormHelperText-root': {
                                    fontSize: '12.5px',
                                    color: 'red',
                                    mx: 1,
                                },
                                '.MuiInputBase-input': {
                                    textTransform: 'lowercase',
                                },
                            }}
                            onBlur={handleEmailBlur}
                        />
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <CustomizeTypography sx={{ fontWeight: 'bold', mb: '2px' }}>
                            Password
                        </CustomizeTypography>

                        <TextField
                            error={!!passwordValidation}
                            helperText={
                                passwordValidation && (
                                    <Typography sx={{ color: 'red', fontSize: '12.5px' }}>
                                        {passwordValidation}
                                    </Typography>
                                )
                            }
                            inputRef={passwordRef}
                            type={isShow ? 'password' : 'text'}
                            fullWidth
                            sx={{
                                '.MuiInputBase-root': {
                                    borderColor: passwordValidation ? 'red' : '#333',
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
                                            sx={{ '&:hover': { backgroundColor: 'transparent' } }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: '13px',
                                                    fontWeight: 'bold',
                                                    color: 'blue',
                                                    '&:hover': { textDecoration: 'underline' },
                                                }}
                                            >
                                                {isShow ? 'Show' : 'Hide'}
                                            </Typography>
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            onBlur={handlePasswordBlur}
                        />
                    </Box>
                    {!checkLogin && (
                        <Typography sx={{ fontSize: '13px', mt: 2, color: 'red' }}>
                            Wrong email or password. Try again or{' '}
                            <Box
                                component="span"
                                sx={{
                                    fontWeight: 'bold',
                                    textDecoration: 'underline',
                                    '&:hover': { cursor: 'pointer' },
                                }}
                                onClick={() => navigate('/sign-up')}
                            >
                                create an account
                            </Box>
                        </Typography>
                    )}
                    <CustomizeTypography
                        onClick={() => navigate('/forgot-password')}
                        sx={{
                            fontSize: '14px',
                            mt: 2,
                            fontWeight: 'bold',
                            color: 'blue',
                            '&:hover': { textDecoration: 'underline', cursor: 'pointer' },
                        }}
                    >
                        Forgot Password?
                    </CustomizeTypography>
                    <Button
                        variant="contained"
                        sx={{
                            mt: 2,
                            fontWeight: 'bold',
                            fontSize: '14px',
                            textTransform: 'capitalize',
                            borderRadius: '24px',
                        }}
                        fullWidth
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
                                '&:hover': { textDecoration: 'underline', cursor: 'pointer' },
                            }}
                        >
                            Join Now
                        </Typography>
                    </Box>
                </Container>
                {showNotifications && (
                    <SnackbarShowNotifications
                        mainText="Login failed! Please try again"
                        isOpen={showNotifications}
                        onClose={handleCloseSnackbar}
                        warning
                        icon={<WarningIcon sx={{ fontSize: '24px', color: 'orange' }} />}
                    />
                )}
            </Container>
        </Box>
    );
}

export default SignIn;
