import React, { useRef, useState } from 'react';
import {
    Box,
    Container,
    Typography,
    TextField,
    InputAdornment,
    IconButton,
    Button,
    Grid,
    Paper,
    styled,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import WarningIcon from '@mui/icons-material/Warning';

import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import { mobileScreen } from '../Theme/Theme';
import {
    validateEmail,
    validatePassword,
    validateRequiredWithDigits,
} from '../CheckValidation/CheckValidation';
import SnackbarShowNotifications from '../SnackbarShowNotifications/SnackbarShowNotifications';
import { StudyDate } from '../EducationContent/EducationContent';

function SignUpAccount() {
    const [isShow, setIsShow] = useState(true);
    const navigate = useNavigate();
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [showNotifications, setShowNotifications] = useState(false);
    const [firstNameValidation, setFirstNameValidation] = useState('');
    const [lastNameValidation, setLastNameValidation] = useState('');
    const [emailValidation, setEmailValidation] = useState('');
    const [passwordValidation, setPasswordValidation] = useState('');
    const [checkLogin, setCheckLogin] = useState(true);

    const listAccount = useSelector((state) => state.manageAccounts.accountsList);

    const handleShowPassword = () => {
        setIsShow(!isShow);
    };

    const handleSignIn = () => {
        const firstName = firstNameRef.current.value.trim();
        const lastName = lastNameRef.current.value.trim();
        const email = emailRef.current.value.trim();
        const password = passwordRef.current.value.trim();

        const firstNameError = validateRequiredWithDigits(firstName);
        const lastNameError = validateRequiredWithDigits(lastName);
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);

        if (emailError) {
            setEmailValidation(emailError);
        } else if (passwordError) {
            setPasswordValidation(passwordError);
        } else if (firstNameError) {
            setFirstNameValidation(firstNameError);
        } else if (lastNameError) {
            setLastNameValidation(lastNameError);
        } else {
            const user = listAccount.find(
                (account) => account.userName === email && account.password === password,
            );

            if (user) {
                setShowNotifications(false);
                console.log('login successfully');
                navigate('/signed-in');
            } else {
                setCheckLogin(false);
                setShowNotifications(true);
            }
        }
    };

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

    const handleFirstNameBlur = () => {
        const firstName = firstNameRef.current.value.trim();
        const firstNameError = validateRequiredWithDigits(firstName);
        setFirstNameValidation(firstNameError);
    };
    const handleLastNameBlur = () => {
        const lastName = lastNameRef.current.value.trim();
        const lastNameError = validateRequiredWithDigits(lastName);
        setLastNameValidation(lastNameError);
    };

    const handleCloseSnackbar = () => {
        setShowNotifications(false);
    };

    return (
        <Container
            sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '60vh',
            }}
        >
            <Grid
                items
                container
                spacing={2}
                sx={{
                    width: '500px',
                    minHeight: '420px',
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    p: 2,
                    my: 6,
                    boxShadow: '0px 2px 4px rgba(0,0,0,0.4)',
                    [mobileScreen]: {
                        // width: '100%',
                        // height: '100%',
                    },
                }}
            >
                <Grid xs={12} sm={12} md={12} lg={12} sx={{ px: 1 }}>
                    <Typography sx={{ fontSize: '26px', fontWeight: 'bold' }}>Sign Up</Typography>
                    <Typography sx={{ fontSize: '16px', mb: 2 }}>
                        Stay updated on your professional world.{' '}
                        <CustomizeTypography>It's quick and easy</CustomizeTypography>
                    </Typography>
                </Grid>

                <Grid xs={12} sm={12} md={12} lg={6}>
                    <InputField
                        inputText={'First Name'}
                        emailValidation={firstNameValidation}
                        emailRef={firstNameRef}
                        handleEmailBlur={handleFirstNameBlur}
                    />
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={6}>
                    <InputField
                        inputText={'Last Name'}
                        emailValidation={lastNameValidation}
                        emailRef={lastNameRef}
                        handleEmailBlur={handleLastNameBlur}
                    />
                </Grid>

                <Grid xs={12} sm={12} md={12} lg={12} sx={{ px: 1 }}>
                    <StudyDate />
                </Grid>
                <Grid xs={12} sm={12} lg={12}>
                    <InputField
                        inputText={'Email'}
                        emailValidation={emailValidation}
                        emailRef={emailRef}
                        handleEmailBlur={handleEmailBlur}
                    />
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={12}>
                    <PasswordTextField
                        passwordValidation={passwordValidation}
                        isShow={isShow}
                        passwordRef={passwordRef}
                        handleShowPassword={handleShowPassword}
                        handlePasswordBlur={handlePasswordBlur}
                    />
                </Grid>

                <Grid sx={{ p: 1 }} lg={12}>
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
                        Sign Up
                    </Button>
                </Grid>
                {showNotifications && (
                    <SnackbarShowNotifications
                        mainText="Login failed! Please try again"
                        isOpen={showNotifications}
                        onClose={handleCloseSnackbar}
                        warning
                        icon={<WarningIcon sx={{ fontSize: '24px', color: 'orange' }} />}
                    />
                )}
            </Grid>
        </Container>
    );
}

export default SignUpAccount;

const InputField = ({ inputText, emailValidation, emailRef, handleEmailBlur }) => {
    return (
        <Box sx={{ px: 1 }}>
            {/* First Name, Last Name */}
            <CustomizeTypography sx={{ fontWeight: 'bold', mb: '2px' }}>
                {inputText}
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
                }}
                onBlur={handleEmailBlur}
            />
        </Box>
    );
};

const PasswordTextField = ({
    passwordValidation,
    isShow,
    passwordRef,
    handleShowPassword,
    handlePasswordBlur,
}) => {
    return (
        <Box sx={{ p: 1 }}>
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
    );
};
