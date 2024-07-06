// import React, { useState } from 'react';
// import {
//     Box,
//     Container,
//     Typography,
//     TextField,
//     InputAdornment,
//     IconButton,
//     Button,
//     Link,
// } from '@mui/material';
// import Logo from '../../../assets/images/aikotoba-job.png';
// import { useNavigate } from 'react-router-dom';
// import { CustomizeTypography } from '../../CustomizeTypography/CustomizeTypography';
// import { CustomizeTextField } from '../../CustomizeTextField/CustomizeTextField';
// import { mobileScreen } from '../../Theme/Theme';
// import { useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { saveAccountRegistered } from '../../../redux/ManageAccount/manageAccountAction';
// import SnackbarShowNotifications from '../../SnackbarShowNotifications/SnackbarShowNotifications';
// import WarningIcon from '@mui/icons-material/Warning';
// function GuestSignUp() {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const emailRef = useRef(null);
//     const passwordRef = useRef(null);
//     const [isShow, setIsShow] = useState(true);
//     const listAccount = useSelector((state) => state.manageAccounts.accountsList);
//     const [isEmpty, setIsEmpty] = useState(false);
//     const [showNotifications, setShowNotifications] = useState(false);

//     const handleShowPassword = () => {
//         setIsShow(!isShow);
//     };

//     const handleSignUp = () => {
//         const userName = emailRef.current.value.trim();
//         console.log(userName);
//         const password = passwordRef.current.value.trim();
//         if (userName !== '' && password !== '') {
//             dispatch(saveAccountRegistered({ userName, password }));
//             setIsEmpty(false);
//         } else {
//             setIsEmpty(true);
//         }

//         setShowNotifications(true);
//     };

//     console.log('listAccount: ', listAccount);

//     const handleCloseSnackbar = () => {
//         setShowNotifications(false);
//     };
//     return (
//         <Box sx={{ minHeight: '100vh', backgroundColor: '#f3f2f0' }}>
//             <Container>
//                 <Typography
//                     sx={{
//                         textAlign: 'center',
//                         fontSize: '26px',
//                         mb: 2,
//                         fontWeight: 'bold',
//                         mt: 8,
//                         [mobileScreen]: {
//                             mt: 0,
//                         },
//                     }}
//                 >
//                     Make the most of your professional life
//                 </Typography>
//                 <Container
//                     sx={{
//                         width: '420px',
//                         height: '420px',
//                         backgroundColor: '#f9f9f9',
//                         borderRadius: '8px',
//                         boxShadow: '0px 2px 4px rgba(0,0,0,0.4)',
//                         p: 2,
//                         [mobileScreen]: {
//                             width: '100%',
//                             height: '100%',
//                         },
//                     }}
//                 >
//                     <Box sx={{ mt: 2 }}>
//                         <CustomizeTypography sx={{ fontWeight: 'bold', mb: '2px' }}>
//                             Email
//                         </CustomizeTypography>
//                         <TextField
//                             inputRef={emailRef}
//                             id="outlined-basic"
//                             variant="outlined"
//                             fullWidth={true}
//                             sx={{
//                                 color: 'black',
//                                 flexGrow: 2,
//                                 '.MuiInputBase-root': {
//                                     fontSize: '16px',
//                                     height: '40px',
//                                 },
//                             }}
//                         />
//                     </Box>
//                     <Box sx={{ mt: 2 }}>
//                         <CustomizeTypography sx={{ fontWeight: 'bold', mb: '2px' }}>
//                             Password
//                         </CustomizeTypography>
//                         <TextField
//                             inputRef={passwordRef}
//                             type={!isShow ? 'text' : 'password'}
//                             fullWidth={true}
//                             sx={{
//                                 flexGrow: 2,
//                                 '.MuiInputBase-root': {
//                                     fontSize: '16px',
//                                     height: '40px',
//                                 },
//                             }}
//                             InputProps={{
//                                 endAdornment: (
//                                     <InputAdornment position="end">
//                                         <IconButton
//                                             edge="end"
//                                             onClick={handleShowPassword}
//                                             disableTouchRipple
//                                             sx={{
//                                                 '&:hover': {
//                                                     backgroundColor: 'transparent',
//                                                 },
//                                             }}
//                                         >
//                                             {!isShow ? (
//                                                 // <VisibilityIcon />
//                                                 <Typography
//                                                     sx={{
//                                                         fontSize: '13px',
//                                                         fontWeight: 'bold',
//                                                         color: 'blue',
//                                                         '&:hover': {
//                                                             textDecoration: 'underline',
//                                                         },
//                                                     }}
//                                                 >
//                                                     Hide
//                                                 </Typography>
//                                             ) : (
//                                                 // <VisibilityOffIcon />
//                                                 <Typography
//                                                     sx={{
//                                                         fontSize: '13px',
//                                                         fontWeight: 'bold',
//                                                         color: 'blue',
//                                                         '&:hover': {
//                                                             textDecoration: 'underline',
//                                                         },
//                                                     }}
//                                                 >
//                                                     Show
//                                                 </Typography>
//                                             )}
//                                         </IconButton>
//                                     </InputAdornment>
//                                 ),
//                                 fontSize: '16px',
//                             }}
//                         />
//                     </Box>
//                     <Typography sx={{ fontSize: '13px', textAlign: 'center', mt: 2 }}>
//                         By clicking Agree & Join, you agree to the Aikotoba User Agreement, Privacy
//                         Policy, and Cookie Policy.
//                     </Typography>
//                     <Button
//                         variant="contained"
//                         sx={{
//                             mt: 2,
//                             fontWeight: 'bold',
//                             fontSize: '14px',
//                             textTransform: 'capitalize',
//                             borderRadius: '24px',
//                         }}
//                         fullWidth={true}
//                         onClick={handleSignUp}
//                     >
//                         Agree and Join
//                     </Button>
//                     <Box
//                         sx={{
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             gap: 2,
//                             mb: 2,
//                             mt: 2,
//                         }}
//                     >
//                         <Box sx={{ borderBottom: 1, borderColor: 'text.secondary', flexGrow: 1 }} />
//                         <CustomizeTypography variant="body2" sx={{ fontWeight: '600' }}>
//                             or
//                         </CustomizeTypography>
//                         <Box sx={{ borderBottom: 1, borderColor: 'text.secondary', flexGrow: 1 }} />
//                     </Box>
//                     {/* Already have an account */}
//                     <Box
//                         sx={{
//                             display: 'flex',
//                             alignItems: 'center',
//                             textAlign: 'center',
//                             justifyContent: 'center',
//                             mt: 4,
//                         }}
//                     >
//                         <Typography sx={{ fontSize: '14px' }}>Already on Aikotoba?</Typography>
//                         <Typography
//                             onClick={() => navigate('/sign-in')}
//                             sx={{
//                                 color: 'blue',
//                                 fontWeight: 'bold',
//                                 fontSize: '14px',
//                                 ml: 1,

//                                 '&:hover': {
//                                     textDecoration: 'underline',
//                                     cursor: 'pointer',
//                                 },
//                             }}
//                         >
//                             Sign In
//                         </Typography>
//                     </Box>
//                 </Container>

//                 <SnackbarShowNotifications
//                     mainText={isEmpty ? 'Not allowed null' : 'Tesst oepn'}
//                     isOpen={showNotifications}
//                     onClose={handleCloseSnackbar}
//                     warning={isEmpty}
//                     icon={<WarningIcon sx={{ fontSize: '24px', color: 'orange' }} />}
//                 />
//             </Container>
//         </Box>
//     );
// }

// export default GuestSignUp;

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
import { useDispatch, useSelector } from 'react-redux';

import WarningIcon from '@mui/icons-material/Warning';

import { CustomizeTypography } from '../../CustomizeTypography/CustomizeTypography';
import { mobileScreen } from '../../Theme/Theme';
import {
    validateEmail,
    validatePassword,
    validateRequiredWithDigits,
} from '../../CheckValidation/CheckValidation';
import SnackbarShowNotifications from '../../SnackbarShowNotifications/SnackbarShowNotifications';
import { StudyDate } from '../../EducationContent/EducationContent';
import {
    getDay,
    getMonth,
    getYear,
    saveAccountRegistered,
} from '../../../redux/ManageAccount/manageAccountAction';
import { BirthDate } from '../../BirthDate/BirthDate';

function GuestSignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isShow, setIsShow] = useState(true);
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [showNotifications, setShowNotifications] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const [firstNameValidation, setFirstNameValidation] = useState('');
    const [lastNameValidation, setLastNameValidation] = useState('');
    const [emailValidation, setEmailValidation] = useState('');
    const [passwordValidation, setPasswordValidation] = useState('');
    const [isCreatedAccount, setIsCreatedAccount] = useState(false);

    // get birthday
    const getBirthYear = useSelector((state) => state.manageAccounts.year);
    const getBirthMonth = useSelector((state) => state.manageAccounts.month);
    const getBirthDay = useSelector((state) => state.manageAccounts.day);
    const getBirthDate = `${getBirthYear}-${getBirthMonth}-${getBirthDay}`;

    const handleShowPassword = () => {
        setIsShow(!isShow);
    };

    const handleSignUp = () => {
        const firstName = firstNameRef.current.value.trim();
        const lastName = lastNameRef.current.value.trim();
        const email = emailRef.current.value.trim();
        const password = passwordRef.current.value.trim();

        const firstNameError = validateRequiredWithDigits(firstName);
        const lastNameError = validateRequiredWithDigits(lastName);
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);

        if (firstNameError) {
            setFirstNameValidation(firstNameError);
        } else if (lastNameError) {
            setLastNameValidation(lastNameError);
        } else if (getBirthDay === '' || getBirthYear === '' || getBirthMonth === '') {
            setShowNotifications(true);
            setNotificationMessage('Please select a valid birthday!');
        } else if (emailError) {
            setEmailValidation(emailError);
        } else if (passwordError) {
            setPasswordValidation(passwordError);
        } else {
            // save user information
            dispatch(
                saveAccountRegistered({
                    firstName,
                    lastName,
                    birthDate: getBirthDate,
                    userName: email,
                    password: password,
                }),
            );
            setIsCreatedAccount(true);
            //show notification
            setNotificationMessage('Create account successfully!');
            setShowNotifications(true);

            // reset input text
            firstNameRef.current.value = '';
            lastNameRef.current.value = '';
            emailRef.current.value = '';
            passwordRef.current.value = '';

            setTimeout(() => {
                navigate('/sign-in');
            }, 1500);
        }
    };

    const handleEmailBlur = () => {
        const email = emailRef.current.value.trim();
        // check validate data input
        const emailError = validateEmail(email);
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
                        Make the most of your professional life
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

                <Grid xs={12} sm={12} md={12} lg={12} sx={{ px: 1, py: 1 }}>
                    {/* <StudyDate /> */}
                    <CustomizeTypography sx={{ fontWeight: 'bold' }}>BirthDate</CustomizeTypography>
                    <BirthDate isCreatedAccount={isCreatedAccount} />
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
                        onClick={handleSignUp}
                    >
                        Sign Up
                    </Button>
                </Grid>
                <Grid lg={12}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 2,
                            mb: 2,
                            mt: 2,
                            px: 1,
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
                            mt: 1,
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
                </Grid>
                {showNotifications && (
                    <SnackbarShowNotifications
                        // mainText="Create account successfully!"
                        // isOpen={showNotifications}
                        // onClose={handleCloseSnackbar}
                        // // warning
                        // // icon={<WarningIcon sx={{ fontSize: '24px', color: 'orange' }} />}
                        mainText={notificationMessage}
                        isOpen={showNotifications}
                        onClose={handleCloseSnackbar}
                        warning={notificationMessage !== 'Create account successfully!'}
                        icon={
                            notificationMessage !== 'Create account successfully!' && (
                                <WarningIcon
                                    sx={{
                                        fontSize: '24px',
                                        color: 'orange',
                                    }}
                                />
                            )
                        }
                    />
                )}
            </Grid>
        </Container>
    );
}

export default GuestSignUp;

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
