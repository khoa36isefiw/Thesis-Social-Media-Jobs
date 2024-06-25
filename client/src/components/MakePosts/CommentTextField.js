import React, { useEffect, useRef, useState } from 'react';
import { Box, Modal, IconButton, TextField, InputAdornment } from '@mui/material';
import { mobileScreen, tabletScreen, theme } from '../Theme/Theme';
import { blue } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import MoodIcon from '@mui/icons-material/Mood';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import EmojiPicker from 'emoji-picker-react';
import ImageDetailInMessage from '../Messaging/ImageDetailInMessage';
import ImageOriginialSize from '../ImageOriginialSize/ImageOriginialSize';

export const CommentTextField = ({
    disabled,
    onChange,
    inputRef,
    isShowPlaceholder = false,
    isEmptyCommentField,
    submitFunction,
    handleKeyDown,
    uploadedImage,
    imageURLUploaded,
    showIconUploadImage,
    removeImageUploaded,
    showPicker,
    setShowPicker,
    handleEmojiClick,
    defaultValue = '',
}) => {
    const [openModalImage, setOpenModalImage] = useState(false);
    const [isBold, setIsBold] = useState(true);
    useEffect(() => {
        if (inputRef && inputRef.current) {
            inputRef.current.focus();
            const length = inputRef.current.value.length;
            inputRef.current.setSelectionRange(length, length);
        }
    }, [defaultValue]);

    const handleOpenImageUploadedInComment = () => {
        setOpenModalImage(true);
    };

    const handleCloseImageUploadedInComment = () => {
        setOpenModalImage(false);
    };

    // console.log('imageURLUploaded: ', imageURLUploaded);
    const finalDefaultValue = defaultValue ? `${defaultValue} ` : defaultValue;

    const handleInputChange = (event) => {
        setIsBold(event.target.value === defaultValue); // Set bold only if the text is the default value
        onChange(event);
    };

    return (
        <Box>
            <TextField
                inputRef={inputRef}
                onChange={onChange}
                placeholder={isShowPlaceholder ? 'Write your comment...' : null}
                onKeyDown={handleKeyDown}
                variant="outlined"
                fullWidth
                multiline
                disabled={disabled}
                defaultValue={finalDefaultValue}
                sx={{
                    ml: 1,
                    '& .MuiOutlinedInput-root': {
                        padding: 2,
                        borderRadius: '24px',
                        border: 'none',
                        '& fieldset': {
                            border: 'none',
                        },
                        '& .MuiInputBase-input::placeholder': {
                            fontSize: '13px',
                            color: 'gray',
                            // fontWeight: isBold ? 'bold' : 'normal',
                        },
                        '& .MuiInputBase-input': {
                            fontSize: '13px',
                            // ml: defaultValue ? 2 : 0,
                        },
                    },
                    '& .Mui-disabled': {
                        backgroundColor: 'transparent',
                    },
                }}
                InputProps={{
                    startAdornment: disabled && (
                        <InputAdornment
                            position="start"
                            sx={{
                                alignSelf: 'flex-end',
                                marginTop: '8px',
                            }}
                        >
                            <IconButton onClick={() => setShowPicker((val) => !val)}>
                                <MoodIcon sx={{ fontSize: '24px' }} />
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
                            {showIconUploadImage ? (
                                <label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        onChange={uploadedImage}
                                    />
                                    <IconButton component="span">
                                        <InsertPhotoIcon sx={{ fontSize: '24px' }} />
                                    </IconButton>
                                </label>
                            ) : null}
                        </InputAdornment>
                    ),
                    endAdornment: disabled && (
                        <InputAdornment
                            position="end"
                            sx={{
                                alignSelf: 'flex-end',
                                marginTop: '8px',
                            }}
                        >
                            <IconButton
                                onClick={submitFunction}
                                disabled={isEmptyCommentField}
                                sx={{ transform: 'rotate(-35deg)' }}
                            >
                                <SendRoundedIcon
                                    sx={{
                                        fontSize: '22px',
                                        color: isEmptyCommentField ? 'gray' : blue[700],
                                    }}
                                />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />

            {/* If image is uploaded and shows it on, image uploaded to send comment in post */}
            {imageURLUploaded && (
                <Box
                    sx={{
                        // width: originalWidth,
                        // height: originalHeight,
                        maxWidth: '210px',
                        maxHeight: '210px',
                        position: 'relative',
                        bgcolor: blue[100],
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overFlow: 'hidden',
                    }}
                >
                    <IconButton
                        sx={{
                            position: 'absolute',
                            color: 'white',
                            width: '32px',
                            height: '32px',
                            backgroundColor: theme.palette.bgColorButton,
                            zIndex: 99,
                            top: '-5%',
                            right: '-5%',
                            '&:hover': {
                                bgcolor: theme.palette.bgColorButtonHover,
                            },
                        }}
                        onClick={removeImageUploaded}
                    >
                        <CloseIcon fontSize="large" />
                    </IconButton>

                    <ImageOriginialSize
                        imageURL={imageURLUploaded.url}
                        maxImageHeight={200}
                        maxImageWidth={200}
                        customHeight={150}
                        customWidth={200}
                        handleFunction={handleOpenImageUploadedInComment}
                    />
                    <Modal open={openModalImage} onClose={handleCloseImageUploadedInComment}>
                        <ImageDetailInMessage
                            imgUrl={imageURLUploaded.url}
                            handleClose={handleCloseImageUploadedInComment}
                        />
                    </Modal>
                </Box>
            )}
        </Box>
    );
};
