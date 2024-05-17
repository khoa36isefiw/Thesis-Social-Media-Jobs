import React, { useState, useRef, useEffect } from 'react';
import { Box, Avatar, Modal, IconButton, Button } from '@mui/material';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import { mobileScreen, theme } from '../Theme/Theme';
import MissYou from '../../assets/images/missu.jpeg';
import ReactionOnMessage from './ReactionOnMessage';
import ImageDetailInMessage from './ImageDetailInMessage';
import PDFImage from '../../assets/images/pdf-file.png';
import DocxImage from '../../assets/images/doc-file.png';
// Icon
import DownloadIcon from '@mui/icons-material/Download';
import CloseIcon from '@mui/icons-material/Close';
// reactions
import Liked from '../../assets/images/like_reactions.png';
import Love from '../../assets/images/heart_reactions.png';
import Laugh from '../../assets/images/laughing_reactions.png';
import Reply from '../../assets/images/left_reactions.png';
import SouthIcon from '@mui/icons-material/South';

// Chat detail
const Delete = ({
    dataMessage,
    setDataMessage,
    imageUploaded,
    setImageUploaded,
    fileUploaded,
    setFileUploaded,
}) => {
    const [isHoveredOnMessage, setIsHoveredOnMessage] = useState(false);
    // which image is chose and opened modal?
    const [openImageMessageModal, setOpenImageMessageModal] = useState(null);
    // icon scroll to bottom
    const [showButtonBackToBottom, setShowButtonBackToBottom] = useState(false);
    const [hoveredTextIndex, setHoveredTextIndex] = useState(null);
    const [hoveredImageIndex, setHoveredImageIndex] = useState(null);
    const [hoveredFileIndex, setHoveredFileIndex] = useState(null);
    const [selectedTextReactions, setSelectedTextReactions] = useState({});
    const [selectedImageReactions, setSelectedImageReactions] = useState({});
    const [selectedFileReactions, setSelectedFileReactions] = useState({});

    const chatContainerRef = useRef(null);

    useEffect(() => {
        // scroll at the end of the chat detail
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }, [dataMessage, imageUploaded, fileUploaded]); // listen for changes of dataMessage, imageUploaded, fileUploaded

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

    const handleDeleteAMessage = (indexToRemove, imgIndex = null) => {
        // Get current scroll position
        const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;

        // Update messages data
        const newDataMessage = dataMessage.map((message, index) => {
            if (index === indexToRemove) {
                // If any part of the message is deleted, mark the entire message as deleted
                return [null, [], []];
            }
            return message;
        });

        setDataMessage(newDataMessage);

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

            {showButtonBackToBottom && (
                <IconButton
                    sx={{
                        // define animation
                        '@keyframes fade-down': {
                            from: {
                                opacity: 0,
                                bottom: '32%',
                            },
                            to: {
                                opacity: 1,
                                bottom: '40%',
                            },
                        },
                        zIndex: 999,
                        position: 'fixed',
                        bottom: '40%',
                        right: '32%',
                        // transform: 'translate(-80%,50%)',
                        bgcolor: '#0a66c2',
                        width: '32px',
                        height: '32px',

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
                    const text = message[0];
                    const images = message[1];
                    const files = message[2];
                    const isDeleted =
                        text === null &&
                        images.every((image) => image === null) &&
                        files.every((file) => file === null); // Check if message is deleted

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
                                            width: '200px',
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
                                                handCloseReactions={() => setHoveredTextIndex(null)}
                                                listDataReactions={listIconReactions}
                                                onReactionSelect={(reaction) =>
                                                    handleTextReactionSelection(
                                                        reaction,
                                                        messageIndex,
                                                    )
                                                }
                                                deleteMessage={() =>
                                                    handleDeleteAMessage(messageIndex)
                                                }
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
                                                    bottom: '-30%',
                                                    right: '10%',
                                                }}
                                            />
                                        )}
                                    </Box>
                                </CustomizeTypography>
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
                                                mt: 2,
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
                                                            deleteMessage={() =>
                                                                handleDeleteAMessage(
                                                                    messageIndex,
                                                                    imgIndex,
                                                                )
                                                            }
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
                                                mt: 1,
                                                height: '60px',
                                                width: '200px',
                                                border: `1px solid #a9a5a5`,
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
                                                    [mobileScreen]: {
                                                        width: '24px',
                                                        height: '24px',
                                                    },
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
                                                                handleDeleteAMessage(
                                                                    messageIndex,
                                                                    fileIndex,
                                                                )
                                                            }
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
                        </Box>
                    );
                })}
            </Box>

            {/* load image just uploaded - preparing to send*/}
            {imageUploaded.length > 0 &&
                imageUploaded.map((image, index) => (
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

                                [mobileScreen]: {
                                    width: '24px',
                                    height: '24px',
                                },
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
                        borderTop: '1px solid #333',
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
                                    width: '24px',
                                    height: '24px',
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
        </Box>
    );
};
export default Delete;

const listIconReactions = [
    { reactionsImage: Liked, reactionsName: 'Liked a Message' },
    { reactionsImage: Love, reactionsName: 'Loved a Message' },
    { reactionsImage: Laugh, reactionsName: 'Laugh a Message' },
    { reactionsImage: Reply, reactionsName: 'Reply a Message' },
];
