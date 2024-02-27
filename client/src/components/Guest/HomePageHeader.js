// import * as React from 'react';
// import Divider from '@mui/material/Divider';
// import { styled } from '@mui/material/styles';

// import { Container, Box, IconButton, Typography, Button } from '@mui/material';
// import logoWeb from '../../assets/images/aikotoba-job.png';
// import { Link, useNavigate } from 'react-router-dom';
// import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
// import WorkIcon from '@mui/icons-material/Work';
// import ArticleIcon from '@mui/icons-material/Article';

// function HomePageHeader() {
//     const navigate = useNavigate();

//     return (
//         <Box className={`header_home`} sx={{ height: '40px' }}>
//             <Container
//                 sx={{
//                     display: 'flex',
//                     justifyContent: 'space-around',
//                     alignItems: 'center',
//                 }}
//             >
//                 <Box
//                     sx={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'space-between',
//                         flexGrow: 1,
//                     }}
//                 >
//                     <Box sx={{ flexGrow: 1 }}>
//                         <Link to="/">
//                             <img src={logoWeb} alt="Logo Web" className="logo" />
//                         </Link>
//                     </Box>

//                     {/* <TextField
//                         id="outlined-basic"
//                         variant="outlined"
//                         inputRef={textFieldRef}
//                         onFocus={handleTextFieldFocus}
//                         onBlur={handleTextFieldBlur}
//                         sx={{
//                             color: 'black',
//                             flexGrow: 2,
//                             '.MuiInputBase-root': {
//                                 fontSize: '16px',
//                                 height: '40px',
//                                 transition: 'width 0.3s',
//                                 // expand with when textfield is clicked
//                                 width: isTextFieldFocused ? '300px' : '200px',
//                             },
//                         }}
//                         InputProps={{
//                             startAdornment: (
//                                 <InputAdornment position="start">
//                                     <SearchIcon onClick={handleSearchIconClick} />
//                                 </InputAdornment>
//                             ),
//                             classes: {
//                                 notchedOutline: styles.notchedOutline,
//                             },
//                         }}
//                     /> */}
//                 </Box>
//                 <Box
//                     sx={{
//                         display: 'flex',
//                         justifyContent: 'space-between',
//                         alignItems: 'center',
//                         flexGrow: 1,
//                     }}
//                 >
//                     <Box className="nav__dir" sx={{ '&:hover': { fontWeight: 'bold' } }}>
//                         <IconButton className="icon__btn" disableTouchRipple>
//                             <PeopleAltIcon sx={{ fontSize: '28px', color: '#666' }} />
//                         </IconButton>
//                         <Typography sx={{ fontSize: '12px' }}>My Network</Typography>
//                     </Box>
//                     <Box className="nav__dir" sx={{ '&:hover': { fontWeight: 'bold' } }}>
//                         <IconButton className="icon__btn" disableTouchRipple>
//                             <WorkIcon sx={{ fontSize: '28px', color: '#666' }} />
//                         </IconButton>
//                         <Typography sx={{ fontSize: '12px' }}>Jobs</Typography>
//                     </Box>
//                     <Box className="nav__dir" sx={{ '&:hover': { fontWeight: 'bold' } }}>
//                         <IconButton className="icon__btn" disableTouchRipple>
//                             <ArticleIcon sx={{ fontSize: '28px', color: '#666' }} />
//                         </IconButton>
//                         <Typography sx={{ fontSize: '12px' }}>Articles</Typography>
//                     </Box>
//                     <Divider
//                         sx={{ height: '44px', width: '2px', mb: 1 }}
//                         orientation="vertical"
//                         color="#333"
//                     />
//                     <Link to="/sign-up" component="button">
//                         <Typography sx={{ fontSize: '14px', color: '#333', fontWeight: 'bold' }}>
//                             Join Now
//                         </Typography>
//                     </Link>
//                     <Button variant="outlined" onClick={() => navigate('/sign-in')}>
//                         <Typography
//                             sx={{
//                                 fontSize: '14px',
//                                 color: 'blue',
//                                 textTransform: 'capitalize',
//                                 fontWeight: 'bold',
//                             }}
//                         >
//                             Sign in
//                         </Typography>
//                     </Button>
//                 </Box>
//             </Container>
//         </Box>
//     );
// }

// export default HomePageHeader;

import * as React from 'react';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

import { Container, Box, IconButton, Typography, Button } from '@mui/material';
import logoWeb from '../../assets/images/aikotoba-job.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkIcon from '@mui/icons-material/Work';
import ArticleIcon from '@mui/icons-material/Article';

function HomePageHeader() {
    const navigate = useNavigate();
    const location = useLocation();
    // Kiểm tra nếu đang ở trang home thì sử dụng màu trắng
    const backgroundColor = location.pathname !== '/' ? 'inherit' : '#fff';

    return (
        <Box sx={{ backgroundColor, height: '40px', mb: 4 }}>
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
                    }}
                >
                    <Box sx={{ flexGrow: 1 }}>
                        <Link to="/">
                            <img src={logoWeb} alt="Logo Web" className="logo" />
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
                    <Box className="nav__dir" sx={{ '&:hover': { fontWeight: 'bold' } }}>
                        <IconButton className="icon__btn" disableTouchRipple>
                            <PeopleAltIcon sx={{ fontSize: '28px', color: '#666' }} />
                        </IconButton>
                        <Typography sx={{ fontSize: '12px' }}>My Network</Typography>
                    </Box>
                    <Box className="nav__dir" sx={{ '&:hover': { fontWeight: 'bold' } }}>
                        <IconButton className="icon__btn" disableTouchRipple>
                            <WorkIcon sx={{ fontSize: '28px', color: '#666' }} />
                        </IconButton>
                        <Typography sx={{ fontSize: '12px' }}>Jobs</Typography>
                    </Box>
                    <Box className="nav__dir" sx={{ '&:hover': { fontWeight: 'bold' } }}>
                        <IconButton className="icon__btn" disableTouchRipple>
                            <ArticleIcon sx={{ fontSize: '28px', color: '#666' }} />
                        </IconButton>
                        <Typography sx={{ fontSize: '12px' }}>Articles</Typography>
                    </Box>
                    <Divider
                        sx={{ height: '44px', width: '2px', mb: 1 }}
                        orientation="vertical"
                        color="#333"
                    />
                    <Link to="/sign-up" component="button">
                        <Typography sx={{ fontSize: '14px', color: '#333', fontWeight: 'bold' }}>
                            Join Now
                        </Typography>
                    </Link>
                    {/* <Button variant="outlined" onClick={() => navigate('/sign-in')}>
                     */}
                    <Button variant="outlined" onClick={() => navigate('/signed-in')}>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                color: 'blue',
                                textTransform: 'capitalize',
                                fontWeight: 'bold',
                            }}
                        >
                            Sign in
                        </Typography>
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}

export default HomePageHeader;
