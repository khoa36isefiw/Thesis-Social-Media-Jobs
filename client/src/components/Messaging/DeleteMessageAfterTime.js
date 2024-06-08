import React, { useState, useRef, useEffect } from 'react';
import { Box, Avatar, Modal, IconButton, Button, Typography, Popover } from '@mui/material';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import { ipadProScreen, mobileScreen, tabletScreen, theme } from '../Theme/Theme';
import MissYou from '../../assets/images/missu.jpeg';
import ReactionOnMessage from './ReactionOnMessage';
import ImageDetailInMessage from './ImageDetailInMessage';
import PDFImage from '../../assets/images/pdf-file.png';
import DocxImage from '../../assets/images/doc-file.png';
// Icon
import DownloadIcon from '@mui/icons-material/Download';
import CloseIcon from '@mui/icons-material/Close';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
// reactions
import Liked from '../../assets/images/like_reactions.png';
import Love from '../../assets/images/heart_reactions.png';
import Laugh from '../../assets/images/laughing_reactions.png';

import SouthIcon from '@mui/icons-material/South';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMessage } from '../../redux/ShowMesssage/showMesssageAction';
import { disableReplyMessage } from '../../redux/ReplyMessage/replyMessageAction';

// Chat detail
const DeleteMessageAfterTime = ({
    dataMessage,
    setDataMessage,
    imageUploaded,
    setImageUploaded,
    fileUploaded,
    setFileUploaded,
}) => {
    const dispatch = useDispatch();
    const [isHoveredOnMessage, setIsHoveredOnMessage] = useState(false);
    // which image is chose and opened modal?
    const [openImageMessageModal, setOpenImageMessageModal] = useState(null);
    // icon scroll to bottom
    const [showButtonBackToBottom, setShowButtonBackToBottom] = useState(false);
    const [hoveredTextIndex, setHoveredTextIndex] = useState(null);
    const [hoveredImageIndex, setHoveredImageIndex] = useState(null);
    const [hoveredFileIndex, setHoveredFileIndex] = useState(null);
    const [hoveredAvatarUserSeen, setHoveredAvatarUserSeen] = useState(false);
    const [selectedTextReactions, setSelectedTextReactions] = useState({});
    const [selectedImageReactions, setSelectedImageReactions] = useState({});
    const [selectedFileReactions, setSelectedFileReactions] = useState({});
    const [isReactionExist, setIsReactionExist] = useState(false); // use to controll user image spacing
    const [isReplyMessage, setIsReplyMessage] = useState(false);
    // Redux selectors
    // flag know when the message is selected to reply
    const isRepliedMessage = useSelector((state) => state.replyMessage.isMessageReplied); // get the index of message is selected
    // contain what message is selected to reply
    const repliedMessage = useSelector((state) => state.replyMessage.repliedMessageContent);
    const isReplyMessageSent = useSelector((state) => state.replyMessage.isReplyMessageSend);

    // const getTextData = dataMessage[repliedMessage];
    const getTextData = dataMessage[repliedMessage[repliedMessage.length - 1]];
    const textReply = getTextData ? getTextData[0] : null;
    const currentReplyIndex = repliedMessage[repliedMessage.length - 1];

    const chatContainerRef = useRef(null);

    useEffect(() => {
        // scroll at the end of the chat detail
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }, [dataMessage, imageUploaded, fileUploaded]); // listen for changes of dataMessage, imageUploaded, fileUploaded

    // Schedule menu update after 10 seconds

    const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
        // show back to bottom button if scrolled up
        setShowButtonBackToBottom(scrollTop >= 0 && scrollTop + clientHeight < scrollHeight);
    };

    // Scroll to bottom when clicking the "Back to Bottom" button
    const scrollToBottom = () => {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        setShowButtonBackToBottom(false);
    };

    // open image in chatting
    // select image following their position
    const handleOpenImageModal = (messageIndex, imgIndex) => {
        setOpenImageMessageModal({ messageIndex, imgIndex });
    };

    const handleCloseImageModal = () => {
        // console.log('Test open image: ', openImageMessageModal);
        setOpenImageMessageModal(null);
    };

    // remove image just uploaded
    // console.log('List image uploaded: ', imageUploaded);
    const handleRemoveImage = (indexToRemove) => {
        // get the others images in array
        const filteredImages = imageUploaded.filter((_, index) => index !== indexToRemove);
        // console.log('list after removing: ', filteredImages);
        setImageUploaded(filteredImages); // update in Messaging data component
    };

    // remove image just uploaded
    const handleRemoveFiles = (indexToRemove) => {
        const filteredFiles = fileUploaded.filter((_, index) => index !== indexToRemove);

        setFileUploaded(filteredFiles);
    };

    const handleTextMouseEnter = (messageIndex) => {
        setHoveredTextIndex(messageIndex);
    };

    const handleTextMouseLeave = () => {
        setHoveredTextIndex(null);
    };

    const handleImageMouseEnter = (messageIndex, imageIndex) => {
        setHoveredImageIndex({ messageIndex, imageIndex });
    };

    const handleImageMouseLeave = () => {
        setHoveredImageIndex(null);
    };

    const handleFileMouseEnter = (messageIndex, fileIndex) => {
        setHoveredFileIndex({ messageIndex, fileIndex });
    };

    const handleFileMouseLeave = () => {
        setHoveredFileIndex(null);
    };

    const handleTextReactionSelection = (reaction, messageIndex) => {
        setSelectedTextReactions({ ...selectedTextReactions, [messageIndex]: reaction });
    };

    const handleImageReactionSelection = (reaction, messageIndex, imageIndex) => {
        const imageKey = `${messageIndex}_${imageIndex}`;
        setSelectedImageReactions({ ...selectedImageReactions, [imageKey]: reaction });
    };

    const handleFileReactionSelection = (reaction, messageIndex, fileIndex) => {
        const fileKey = `${messageIndex}_${fileIndex}`;
        setSelectedFileReactions({ ...selectedFileReactions, [fileKey]: reaction });
    };

    const handleDeleteAMessage = (indexToRemove) => {
        // Get current scroll position
        const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;

        const messageToDelete = dataMessage[indexToRemove];
        // Update messages data
        const newDataMessage = dataMessage.map((message, index) => {
            if (index === indexToRemove) {
                // If any part of the message is deleted, mark the entire message as deleted
                return [null, [], [], message[3].getTime()];
            }
            return message;
        });

        // Update messages data

        setDataMessage(newDataMessage);
        dispatch(deleteMessage(messageToDelete));
        // dispatch(deleteMessage(indexToRemove));

        // Scroll to bottom if the user was at the bottom before deletion
        if (isAtBottom) {
            setTimeout(() => {
                scrollToBottom();
            }, 100);
        }
    };

    return (
        <Box
            ref={chatContainerRef}
            sx={{
                // p: 1,
                height: '370px',
                overflow: 'scroll',
                scrollBehavior: 'smooth',
                flexGrow: 1,
                position: 'relative',
                [mobileScreen]: {
                    // height: 'calc(100vh - 330px)', // initial height
                    height: 'calc(100vh - 360px)', // initial height
                },
                scrollSnapAlign: 'end', //
            }}
            onScroll={handleScroll}
        >
            {/* user we are chatting */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', p: 1 }}>
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

                    {/* message is deleted  */}
                    <Box
                        sx={{
                            width: '100%',
                            minHeight: '10px',
                            bgcolor: '#f4f2ee',
                            px: '8px',
                            py: '2px',
                            borderRadius: '8px',
                        }}
                    >
                        <CustomizeTypography
                            sx={{
                                color: theme.palette.primaryText,
                                fontSize: '13.5px',
                            }}
                        >
                            This message has been deleted.
                        </CustomizeTypography>
                    </Box>
                </Box>
            </Box>

            {/* in the center for all devices */}
            {showButtonBackToBottom && (
                <IconButton
                    sx={{
                        // define animation
                        '@keyframes fade-down': {
                            from: {
                                opacity: 0,
                                bottom: '25%',
                            },
                            to: {
                                opacity: 1,
                                bottom: '30%',
                            },
                        },
                        zIndex: 999,
                        position: 'fixed',
                        bottom: '30%',
                        right: '50%',
                        transform: 'translate(30%,50%)',
                        bgcolor: '#0a66c2',
                        width: '32px',
                        height: '32px',
                        [ipadProScreen]: {
                            bottom: '25%',
                            right: '45%',
                            transform: 'translate(-25%,-45%)',
                            // re-define animation for ipad Pro
                            '@keyframes fade-down': {
                                from: {
                                    opacity: 0,
                                    bottom: '20%',
                                },
                                to: {
                                    opacity: 1,
                                    bottom: '25%',
                                },
                            },
                        },
                        [mobileScreen]: {
                            bottom: '30%',
                            right: '45%',
                            transform: 'translate(-30%,-45%)',
                            '@keyframes fade-down': {
                                from: {
                                    opacity: 0,
                                    bottom: '25%',
                                },
                                to: {
                                    opacity: 1,
                                    bottom: '30%',
                                },
                            },
                        },
                        [tabletScreen]: {
                            bottom: '25%',
                            right: '25%',
                            transform: 'translate(-25%,-25%)',
                            '@keyframes fade-down': {
                                from: {
                                    opacity: 0,
                                    bottom: '20%',
                                },
                                to: {
                                    opacity: 1,
                                    bottom: '25%',
                                },
                            },
                        },
                        animation: `fade-down 0.5s ease-in-out`,
                        '&:hover': {
                            bgcolor: '#306191',
                        },
                    }}
                    onClick={scrollToBottom}
                >
                    <SouthIcon sx={{ fontSize: '20px', color: '#fff' }} />
                </IconButton>
            )}

            {/* load data from message array */}
            <Box>
                {dataMessage.map((message, messageIndex) => {
                    // console.log('message: ', message);
                    // console.log('Message is replied and sent: ', message[repliedMessage]);
                    const text = message[0];
                    const images = message[1];
                    const files = message[2];
                    const isDeleted =
                        text === null &&
                        images.every((image) => image === null) &&
                        files.every((file) => file === null); // Check if message is deleted
                    const messageTime = new Date(message[3]);
                    const currentTime = new Date();
                    // check if the message is sent within the last 10 seconds
                    const isDeleteAble = currentTime - messageTime <= 10000; // true if time < 10s and false when message after 10s

                    return (
                        <Box
                            key={messageIndex}
                            sx={{
                                position: 'relative',
                                minHeight: '10px',
                                maxWidth: '200px',
                                borderRadius: '12px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-end',
                                justifyContent: 'flex-end',
                                marginLeft: 'auto',
                                // initial
                                mt: 1,
                                p: 1,
                            }}
                        >
                            {/* Render text if available */}
                            {!isDeleted && text !== null && (
                                <Box
                                    sx={{
                                        maxWidth: '250px',
                                        minHeight: '10px',
                                        position: 'relative',
                                    }}
                                >
                                    {isReplyMessageSent && currentReplyIndex === messageIndex && (
                                        <Box
                                            sx={{
                                                minHeight: '10px',
                                                maxWidth: '250px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'flex-end',
                                                justifyContent: 'flex-end',
                                                marginLeft: 'auto',
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    borderRadius: '12px',
                                                    bgcolor: '#00000008',
                                                }}
                                            >
                                                {/* Lấy dữ liệu tin nhắn từ Redux store thay vì chỉ số */}

                                                <CustomizeTypography
                                                    fs="12.5px"
                                                    sx={{
                                                        p: 1,
                                                        width: '100%',
                                                        color: '#65676B',
                                                    }}
                                                >
                                                    {textReply}

                                                    {/* Hiển thị nội dung của tin nhắn đã chọn để trả lời */}
                                                </CustomizeTypography>
                                            </Box>
                                        </Box>
                                    )}
                                    <CustomizeTypography
                                        onMouseEnter={() => setHoveredTextIndex(messageIndex)}
                                        onMouseLeave={() => setHoveredTextIndex(null)}
                                        sx={{
                                            borderRadius: '12px',
                                            color: theme.palette.primaryText,
                                            fontSize: '13.5px',
                                            bgcolor: '#edf3f7',
                                            p: 1,
                                            position: 'relative',
                                            '::before': {
                                                position: 'absolute',
                                                content: '""',
                                                width: '250px',
                                                // bgcolor: 'yellowgreen',
                                                height: '40px',
                                                top: '-10px',
                                                right: '0%',
                                            },
                                        }}
                                    >
                                        {text}
                                        {/* show reaction list */}
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                right: 0,
                                                zIndex: 999,
                                            }}
                                        >
                                            {hoveredTextIndex === messageIndex && (
                                                <ReactionOnMessage
                                                    deleteAble={isDeleteAble}
                                                    handCloseReactions={() =>
                                                        setHoveredTextIndex(null)
                                                    }
                                                    listDataReactions={listIconReactions}
                                                    onReactionSelect={(reaction) =>
                                                        handleTextReactionSelection(
                                                            reaction,
                                                            messageIndex,
                                                        )
                                                    }
                                                    deleteMessage={() =>
                                                        isDeleteAble &&
                                                        handleDeleteAMessage(messageIndex)
                                                    }
                                                    setIsReactionExist={setIsReactionExist}
                                                    setIsReplyMessage={setIsReplyMessage}
                                                    messageReply={messageIndex}
                                                />
                                            )}
                                        </Box>
                                        {/* show the reaction is chosen in message */}
                                        <Box>
                                            {selectedTextReactions[messageIndex] && (
                                                <Avatar
                                                    src={
                                                        selectedTextReactions[messageIndex]
                                                            .reactionsImage
                                                    }
                                                    alt={
                                                        selectedTextReactions[messageIndex]
                                                            .reactionsName
                                                    }
                                                    sx={{
                                                        width: '20px',
                                                        height: '20px',
                                                        borderRadius: 0,
                                                        position: 'absolute',
                                                        // bottom: '-30%',
                                                        right: '10%',
                                                    }}
                                                />
                                            )}
                                        </Box>
                                    </CustomizeTypography>
                                </Box>
                            )}

                            {/* Render images if available */}
                            {images.map((image, imgIndex) => {
                                const imageKey = `${messageIndex}_${imgIndex}`;
                                if (!isDeleted && image !== null) {
                                    return (
                                        <Box
                                            key={imgIndex}
                                            onMouseEnter={() =>
                                                handleImageMouseEnter(messageIndex, imgIndex)
                                            }
                                            onMouseLeave={handleImageMouseLeave}
                                            sx={{
                                                maxWidth: '200px',
                                                maxHeight: '200px',
                                                cursor: 'pointer',
                                                borderRadius: '8px',
                                                mt: '20px',
                                                mb: 1,
                                                position: 'relative',
                                                '::before': {
                                                    position: 'absolute',
                                                    content: '""',
                                                    width: '200px',
                                                    height: '40px',
                                                    top: '-10px',
                                                    right: '0%',
                                                },
                                            }}
                                        >
                                            {/* Render image */}
                                            <Avatar
                                                src={image.url}
                                                alt={image.name}
                                                sx={{
                                                    borderRadius: '8px',
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'contain',
                                                }}
                                                onClick={() =>
                                                    handleOpenImageModal(messageIndex, imgIndex)
                                                }
                                            />

                                            {/* Open image in details */}
                                            <Modal
                                                open={
                                                    openImageMessageModal?.messageIndex ===
                                                        messageIndex &&
                                                    openImageMessageModal?.imgIndex === imgIndex
                                                }
                                                onClose={handleCloseImageModal}
                                            >
                                                <ImageDetailInMessage
                                                    imgUrl={image.url}
                                                    handleClose={handleCloseImageModal}
                                                />
                                            </Modal>

                                            {/* Show reactions list */}
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 0,
                                                    zIndex: 99,
                                                }}
                                            >
                                                {hoveredImageIndex &&
                                                    hoveredImageIndex.messageIndex ===
                                                        messageIndex &&
                                                    hoveredImageIndex.imageIndex === imgIndex && (
                                                        <ReactionOnMessage
                                                            deleteAble={isDeleteAble}
                                                            handCloseReactions={() =>
                                                                setHoveredImageIndex(null)
                                                            }
                                                            onReactionSelect={(reaction) =>
                                                                handleImageReactionSelection(
                                                                    reaction,
                                                                    messageIndex,
                                                                    imgIndex,
                                                                )
                                                            }
                                                            listDataReactions={listIconReactions}
                                                            // can't delete message after 10s
                                                            deleteMessage={() =>
                                                                isDeleteAble &&
                                                                handleDeleteAMessage(
                                                                    messageIndex,
                                                                    imgIndex,
                                                                )
                                                            }
                                                            setIsReactionExist={setIsReactionExist}
                                                            setIsReplyMessage={setIsReplyMessage}
                                                            // message={dataMessage[messageIndex]} // test
                                                            messageReply={message} // test
                                                        />
                                                    )}
                                            </Box>

                                            {/* show which reaction is chosen */}
                                            {selectedImageReactions[imageKey] && (
                                                <Avatar
                                                    src={
                                                        selectedImageReactions[imageKey]
                                                            .reactionsImage
                                                    }
                                                    alt={
                                                        selectedImageReactions[imageKey]
                                                            .reactionsName
                                                    }
                                                    sx={{
                                                        width: '20px',
                                                        height: '20px',
                                                        borderRadius: 0,
                                                        position: 'absolute',
                                                        bottom: '-10%',
                                                        right: '10%',
                                                    }}
                                                />
                                            )}
                                        </Box>
                                    );
                                }
                            })}

                            {/* Render files if available */}
                            {files.map((file, fileIndex) => {
                                const fileKey = `${messageIndex}_${fileIndex}`;
                                if (!isDeleted && file !== null) {
                                    return (
                                        <Box
                                            key={fileIndex}
                                            sx={{
                                                mt: '12px',
                                                height: '60px',
                                                width: '200px',
                                                // #e8e8e8
                                                border: `1px solid #d0d0d0`,
                                                cursor: 'pointer',
                                                borderRadius: '8px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                position: 'relative',
                                            }}
                                            onMouseEnter={() =>
                                                handleFileMouseEnter(messageIndex, fileIndex)
                                            }
                                            onMouseLeave={handleFileMouseLeave}
                                        >
                                            <Avatar
                                                src={
                                                    file.name.endsWith('.docx') ||
                                                    file.name.endsWith('.doc')
                                                        ? DocxImage
                                                        : PDFImage
                                                }
                                                alt={file.name}
                                                sx={{
                                                    height: '60px',
                                                    width: '50px',
                                                    objectFit: 'cover',
                                                    borderTopLeftRadius: '6px',
                                                    borderBottomLeftRadius: '6px',
                                                    borderTopRightRadius: 0,
                                                    borderBottomRightRadius: 0,
                                                    '&:hover': {
                                                        cursor: 'pointer',
                                                    },
                                                    // [mobileScreen]: {
                                                    //     width: '24px',
                                                    //     height: '24px',
                                                    // },
                                                }}
                                            />
                                            <CustomizeTypography
                                                fs="12px"
                                                fw={true}
                                                sx={{
                                                    color: theme.palette.normalText,
                                                    mx: 1,
                                                    overflow: 'hidden',
                                                    whiteSpace: 'nowrap',
                                                    textOverflow: 'ellipsis',
                                                }}
                                            >
                                                {file.name}
                                            </CustomizeTypography>

                                            {hoveredFileIndex &&
                                                hoveredFileIndex.messageIndex === messageIndex &&
                                                hoveredFileIndex.fileIndex === fileIndex && (
                                                    <Box
                                                        sx={{
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                            right: 0,
                                                            bottom: 0,
                                                            bgcolor: 'rgba(255, 255, 255, 0.65)',
                                                            borderRadius: '6px',
                                                            zIndex: 99,
                                                            textTransform: 'initial',
                                                            fontSize: '14px',
                                                        }}
                                                    >
                                                        {/* use tag a to download  */}
                                                        <a href={file.url} download={file.name}>
                                                            <Button
                                                                disableTouchRipple
                                                                sx={{
                                                                    position: 'absolute',
                                                                    top: '25%',
                                                                    left: '25%',
                                                                    zIndex: 999,
                                                                    textTransform: 'initial',
                                                                    fontSize: '14px',
                                                                    fontWeight: 'bold',
                                                                    color: theme.palette.normalText,
                                                                    '&:hover': {
                                                                        bgcolor: 'transparent',
                                                                    },
                                                                }}
                                                                disableFocusRipple
                                                                startIcon={<DownloadIcon />}
                                                            >
                                                                Download
                                                            </Button>
                                                        </a>
                                                        <ReactionOnMessage
                                                            //if true --> can delete a message
                                                            deleteAble={isDeleteAble}
                                                            handCloseReactions={() =>
                                                                setHoveredFileIndex(null)
                                                            }
                                                            onReactionSelect={(reaction) =>
                                                                handleFileReactionSelection(
                                                                    reaction,
                                                                    messageIndex,
                                                                    fileIndex,
                                                                )
                                                            }
                                                            listDataReactions={listIconReactions}
                                                            deleteMessage={() =>
                                                                isDeleteAble &&
                                                                handleDeleteAMessage(
                                                                    messageIndex,
                                                                    fileIndex,
                                                                )
                                                            }
                                                            setIsReactionExist={setIsReactionExist}
                                                            setIsReplyMessage={setIsReplyMessage}
                                                            messageReply={message} // test
                                                        />
                                                    </Box>
                                                )}
                                            {selectedFileReactions[fileKey] && (
                                                <Avatar
                                                    src={
                                                        selectedFileReactions[fileKey]
                                                            .reactionsImage
                                                    }
                                                    alt={
                                                        selectedFileReactions[fileKey].reactionsName
                                                    }
                                                    sx={{
                                                        width: '20px',
                                                        height: '20px',
                                                        borderRadius: 0,
                                                        position: 'absolute',
                                                        bottom: '-20%',
                                                        right: '10%',
                                                    }}
                                                />
                                            )}
                                        </Box>
                                    );
                                }
                            })}

                            {/* Render "This message has been deleted" box if the message is deleted */}
                            {isDeleted && (
                                <Box
                                    sx={{
                                        width: '100%',
                                        minHeight: '10px',
                                        bgcolor: '#f4f2ee',
                                        px: '8px',
                                        py: '2px',
                                        borderRadius: '8px',
                                        mt: 2,
                                        position: 'relative',
                                    }}
                                >
                                    <CustomizeTypography
                                        sx={{
                                            color: theme.palette.primaryText,
                                            fontSize: '13.5px',
                                        }}
                                    >
                                        This message has been deleted.
                                    </CustomizeTypography>
                                </Box>
                            )}

                            {/* user saw message */}
                            {/* // chưa cho từng tin nhắn cụ thể */}
                            {messageIndex === dataMessage.length - 1 && (
                                <Box
                                    sx={{
                                        width: '20px',
                                        height: '20px',
                                        mt: isReactionExist ? '14px' : '4px',
                                        position: 'relative',
                                    }}
                                    onMouseEnter={() => setHoveredAvatarUserSeen(true)}
                                    onMouseLeave={() => setHoveredAvatarUserSeen(false)}
                                >
                                    {hoveredAvatarUserSeen && (
                                        <Box
                                            sx={{
                                                minHeight: '10px',
                                                width: 'auto',
                                                bgcolor: 'rgba(0, 0, 0, 0.45)',
                                                borderRadius: '12px',
                                                minWidth: '260px',
                                                padding: '4px',
                                                textAlign: 'center',
                                                position: 'absolute',
                                                bottom: '100%',
                                                right: 0,
                                                mb: '8px',
                                            }}
                                        >
                                            <Typography sx={{ color: 'white', fontSize: '13px' }}>
                                                Melody Fall Topic sent at 11:19 PM
                                            </Typography>
                                        </Box>
                                    )}
                                    <Avatar
                                        src={MissYou}
                                        alt="USER IMAGE"
                                        sx={{ height: '100%', width: '100%' }}
                                    />
                                </Box>
                            )}
                        </Box>
                    );
                })}
            </Box>
            {/* load image just uploaded - preparing to send*/}
            {/* {imageUploaded.length > 0 && */}
            <Box
                sx={{
                    position: 'sticky', // based on the user's scroll position

                    // case 2: use top --> chickens winner
                    top: '85%', // for laptop, desktop and... mobile phone?
                    // height: imageUploaded.length > 0 || fileUploaded.length > 0 ? '60px' : 0,
                    width: '100%',
                    bgcolor: 'white',
                    [ipadProScreen]: {
                        top: '95%',
                    },
                    [tabletScreen]: {
                        top: '95%', // for laptop and desktop
                    },
                }}
            >
                {imageUploaded.map((image, index) => (
                    <Box
                        key={index}
                        sx={{
                            padding: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            borderTop: '1px solid #d0d0d0',
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
                            }}
                        />
                        <Box>
                            <CustomizeTypography sx={{ color: theme.palette.normalText }}>
                                {image.name}
                            </CustomizeTypography>

                            {/* {showProgress ? (
                                <LinearDeterminate showProgress={showProgress} />
                            ) : (
                                <CustomizeTypography
                                    fs="12px"
                                    sx={{ color: theme.palette.primaryText }}
                                >
                                    Attached File
                                </CustomizeTypography>
                            )} */}
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
                {fileUploaded.map((file, index) => (
                    <Box
                        key={index}
                        sx={{
                            padding: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            borderTop: '1px solid #d0d0d0',
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar
                                src={file.name.endsWith('.pdf') ? PDFImage : DocxImage}
                                alt={file.name.endsWith('.pdf') ? 'PDF File' : 'Docx File'}
                                sx={{
                                    width: '48px',
                                    height: '48px',
                                    objectFit: 'contain',
                                    borderRadius: 0,
                                    mr: 1,
                                    '&:hover': {
                                        cursor: 'pointer',
                                    },
                                    [mobileScreen]: {
                                        width: '36px',
                                        height: '36px',
                                    },
                                }}
                            />

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
                                {/* {showProgress ? (
                            <LinearDeterminate showProgress={showProgress} />
                        ) : (
                            <CustomizeTypography
                                fs="12px"
                                sx={{ color: theme.palette.primaryText }}
                            >
                                Attached File
                            </CustomizeTypography>
                        )} */}
                            </Box>
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
                {/* {isReplyMessage && ( */}

                {/* get message to respone/ reply */}
                {isRepliedMessage && (
                    <Box
                        sx={{
                            px: 2,
                            py: 1,
                            borderTop: '1px solid #d9d9d9',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box>
                            <CustomizeTypography
                                fs="13.5px"
                                fw={true}
                                sx={{
                                    color: theme.palette.normalText,
                                }}
                            >
                                Reply to: Kei
                            </CustomizeTypography>

                            <Box sx={{ overflow: 'hidden' }}>
                                {/* Mapping through repliedMessageContent to display each message */}
                                {textReply && textReply.length > 0 && (
                                    <CustomizeTypography
                                        fs="12px"
                                        sx={{
                                            color: '#666666',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                        }}
                                    >
                                        {textReply}
                                    </CustomizeTypography>
                                )}

                                {/* {imageReply.length > 0 && (
                                    <CustomizeTypography
                                        fs="12px"
                                        sx={{
                                            color: '#666666',
                                        }}
                                    >
                                        Image
                                    </CustomizeTypography>
                                )}
                                {fileReply.length > 0 && (
                                    <CustomizeTypography
                                        fs="12px"
                                        sx={{
                                            color: '#666666',
                                        }}
                                    >
                                        File
                                    </CustomizeTypography>
                                )} */}
                            </Box>
                        </Box>

                        {/* close message just selected */}
                        <Avatar
                            sx={{
                                width: '24px',
                                height: '24px',
                                bgcolor: '#000',
                                border: '1px solid #404040',
                                '&:hover': {
                                    cursor: 'pointer',
                                },
                            }}
                        >
                            <HighlightOffIcon
                                sx={{ color: 'white', fontSize: '20px' }}
                                onClick={() => dispatch(disableReplyMessage())}
                            />
                        </Avatar>
                    </Box>
                )}
            </Box>
        </Box>
    );
};
export default DeleteMessageAfterTime;

const listIconReactions = [
    { reactionsImage: Liked, reactionsName: 'Liked a Message' },
    { reactionsImage: Love, reactionsName: 'Loved a Message' },
    { reactionsImage: Laugh, reactionsName: 'Laugh a Message' },
];
