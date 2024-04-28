import React from 'react';
import { Avatar, Box, Button, Divider, Typography } from '@mui/material';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { CustomizeBox } from '../CustomizeBox/CustomizeBox';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import { blue } from '@mui/material/colors';
import { ipadProScreen, mobileScreen, tabletScreen, theme } from '../Theme/Theme';

const pageIsFollowing = [
    {
        avatar: 'https://media.licdn.com/dms/image/C560BAQGEwS8YjHJ-Fg/company-logo_200_200/0/1631347731327?e=1720656000&v=beta&t=Ra5yfG1sSXDrC4ODVr4LAg7fkaAU6bapcWlOqoBSffg',
        name: 'Gimasys Co., Ltd',
        numberOfFollowers: '1,740',
    },
    {
        avatar: 'https://media.licdn.com/dms/image/C560BAQG1D468Lw-C0Q/company-logo_200_200/0/1638156211709/fpt_information_system_logo?e=1720656000&v=beta&t=oVMl17YBbHx-vuJsoh_oxDxNlossD4KNoQIiBwo71K8',
        name: 'FPT Information System',
        numberOfFollowers: '12,622',
    },
    {
        avatar: 'https://media.licdn.com/dms/image/C4D0BAQF_Sk_uSPkkyQ/company-logo_200_200/0/1680178586116?e=1720656000&v=beta&t=PEbeMO45vu0NHe2pKQ0CsUfPKBa88viofZMNjUskKeI',
        name: 'Q Blockchain',
        numberOfFollowers: '1,086',
    },
    {
        avatar: 'https://media.licdn.com/dms/image/C4D0BAQGV_B0uVb2MOQ/company-logo_200_200/0/1656982864099?e=1720656000&v=beta&t=_1RaALRF8yaGokkO25h1n75yEeoyyIvdwG2Lsf1USZM',
        name: 'Rekrutmen Bersama BUMN',
        numberOfFollowers: '1,029,098',
    },
];

function PageIsFollowing() {
    return (
        <CustomizeBox sx={{ p: 0, [mobileScreen]: { borderRadius: 0 } }}>
            <CustomizeTypography
                sx={{
                    ml: 2,
                    p: 2,
                    [ipadProScreen]: {
                        ml: 1,
                        fontWeight: '500',
                    },
                    [mobileScreen]: {
                        p: 1,
                        fontSize: '16px',
                        fontWeight: '500',
                    },
                    [tabletScreen]: {
                        fontSize: '18px',
                        fontWeight: '500',
                        ml: 1,
                    },
                }}
                fs="20px"
                fw={true}
            >
                {pageIsFollowing.length} Pages
            </CustomizeTypography>
            <Divider sx={{ p: 0 }} />
            <Box
                sx={{
                    p: 2,
                    [ipadProScreen]: {
                        p: 0,
                    },
                    [mobileScreen]: {
                        p: 0,
                    },
                    [tabletScreen]: {
                        p: 0,
                    },
                }}
            >
                {pageIsFollowing.map((item, index) => (
                    <Box key={index}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                p: 2,

                                [mobileScreen]: {
                                    p: 2,
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'start',
                                    justifyContent: 'flex-start',
                                }}
                            >
                                <Avatar
                                    src={item.avatar}
                                    alt={item.name}
                                    sx={{
                                        height: '48px',
                                        width: '48px',
                                        borderRadius: 0,
                                        cursor: 'pointer',
                                    }}
                                />
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        ml: 2,
                                    }}
                                >
                                    <Box sx={{ mb: 1, cursor: 'pointer' }}>
                                        <CustomizeTypography
                                            fs="14px"
                                            fw={true}
                                            sx={{
                                                display: 'flex !important',
                                                flexWrap: 'wrap',
                                                overflow: 'hidden',
                                                width: '100%',
                                                '&:hover': {
                                                    textDecoration: 'underline',
                                                    color: blue[800],
                                                },
                                            }}
                                        >
                                            {item.name}
                                        </CustomizeTypography>
                                        <CustomizeTypography fs="12px">
                                            {item.numberOfFollowers} followers
                                        </CustomizeTypography>
                                    </Box>
                                </Box>
                            </Box>
                            <Button
                                variant="outlined"
                                // startIcon={<CheckOutlinedIcon />}
                                sx={{
                                    borderRadius: '24px',
                                    borderColor: '#404040',
                                    color: '#404040',
                                    maxWidth: '120px',
                                    textTransform: 'initial',
                                    fontWeight: 'bold',
                                    fontSize: '14px',
                                    '&:hover': {
                                        borderColor: 'black',
                                        backgroundColor: theme.palette.bgButtonHover,
                                    },
                                }}
                            >
                                Following
                            </Button>
                        </Box>
                        <Box>
                            {index === pageIsFollowing.length - 1 ? null : (
                                <Divider sx={{ ml: '18px', mt: -1 }} />
                            )}
                        </Box>
                    </Box>
                ))}
            </Box>
        </CustomizeBox>
    );
}

export default PageIsFollowing;
