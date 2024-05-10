import React, { useState, useRef, useEffect } from 'react';
import { Box, Avatar, Modal, IconButton, Button } from '@mui/material';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import { mobileScreen, theme } from '../Theme/Theme';
import MissYou from '../../assets/images/missu.jpeg';
import ReactionOnMessage from './ReactionOnMessage';
import ImageDetailInMessage from './ImageDetailInMessage';
import PDFImage from '../../assets/images/pdf-file.png';
import DocxImage from '../../assets/images/doc-file.png';
import DownloadIcon from '@mui/icons-material/Download';

// reactions
import Liked from '../../assets/images/like_reactions.png';
import Love from '../../assets/images/heart_reactions.png';
import Laugh from '../../assets/images/laughing_reactions.png';
import Reply from '../../assets/images/left_reactions.png';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// Chat detail
const MessageDetails = ({ dataMessage }) => {
    const [isHoveredOnMessage, setIsHoveredOnMessage] = useState(false);
    const [hoveredFileIndex, setHoveredFileIndex] = useState(null);
    const [hoveredOnEachMessage, setHoveredOnEachMessage] = useState(null);
    // which is image chose and opened modal?
    const [openImageMessageModal, setOpenImageMessageModal] = useState(null);
    // icon scroll to bottom
    const [showButtonBackToBottom, setShowButtonBackToBottom] = useState(false);
    // const [selectedReaction, setSelectedReaction] = useState(null);
    const [selectedReactions, setSelectedReactions] = useState({});

    const chatContainerRef = useRef(null);

    useEffect(() => {
        // scroll at the end of the chat detail
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }, [dataMessage]); // listen for changes in the dataMessage prop

    const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
        // show back to bottom button if scrolled up
        setShowButtonBackToBottom(scrollTop >= 0 && scrollTop + clientHeight < scrollHeight);
    };

    // Scroll to bottom when clicking the "Back to Bottom" button
    const scrollToBottom = () => {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
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

    // check hover on file
    const handleHoverFileIndex = (messageIndex, fileIndex) => {
        setHoveredFileIndex({ messageIndex, fileIndex });
    };

    // show reactions menu on each message
    const handleHoverOnEachMessage = (messageIndex) => {
        setHoveredOnEachMessage({ messageIndex });
    };

    // const handleReactionSelection = (reaction, msgIndex) => {
    //     setSelectedReaction({ reaction, msgIndex });
    //     setHoveredOnEachMessage(null); // Đóng menu phản ứng sau khi đã chọn
    // };
    const handleReactionSelection = (reaction, messageIndex) => {
        setSelectedReactions({ ...selectedReactions, [messageIndex]: reaction });
        setHoveredOnEachMessage(null);
    };

    return (
        <Box
            ref={chatContainerRef}
            sx={{
                p: 1,
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
            {/* box contains message that we sent */}
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
                    {/* contain name and time that they sent message*/}
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

                    {/* contains message */}
                    <Box>
                        <CustomizeTypography
                            sx={{
                                color: theme.palette.primaryText,
                                fontSize: '13.5px',
                                p: '4px 0',
                                position: 'relative',
                                '::before': {
                                    position: 'absolute',
                                    content: '""',
                                    width: '100%',
                                    height: '20px',
                                    top: '-10px',
                                    left: 0,
                                },
                                '&:hover': {
                                    bgcolor: theme.palette.bgButtonHover,
                                },
                            }}
                            onMouseEnter={() => setIsHoveredOnMessage(true)}
                            onMouseLeave={() => setIsHoveredOnMessage(false)}
                        >
                            nghe nèk
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '-10%',
                                    right: '0',
                                    zIndex: 9999,
                                }}
                            >
                                {/* {isHoveredOnMessage && (
                                    <ReactionOnMessage
                                        handCloseReactions={() => setIsHoveredOnMessage(false)}
                                        listDataReactions={reactionsOnMessaging}
                                    />
                                )} */}
                            </Box>
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

            {/* contain message that we sent/ reply/ request */}
            <Box
                sx={{
                    minHeight: '10px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                    marginLeft: 'auto',
                    maxWidth: '200px',
                    mt: 1,
                    '&:hover': {
                        bgcolor: theme.palette.bgButtonHover,
                        boxShadow: `0 4px 4px ${theme.palette.primaryText}`,
                    },
                }}
            >
                <CustomizeTypography
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
                            width: '100%',
                            height: '20px',
                            top: '-10px',
                            left: 0,
                        },
                    }}
                    onMouseEnter={() => setIsHoveredOnMessage(true)}
                    onMouseLeave={() => setIsHoveredOnMessage(false)}
                >
                    Gửi tui lại tên bài nhạc hôm bữa đi.
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '-10%',
                            right: '0',
                            zIndex: 9999,
                        }}
                    >
                        {/* {isHoveredOnMessage && (
                            <ReactionOnMessage
                                handCloseReactions={() => setIsHoveredOnMessage(false)}
                                listDataReactions={reactionsOnMessaging}
                            />
                        )} */}
                    </Box>
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
                            Lên YTB search nha
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
                            初愿
                        </CustomizeTypography>
                    </Box>
                </Box>
            </Box>

            {/* we are chatting */}
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
                    okay, cảm ơn nha! okay, cảm ơn nha! okay, cảm ơn nha! okay, cảm ơn nha! okay,
                    cảm ơn nha! okay, cảm ơn nha! okay, cảm ơn nha! okay, cảm ơn nha! okay, cảm ơn
                    nha! okay, cảm ơn nha! okay, cảm ơn nha!okay, cảm ơn nha! okay, cảm ơn nha!
                    okay, cảm ơn nha! okay, cảm ơn nha! okay, cảm ơn nha! okay, cảm ơn nha! okay,
                    cảm ơn nha! okay, cảm ơn nha! okay, cảm ơn nha! okay, cảm ơn nha! okay, cảm ơn
                    nha!
                </CustomizeTypography>
            </Box>

            {/* user we are chatting */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative' }}>
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
                    style={{
                        position: 'fixed',
                        bottom: '50%',
                        left: '50%',
                        transform: 'translate(-50%,50%)',
                    }}
                    onClick={scrollToBottom}
                >
                    <ArrowDownwardIcon sx={{ fontSize: '24px' }} />
                </IconButton>
            )}

            {/* load data from message array */}
            {dataMessage.map((message, index) => (
                <Box
                    key={index}
                    sx={{
                        minHeight: '10px',
                        borderRadius: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-end',
                        marginLeft: 'auto',
                        mt: 1,
                        '&:hover': {
                            bgcolor: '#f2f2f2',
                            // maxWidth: '200px',
                        },
                    }}
                    onMouseEnter={() => handleHoverOnEachMessage(index)}
                    onMouseLeave={() => setHoveredOnEachMessage(null)}
                >
                    {hoveredOnEachMessage && hoveredOnEachMessage.messageIndex === index && (
                        <ReactionOnMessage
                            handCloseReactions={() => setHoveredOnEachMessage(null)}
                            onReactionSelect={(reaction) =>
                                handleReactionSelection(reaction, index)
                            }
                            listDataReactions={reactionsOnMessaging}
                        />
                    )}
                    {/* show message text  */}

                    <Box sx={{ maxWidth: '200px', position: 'relative', mt: 2 }}>
                        {message?.msgSent.length > 0 && (
                            <CustomizeTypography
                                sx={{
                                    maxWidth: '200px',
                                    minHeight: '10px',
                                    borderRadius: '12px',
                                    color: theme.palette.primaryText,
                                    fontSize: '13.5px',
                                    bgcolor: '#edf3f7',
                                    p: 1,
                                    // px: 1,
                                    // py: '12px',
                                }}
                            >
                                {message?.msgSent}
                            </CustomizeTypography>
                        )}
                        <Box>
                            {message.imageSent.length > 0 && (
                                // <Box
                                //     sx={{
                                //         display: 'flex',
                                //         justifyContent: 'center',
                                //         alignItems: 'center',
                                //         mt: 1,
                                //     }}
                                // >
                                <Box
                                    sx={{
                                        maxWidth: '200px',
                                        maxHeight: '200px',
                                        border: `1px solid #a9a5a5`,
                                        cursor: 'pointer',
                                        borderRadius: '8px',
                                        mt: 1,
                                    }}
                                >
                                    {message.imageSent.map((img, imgIndex) => (
                                        <Box>
                                            <Avatar
                                                key={imgIndex}
                                                src={img.url}
                                                alt={img.name}
                                                sx={{
                                                    py: 1,
                                                    borderRadius: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                }}
                                                onClick={() =>
                                                    handleOpenImageModal(index, imgIndex)
                                                }
                                            />
                                            <Modal
                                                open={
                                                    openImageMessageModal?.messageIndex === index &&
                                                    openImageMessageModal?.imgIndex === imgIndex
                                                }
                                                onClose={handleCloseImageModal}
                                            >
                                                <ImageDetailInMessage
                                                    imgUrl={img.url}
                                                    handleClose={handleCloseImageModal}
                                                />
                                            </Modal>
                                        </Box>
                                    ))}
                                </Box>
                                // </Box>
                            )}
                        </Box>

                        {/* load file just uploaded/ sent */}
                        {message.fileSent.map((file, fileIndex) => (
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
                                onMouseEnter={() => handleHoverFileIndex(index, fileIndex)}
                                onMouseLeave={() => setHoveredFileIndex(null)}
                            >
                                <Avatar
                                    src={
                                        file.name.endsWith('.docx') || file.name.endsWith('.doc')
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
                                    hoveredFileIndex.messageIndex === index && // message index
                                    hoveredFileIndex.fileIndex === fileIndex && ( // and file index are hovered
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                bgcolor: 'rgba(255, 255, 255, 0.65)',
                                                borderRadius: '6px',
                                                zIndex: 999,
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
                                        </Box>
                                    )}
                            </Box>
                        ))}

                        {selectedReactions[index] && (
                            <Avatar
                                src={selectedReactions[index].reactionsImage}
                                alt={selectedReactions[index].reactionsName}
                                sx={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: 0,
                                    position: 'absolute',
                                    bottom: '-4%',
                                    right: '10%',
                                }}
                            />
                        )}
                    </Box>

                    {/* load image and only show if it exists */}

                    {/* Hiển thị thời gian gửi */}
                    {/* <p>Time Sent: {message.timeSent.toLocaleString()}</p> */}

                    {/* Open image detail for chat */}
                </Box>
            ))}
        </Box>
    );
};
export default MessageDetails;

const reactionsOnMessaging = [
    { reactionsImage: Liked, reactionsName: 'Liked a Message' },
    { reactionsImage: Love, reactionsName: 'Loved a Message' },
    { reactionsImage: Laugh, reactionsName: 'Laugh a Message' },
    { reactionsImage: Reply, reactionsName: 'Reply a Message' },
];
