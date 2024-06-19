import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
    InputAdornment,
    TextField,
    Box,
    Divider,
    Grid,
    IconButton,
    Typography,
    Modal,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

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

import LinearProgress from '@mui/material/LinearProgress';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import SendMessageActions from './SendMessageActions';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

import DeleteMessageAfterTime from './DeleteMessageAfterTime';

import { highlightPersonAction } from '../../redux/ImportantPerson/highlightPersonAction';
import { mutePersonAction } from '../../redux/MutePerson/mutePersonAction';
import { addMessage } from '../../redux/ShowMesssage/showMesssageAction';
import {
    disableReplyMessage,
    isMessageReplySent,
} from '../../redux/ReplyMessage/replyMessageAction';
import ChatMenuSettings from './ChatMenuSettings';

function Messaging() {
    const dispatch = useDispatch();
    const textFieldRef = useRef(null);
    const texareaRef = useRef(null);
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
    // open menu setting when chatting with one user
    // menu setting
    const [anchorEl, setAnchorEl] = useState(null);

    const [deleteConfirm, setDeleteConfirm] = useState(false);

    // redux
    const isEnterKeyEnabled = useSelector((state) => state.buttonSendMessage.isEnterKeyEnabled);
    // star for person
    const isStarred = useSelector((state) => state.importantPerson.isHighlight);
    const isMutePerson = useSelector((state) => state.mutePerson.isMutePerson);
    // status of message when is selected to reply
    const isMessageReplied = useSelector((state) => state.replyMessage.isMessageReplied);
    // get list user added
    const listUserStartAMessage = useSelector((state) => state.startAMessage.listUserInformation);
    // get user ID --> show their information
    const userIDIsSelected = useSelector((state) => state.startAMessage.userIDIs);
    console.log('userIDIsSelected: ', userIDIsSelected);
    console.log('listUserStartAMessage: ', listUserStartAMessage);
    // find user is selected by user ID
    const userSelectedByUserID = listUserStartAMessage.find(
        (user) => user.userID === userIDIsSelected,
    );
    console.log('selectedUserByID: ', userSelectedByUserID);

    const chatWithUserSettingsList = [
        `${isStarred ? 'Remove star' : 'Star'}`,
        `${isMutePerson ? 'Unmute' : 'Mute'}`,
        'Delete conversation',
    ];

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

    const handleTextFieldChange = useCallback((event) => {
        const value = event.target.value;
        setEditorText(value);
        setIsEmpty(value.trim() === '');

        // setEditorText(event.target.value);
        // setIsEmpty(event.target.value.trim() === '');
    }, []);

    // multiple images // initial
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

    const handleEmojiClick = (event) => {
        setEditorText(editorText + event.emoji);
        setIsEmpty(false);
        setShowPicker(false);
    };

    // re-solve press enter to send the message and prevent re-render

    const handleSendButtonClick2 = useCallback(() => {
        const timestamp = new Date();
        let textToSend = null; // Initialize text to null by default
        let imageToSend = []; // Initialize images array to empty by default
        // textToSend = editorText; // remove any space
        // Check if there's text input
        if (editorText.trim() !== '') {
            textToSend = editorText.trim(); // remove any space
        }
        // Check if there are uploaded images
        if (imageURL.length > 0) {
            imageToSend = imageURL;
        }

        // Save the message
        const newMessageSaved = [
            ...messageSaved,
            [textToSend, imageToSend, listFilesUploaded, timestamp],
        ];

        setMessageSaved(newMessageSaved);

        // dispatch an action
        // dispatch(addMessage(newMessageSaved));
        // Loop through each message and dispatch action
        newMessageSaved.forEach((message) => {
            dispatch(addMessage(message)); // Dispatch action with each message
        });

        // Check if the message is a replied message and dispatch an action if necessary
        if (isMessageReplied) {
            dispatch(isMessageReplySent());
            dispatch(disableReplyMessage());
        }

        // dispatch(disableReplyMessage());

        // hide reply message
        // dispatch(disableReplyMessage());

        // Reset editor after sending message
        setEditorText('');
        console.log('Message just sent include: ', newMessageSaved);
        setImageURL([]);
        setListFilesUploaded([]);
        setIsEmpty(true);
    }, [editorText, imageURL, listFilesUploaded, messageSaved, dispatch]);

    const handleKeyDown = useCallback(
        (e) => {
            if (e.key === 'Enter' && isEnterKeyEnabled && !isEmpty) {
                e.preventDefault();
                handleSendButtonClick2();
            }
            setIsEmpty(true);
        },
        [isEnterKeyEnabled, handleSendButtonClick2, isEmpty],
    );

    useEffect(() => {
        const textareaElement = texareaRef.current;
        if (textareaElement) {
            textareaElement.addEventListener('keydown', handleKeyDown);
        }

        //unmount
        // clear
        return () => {
            if (textareaElement) {
                textareaElement.removeEventListener('keydown', handleKeyDown);
            }
        };
    }, [handleKeyDown]);

    // make important person
    const handleToggleStar = () => {
        dispatch(highlightPersonAction());
    };

    // open menu with user menu settings
    const handleOpenChatWithUserMenuSettings = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseChatWithUserMenuSettings = () => {
        setAnchorEl(null);
    };

    // remove star
    const handleRemoveStar = () => {
        dispatch(highlightPersonAction());
    };
    // mute notifications from the user
    const handleMute = () => {
        dispatch(mutePersonAction());
    };

    // open modal deletion
    const handleOpenDeleteConfirm = () => {
        setDeleteConfirm(true);
    };

    const handleCloseDeleteConfirm = () => {
        setDeleteConfirm(false);
    };

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
                        md={5}
                        lg={4}
                        sx={{
                            borderRight: `1px solid ${theme.palette.bgButtonHover}`,
                            height: 'calc(100vh - 187px)', // initial
                            // minHeight: 'calc(100vh - 187px)',
                            [mobileScreen]: {
                                display: showChatList ? 'block' : 'none',
                                // display: showChatDetails ? 'block' : 'none',
                            },
                            overflow: 'hidden',
                            overflowY: 'scroll',
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                            }}
                        >
                            <ChatWithUser onClick={handleChatClick} />
                            {/* <ChatWithUserV2 onClick={handleChatClick} /> */}
                        </Box>
                    </Grid>

                    {/* Box in the left: Show the message details of us with the person */}
                    <Grid
                        xs={12}
                        sm={7}
                        md={7}
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
                                        {userSelectedByUserID && userSelectedByUserID.userName}
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
                                            {/* Jobs */}
                                            Producer
                                        </CustomizeTypography>
                                    )}
                                </Box>
                                {/* upload image */}
                            </Box>

                            <Box>
                                <IconButton>
                                    <MoreHorizIcon
                                        sx={{ fontSize: '24px' }}
                                        onClick={handleOpenChatWithUserMenuSettings}
                                    />
                                </IconButton>
                                <ChatMenuSettings
                                    anchorEl={anchorEl}
                                    handleCloseMenuChatSettings={
                                        handleCloseChatWithUserMenuSettings
                                    }
                                    menuChatSettings={chatWithUserSettingsList}
                                />
                                <IconButton>
                                    <VideocamIcon sx={{ fontSize: '24px' }} />
                                </IconButton>
                                <IconButton onClick={handleToggleStar}>
                                    {isStarred ? (
                                        <StarIcon sx={{ fontSize: '28px', color: '#c37d17' }} />
                                    ) : (
                                        <StarOutlineIcon sx={{ fontSize: '28px' }} />
                                    )}
                                </IconButton>
                            </Box>
                        </Box>

                        {/* Show chat details */}
                        <DeleteMessageAfterTime
                            dataMessage={messageSaved}
                            setDataMessage={setMessageSaved}
                            imageUploaded={imageURL}
                            setImageUploaded={setImageURL}
                            fileUploaded={listFilesUploaded}
                            setFileUploaded={setListFilesUploaded}
                        />
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
                                        inputRef={texareaRef}
                                        value={editorText}
                                        onFocus={handleFocus} // active line
                                        onBlur={handleBlur} // unactive line
                                        onChange={handleTextFieldChange}
                                        onKeyDown={handleKeyDown}
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
                                            multiple
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
                                            multiple // Cho phép chọn nhiều tệp
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
                                    <SendMessageActions
                                        handleSendButtonClick={handleSendButtonClick2}
                                        isEmpty={isEmpty}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            {/* <Modal open={deleteConfirm} close={handleCloseDeleteConfirm}>
                <DeleteConversation handleModalClose={handleCloseDeleteConfirm} />
            </Modal> */}
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
