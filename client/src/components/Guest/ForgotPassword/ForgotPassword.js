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
function ForgotPassword() {
    const [isShow, setIsShow] = useState(true);

    const handleShowPassword = () => {
        setIsShow(!isShow);
    };
    const navigate = useNavigate();
    return (
        <Box sx={{ backgroundColor: '#f3f2f0', minHeight: '100vh' }}>
            <Container>
                <Typography
                    sx={{ textAlign: 'center', fontSize: '26px', mb: 2, fontWeight: 'bold', mt: 8 }}
                >
                    Forgot Password
                </Typography>
                <Container
                    sx={{
                        width: '420px',
                        height: '320px',
                        backgroundColor: '#ffffff',
                        borderRadius: '6px',
                        p: 2,
                        [mobileScreen]: {
                            width: '100%',
                            height: '100%',
                        },
                    }}
                >
                    <Box>
                        <CustomizeTypography sx={{ fontWeight: 'bold', mb: '2px' }}>
                            Email
                        </CustomizeTypography>
                        <TextField
                            id="outlined-email"
                            variant="outlined"
                            fullWidth={true}
                            sx={{
                                borderColor: 'black',
                                flexGrow: 2,
                                '.MuiInputBase-root': {
                                    fontSize: '16px',
                                    height: '40px',
                                },
                            }}
                        />
                    </Box>
                    <Typography sx={{ fontSize: '16px', textAlign: 'center', mt: 2 }}>
                        We'll send a verification code to this email or phone number if it matches
                        an existing Aikotoba account.
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
                        Next
                    </Button>
                    <Button
                        variant="outlined"
                        sx={{
                            mt: 2,
                            fontWeight: 'bold',
                            fontSize: '14px',
                            textTransform: 'capitalize',
                            borderRadius: '24px',
                        }}
                        fullWidth={true}
                        onClick={() => window.history.back()}
                    >
                        Back
                    </Button>
                </Container>
            </Container>
        </Box>
    );
}

export default ForgotPassword;
