import React, { useState, useRef } from 'react';
import {
    Avatar,
    Box,
    Container,
    IconButton,
    Typography,
    TextField,
    Tooltip,
    tooltipClasses,
    styled,
    Button,
    Divider,
    Modal,
    Grow,
} from '@mui/material';
import UserAvatar from '../../assets/images/avatar.jpeg';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Picker from 'emoji-picker-react';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ImageIcon from '@mui/icons-material/Image';
import VideoInput from './VideoInput';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import { tabletScreen } from '../Theme/Theme';
import { CommentTextField } from './CommentTextField';
import { useDispatch, useSelector } from 'react-redux';
import { addNewPosts } from '../../redux/ManagePost/managePostAction';
import PrivacyPostSettings from './PrivacyPostSettings/PrivacyPostSettings';

const UploadActions = ({ children, title }) => {
    return (
        <LightTooltip
            title={title}
            arrow={true}
            placement="top"
            sx={{
                '& .MuiTooltip-arrow': {
                    color: 'white',
                },
            }}
        >
            {children}
        </LightTooltip>
    );
};

const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}));

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
    const [editorText, setEditorText] = useState('');
    const [imageURL, setImageURL] = useState([]);

    const [videoUrl, setVideoUrl] = useState('');
    // show emoij table
    const [showPicker, setShowPicker] = useState(false);
    const editorRef = useRef(null);
    const [isEmptyCommentField, setIsEmptyCommentField] = useState(true);
    const [showIconUploadImage, setShowIconUploadImage] = useState(true);
    const getPrivacySelected = useSelector((state) => state.managePost.savePrivacySelected);

    // get User Name
    const userLoggedInInformation = useSelector((state) => state.manageAccounts.loggedInUser);

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

    const handleChange = (event) => {
        setEditorText(event.target.value);
    };

    const handleCommentTextFieldChange = () => {
        const postTextValue = startAPostTextFieldRef.current.value;
        setIsEmptyCommentField(postTextValue.trim() === '');
    };

    const handleRemoveImageUploaded = () => {
        setImageURL([]);
    };

    const handlePostAnArticle = () => {
        const articleText = startAPostTextFieldRef.current.value.trim(); // get the current text of textfield
        const viewPostPermission = getPrivacySelected === 'Anyone' ? true : false;
        const userName = userLoggedInInformation.lastName
            ? userLoggedInInformation.lastName + ' ' + userLoggedInInformation.firstName
            : userLoggedInInformation;
        const userAvatar = userLoggedInInformation.userPhoto;
        // console.log('userName in Post Modal:', userName);
        let articleTextSent = null;
        if (imageURL) {
            articleTextSent = {
                userName: userName,
                userPhoto: userAvatar,
                articleText: articleText,
                listImage: imageURL,
                viewPostPermission,
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
                        userName: userName,
                        userPhoto: userAvatar,
                        articleTextSent: articleText,
                        viewPostPermission,
                    }),
                );
                // clear input after submitting
                startAPostTextFieldRef.current.value = '';
                setIsEmptyCommentField(true);
            }
        }
        closeModal();
    };

    return (
        <div>
            <Box
                sx={{
                    width: '650px',
                    height: '450px',
                    // width: '80%',
                    // height: '450px',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    alignItems: 'start',
                    // [tabletScreen]: { width: '100%' },
                }}
            >
                <IconButton
                    sx={{
                        position: 'absolute',
                        top: '0',
                        right: '0',
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

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '12px',
                        maxWidth: '300px',
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
                        src={userLoggedInInformation.userPhoto}
                        alt="User Avatar"
                        sx={{ height: '48px', width: '48px', mr: 1 }}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'start',
                            alignItems: 'start',
                        }}
                    >
                        <Box>
                            <Typography
                                sx={{ textAlign: 'left', fontSize: '16px', fontWeight: 'bold' }}
                            >
                                {/* Huynh Dang Khoa */}
                                {userLoggedInInformation.firstName}{' '}
                                {userLoggedInInformation.lastName}
                            </Typography>
                            <Typography sx={{ textAlign: 'left', fontSize: '13px' }}>
                                {/* Post to Anyone */}
                                Post to {getPostPrivacySelected}
                            </Typography>
                        </Box>
                        <ArrowDropDownIcon fontSize="large" />
                    </Box>
                </Box>

                <Box
                    sx={{
                        borderRadius: '8px',
                        minHeight: '300px',
                        width: '100%',
                        overflow: 'scroll',
                    }}
                    onChange={handleChange}
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
        </div>
    );
}

export default PostModal;
