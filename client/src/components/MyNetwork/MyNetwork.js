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
import {
    desktopScreen,
    extraSmallMobileScreenEm,
    ipadProScreen,
    ipadProScreenEm,
    mobileScreen,
    moblieScreenEm,
    tabletScreen,
    tabletScreenEm,
    theme,
} from '../Theme/Theme';
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
    // {
    //     userImage:
    //         'https://autopro8.mediacdn.vn/134505113543774208/2023/9/15/dscf3481-16947494675821102225207-1694753034969-16947530353701491416563.jpg',
    //     userName: 'Trộm Choá',
    //     userPosition: 'Blockchain',
    // },
    // {
    //     userImage:
    //         'https://autopro8.mediacdn.vn/134505113543774208/2023/9/15/dscf3481-16947494675821102225207-1694753034969-16947530353701491416563.jpg',
    //     userName: 'Trộm Choá',
    //     userPosition: 'Blockchain',
    // },
];

function MyNetwork() {
    return (
        <ThemeProvider theme={theme}>
            <CustomizeBox
                sx={{
                    [mobileScreen]: {
                        borderRadius: 0,
                    },
                }}
            >
                <Box
                    sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <Typography
                        sx={{
                            fontSize: '15px',
                            color: theme.palette.headingTextColor,
                            [mobileScreen]: {
                                maxWidth: '250px',
                                mb: 2,
                            },
                            [tabletScreen]: {
                                width: '250px',
                                mb: 2,
                            },
                        }}
                    >
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
                <Grid container spacing={2}>
                    {suggestedLists.map((user, index) => (
                        <Grid item key={index} xs={6} sm={6} md={6} lg={4} xl={3}>
                            <Box
                                sx={{
                                    height: '290px',
                                    border: '1px solid #d9d9d9',
                                    borderRadius: '8px',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                }}
                            >
                                {/* default background image */}
                                <Avatar
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
                                <Box
                                    sx={{
                                        mb: '50px',
                                        px: 2,
                                        [mobileScreen]: {
                                            px: 0,
                                        },
                                    }}
                                >
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
                                    <Typography
                                        sx={{
                                            fontSize: '14px',
                                            color: '#0009',
                                            [mobileScreen]: {
                                                fontSize: '12px',
                                            },
                                        }}
                                    >
                                        {/* Backend Developer */}
                                        {user.userPosition}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography
                                        sx={{
                                            fontSize: '12px',
                                            color: '#0009',
                                            [mobileScreen]: {
                                                fontSize: '10px',
                                            },
                                        }}
                                    >
                                        Based on your profile
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        sx={{ padding: '8px 28px', borderRadius: '24px', mt: 1 }}
                                        startIcon={<PersonAddIcon />}
                                    >
                                        Connect
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </CustomizeBox>
        </ThemeProvider>
    );
}

export default MyNetwork;
