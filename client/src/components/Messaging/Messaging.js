import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
    InputAdornment,
    TextField,
    Box,
    Divider,
    Grid,
    IconButton,
    Button,
    Avatar,
    Typography,
} from '@mui/material';
import ChatWithUser from './ChatWithUser';
import MessageDetails from './MessageDetails';
import EmojiPicker from 'emoji-picker-react';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import { mobileScreen, tabletScreen, theme } from '../Theme/Theme';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchIcon from '@mui/icons-material/Search';
import VideocamIcon from '@mui/icons-material/Videocam';
import StarIcon from '@mui/icons-material/Star';
import ImageIcon from '@mui/icons-material/Image';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

import CloseIcon from '@mui/icons-material/Close';
import LinearProgress from '@mui/material/LinearProgress';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

// image for upload file
import PDFImage from '../../assets/images/pdf-file.png';
import DocxImage from '../../assets/images/doc-file.png';
import SendMessageActions from './SendMessageActions';

function Messaging() {
    const textFieldRef = useRef(null);
    const [isTextFieldFocused, setIsTextFieldFocused] = useState(false);
    // const [isFocused, setIsFocused] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);
    const [lineActive, setLineActive] = useState(false);
    const [showChatList, setShowChatList] = useState(true);
    const [showChatDetails, setShowChatDetails] = useState(false);
    // check if user is activating --> show icon
    const [userIsActive, setUserIsActive] = useState(true);
    const [isMobileScreen, setIsMobileScreen] = useState(false);

    // action buttons
    const [editorText, setEditorText] = useState(''); // add text
    const [showPicker, setShowPicker] = useState(false); // add and show emoji picker
    // upload file
    const [showProgress, setShowProgress] = useState(false); // sate control status of progress bar
    const [imageURL, setImageURL] = useState([]); // add images
    const [listFilesUploaded, setListFilesUploaded] = useState([]); // add files
    // click button to send message
    const [isClickSend, setIsClickSend] = useState(false);
    // save message just sent
    const [messageSaved, setMessageSaved] = useState([]);

    // test list data just uploaded

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
        // setIsFocused(false);
        setLineActive(false);
    };

    const handleTextFieldChange = (event) => {
        setEditorText(event.target.value);
        if (event.target.value.trim() !== '') {
            setIsEmpty(false);
        } else {
            setIsEmpty(true);
        }
    };

    // multiple images
    const handleImageUpload = (event) => {
        //update status for progress bar
        setShowProgress(true);
        const files = event.target.files; // Get the list of selected files
        const uploadedImages = []; // get the existing array of images

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();

            reader.onload = () => {
                const imageDataURL = reader.result;
                // get the name of the uploaded image
                const imageName = file.name;

                // store both the name and URL
                uploadedImages.push({ name: imageName, url: imageDataURL });

                // If all files have been processed, update the state
                if (uploadedImages.length === files.length) {
                    setImageURL((prevImage) => [...prevImage, ...uploadedImages]);
                    setIsEmpty(false);
                    // hide the progress bar after all images have been uploaded
                    setShowProgress(false);
                }
            };

            if (file) {
                reader.readAsDataURL(file);
            }
        }
        console.log('Image array: ', uploadedImages);
    };

    // remove image just uploaded
    const handleRemoveImage = (indexToRemove) => {
        // get the others images in array
        const filteredImages = imageURL.filter((_, index) => index !== indexToRemove);
        setImageURL(filteredImages);
        // Update isEmpty based on the length of imageURL
        setIsEmpty(filteredImages.length === 0);
    };

    // upload file
    const handleFileUpload = (event) => {
        setShowProgress(true);
        // Lấy danh sách các tệp đã chọn
        const files = event.target.files;
        const uploadedFiles = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fileExtension = file.name.split('.').pop();

            if (fileExtension === 'pdf' || fileExtension === 'docx' || fileExtension === 'doc') {
                const reader = new FileReader();

                reader.onload = () => {
                    const fileDataURL = reader.result;
                    const fileName = file.name;

                    uploadedFiles.push({ name: fileName, url: fileDataURL });

                    // xử lý tất cả các tệp, cập nhật trạng thái
                    if (uploadedFiles.length === files.length) {
                        setListFilesUploaded((prevFiles) => [...prevFiles, ...uploadedFiles]);
                        setIsEmpty(false);
                        setShowProgress(false);
                    }
                };

                if (file) {
                    reader.readAsDataURL(file);
                }
            } else {
                console.log('Tệp không hợp lệ:', file.name);
            }
        }
    };

    // remove image just uploaded
    const handleRemoveFiles = (indexToRemove) => {
        // get the others files in array
        // console.log('The position is removed: ', indexToRemove);
        const filteredFiles = listFilesUploaded.filter((_, index) => index !== indexToRemove);
        // /console.log('List Files after removing: ', filteredFiles);
        setListFilesUploaded(filteredFiles);
        // Update isEmpty based on the length of file uploaded
        setIsEmpty(filteredFiles.length === 0);
    };

    const handleEmojiClick = (event) => {
        setEditorText(editorText + event.emoji); //
        setIsEmpty(false);
        setShowPicker(false);
    };

    const handleSendButtonClick = () => {
        // console.log('Before Sending message:', editorText);
        // save message just sent
        const currentTime = new Date(); // save the time the message was sent
        // temp variable to get value
        const newMessageSaved = [
            ...messageSaved,
            {
                msgSent: editorText,
                imageSent: imageURL,
                fileSent: listFilesUploaded,
                timeSent: currentTime,
            },
        ];
        // update setMessageSaved with newMessageSaved array
        setMessageSaved(newMessageSaved);
        // console.log('After sending Message: ', newMessageSaved);

        // Reset editor after sending message
        setEditorText('');
        setImageURL([]);
        setListFilesUploaded([]);
        setIsEmpty(true);
    };
    // console.log('Message just sent outside: ', messageSaved);

    // re-solve press enter to send the message and prevent re-render

    return (
        <Box
            sx={{
                backgroundColor: '#fff',
                border: '1px solid #d9d9d9',
                borderRadius: '12px',
                // padding: '16px',

                height: 'calc(100vh - 122px)', // initial height
                // minHeight: 'calc(100vh - 122px)', // initial height

                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                [mobileScreen]: {
                    borderRadius: 0,
                    // height: 'calc(100vh - 150px)', // initial height for mobile screen
                    height: 'calc(100vh)',
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
                            height: 'calc(100vh - 187px)', // initial
                            // minHeight: 'calc(100vh - 187px)',
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
                                [mobileScreen]: { p: '4px' },
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                }}
                            >
                                {isMobileScreen && showChatDetails && (
                                    <IconButton onClick={() => setShowChatList(true)}>
                                        {/* <ArrowBackIosIcon sx={{ fontSize: '24px' }} /> */}
                                        <KeyboardBackspaceIcon sx={{ fontSize: '24px' }} />
                                    </IconButton>
                                )}
                                <Box>
                                    <CustomizeTypography
                                        sx={{
                                            fontWeight: 'bold',
                                            fontSize: '16px',
                                            [mobileScreen]: {
                                                fontSize: '14px',
                                            },
                                        }}
                                    >
                                        Melody Fall Topic
                                    </CustomizeTypography>
                                    {/* if a user is activating show they are activating and hiding their position career */}
                                    {userIsActive ? (
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box
                                                sx={{
                                                    height: '8px',
                                                    width: '8px',
                                                    bgcolor: 'green',
                                                    borderRadius: '50%',
                                                    mr: 1,
                                                }}
                                            />
                                            <Typography sx={{ color: theme.palette.primaryText }}>
                                                Active now
                                            </Typography>
                                        </Box>
                                    ) : (
                                        <CustomizeTypography
                                            sx={{
                                                color: theme.palette.primaryText,
                                                fontSize: '14px',
                                                [mobileScreen]: {
                                                    fontSize: '13px',
                                                },
                                            }}
                                        >
                                            Producer
                                        </CustomizeTypography>
                                    )}
                                </Box>
                                {/* upload image */}
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
                        <MessageDetails
                            dataMessage={messageSaved}
                            imageUploaded={imageURL}
                            setImageUploaded={setImageURL}
                            fileUploaded={listFilesUploaded}
                            setFileUploaded={setListFilesUploaded}
                        />

                        {/* upload images */}
                        {/* <Box sx={{ maxHeight: '160px', overflow: 'scroll' }}> */}
                        {/* <Box sx={{ maxHeight: '60px', overflow: 'scroll' }}>
                            {imageURL.map((image, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        padding: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',

                                        borderTop: '1px solid #333',
                                    }}
                                >
                                    <Avatar
                                        src={image.url}
                                        alt="Uploaded Image"
                                        sx={{
                                            width: '32px',
                                            height: '32px',
                                            objectFit: 'cover',
                                            borderRadius: '12px',

                                            [mobileScreen]: {
                                                width: '24px',
                                                height: '24px',
                                            },
                                        }}
                                    />
                                    <Box>
                                        <CustomizeTypography
                                            sx={{ color: theme.palette.normalText }}
                                        >
                                            {image.name}
                                        </CustomizeTypography>

                                        {showProgress ? (
                                            <LinearDeterminate showProgress={showProgress} />
                                        ) : (
                                            <CustomizeTypography
                                                fs="12px"
                                                sx={{ color: theme.palette.primaryText }}
                                            >
                                                Attached File
                                            </CustomizeTypography>
                                        )}
                                    </Box>

                                    <Avatar
                                        sx={{
                                            width: '24px',
                                            height: '24px',
                                            bgcolor: '#fff',
                                            border: '1px solid #404040',
                                            '&:hover': {
                                                cursor: 'pointer',
                                            },
                                        }}
                                        onClick={() => handleRemoveImage(index)}
                                    >
                                        <CloseIcon sx={{ color: 'black' }} />
                                    </Avatar>
                                </Box>
                            ))}
                        </Box> */}

                        {/* file uploaded like: pdf, docx */}
                        {/* <Box sx={{ maxHeight: '160px', overflow: 'scroll' }}>
                            {listFilesUploaded.map((file, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        padding: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',

                                        borderTop: '1px solid #333',
                                    }}
                                >
                                    {file.name.endsWith('.pdf') && (
                                        <Avatar
                                            src={PDFImage}
                                            alt={'PDF File'}
                                            sx={{
                                                width: '48px',
                                                height: '48px',
                                                objectFit: 'contain',
                                                borderRadius: 0,
                                                '&:hover': {
                                                    cursor: 'pointer',
                                                },
                                                [mobileScreen]: {
                                                    width: '24px',
                                                    height: '24px',
                                                },
                                            }}
                                        />
                                    )}
                                    {(file.name.endsWith('.docx') ||
                                        file.name.endsWith('.doc')) && (
                                        <Avatar
                                            src={DocxImage}
                                            alt={'Docx File'}
                                            sx={{
                                                width: '48px',
                                                height: '48px',
                                                objectFit: 'contain',
                                                borderRadius: 0,
                                                '&:hover': {
                                                    cursor: 'pointer',
                                                },
                                                [mobileScreen]: {
                                                    width: '24px',
                                                    height: '24px',
                                                },
                                            }}
                                        />
                                    )}

                                    <Box>
                                        <CustomizeTypography
                                            fs="13px"
                                            sx={{
                                                color: theme.palette.normalText,
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            {file.name}
                                        </CustomizeTypography>
                                        {showProgress ? (
                                            <LinearDeterminate showProgress={showProgress} />
                                        ) : (
                                            <CustomizeTypography
                                                fs="12px"
                                                sx={{ color: theme.palette.primaryText }}
                                            >
                                                Attached File
                                            </CustomizeTypography>
                                        )}
                                    </Box>
                                    <Avatar
                                        sx={{
                                            width: '24px',
                                            height: '24px',
                                            bgcolor: '#fff',
                                            border: '1px solid #404040',
                                            '&:hover': {
                                                cursor: 'pointer',
                                            },
                                        }}
                                        onClick={() => handleRemoveFiles(index)}
                                    >
                                        <CloseIcon sx={{ color: 'black' }} />
                                    </Avatar>
                                </Box>
                            ))}
                        </Box> */}
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
                                        p: 1,

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
                                    <textarea
                                        value={editorText}
                                        onFocus={handleFocus} // active line
                                        onBlur={handleBlur} // unactive line
                                        onChange={handleTextFieldChange}
                                        placeholder={isEmpty ? 'Write a message...' : ''}
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
                                            letterSpacing: '1px',
                                            fontFamily:
                                                '"Roboto", "Helvetica", "Arial", sans-serif',
                                        }}
                                    />
                                </Box>
                            </Box>
                            <Divider />

                            {/* Actions button to upload */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    p: 1,
                                    [mobileScreen]: {
                                        height: '50px',
                                    },
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <label>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            style={{ display: 'none' }}
                                            onChange={handleImageUpload}
                                            // multiple
                                        />
                                        <IconButton component="span">
                                            <ImageIcon sx={{ fontSize: '24px' }} />
                                        </IconButton>
                                    </label>
                                    {/* <IconButton>
                                        <AttachFileIcon
                                            sx={{
                                                fontSize: '24px',
                                                transform: 'rotate(45deg)',
                                            }}
                                        />
                                    </IconButton> */}
                                    <IconButton component="label">
                                        <AttachFileIcon
                                            sx={{
                                                fontSize: '24px',
                                                transform: 'rotate(45deg)',
                                            }}
                                        />
                                        {/* Input ẩn để chọn tệp */}
                                        <input
                                            type="file"
                                            accept=".pdf,.doc,.docx" // Có thể chỉ định các loại tệp bạn muốn cho phép
                                            style={{ display: 'none' }}
                                            onChange={handleFileUpload} // Gọi hàm xử lý khi có sự thay đổi trên input
                                            // multiple // Cho phép chọn nhiều tệp
                                        />
                                    </IconButton>

                                    {/* get Emoij */}
                                    <Box sx={{ position: 'relative' }}>
                                        <IconButton onClick={() => setShowPicker((val) => !val)}>
                                            <InsertEmoticonIcon sx={{ fontSize: '24px' }} />
                                            {showPicker && (
                                                // <Box sx={{ position: 'absolute', top: '10px', left: '5%' }}>
                                                <Box
                                                    sx={{
                                                        position: 'absolute',
                                                        top: '-45rem',
                                                        left: '-10rem',
                                                        zIndex: 22,
                                                    }}
                                                >
                                                    <EmojiPicker
                                                        pickerStyle={{ width: '100%' }}
                                                        onEmojiClick={handleEmojiClick}
                                                    />
                                                </Box>
                                            )}
                                        </IconButton>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    {/* Button hiện tại - it's okay bro */}
                                    {/* <Button
                                        variant="contained"
                                        onClick={handleSendButtonClick}
                                        sx={{
                                            textTransform: 'initial',
                                            fontSize: '14px',
                                            padding: '2px 24px',
                                            borderRadius: '24px',
                                        }}
                                        disabled={isEmpty}
                                    >
                                        Send
                                    </Button> */}

                                    <SendMessageActions
                                        handleSendButtonClick={handleSendButtonClick}
                                        isEmpty={isEmpty}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Messaging;

function LinearDeterminate({ showProgress }) {
    const [progress, setProgress] = useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Box sx={{ width: '100%', display: showProgress ? 'block' : 'none' }}>
            <LinearProgress variant="determinate" value={progress} />
        </Box>
    );
}
