import React, { useState, useRef } from 'react';
import { CustomizeBox } from '../CustomizeBox/CustomizeBox';
import {
    InputAdornment,
    TextField,
    Typography,
    Box,
    Divider,
    Grid,
    Avatar,
    IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import VideocamIcon from '@mui/icons-material/Videocam';
import StarIcon from '@mui/icons-material/Star';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import MissYou from '../../assets/images/missu.jpeg';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { ipadProScreen, theme } from '../Theme/Theme';
import ImageIcon from '@mui/icons-material/Image';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

function Messaging() {
    const [isTextFieldFocused, setIsTextFieldFocused] = useState(false);
    const textFieldRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);
    const [lineActive, setLineActive] = useState(false);

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

    ////-----

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
        <CustomizeBox
            sx={{
                padding: 0,
                height: '680px',
                [ipadProScreen]: {
                    height: '1366px',
                },
                // position: 'fixed',
                // bottom: 0,
                // left: 0,
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
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

            <Divider />
            <Box>
                <Grid container>
                    {/* Box in the left: Show who is messaging with us */}

                    <Grid
                        xs={4}
                        lg={4}
                        sx={{
                            height: '615px',
                            borderRight: '1px solid #333',
                            [ipadProScreen]: {
                                height: '1336px',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                maxHeight: '600px',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderLeft: '4px solid #02754f',
                                    width: '100%',
                                    height: '90px',
                                    backgroundColor: '#edf3f7',
                                    margin: 'auto',
                                    p: 1,
                                    borderBottom: `1px solid ${theme.palette.bgButtonHover}`,
                                }}
                            >
                                <Box sx={{ display: 'flex' }}>
                                    <Box
                                        sx={{ height: '64px', width: '64px', position: 'relative' }}
                                    >
                                        <Avatar
                                            src={MissYou}
                                            alt={'User Avatar'}
                                            sx={{
                                                height: '64px',
                                                width: '64px',
                                                border: `1px solid ${theme.palette.primaryText}`,
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                bottom: 0,
                                                right: 0,
                                                height: '15px',
                                                width: '15px',
                                                borderRadius: '50%',
                                                border: '2px solid #fff',
                                                bgcolor: 'green',
                                            }}
                                        />
                                    </Box>
                                    <Box sx={{ ml: 1 }}>
                                        {/* chat with */}
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                justifyContent: 'space-between',
                                            }}
                                        >
                                            <CustomizeTypography fs="14px">
                                                Melody Fall Topic
                                            </CustomizeTypography>
                                            {/* time */}
                                            <CustomizeTypography sx={{ fontSize: '14px', ml: 2 }}>
                                                8:33 AM
                                            </CustomizeTypography>
                                        </Box>
                                        {/* quick view message */}
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                            }}
                                        >
                                            <CustomizeTypography
                                                sx={{
                                                    color: theme.palette.primaryText,
                                                    fontSize: '14px',
                                                }}
                                            >
                                                You: tests
                                            </CustomizeTypography>
                                            <StarIcon
                                                sx={{ fontSize: '20px', color: '#c37d17', mt: 2 }}
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Box in the left: Show the message details of us with the person */}
                    <Grid xs={8} lg={8}>
                        <Box
                            sx={{
                                width: '100%',
                                height: '50px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                p: 2,
                                borderBottom: `1px solid ${theme.palette.bgButtonHover}`,
                            }}
                        >
                            <Box>
                                <CustomizeTypography sx={{ fontWeight: 'bold', fontSize: '16px' }}>
                                    Melody Fall Topic
                                </CustomizeTypography>
                                <CustomizeTypography
                                    sx={{ color: theme.palette.primaryText, fontSize: '14px' }}
                                >
                                    Producer
                                </CustomizeTypography>
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
                        <Box
                            sx={{
                                p: 1,
                                height: '370px',
                            }}
                        >
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
                                </Box>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                height: '2px',
                                width: '100%',
                                bgcolor: lineActive ? 'green' : '#e0e0e0',
                            }}
                        />
                        <Box sx={{ p: 1 }}>
                            <Box
                                sx={{
                                    height: '100px',
                                    width: '100%',
                                    backgroundColor: '#f4f2ee',
                                    borderRadius: '12px',
                                    position: 'relative',
                                    zIndex: 2,
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
                        <Box sx={{ p: 1 }}>
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
                    </Grid>
                </Grid>
            </Box>
        </CustomizeBox>
    );
}

export default Messaging;
