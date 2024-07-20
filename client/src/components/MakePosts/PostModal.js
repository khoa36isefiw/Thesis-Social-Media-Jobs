import React, { useState, useRef } from 'react';
import { Avatar, Box, IconButton, Typography, Button, Divider, Modal, Grow } from '@mui/material';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClearIcon from '@mui/icons-material/Clear';
import { ipadProScreen, mobileScreen, tabletScreen } from '../Theme/Theme';
import { CommentTextField } from './CommentTextField';
import { useDispatch, useSelector } from 'react-redux';
import { addNewPosts } from '../../redux/ManagePost/managePostAction';
import PrivacyPostSettings from './PrivacyPostSettings/PrivacyPostSettings';
import { generatePostID } from '../GenerateUID/GenerateUID';

function PostModal({ closeModal }) {
    const dispatch = useDispatch();
    const [openPrivacyPostSettings, setOpenPrivacyPostSettings] = useState(false);
    const getPostPrivacySelected = useSelector(
        (state) => state.managePost.postSettingsPrivacySelection,
    );

    const handleCloseModal = () => {
        setOpenPrivacyPostSettings(false);
    };
    const handleShowModal = () => {
        setOpenPrivacyPostSettings(true);
    };
    const startAPostTextFieldRef = useRef(null);
    // const [editorText, setEditorText] = useState('');
    // save both images and videos
    const [imageURL, setImageURL] = useState([]);

    // show emoij table
    const [showPicker, setShowPicker] = useState(false);

    const [isEmptyCommentField, setIsEmptyCommentField] = useState(true);
    const [showIconUploadImage, setShowIconUploadImage] = useState(true);
    const getPrivacySelected = useSelector((state) => state.managePost.savePrivacySelected);

    // get User Name
    const userLoggedInInformation = useSelector((state) => state.manageAccounts.loggedInUser);

    // console.log('userLoggedInInformation: ', userLoggedInInformation);

    // upload for multiple images
    const handleImageUpload = (event) => {
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
                    setIsEmptyCommentField(false);
                    // hide the progress bar after all images have been uploaded
                }
            };

            if (file) {
                reader.readAsDataURL(file);
            }
        }
    };

    // pick emoji
    const handleEmojiClick = (event) => {
        // const commentText = commentTextFieldRef.current.value + event.emoji;
        if (startAPostTextFieldRef.current) {
            const currentValue = startAPostTextFieldRef.current.value;
            const newValue = currentValue + event.emoji;
            startAPostTextFieldRef.current.value = newValue;
        }
        setIsEmptyCommentField(false);
        setShowPicker(false);
    };

    // const handleChange = (event) => {
    //     setEditorText(event.target.value);
    // };

    const handleCommentTextFieldChange = () => {
        const postTextValue = startAPostTextFieldRef.current.value;
        setIsEmptyCommentField(postTextValue.trim() === '');
    };

    const handleRemoveImageUploaded = () => {
        setImageURL([]);
    };

    const handlePostAnArticle = () => {
        let postID = generatePostID();

        const articleText = startAPostTextFieldRef.current.value.trim(); // get the current text of textfield
        const viewPostPermission = getPrivacySelected === 'Anyone' ? true : false;
        const userName = userLoggedInInformation.lastName
            ? userLoggedInInformation.lastName + ' ' + userLoggedInInformation.firstName
            : userLoggedInInformation;
        const userAvatar = userLoggedInInformation.userPhoto;
        const numberOfFollowers = userLoggedInInformation.followers;
        // console.log('userName in Post Modal:', userName);
        let articleTextSent = null;
        if (imageURL) {
            articleTextSent = {
                postID,
                userName: userName,
                userPhoto: userAvatar,
                articleText: articleText,
                listImage: imageURL,
                viewPostPermission,
                numberOfFollowers,
            };

            dispatch(addNewPosts(articleTextSent));
            startAPostTextFieldRef.current.value = '';
            setIsEmptyCommentField(true);
            setImageURL([]);
        } else {
            if (articleText !== '') {
                // dispatch(addComment(postID, articleText));
                dispatch(
                    addNewPosts({
                        postID,
                        userName: userName,
                        userPhoto: userAvatar,
                        articleTextSent: articleText,
                        viewPostPermission,
                        numberOfFollowers,
                    }),
                );
                // clear input after submitting
                startAPostTextFieldRef.current.value = '';
                setIsEmptyCommentField(true);
            }
        }
        closeModal();
    };

    console.log('Image url after upload: ', imageURL);

    return (
        <Box
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '650px',
                height: '550px',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: '0 8px 4px #333',
                p: 2,
                // width: '90%',
                // height: '90%',
                [ipadProScreen]: {
                    top: '30%',
                    width: '70%',
                },
                [tabletScreen]: {
                    top: '35%',
                    width: '85%',
                },
                [mobileScreen]: {
                    top: '40%',
                    width: '100%',
                    borderRadius: 0,
                },
            }}
        >
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            // justifyContent: 'center',
                            borderRadius: '12px',
                            // minWidth: '50px',
                            p: 2,
                            mb: 2,

                            '&:hover': {
                                cursor: 'pointer',
                                // backgroundColor: '#d3d3d3',
                                backgroundColor: '#00000014',
                            },
                        }}
                        onClick={handleShowModal}
                    >
                        <Avatar
                            // src={UserAvatar}
                            src={
                                userLoggedInInformation.userPhoto &&
                                userLoggedInInformation.userPhoto.imgUrl
                            }
                            alt="User Avatar"
                            sx={{
                                height: '48px',
                                width: '48px',
                                mr: 1,
                                filter:
                                    userLoggedInInformation.userPhoto &&
                                    userLoggedInInformation.userPhoto.imageStyle,
                                transform: `rotate(${userLoggedInInformation.userPhoto.imageRotationAngle}deg)`,
                            }}
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'start',
                            }}
                        >
                            <Box>
                                {userLoggedInInformation.firstName ? (
                                    <Typography
                                        sx={{
                                            textAlign: 'left',
                                            fontSize: '16px',
                                            fontWeight: 'bold',
                                            textTransform: 'capitalize',
                                        }}
                                    >
                                        {/* Huynh Dang Khoa */}
                                        {userLoggedInInformation.firstName}{' '}
                                        {userLoggedInInformation.lastName}
                                    </Typography>
                                ) : (
                                    <Typography
                                        sx={{
                                            textAlign: 'left',
                                            fontSize: '16px',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {/* Huynh Dang Khoa */}
                                        {userLoggedInInformation}
                                    </Typography>
                                )}

                                <Typography sx={{ textAlign: 'left', fontSize: '13px' }}>
                                    {/* Post to Anyone */}
                                    Post to {getPostPrivacySelected}
                                </Typography>
                            </Box>
                            <ArrowDropDownIcon fontSize="large" />
                        </Box>
                    </Box>
                    <IconButton
                        sx={{
                            position: 'absolute',
                            top: '2%',
                            right: '0',
                            px: 2,
                            opacity: '0.65',
                            '&:hover': {
                                backgroundColor: 'transparent',
                                opacity: '1',
                            },
                        }}
                        onClick={closeModal}
                        disableTouchRipple
                    >
                        <ClearIcon fontSize="large" />
                    </IconButton>
                </Box>

                <Box
                    sx={{
                        borderRadius: '8px',
                        height: '300px',
                        // bgcolor: '#fff',
                        width: '100%',

                        overflowY: 'scroll',
                    }}
                    // onChange={handleChange}
                >
                    <CommentTextField
                        inputRef={startAPostTextFieldRef}
                        onChange={handleCommentTextFieldChange}
                        disabled={false}
                        isShowPlaceholder={true}
                        // handleKeyDown={handleKeyDown}
                        imageURLUploaded={imageURL}
                        removeImageUploaded={handleRemoveImageUploaded}
                        defaultPlaceholder="What do you want to talk about?"
                    />
                </Box>
                <CommentTextField
                    disabled={true}
                    isEmptyCommentField={isEmptyCommentField}
                    // submitFunction={handleCommentSubmit}
                    uploadedImage={handleImageUpload}
                    showIconUploadImage={showIconUploadImage}
                    removeImageUploaded={handleRemoveImageUploaded}
                    setShowPicker={setShowPicker}
                    showPicker={showPicker}
                    handleEmojiClick={handleEmojiClick}
                    multiple={true}
                    showSendButton={false}
                />
            </Box>

            <Divider sx={{ mt: 2, mb: 2 }} />
            <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                <Button
                    variant="contained"
                    // check if editor is empty --> disabled this Button
                    disabled={isEmptyCommentField}
                    sx={{
                        fontSize: '13px',
                        borderRadius: '24px',
                        padding: '8px 24px',
                        fontWeight: 'bold',
                    }}
                    onClick={handlePostAnArticle}
                >
                    Post
                </Button>
            </Box>

            <Modal open={openPrivacyPostSettings} onClose={handleCloseModal}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '35%',
                        minHeight: '200px',
                    }}
                >
                    <Grow in={openPrivacyPostSettings}>
                        <Box
                            sx={{
                                bgcolor: 'background.paper',
                                borderRadius: '12px',
                                boxShadow: '10px 5px 10px #605e5e',
                                // p: 2,

                                // animation: `${spin} 1s infinite ease`,
                            }}
                        >
                            <PrivacyPostSettings handleClose={handleCloseModal} />
                        </Box>
                    </Grow>
                </Box>
            </Modal>

            {/* <Modal open={openPrivacyPostSettings} onClose={handleCloseModal}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        borderRadius: '12px',
                        boxShadow: '10px 5px 10px #605e5e',
                        // p: 2,
                        minHeight: '200px',
                        width: '35%',
                    }}
                >
                    <PrivacyPostSettings handleClose={handleCloseModal} />
                </Box>
            </Modal> */}
        </Box>
    );
}

export default PostModal;
