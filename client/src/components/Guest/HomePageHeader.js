import * as React from 'react';
import Divider from '@mui/material/Divider';

import { Container, Box, IconButton, Typography, Button, Avatar } from '@mui/material';
import logoWeb from '../../assets/images/aikotoba-job.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkIcon from '@mui/icons-material/Work';
import ArticleIcon from '@mui/icons-material/Article';
import { ipadProScreen, mobileScreen, tabletScreen } from '../Theme/Theme';

const iconStyles = {
    fontSize: '28px',
    color: '#666',
};
const GuestHeaderIcon = ({ icon, content }) => {
    return (
        <Box
            className="nav__dir"
            sx={{
                '&:hover': { fontWeight: 'bold' },
                [mobileScreen]: { display: 'none' },
                // [tabletScreen]: {
                //     display: 'none',
                // },
                // [ipadProScreen]: {
                //     display: 'none',
                // },
            }}
        >
            <IconButton className="icon__btn" disableTouchRipple>
                {icon}
            </IconButton>
            <Typography sx={{ fontSize: '12px' }}>{content}</Typography>
        </Box>
    );
};
function HomePageHeader() {
    const navigate = useNavigate();
    const location = useLocation();
    // Kiểm tra nếu đang ở trang home thì sử dụng màu trắng
    const backgroundColor = location.pathname !== '/' ? 'inherit' : '#fff';

    return (
        <Box
            sx={{
                backgroundColor,
                height: '40px',
                mb: 4,
            }}
        >
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    mb: 4,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexGrow: 1,
                        [mobileScreen]: {
                            width: '100%',
                        },
                    }}
                >
                    <Box sx={{ flexGrow: 1 }}>
                        <Link to="/">
                            <Avatar
                                src={logoWeb}
                                alt="Logo Web"
                                className="logo"
                                sx={{
                                    borderRadius: 0,
                                    width: '60px',
                                    height: '60px',
                                    [mobileScreen]: {
                                        width: '50px',
                                        height: '50px',
                                    },
                                }}
                            />
                        </Link>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexGrow: 1,
                    }}
                >
                    {/* <Box className="nav__dir" sx={{ '&:hover': { fontWeight: 'bold' } }}>
                        <IconButton className="icon__btn" disableTouchRipple>
                            <WorkIcon sx={{ fontSize: '28px', color: '#666' }} />
                        </IconButton>
                        <Typography sx={{ fontSize: '12px' }}>Jobs</Typography>
                    </Box> */}
                    <GuestHeaderIcon
                        icon={<PeopleAltIcon sx={{ ...iconStyles }} />}
                        content="My Network"
                    />

                    <GuestHeaderIcon icon={<WorkIcon sx={{ ...iconStyles }} />} content="Jobs" />
                    <GuestHeaderIcon
                        icon={<ArticleIcon sx={{ ...iconStyles }} />}
                        content="Articles"
                    />

                    <Divider
                        sx={{
                            height: '44px',
                            width: '2px',
                            mb: 1,
                            [mobileScreen]: {
                                display: 'none',
                            },
                            // [tabletScreen]: {
                            //     display: 'none',
                            // },
                            // [ipadProScreen]: {
                            //     display: 'none',
                            // },
                        }}
                        orientation="vertical"
                        color="#333"
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Link to="/sign-up" component="button">
                            <Typography
                                sx={{
                                    fontSize: '16px',
                                    color: '#333',
                                    fontWeight: 'bold',
                                    width: '100px',
                                }}
                            >
                                Join Now
                            </Typography>
                        </Link>
                        {/* <Button variant="outlined" onClick={() => navigate('/sign-in')}>
                         */}
                        <Button
                            variant="outlined"
                            onClick={() => navigate('/signed-in')}
                            sx={{
                                [mobileScreen]: {
                                    borderRadius: '24px',
                                    width: '100px',
                                },
                                [tabletScreen]: {
                                    borderRadius: '24px',
                                },
                                [ipadProScreen]: {
                                    borderRadius: '24px',
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: '16px',
                                    color: 'blue',
                                    textTransform: 'capitalize',
                                    fontWeight: 'bold',
                                }}
                            >
                                Sign in
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default HomePageHeader;
