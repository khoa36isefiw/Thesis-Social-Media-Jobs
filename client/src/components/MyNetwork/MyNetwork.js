import React from 'react';
import { CustomizeBox } from '../CustomizeBox/CustomizeBox';
import {
    Avatar,
    Box,
    Button,
    ThemeProvider,
    Typography,
    styled,
    useTheme,
    Grid,
} from '@mui/material';
import DefaultBackgroundImage from '../../assets/images/pn.jpeg';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { theme } from '../Theme/Theme';
const suggestedLists = [
    {
        userImage:
            'https://preview.redd.it/if-zoro-got-lost-and-ended-up-in-the-back-rooms-do-you-v0-404t0gtyebcb1.png?width=640&crop=smart&auto=webp&s=a102db19e4adb7807318f61c492c91d693142d68',
        userName: 'Luân Zoro',
        userPosition: 'Backend Developer',
    },
    {
        userImage:
            'https://autopro8.mediacdn.vn/134505113543774208/2023/9/15/dscf3481-16947494675821102225207-1694753034969-16947530353701491416563.jpg',
        userName: 'Trộm Choá',
        userPosition: 'Blockchain',
    },
    {
        userImage:
            'https://cdn.abphotos.link/photos/resized/x/2023/06/20/1687225666_l2UnGjJK5TBftN8v_1687226997-phpmmmrgc.png',
        userName: 'Chiến Thắng',
        userPosition: 'Blockchain',
    },
    {
        userImage:
            'https://images2.thanhnien.vn/528068263637045248/2023/10/29/edit-honda-winner-x-1-1698557766334886782328.jpeg',
        userName: 'Đường Đua',
        userPosition: 'Blockchain',
    },
    {
        userImage: 'https://hondadoanhthu.com.vn/wp-content/uploads/2024/02/Db-Do-Den.png',
        userName: 'Thua',
        userPosition: 'Blockchain',
    },
    {
        userImage:
            'https://hondathanhbinhan.com/wp-content/uploads/2024/01/winner-x-2024-dac-biet-den.png',
        userName: 'Đường Tình',
        userPosition: 'Blockchain',
    },
];

// Make Responsive component
const Responsive = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('mobile')]: {},
    [theme.breakpoints.between('740px', '1023px')]: {
        width: '200px',
    },
    [theme.breakpoints.up('ipadPro')]: {},
    [theme.breakpoints.up('desktop')]: {},
}));

function MyNetwork() {
    return (
        <ThemeProvider theme={theme}>
            <CustomizeBox>
                <Box
                    sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <Typography sx={{ fontSize: '15px', color: theme.palette.headingTextColor }}>
                        People you may know based on your recent activity
                    </Typography>
                    <Button
                        sx={{
                            fontSize: '13px',
                            color: '#404040',
                            textTransform: 'initial',
                            fontWeight: 'bold',
                            '&:hover': {
                                backgroundColor: '#d9d9d9',
                            },
                        }}
                    >
                        See More
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'flex-start',
                    }}
                >
                    {suggestedLists.map((user, index) => (
                        <Box
                            sx={{
                                height: '290px',
                                width: '190px',
                                border: '1px solid #d9d9d9',
                                borderRadius: '8px',
                                textAlign: 'center',
                                m: 1,
                                cursor: 'pointer',
                            }}
                        >
                            {/* default background image */}
                            <Box>
                                <Avatar
                                    key={index}
                                    src={DefaultBackgroundImage}
                                    alt="Default User Background Image"
                                    sx={{
                                        height: '72px',
                                        width: '100%',
                                        borderRadius: 0,
                                        objectFit: 'cover',
                                        position: 'relative',
                                        borderTopLeftRadius: '8px',
                                        borderTopRightRadius: '8px',
                                    }}
                                />
                                <Box sx={{ mb: '50px', px: 2 }}>
                                    <Avatar
                                        src={user.userImage}
                                        alt="Default User Background Image"
                                        sx={{
                                            height: '96px',
                                            width: '96px',
                                            objectFit: 'cover',
                                            border: '4px solid white',
                                            mx: 'auto',
                                            mt: '-42px',
                                            zIndex: 2,
                                        }}
                                    />
                                    {/* name */}
                                    <Typography
                                        sx={{
                                            fontSize: '16px',
                                            color: '#404040',
                                            fontWeight: 'bold',
                                            '&:hover': {
                                                textDecoration: 'underline',
                                            },
                                        }}
                                    >
                                        {/* Luan Zoro */}
                                        {user.userName}
                                    </Typography>
                                    {/* position */}
                                    <Typography sx={{ fontSize: '14px', color: '#0009' }}>
                                        {/* Backend Developer */}
                                        {user.userPosition}
                                    </Typography>
                                    <Typography sx={{ fontSize: '12px', color: '#0009' }}>
                                        Based on your profile
                                    </Typography>
                                </Box>
                                <Button
                                    variant="outlined"
                                    sx={{ padding: '8px 28px', borderRadius: '24px' }}
                                    startIcon={<PersonAddIcon />}
                                >
                                    Connect
                                </Button>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </CustomizeBox>
        </ThemeProvider>
    );
}

export default MyNetwork;
