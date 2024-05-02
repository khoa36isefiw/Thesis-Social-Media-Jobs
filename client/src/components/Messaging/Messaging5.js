import React, { useState, useRef, useEffect } from 'react';
import { CustomizeBox } from '../CustomizeBox/CustomizeBox';
import {
    InputAdornment,
    TextField,
    Typography,
    Box,
    Divider,
    Grid,
    IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import VideocamIcon from '@mui/icons-material/Videocam';
import StarIcon from '@mui/icons-material/Star';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { mobileScreen, tabletScreen, theme } from '../Theme/Theme';
import ImageIcon from '@mui/icons-material/Image';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ChatWithUser from './ChatWithUser';
import MessageDetails from './MessageDetails';

function Messaging5() {
    const [isTextFieldFocused, setIsTextFieldFocused] = useState(false);
    const textFieldRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);
    const [lineActive, setLineActive] = useState(false);
    const [showChatList, setShowChatList] = useState(true);
    const [showChatDetails, setShowChatDetails] = useState(false);
    const [isMobileScreen, setIsMobileScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            // Set threshold width for mobile screen
            setIsMobileScreen(window.innerWidth < 739);
        };

        // check initial screen size
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleChatClick = () => {
        setShowChatList(false);
        setShowChatDetails(true);
    };
    const handleSearchIconClick = () => {
        if (textFieldRef.current) {
            textFieldRef.current.focus();
        }
    };
    // click on search icon
    const handleTextFieldFocus = () => {
        setIsTextFieldFocused(true);
    };

    const handleTextFieldBlur = () => {
        setIsTextFieldFocused(false);
    };

    // focus on box type message
    const handleFocus = () => {
        setLineActive(!lineActive);
    };

    // unFocus on box type message frame
    const handleBlur = () => {
        setIsFocused(false);
        setLineActive(false);
    };

    // check event when user type into type messageframe
    const handleKeyDown = (event) => {
        setIsFocused(true);
        setIsEmpty(event.target.value.trim() === '');
    };

    return (
        <Box
            sx={{
                backgroundColor: '#fff',
                border: '1px solid #d9d9d9',
                borderRadius: '12px',
                padding: '16px',
                padding: 0,
                height: 'calc(100vh - 122px)',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                [mobileScreen]: {
                    borderRadius: 0,
                },
            }}
        >
            {/* Search Bar */}
            <Grid container>
                <Grid
                    xs={12}
                    sx={{
                        [mobileScreen]: {
                            display: showChatList ? 'block' : 'none',
                            // display: showChatDetails ? 'block' : 'none',
                            position: 'relative',
                        },
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: 2,
                        }}
                    >
                        <CustomizeTypography fw={true}>Messaging</CustomizeTypography>
                        {/* search box */}
                        <TextField
                            id="outlined-basic"
                            className="search__field"
                            variant="outlined"
                            inputRef={textFieldRef}
                            onFocus={handleTextFieldFocus}
                            onBlur={handleTextFieldBlur}
                            sx={{
                                ml: 1,
                                color: 'black',
                                flexGrow: 1,
                                '.MuiInputBase-root': {
                                    fontSize: '14px',
                                    height: '30px',
                                    transition: 'width 0.3s',
                                    width: '200px',
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon onClick={handleSearchIconClick} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                </Grid>

                <Grid xs={12}>
                    <Divider />
                </Grid>

                {/* Box in the left: Show who is messaging with us */}
                <Grid container>
                    <Grid
                        xs={12}
                        sm={5}
                        lg={4}
                        sx={{
                            borderRight: `1px solid ${theme.palette.bgButtonHover}`,
                            height: 'calc(100vh - 187px)',
                            [mobileScreen]: {
                                display: showChatList ? 'block' : 'none',
                                // display: showChatDetails ? 'block' : 'none',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                            }}
                        >
                            <ChatWithUser onClick={handleChatClick} />
                        </Box>
                    </Grid>

                    {/* Box in the left: Show the message details of us with the person */}
                    <Grid
                        xs={12}
                        sm={7}
                        lg={8}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',

                            justifyContent: 'space-between',
                            [mobileScreen]: {
                                display: showChatList ? 'none' : 'block',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                height: '50px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                p: 2,
                                borderBottom: `1px solid ${theme.palette.bgButtonHover}`,
                                [mobileScreen]: {},
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                }}
                            >
                                {isMobileScreen && showChatDetails && (
                                    <IconButton onClick={() => setShowChatList(true)}>
                                        <ArrowBackIosIcon sx={{ fontSize: '24px' }} />
                                    </IconButton>
                                )}
                                <Box>
                                    <CustomizeTypography
                                        sx={{ fontWeight: 'bold', fontSize: '16px' }}
                                    >
                                        Melody Fall Topic
                                    </CustomizeTypography>
                                    <CustomizeTypography
                                        sx={{ color: theme.palette.primaryText, fontSize: '14px' }}
                                    >
                                        Producer
                                    </CustomizeTypography>
                                </Box>
                            </Box>
                            <Box>
                                <IconButton>
                                    <MoreHorizIcon sx={{ fontSize: '24px' }} />
                                </IconButton>
                                <IconButton>
                                    <VideocamIcon sx={{ fontSize: '24px' }} />
                                </IconButton>
                                <IconButton>
                                    <StarIcon sx={{ fontSize: '28px', color: '#c37d17' }} />
                                </IconButton>
                            </Box>
                        </Box>

                        {/* Show chat details */}
                        <MessageDetails />
                        <Box>
                            <Box
                                sx={{
                                    height: '2px',
                                    width: '100%',
                                    bgcolor: lineActive ? 'green' : '#e0e0e0',
                                }}
                            />
                            {/* Box to write message */}
                            <Box
                                sx={{
                                    p: 1,
                                }}
                            >
                                <Box
                                    sx={{
                                        height: '100px',
                                        width: '100%',
                                        backgroundColor: '#f4f2ee',
                                        borderRadius: '12px',
                                        position: 'relative',
                                        zIndex: 2,
                                        [mobileScreen]: {
                                            height: '80px',
                                        },
                                        [tabletScreen]: {
                                            // flexGrow: 1,
                                        },
                                    }}
                                >
                                    {(!isFocused || isEmpty) && (
                                        <Typography
                                            sx={{
                                                color: theme.palette.primaryText,
                                                p: 1,
                                                fontSize: '14px',
                                                position: 'absolute',
                                                pointerEvents: 'none',
                                            }}
                                        >
                                            Write a message...
                                        </Typography>
                                    )}
                                    <textarea
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        onChange={handleKeyDown}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            border: 'none',
                                            outline: 'none',
                                            borderRadius: '12px',
                                            padding: '8px',
                                            resize: 'none',
                                            fontSize: '14px',
                                            backgroundColor: 'transparent',
                                        }}
                                    />
                                </Box>
                            </Box>
                            <Divider />

                            {/* Actions button to upload */}
                            <Box
                                sx={{
                                    p: 1,
                                    [mobileScreen]: {
                                        height: '50px',
                                    },
                                }}
                            >
                                <IconButton>
                                    <ImageIcon sx={{ fontSize: '24px' }} />
                                </IconButton>
                                <IconButton>
                                    <AttachFileIcon
                                        sx={{
                                            fontSize: '24px',
                                            transform: 'rotate(45deg)',
                                        }}
                                    />
                                </IconButton>
                                <IconButton>
                                    <InsertEmoticonIcon sx={{ fontSize: '24px' }} />
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Messaging5;
