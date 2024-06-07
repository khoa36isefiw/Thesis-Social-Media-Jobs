import React, { useState, useRef, useEffect } from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import { ipadProScreen, mobileScreen, tabletScreen, theme } from '../Theme/Theme';
import ReactionOnMessage from './ReactionOnMessage';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMessage } from '../../redux/ShowMesssage/showMesssageAction';
import { disableReplyMessage } from '../../redux/ReplyMessage/replyMessageAction';
import Liked from '../../assets/images/like_reactions.png';
import Love from '../../assets/images/heart_reactions.png';
import Laugh from '../../assets/images/laughing_reactions.png';

const listIconReactions = [
    { reactionsImage: Liked, reactionsName: 'Liked a Message' },
    { reactionsImage: Love, reactionsName: 'Loved a Message' },
    { reactionsImage: Laugh, reactionsName: 'Laugh a Message' },
];

const DeleteMessageAfterTimeBK = ({
    dataMessage,
    setDataMessage,
    imageUploaded,
    setImageUploaded,
    fileUploaded,
    setFileUploaded,
}) => {
    const dispatch = useDispatch();

    // State variables
    const [openImageMessageModal, setOpenImageMessageModal] = useState(null);
    const [showButtonBackToBottom, setShowButtonBackToBottom] = useState(false);
    const [hoveredTextIndex, setHoveredTextIndex] = useState(null);
    const [selectedTextReactions, setSelectedTextReactions] = useState({});
    const [isReactionExist, setIsReactionExist] = useState(false);
    // const [currentReplyIndex, setCurrentReplyIndex] = useState(null);

    // Redux selectors
    const isRepliedMessage = useSelector((state) => state.replyMessage.isMessageReplied);
    const repliedMessage = useSelector((state) => state.replyMessage.repliedMessageContent);
    const isReplyMessageSent = useSelector((state) => state.replyMessage.isReplyMessageSend);
    // const currentReplyIndex = useSelector((state) => state.replyMessage.currentReplyIndex);

    // const getTextData = dataMessage[repliedMessage];
    const getTextData = dataMessage[repliedMessage[repliedMessage.length - 1]];
    console.log(
        'repliedMessage[repliedMessage.length - 1]: ',
        repliedMessage[repliedMessage.length - 1],
    );

    console.log('repliedMessage: ', repliedMessage);
    console.log('getTextData: ', getTextData);
    const textReply = getTextData ? getTextData[0] : null;
    const currentReplyIndex = repliedMessage[repliedMessage.length - 1];

    // console.log('isRepliedMessage: ', isRepliedMessage);
    // console.log('repliedMessage: ', [dataMessage[repliedMessage]]);

    console.log('currentReplyIndex: ', currentReplyIndex);

    const chatContainerRef = useRef(null);

    useEffect(() => {
        // Scroll to the end of the chat detail
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }, [dataMessage, imageUploaded, fileUploaded]);

    const handleDeleteAMessage = (messageIndex) => {
        const newDataMessage = [...dataMessage];
        newDataMessage[messageIndex] = [null, [], [], newDataMessage[messageIndex][3]];
        setDataMessage(newDataMessage);
        dispatch(deleteMessage(messageIndex));
    };

    const handleTextReactionSelection = (reaction, messageIndex) => {
        setSelectedTextReactions((prev) => ({
            ...prev,
            [messageIndex]: reaction,
        }));
    };

    const handleScroll = () => {
        if (
            chatContainerRef.current.scrollTop <
            chatContainerRef.current.scrollHeight - chatContainerRef.current.clientHeight - 50
        ) {
            setShowButtonBackToBottom(true);
        } else {
            setShowButtonBackToBottom(false);
        }
    };

    return (
        <Box
            ref={chatContainerRef}
            sx={{
                height: '370px',
                overflow: 'scroll',
                scrollBehavior: 'smooth',
                flexGrow: 1,
                position: 'relative',
                [mobileScreen]: {
                    height: 'calc(100vh - 360px)',
                },
                scrollSnapAlign: 'end',
            }}
            onScroll={handleScroll}
        >
            {/* Load data from message array */}
            <Box>
                {dataMessage.map((message, messageIndex) => {
                    const text = message[0];
                    const images = message[1];
                    const files = message[2];
                    const isDeleted =
                        text === null &&
                        images.every((image) => image === null) &&
                        files.every((file) => file === null); // Check if message is deleted
                    const messageTime = new Date(message[3]);
                    const currentTime = new Date();
                    const isDeleteAble = currentTime - messageTime <= 10000; // true if time < 10s and false when message after 10s
                    console.log('messageIndex: ', messageIndex);

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
                                    {/* Show reply content if this is the message being replied to */}

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
                                                height: '40px',
                                                top: '-10px',
                                                right: '0%',
                                            },
                                        }}
                                    >
                                        {text}
                                        {/* Show reaction list */}
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
                                                    messageReply={messageIndex}
                                                />
                                            )}
                                        </Box>
                                        {/* Show the reaction chosen in message */}
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
                                                        right: '10%',
                                                    }}
                                                />
                                            )}
                                        </Box>
                                    </CustomizeTypography>
                                </Box>
                            )}
                        </Box>
                    );
                })}
            </Box>
            {/* Load image just uploaded - preparing to send */}
            <Box
                sx={{
                    position: 'sticky',
                    top: '85%',
                    width: '100%',
                    bgcolor: 'white',
                    [ipadProScreen]: {
                        top: '95%',
                    },
                    [tabletScreen]: {
                        top: '95%',
                    },
                }}
            >
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
                                        {/* textReply */}
                                    </CustomizeTypography>
                                )}
                            </Box>
                        </Box>
                        {/* Close message just selected */}
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
                                onClick={() => {
                                    // setCurrentReplyIndex(null);
                                    dispatch(disableReplyMessage());
                                }}
                            />
                        </Avatar>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default DeleteMessageAfterTimeBK;
