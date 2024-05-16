// Chat detail
const MessageDetails = ({
    dataMessage,
    setDataMessage,
    imageUploaded,
    setImageUploaded,
    fileUploaded,
    setFileUploaded,
}) => {
    const handleDeleteAMessage = (indexToRemove, imgIndex = null) => {
        // Get current scroll position
        const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;

        // Update messages data
        // const newDataMessage = dataMessage.map((message, index) => {
        //     if (index === indexToRemove) {
        //         // Return a new message with "This message has been deleted"
        //         return [null, [], []]; // Text is set to null, and images and files arrays are emptied
        //     }
        //     return message;
        // });
        // Update messages data
        const newDataMessage = dataMessage.map((message, index) => {
            if (index === indexToRemove) {
                // If imgIndex is null, set text to null and empty images and files arrays
                if (imgIndex === null) {
                    return [null, [], []];
                } else {
                    // Otherwise, remove the specific image
                    const [text, images, files] = message;
                    // const updatedImages = images.filter((_, idx) => idx !== imgIndex);
                    const updatedImages = images.map((image, idx) => {
                        if (idx === imgIndex) {
                            return null;
                        }
                        return image;
                    });

                    return [text, updatedImages, files];
                }
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
            <Box>
                {dataMessage.map((message, messageIndex) => {
                    const text = message[0];
                    const images = message[1];
                    const files = message[2];

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
                            {text !== null ? (
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
                                                onReactionSelect={(reaction) =>
                                                    console.log('Reaction selected:', reaction)
                                                }
                                                listDataReactions={listIconReactions}
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
                            ) : (
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
                            )}

                            {images.map((image, imgIndex) => {
                                const imageKey = `${messageIndex}_${imgIndex}`;
                                if (image !== null) {
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
                                                // border: `1px solid #a9a5a5`,
                                                cursor: 'pointer',
                                                borderRadius: '8px',
                                                mt: 2,
                                                position: 'relative',
                                                '::before': {
                                                    position: 'absolute',
                                                    content: '""',
                                                    width: '200px',
                                                    // bgcolor: 'yellowgreen',
                                                    height: '40px',
                                                    top: '-10px',
                                                    right: '0%',
                                                },
                                            }}
                                        >
                                            <Avatar
                                                key={imgIndex}
                                                src={image.url}
                                                alt={image.name}
                                                sx={{
                                                    borderRadius: '8px',
                                                    // py: 1,
                                                    // borderRadius: 0,
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
                                            {/* <img src={image.url} alt={image.name} /> */}

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

                                            {/* show which reaction is chose */}
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
                                } else {
                                    return (
                                        <Box
                                            key={imgIndex}
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
                                    );
                                }
                            })}

                            {/* show file to UI */}
                            {files.map((file, fileIndex) => {
                                const fileKey = `${messageIndex}_${fileIndex}`;
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
                                                src={selectedFileReactions[fileKey].reactionsImage}
                                                alt={selectedFileReactions[fileKey].reactionsName}
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
                            })}
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
};
export default MessageDetails;
