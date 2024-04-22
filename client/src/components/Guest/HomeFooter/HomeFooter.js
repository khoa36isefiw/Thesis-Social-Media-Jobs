import * as React from 'react';
import { Box, Grid, Link, Typography, Container, IconButton, Avatar } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Logo from '../../../assets/images/aikotoba-job.png';
import { ipadProScreen, mobileScreen, tabletScreen } from '../../Theme/Theme';
const socialMediaLinks = {
    facebook: '#',
    twitter: '#',
    instagram: '#',
};

const HomeFooter = () => {
    return (
        <Box
            sx={{
                bgcolor: '#f3f2f0',
                color: 'text.secondary',
                py: 3,
                borderTop: '1px solid',
                borderColor: 'divider',
                [tabletScreen]: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                },
            }}
        >
            <Container
                sx={{
                    ml: 12,
                    mr: 12,
                    [mobileScreen]: {
                        ml: 0,
                        mr: 0,
                    },
                    [tabletScreen]: {
                        ml: 0,
                        mr: 0,
                    },
                    [ipadProScreen]: {
                        ml: 0,
                        mr: 0,
                    },
                }}
            >
                <Grid container spacing={2} justifyContent="space-between">
                    <Grid item xs={4} sm={6} md={3}>
                        <Avatar
                            src={Logo}
                            alt="Logo Image"
                            sx={{
                                height: '100px',
                                width: '100px',
                                borderRadius: 0,
                                [mobileScreen]: {
                                    width: '60px',
                                    height: '60px',
                                },
                            }}
                        />

                        {/* Add your logo component or image here */}
                    </Grid>
                    <Grid item xs={4} sm={3} md={2}>
                        <Typography
                            variant="subtitle1"
                            color="text.primary"
                            sx={{ fontWeight: 'bold', fontSize: '16px' }}
                            gutterBottom
                        >
                            GENERAL
                        </Typography>
                        <Link href="#" color="inherit" display="block">
                            <Typography sx={{ fontSize: '13px' }}>Sign Up</Typography>
                        </Link>
                        <Link href="#" color="inherit" display="block">
                            <Typography sx={{ fontSize: '13px' }}>Login</Typography>
                        </Link>
                        <Link href="#" color="inherit" display="block">
                            <Typography sx={{ fontSize: '13px' }}>Blog</Typography>
                        </Link>
                        <Link href="#" color="inherit" display="block">
                            <Typography sx={{ fontSize: '13px' }}>FAQ</Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={4} sm={3} md={2}>
                        <Typography
                            variant="subtitle1"
                            color="text.primary"
                            sx={{ fontWeight: 'bold', fontSize: '16px' }}
                            gutterBottom
                        >
                            COMPANY
                        </Typography>
                        <Link href="#" color="inherit" display="block">
                            <Typography sx={{ fontSize: '13px' }}>About Us</Typography>
                        </Link>
                        <Link href="#" color="inherit" display="block">
                            <Typography sx={{ fontSize: '13px' }}>Careers</Typography>
                        </Link>
                        <Link href="#" color="inherit" display="block">
                            <Typography sx={{ fontSize: '13px' }}>Privacy Policy</Typography>
                        </Link>
                        <Link href="#" color="inherit" display="block">
                            <Typography sx={{ fontSize: '13px' }}>Terms of Service</Typography>
                        </Link>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={3}
                        md={2}
                        sx={{
                            [mobileScreen]: {
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            },
                        }}
                    >
                        <Grid>
                            <Typography
                                variant="subtitle1"
                                color="text.primary"
                                sx={{ fontWeight: 'bold', fontSize: '16px' }}
                                gutterBottom
                            >
                                SOCIAL MEDIA
                            </Typography>
                        </Grid>
                        <Grid>
                            <IconButton
                                aria-label="Facebook"
                                color="inherit"
                                component="a"
                                href={socialMediaLinks.facebook}
                            >
                                <FacebookIcon sx={{ fontSize: 'large' }} />
                            </IconButton>
                            <IconButton
                                aria-label="Twitter"
                                color="inherit"
                                component="a"
                                href={socialMediaLinks.twitter}
                            >
                                <TwitterIcon sx={{ fontSize: 'large' }} />
                            </IconButton>
                            <IconButton
                                aria-label="Instagram"
                                color="inherit"
                                component="a"
                                href={socialMediaLinks.instagram}
                            >
                                <InstagramIcon sx={{ fontSize: 'large' }} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                    sx={{
                        pt: 4,
                        fontSize: '13px',
                        my: 2,
                        [mobileScreen]: {
                            fontSize: '14px',
                        },
                    }}
                >
                    © 2023 HMCUTE. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default HomeFooter;
