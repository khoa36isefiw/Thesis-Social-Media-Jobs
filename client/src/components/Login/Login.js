// import React, { useState } from 'react';
// import {
//     Box,
//     Typography,
//     TextField,
//     InputAdornment,
//     IconButton,
//     Container,
//     Button,
// } from '@mui/material';
// import { CustomizeTextField } from '../CustomizeTextField/CustomizeTextField';
// import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
// import { Link, useNavigate } from 'react-router-dom';
// import ImageLogin from '../../assets/images/imgLogin.png';
// import { mobileScreen } from '../Theme/Theme';

// function Login() {
//     const navigate = useNavigate();
//     const [isShow, setIsShow] = useState(true);

//     const handleShowPassword = () => {
//         setIsShow(!isShow);
//     };
//     return (
//         <Container>
//             <Box
//                 sx={{
//                     width: '600px',
//                     zIndex: 999,
//                     [mobileScreen]: {
//                         width: '400px',
//                         color: '#b24020',
//                     },
//                 }}
//             >
//                 <Typography
//                     sx={{
//                         fontSize: '48px',
//                         [mobileScreen]: {
//                             fontSize: '32px',
//                         },
//                     }}
//                 >
//                     Welcome to your professional community
//                 </Typography>
//             </Box>
//             <Box
//                 sx={{
//                     display: 'flex',
//                     [mobileScreen]: {
//                         flexDirection: 'column',
//                     },
//                 }}
//             >
//                 <Box sx={{ mt: 4 }}>
//                     <Box>
//                         <Box sx={{ mb: 2 }}>
//                             <CustomizeTypography sx={{ fontWeight: 'bold' }}>
//                                 Email
//                             </CustomizeTypography>
//                             <CustomizeTextField />
//                         </Box>
//                         <Box>
//                             <CustomizeTypography sx={{ fontWeight: 'bold' }}>
//                                 Password
//                             </CustomizeTypography>
//                             <CustomizeTextField
//                                 type={!isShow ? 'text' : 'password'}
//                                 sx={{ width: '400px', fontSize: '16px' }}
//                                 InputProps={{
//                                     endAdornment: (
//                                         <InputAdornment position="end">
//                                             <IconButton
//                                                 edge="end"
//                                                 onClick={handleShowPassword}
//                                                 disableTouchRipple
//                                                 sx={{
//                                                     '&:hover': {
//                                                         backgroundColor: 'transparent',
//                                                     },
//                                                 }}
//                                             >
//                                                 {!isShow ? (
//                                                     // <VisibilityIcon />
//                                                     <Typography sx={{ fontWeight: 'bold' }}>
//                                                         Hide
//                                                     </Typography>
//                                                 ) : (
//                                                     // <VisibilityOffIcon />
//                                                     <Typography sx={{ fontWeight: 'bold' }}>
//                                                         Show
//                                                     </Typography>
//                                                 )}
//                                             </IconButton>
//                                         </InputAdornment>
//                                     ),
//                                     fontSize: '16px',
//                                 }}
//                             />
//                         </Box>
//                         <Link to="/forgot-password">
//                             <CustomizeTypography
//                                 sx={{ color: 'blue', fontWeight: 'bold', mt: 2, textAlign: 'end' }}
//                             >
//                                 Forgot Password?
//                             </CustomizeTypography>
//                         </Link>
//                         <Button
//                             sx={{
//                                 fontSize: '16px',
//                                 textTransform: 'capitalize',
//                                 fontWeight: 'bold',
//                                 width: '100%',
//                                 borderRadius: '24px',
//                                 mt: 2,
//                             }}
//                             variant="contained"
//                         >
//                             Sign In
//                         </Button>
//                         {/* Google Authentication */}

//                         <Box
//                             sx={{
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 justifyContent: 'center',
//                                 gap: 2,
//                                 mb: 2,
//                                 mt: 2,
//                             }}
//                         >
//                             <Box
//                                 sx={{ borderBottom: 1, borderColor: 'text.secondary', flexGrow: 1 }}
//                             />
//                             <CustomizeTypography variant="body2" color="text.secondary">
//                                 Or
//                             </CustomizeTypography>
//                             <Box
//                                 sx={{ borderBottom: 1, borderColor: 'text.secondary', flexGrow: 1 }}
//                             />
//                         </Box>
//                         <Button
//                             sx={{
//                                 fontSize: '16px',
//                                 textTransform: 'capitalize',
//                                 fontWeight: 'bold',
//                                 width: '100%',
//                                 borderRadius: '24px',
//                                 mt: 2,
//                             }}
//                             variant="outlined"
//                             onClick={() => navigate('/sign-up')}
//                         >
//                             New to Aikotoba? Join Now
//                         </Button>
//                     </Box>
//                 </Box>
//                 <Box sx={{ mt: -12 }}>
//                     <img src={ImageLogin} alt="Image Login" style={{ height: '600px' }} />
//                 </Box>
//             </Box>
//         </Container>
//     );
// }

// export default Login;

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

function Login() {
    const navigate = useNavigate();
    const [isShow, setIsShow] = useState(true);

    const handleShowPassword = () => {
        setIsShow(!isShow);
    };

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
                            <CustomizeTextField sx={{ width: '100%' }} />
                        </Box>
                        <Box sx={{ maxWidth: '400px', mb: 2 }}>
                            <CustomizeTypography sx={{ fontWeight: 'bold' }}>
                                Password
                            </CustomizeTypography>
                            <CustomizeTextField
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
