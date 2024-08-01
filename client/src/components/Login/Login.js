import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    InputAdornment,
    IconButton,
    Container,
    Button,
    Grid,
    Avatar,
} from '@mui/material';
import { CustomizeTextField } from '../CustomizeTextField/CustomizeTextField';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import { Link, useNavigate } from 'react-router-dom';
import ImageLogin from '../../assets/images/imgLogin.png';
import { mobileScreen, tabletScreen } from '../Theme/Theme';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { validateEmail, validatePassword } from '../CheckValidation/CheckValidation';
import { setLoggedInUser } from '../../redux/ManageAccount/manageAccountAction';
import { useEffect } from 'react';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const listAccount = useSelector((state) => state.manageAccounts.accountsList);
    const [showNotifications, setShowNotifications] = useState(false);
    const [isShow, setIsShow] = useState(true);
    const [emailValidation, setEmailValidation] = useState('');
    const [passwordValidation, setPasswordValidation] = useState('');
    const [checkLogin, setCheckLogin] = useState(true);

    const handleShowPassword = () => {
        setIsShow(!isShow);
    };

    const handleSignIn = () => {
        // userName or email is the same
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
    return (
        <Container
            sx={{
                [tabletScreen]: {
                    mb: 4,
                },
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Typography
                        sx={{
                            color: '#B24020',
                            mt: 4,
                            fontSize: '48px',
                            [mobileScreen]: {
                                fontSize: '32px',
                            },
                            [tabletScreen]: {
                                fontSize: '32px',
                            },
                        }}
                    >
                        Welcome to your professional community
                    </Typography>
                    {/* <Typography variant="h2">Welcome to your professional community</Typography> */}
                    <Box mt={4}>
                        <Box sx={{ maxWidth: '400px', mb: 2 }}>
                            <CustomizeTypography sx={{ fontWeight: 'bold' }}>
                                Email
                            </CustomizeTypography>
                            <CustomizeTextField inputRef={emailRef} sx={{ width: '100%' }} />
                        </Box>
                        <Box sx={{ maxWidth: '400px', mb: 2 }}>
                            <CustomizeTypography sx={{ fontWeight: 'bold' }}>
                                Password
                            </CustomizeTypography>
                            <CustomizeTextField
                                inputRef={passwordRef}
                                type={!isShow ? 'text' : 'password'}
                                sx={{ width: '100%', fontSize: '16px' }}
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
                                                <Typography sx={{ fontWeight: 'bold' }}>
                                                    {isShow ? 'Hide' : 'Show'}
                                                </Typography>
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                    fontSize: '16px',
                                }}
                            />
                        </Box>
                        <Link to="/forgot-password">
                            <CustomizeTypography
                                sx={{
                                    color: 'blue',
                                    fontWeight: 'bold',
                                    textAlign: 'end',
                                    maxWidth: '400px',
                                }}
                            >
                                Forgot Password?
                            </CustomizeTypography>
                        </Link>
                        <Button
                            sx={{
                                fontSize: '16px',
                                textTransform: 'capitalize',
                                fontWeight: 'bold',
                                width: '100%',
                                borderRadius: '24px',
                                mt: 2,
                                maxWidth: '400px',
                            }}
                            variant="contained"
                            onClick={handleSignIn}
                        >
                            Sign In
                        </Button>
                        <Box
                            mt={2}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            sx={{
                                maxWidth: '400px',
                            }}
                        >
                            <Box borderBottom={1} borderColor="text.secondary" flex={1} />
                            <CustomizeTypography variant="body2" color="text.secondary">
                                Or
                            </CustomizeTypography>
                            <Box borderBottom={1} borderColor="text.secondary" flex={1} />
                        </Box>
                        <Button
                            sx={{
                                fontSize: '16px',
                                textTransform: 'capitalize',
                                fontWeight: 'bold',
                                width: '100%',
                                borderRadius: '24px',
                                mt: 2,
                                maxWidth: '400px',
                            }}
                            variant="outlined"
                            onClick={() => navigate('/sign-up')}
                        >
                            New to Aikotoba? Join Now
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Box mt={2}>
                        <Avatar
                            src={ImageLogin}
                            alt="Image Login"
                            sx={{
                                height: '460px',
                                borderRadius: 0,
                                width: '100%',
                                objectFit: 'cover',
                                [mobileScreen]: {
                                    height: '100%',
                                    width: '100%',
                                },
                                [tabletScreen]: {
                                    ml: 1,
                                    // height: '100%',
                                    width: '100%',
                                },
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Login;
