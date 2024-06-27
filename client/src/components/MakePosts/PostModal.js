// import React, { useState, useRef } from 'react';
// import {
//     Avatar,
//     Box,
//     Container,
//     IconButton,
//     Typography,
//     TextField,
//     Tooltip,
//     tooltipClasses,
//     styled,
//     Button,
//     Divider,
// } from '@mui/material';
// import UserAvatar from '../../assets/images/avatar.jpeg';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import Picker from 'emoji-picker-react';
// import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import ImageIcon from '@mui/icons-material/Image';
// import VideoInput from './VideoInput';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import ClearIcon from '@mui/icons-material/Clear';
// import EditIcon from '@mui/icons-material/Edit';
// import { tabletScreen } from '../Theme/Theme';

// const UploadActions = ({ children, title }) => {
//     return (
//         <LightTooltip
//             title={title}
//             arrow={true}
//             placement="top"
//             sx={{
//                 '& .MuiTooltip-arrow': {
//                     color: 'white',
//                 },
//             }}
//         >
//             {children}
//         </LightTooltip>
//     );
// };

// const LightTooltip = styled(({ className, ...props }) => (
//     <Tooltip {...props} classes={{ popper: className }} />
// ))(({ theme }) => ({
//     [`& .${tooltipClasses.tooltip}`]: {
//         backgroundColor: theme.palette.common.white,
//         color: 'rgba(0, 0, 0, 0.87)',
//         boxShadow: theme.shadows[1],
//         fontSize: 11,
//     },
// }));

// function PostModal({ closeModal }) {
//     const [editorText, setEditorText] = useState('');
//     const [imageUrl, setImageUrl] = useState('');
//     const [videoUrl, setVideoUrl] = useState('');
//     // show emoij table
//     const [showPicker, setShowPicker] = useState(false);
//     const editorRef = useRef(null);

//     const handleUploadImage = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setImageUrl(reader.result);
//                 const img = `<img src="${reader.result}" alt="Uploaded Image" style="max-width: 100%; max-height: 300px; objectFit: cover;"/>`;
//                 setEditorText(editorText + img);
//             };
//             reader.readAsDataURL(file);
//         } else {
//             console.error('No file selected.');
//         }
//     };

//     const handleUploadVideo = (event) => {
//         const file = event.target.files[0];

//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setVideoUrl(reader.result);
//                 setEditorText(
//                     (prevText) =>
//                         prevText +
//                         `<video controls style="max-width: 100%; max-height: 300px;"><source src="${reader.result}" type="${file.type}" /></video>`,
//                 );
//             };
//             reader.readAsDataURL(file);
//         } else {
//             console.error('No file Selected!');
//         }
//     };

//     // pick emoji
//     const handleEmojiClick = (event, emojiObject) => {
//         const emoji = emojiObject.emoji;
//         // // console.log('Ahihi: ', emoji);
//         // setEditorText((prevInput) => prevInput + event.emoji);
//         setEditorText(editorText + event.emoji);
//         setShowPicker(false);
//     };

//     const handleChange = (event) => {
//         setEditorText(event.target.value);
//     };

//     return (
//         <div>
//             <Container
//                 sx={{
//                     width: '650px',
//                     height: '450px',
//                     // width: '80%',
//                     // height: '450px',
//                     position: 'relative',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     justifyContent: 'start',
//                     alignItems: 'start',
//                     overflowY: 'scroll',
//                     // [tabletScreen]: { width: '100%' },
//                 }}
//             >
//                 <IconButton
//                     sx={{
//                         position: 'absolute',
//                         top: '0',
//                         right: '0',
//                         opacity: '0.65',
//                         '&:hover': {
//                             backgroundColor: 'transparent',
//                             opacity: '1',
//                         },
//                     }}
//                     onClick={closeModal}
//                     disableTouchRipple
//                 >
//                     <ClearIcon fontSize="large" />
//                 </IconButton>

//                 <Box
//                     sx={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'start',
//                         borderRadius: '12px',
//                         p: 2,
//                         '&:hover': {
//                             cursor: 'pointer',
//                             backgroundColor: '#d3d3d3',
//                         },
//                         maxWidth: '250px',
//                     }}
//                 >
//                     <Avatar
//                         src={UserAvatar}
//                         alt="User Avatar"
//                         sx={{ height: '48px', width: '48px', mr: 1 }}
//                     />
//                     <Box
//                         sx={{
//                             display: 'flex',
//                             justifyContent: 'start',
//                             alignItems: 'start',
//                         }}
//                     >
//                         <Box>
//                             <Typography sx={{ textAlign: 'left', fontSize: '14px' }}>
//                                 Huynh Dang Khoa
//                             </Typography>
//                             <Typography sx={{ textAlign: 'left', fontSize: '14px' }}>
//                                 Post to Anyone
//                             </Typography>
//                         </Box>
//                         <ArrowDropDownIcon fontSize="large" />
//                     </Box>
//                 </Box>

//                 <Box
//                     sx={{
//                         borderRadius: '4px',
//                         padding: '8px',
//                         minHeight: '300px',
//                         width: '100%',
//                         overflowY: 'auto',
//                         border: '1px solid #333',
//                     }}
//                     contentEditable={true}
//                     onFocus={(e) => {
//                         e.target.style.border = 'none';
//                     }}
//                     onBlur={(e) => {
//                         e.target.style.border = 'none';
//                     }}
//                     onChange={handleChange}
//                 >
//                     {imageUrl && (
//                         <img
//                             src={imageUrl}
//                             alt="Uploaded Image"
//                             style={{ maxWidth: '100%', maxHeight: '300px' }}
//                         />
//                     )}
//                     {videoUrl && (
//                         <video controls style={{ maxWidth: '100%', maxHeight: '300px' }}>
//                             <source src={videoUrl} type="video/mp4" />
//                         </video>
//                     )}
//                 </Box>
//                 <textarea
//                     id="editor"
//                     style={{
//                         borderRadius: '4px',
//                         padding: '8px',
//                         minHeight: '300px',
//                         width: '100%',
//                         overflowY: 'auto',
//                         border: '1px solid #333',
//                     }}
//                     value={editorText}
//                     onChange={handleChange}
//                 />

//                 <Box>
//                     {imageUrl && (
//                         <Box sx={{ postion: 'absolute' }}>
//                             <IconButton
//                                 sx={{
//                                     postion: 'absolute',
//                                     top: '-99px',
//                                     right: 0,
//                                     zIndex: '1',
//                                 }}
//                                 // onClick={handleDeleteImage}
//                             >
//                                 <ClearIcon />
//                             </IconButton>
//                             <IconButton
//                                 sx={{
//                                     top: '4px',
//                                     left: '4px',
//                                     zIndex: '1',
//                                 }}
//                                 // onClick={handleEditImage}
//                             >
//                                 <EditIcon />
//                             </IconButton>
//                         </Box>
//                     )}
//                 </Box>
//             </Container>

//             <div>
//                 <input type="file" accept="image/*" onChange={handleUploadImage} />
//                 <input type="file" accept="video/*" onChange={handleUploadVideo} />

//                 <Box>
//                     <IconButton onClick={() => setShowPicker((val) => !val)}>
//                         <SentimentSatisfiedAltIcon fontSize="large" />
//                     </IconButton>
//                     {showPicker && (
//                         <Box
//                             sx={{
//                                 position: 'absolute',
//                                 top: '10px',
//                                 left: '5%',
//                             }}
//                         >
//                             <Picker
//                                 pickerStyle={{ width: '100%' }}
//                                 onEmojiClick={handleEmojiClick}
//                             />
//                         </Box>
//                     )}
//                 </Box>
//             </div>

//             {/* show image and video just uploaded but not in textbox */}
//             {/* {imageUrl && (
//                 <div>
//                     <img
//                         src={imageUrl}
//                         alt="Uploaded Image"
//                         style={{ maxWidth: '100%', maxHeight: '300px' }}
//                     />
//                 </div>
//             )}
//             {videoUrl && (
//                 <div>
//                     <video controls style={{ maxWidth: '100%', maxHeight: '300px' }}>
//                         <source src={videoUrl} type="video/mp4" />
//                     </video>
//                 </div>
//             )} */}
//             <Divider sx={{ mt: 2, mb: 2 }} />
//             <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
//                 <Button
//                     variant="contained"
//                     // check if editor is empty --> disabled this Button
//                     disabled={!editorText.trim()}
//                     sx={{
//                         fontSize: '14px',
//                         borderRadius: '24px',
//                         padding: '8px 32px',
//                     }}
//                 >
//                     Post
//                 </Button>
//             </Box>
//         </div>
//     );
// }

// export default PostModal;

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
    const startAPostTextFieldRef = useRef(null);
    const [editorText, setEditorText] = useState('');
    const [imageURL, setImageURL] = useState([]);

    const [videoUrl, setVideoUrl] = useState('');
    // show emoij table
    const [showPicker, setShowPicker] = useState(false);
    const editorRef = useRef(null);
    const [isEmptyCommentField, setIsEmptyCommentField] = useState(true);
    const [showIconUploadImage, setShowIconUploadImage] = useState(true);

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
        setImageURL(null);
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
                    overflowY: 'scroll',
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
                        justifyContent: 'start',
                        borderRadius: '12px',
                        p: 2,
                        '&:hover': {
                            cursor: 'pointer',
                            backgroundColor: '#d3d3d3',
                        },
                        maxWidth: '250px',
                    }}
                >
                    <Avatar
                        src={UserAvatar}
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
                            <Typography sx={{ textAlign: 'left', fontSize: '14px' }}>
                                Huynh Dang Khoa
                            </Typography>
                            <Typography sx={{ textAlign: 'left', fontSize: '14px' }}>
                                Post to Anyone
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
                        overflowY: 'auto',
                        border: '1px solid #333',
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
                    />
                </Box>
            </Box>

            <Divider sx={{ mt: 2, mb: 2 }} />
            <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                <Button
                    variant="contained"
                    // check if editor is empty --> disabled this Button
                    disabled={!editorText.trim()}
                    sx={{
                        fontSize: '14px',
                        borderRadius: '24px',
                        padding: '8px 32px',
                    }}
                >
                    Post
                </Button>
            </Box>
        </div>
    );
}

export default PostModal;
