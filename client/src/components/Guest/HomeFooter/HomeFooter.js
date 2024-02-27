import * as React from 'react';
import { Box, Grid, Link, Typography, Container, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Logo from '../../../assets/images/aikotoba-job.png';
const socialMediaLinks = {
    facebook: '#',
    twitter: '#',
    instagram: '#',
};

const HomeFooter = () => {
    return (
        <Box
            sx={{
                bgcolor: 'inherit',
                color: 'text.secondary',
                py: 3,
                borderTop: '1px solid',
                borderColor: 'divider',
            }}
        >
            <Container sx={{ ml: 12, mr: 12 }}>
                <Grid container spacing={2} justifyContent="space-between">
                    <Grid item xs={12} sm={6} md={3}>
                        <img
                            src={Logo}
                            alt="Logo Image"
                            style={{ height: '100px', width: '100px' }}
                        />

                        {/* Add your logo component or image here */}
                    </Grid>
                    <Grid item xs={6} sm={3} md={2}>
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
                    <Grid item xs={6} sm={3} md={2}>
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

                    <Grid item xs={6} sm={3} md={2}>
                        <Typography
                            variant="subtitle1"
                            color="text.primary"
                            sx={{ fontWeight: 'bold', fontSize: '16px' }}
                            gutterBottom
                        >
                            SOCIAL MEDIA
                        </Typography>
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
                <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                    sx={{ pt: 4, fontSize: '13px', my: 2 }}
                >
                    © 2023 HMCUTE. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default HomeFooter;
