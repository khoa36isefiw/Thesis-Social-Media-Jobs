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
    multiple = false,
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
    defaultPlaceholder = 'Write your comment...',
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

    console.log('uploadedImage is an array: ', Array.isArray(imageURLUploaded));

    return (
        <Box>
            <TextField
                inputRef={inputRef}
                onChange={onChange}
                placeholder={
                    isShowPlaceholder ? (defaultPlaceholder ? defaultPlaceholder : '') : null
                }
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
                                        multiple={multiple ? true : false}
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

            {imageURLUploaded && (
                <Box
                    sx={{
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
                    {/* check if  imageURLUploaded is an array of object*/}
                    {Array.isArray(imageURLUploaded) ? (
                        imageURLUploaded.map((image, index) => (
                            <Box key={index}>
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
                                    imageURL={image.url} // just get one image
                                    maxImageHeight={200}
                                    maxImageWidth={200}
                                    customHeight={150}
                                    customWidth={200}
                                    handleFunction={handleOpenImageUploadedInComment}
                                />
                            </Box>
                        ))
                    ) : (
                        <Box>
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
                                imageURL={imageURLUploaded.url} // just get one image
                                maxImageHeight={200}
                                maxImageWidth={200}
                                customHeight={150}
                                customWidth={200}
                                handleFunction={handleOpenImageUploadedInComment}
                            />
                        </Box>
                    )}

                    <Modal open={openModalImage} onClose={handleCloseImageUploadedInComment}>
                        <ImageDetailInMessage
                            imgUrl={imageURLUploaded.url}
                            handleClose={handleCloseImageUploadedInComment}
                        />
                    </Modal>
                </Box>
            )}

            {/* If image is uploaded and shows it on, image uploaded to send comment in post */}
        </Box>
    );
};
