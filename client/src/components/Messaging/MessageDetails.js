import React from 'react';
import { Box, Avatar } from '@mui/material';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import MissYou from '../../assets/images/missu.jpeg';
import { mobileScreen, tabletScreen, theme } from '../Theme/Theme';
// Chat detail
const MessageDetails = () => {
    return (
        <Box
            sx={{
                p: 1,
                height: '370px',
                overflow: 'scroll',
                scrollBehavior: 'smooth',
                flexGrow: 1,
                [mobileScreen]: {
                    // height: 'calc(100vh - 330px)', // initial height
                    height: 'calc(100vh - 350px)', // initial height
                },
            }}
        >
            {/* box contains message that we sent */}
            <Box
                sx={{
                    minHeight: '10px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                    marginLeft: 'auto',
                    mt: 1,
                }}
            >
                <CustomizeTypography
                    sx={{
                        borderRadius: '12px',
                        color: theme.palette.primaryText,
                        fontSize: '13.5px',
                        bgcolor: '#edf3f7',
                        minWidth: '10px',
                        p: 1,
                    }}
                >
                    Hello bà
                </CustomizeTypography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <Avatar
                    src={MissYou}
                    alt={'User Avatar'}
                    sx={{
                        height: '40px',
                        width: '40px',
                        border: `1px solid ${theme.palette.primaryText}`,
                    }}
                />
                <Box sx={{ ml: 1 }}>
                    {/* contain name and time that they sent message*/}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <CustomizeTypography fs="14px" fw={true}>
                            Melody Fall Topic
                        </CustomizeTypography>
                        <Box
                            sx={{
                                ml: 1,
                                width: '5px',
                                height: '5px',
                                borderRadius: '50%',
                                bgcolor: theme.palette.primaryText,
                            }}
                        />
                        <CustomizeTypography
                            sx={{
                                color: theme.palette.primaryText,
                                fontSize: '12px',
                                ml: 1,
                            }}
                        >
                            11:44 AM
                        </CustomizeTypography>
                    </Box>

                    {/* contains message */}
                    <Box>
                        <CustomizeTypography
                            sx={{
                                color: theme.palette.primaryText,
                                fontSize: '13.5px',
                                mt: 1,
                            }}
                        >
                            nghe nèk
                        </CustomizeTypography>
                        <CustomizeTypography
                            sx={{
                                color: theme.palette.primaryText,
                                fontSize: '13.5px',
                                mt: 1,
                            }}
                        >
                            sao thế?
                        </CustomizeTypography>
                    </Box>
                </Box>
            </Box>

            {/* contain message that we sent/ reply/ request */}
            <Box
                sx={{
                    minHeight: '10px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                    marginLeft: 'auto',
                    mt: 1,
                }}
            >
                <CustomizeTypography
                    sx={{
                        borderRadius: '12px',
                        color: theme.palette.primaryText,
                        fontSize: '13.5px',
                        bgcolor: '#edf3f7',
                        maxWidth: '200px',
                        p: 1,
                    }}
                >
                    Gửi tui lại tên bài nhạc hôm bữa đi.
                </CustomizeTypography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <Avatar
                    src={MissYou}
                    alt={'User Avatar'}
                    sx={{
                        height: '40px',
                        width: '40px',
                        border: `1px solid ${theme.palette.primaryText}`,
                    }}
                />
                <Box sx={{ ml: 1 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <CustomizeTypography fs="14px" fw={true}>
                            Melody Fall Topic
                        </CustomizeTypography>
                        <Box
                            sx={{
                                ml: 1,
                                width: '5px',
                                height: '5px',
                                borderRadius: '50%',
                                bgcolor: theme.palette.primaryText,
                            }}
                        />
                        <CustomizeTypography
                            sx={{
                                color: theme.palette.primaryText,
                                fontSize: '12px',
                                ml: 1,
                            }}
                        >
                            2:41 PM
                        </CustomizeTypography>
                    </Box>
                    <Box>
                        <CustomizeTypography
                            sx={{
                                color: theme.palette.primaryText,
                                fontSize: '13.5px',
                                mt: 1,
                            }}
                        >
                            Lên YTB search nha. 初愿
                        </CustomizeTypography>
                    </Box>
                    <Box>
                        <CustomizeTypography
                            sx={{
                                color: theme.palette.primaryText,
                                fontSize: '13.5px',
                                mt: 1,
                            }}
                        >
                            Lên YTB search nha. 初愿
                        </CustomizeTypography>
                    </Box>
                    <Box>
                        <CustomizeTypography
                            sx={{
                                color: theme.palette.primaryText,
                                fontSize: '13.5px',
                                mt: 1,
                            }}
                        >
                            Lên YTB search nha. 初愿
                        </CustomizeTypography>
                    </Box>
                    <Box>
                        <CustomizeTypography
                            sx={{
                                color: theme.palette.primaryText,
                                fontSize: '13.5px',
                                mt: 1,
                            }}
                        >
                            Lên YTB search nha. 初愿
                        </CustomizeTypography>
                    </Box>
                    <Box>
                        <CustomizeTypography
                            sx={{
                                color: theme.palette.primaryText,
                                fontSize: '13.5px',
                                mt: 1,
                            }}
                        >
                            Lên YTB search nha. 初愿
                        </CustomizeTypography>
                    </Box>
                    <Box>
                        <CustomizeTypography
                            sx={{
                                color: theme.palette.primaryText,
                                fontSize: '13.5px',
                                mt: 1,
                            }}
                        >
                            Lên YTB search nha. 初愿
                        </CustomizeTypography>
                    </Box>
                    <Box>
                        <CustomizeTypography
                            sx={{
                                color: theme.palette.primaryText,
                                fontSize: '13.5px',
                                mt: 1,
                            }}
                        >
                            Lên YTB search nha. 初愿
                        </CustomizeTypography>
                    </Box>
                    <Box>
                        <CustomizeTypography
                            sx={{
                                color: theme.palette.primaryText,
                                fontSize: '13.5px',
                                mt: 1,
                            }}
                        >
                            Lên YTB search nha. 初愿
                        </CustomizeTypography>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    minHeight: '10px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                    marginLeft: 'auto',
                    mt: 1,
                }}
            >
                <CustomizeTypography
                    sx={{
                        borderRadius: '12px',
                        color: theme.palette.primaryText,
                        fontSize: '13.5px',
                        bgcolor: '#edf3f7',
                        maxWidth: '200px',
                        p: 1,
                    }}
                >
                    okay, cảm ơn nha! okay, cảm ơn nha! okay, cảm ơn nha! okay, cảm ơn nha! okay,
                    cảm ơn nha! okay, cảm ơn nha! okay, cảm ơn nha! okay, cảm ơn nha! okay, cảm ơn
                    nha! okay, cảm ơn nha! okay, cảm ơn nha!okay, cảm ơn nha! okay, cảm ơn nha!
                    okay, cảm ơn nha! okay, cảm ơn nha! okay, cảm ơn nha! okay, cảm ơn nha! okay,
                    cảm ơn nha! okay, cảm ơn nha! okay, cảm ơn nha! okay, cảm ơn nha! okay, cảm ơn
                    nha!
                </CustomizeTypography>
            </Box>
        </Box>
    );
};
export default MessageDetails;
