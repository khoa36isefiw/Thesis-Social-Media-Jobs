import React, { useEffect, useRef, useState } from 'react';
import {
    Box,
    Modal,
    IconButton,
    TextField,
    InputAdornment,
    Grid,
    Tooltip,
    Typography,
} from '@mui/material';
import ImageDetailInMessage from '../Messaging/ImageDetailInMessage';
import ImageOriginialSize from '../ImageOriginialSize/ImageOriginialSize';
import ShowVideoUploaded from '../ShowVideoUploaded/ShowVideoUploaded';
import { mobileScreen, tabletScreen, theme } from '../Theme/Theme';
import { blue } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import MoodIcon from '@mui/icons-material/Mood';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import EmojiPicker from 'emoji-picker-react';

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
    showSendButton = true,
}) => {
    const [openModalImage, setOpenModalImage] = useState(false);
    const [isBold, setIsBold] = useState(true);

    // console.log('imageURLUploaded: ', imageURLUploaded);
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
    // console.log('imageURLUploaded: ', imageURLUploaded);

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
                            <Tooltip
                                title={
                                    <Typography sx={{ fontSize: '12px' }}>
                                        Open Emoij Keyboard
                                    </Typography>
                                }
                                placement="top"
                                arrow
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
                            </Tooltip>

                            {showIconUploadImage ? (
                                <label>
                                    <input
                                        type="file"
                                        accept="image/*, video/*"
                                        style={{ display: 'none' }}
                                        onChange={uploadedImage}
                                        multiple={multiple ? true : false}
                                    />
                                    <Tooltip
                                        title={
                                            <Typography sx={{ fontSize: '13px' }}>
                                                Add Media
                                            </Typography>
                                        }
                                        placement="top"
                                        arrow
                                        sx={{
                                            '& .MuiTooltip-tooltip': {
                                                fontSize: '14px',
                                            },
                                            '& .MuiTooltip-popper': {
                                                fontSize: '14px',
                                            },
                                        }}
                                    >
                                        <IconButton component="span">
                                            <InsertPhotoIcon sx={{ fontSize: '24px' }} />
                                        </IconButton>
                                    </Tooltip>
                                </label>
                            ) : null}
                        </InputAdornment>
                    ),
                    endAdornment: disabled && showSendButton && (
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
                <Box>
                    {/* check if  imageURLUploaded is an array of object*/}
                    {Array.isArray(imageURLUploaded) ? (
                        <Grid container spacing={2} sx={{ width: '90%', margin: 'auto' }}>
                            {/* just show 4 image from list image in post */}
                            {imageURLUploaded.slice(0, 4).map((image, index) => (
                                <Grid
                                    item
                                    xs={6}
                                    md={6}
                                    lg={6}
                                    key={index}
                                    sx={{
                                        border: '2px solid white',
                                        position: 'relative',
                                        bgcolor: blue[100],
                                        // center for image
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        overflow: 'hidden',
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
                                            top: '0%',
                                            right: '0%',
                                            '&:hover': {
                                                bgcolor: theme.palette.bgColorButtonHover,
                                            },
                                        }}
                                        onClick={removeImageUploaded}
                                    >
                                        <CloseIcon fontSize="large" />
                                    </IconButton>

                                    {/* the last image (4th) and image uploaded has more than 4 images */}
                                    {/* show the number of images after images 4th */}
                                    {index === 3 && imageURLUploaded.length > 4 && (
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                bgcolor: 'rgba(0, 0, 0, 0.5)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'white',
                                                fontSize: '24px',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            +{imageURLUploaded.length - 4}
                                        </Box>
                                    )}
                                    {image.url.includes('video') ? (
                                        <ShowVideoUploaded
                                            width={400}
                                            height={300}
                                            srcVideo={image.url}
                                        />
                                    ) : (
                                        <ImageOriginialSize
                                            imageURL={image.url} // just get one image
                                            maxImageHeight={200}
                                            maxImageWidth={200}
                                            customHeight={150}
                                            customWidth={200}
                                            handleFunction={handleOpenImageUploadedInComment}
                                        />
                                    )}
                                </Grid>
                            ))}
                        </Grid>
                    ) : (
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
                            {/* <ImageOriginialSize
                                imageURL={imageURLUploaded.url} // just get one image
                                maxImageHeight={200}
                                maxImageWidth={200}
                                customHeight={150}
                                customWidth={200}
                                handleFunction={handleOpenImageUploadedInComment}
                            /> */}
                            {imageURLUploaded.url.includes('video') ? (
                                <ShowVideoUploaded
                                    width={400}
                                    height={300}
                                    srcVideo={imageURLUploaded.url}
                                />
                            ) : (
                                <ImageOriginialSize
                                    imageURL={imageURLUploaded.url} // just get one image
                                    maxImageHeight={200}
                                    maxImageWidth={200}
                                    customHeight={150}
                                    customWidth={200}
                                    handleFunction={handleOpenImageUploadedInComment}
                                />
                            )}
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
