import React, { useState } from 'react';
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

// function PostModal({ closeModal }) {
//     const [editorText, setEditorText] = useState('');
//     const [imageUrl, setImageUrl] = useState();
//     const [videoSrc, setVideoSrc] = useState('');
//     const [showPicker, setShowPicker] = useState(false);
//     const [openVideoModal, setOpenVideoModal] = useState(false);

//     const handleUploadImage = (event) => {
//         const file = event.target.files[0];
//         const reader = new FileReader();
//         reader.onloadend = () => {
//             setImageUrl(reader.result);
//             const img = `<img src="${reader.result}" alt="Uploaded Image" style="width: 100%; max-height: 300px; objectFit:cover; position:relative;"/>`;
//             setEditorText(editorText + img);
//         };
//         reader.readAsDataURL(file);
//     };

//     const handleDeleteImage = () => {
//         setImageUrl(null);
//         setEditorText('');
//     };

//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         const url = URL.createObjectURL(file);
//         setVideoSrc(url);
//         const video = `<video controls style="max-width: 100%; max-height: 300px;"><source src="${url}" type="${file.type}" /></video>`;
//         setEditorText(editorText + video);
//     };

//     const handleUploadVideo = (event) => {
//         const file = event.target.files[0];
//         const url = URL.createObjectURL(file);
//         setVideoSrc(url);
//         const video = `<video controls style="max-width: 100%; max-height: 300px;"><source src="${url}" type="${file.type}" /></video>`;
//         setEditorText(editorText + video);
//     };

//     const handleEmojiClick = (event, emojiObject) => {
//         const emoji = emojiObject.emoji;
//         setEditorText(editorText + emoji);
//     };

//     return (
//         <Box>
//             <Container
//                 sx={{
//                     width: '650px',
//                     height: '450px',
//                     position: 'relative',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     justifyContent: 'start',
//                     alignItems: 'start',
//                     overflowY: 'scroll',
//                 }}
//             >
//                 <IconButton
//                     sx={{
//                         position: 'absolute',
//                         top: '0',
//                         right: '0',
//                         '&:hover': {
//                             backgroundColor: 'transparent',
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

//                 <div
//                     contentEditable
//                     id="editor"
//                     style={{
//                         postion: 'relative',
//                         border: '1px solid #ccc',
//                         borderRadius: '4px',
//                         padding: '8px',
//                         minHeight: '300px',
//                         width: '100%',
//                         overflowY: 'auto',
//                     }}
//                     dangerouslySetInnerHTML={{ __html: editorText }}
//                 ></div>
//                 <Box>
//                     {imageUrl && (
//                         <Box sx={{ postion: 'absolute' }}>
//                             <IconButton
//                                 sx={{
//                                     postion: 'absolute',
//                                     top: '-99px',
//                                     right: 0,
//                                     zIndex: '1', // Đảm bảo nút nằm trên cùng
//                                 }}
//                                 onClick={handleDeleteImage}
//                             >
//                                 <ClearIcon />
//                             </IconButton>
//                             <IconButton
//                                 sx={{
//                                     top: '4px',
//                                     left: '4px',
//                                     zIndex: '1', // Đảm bảo nút nằm trên cùng
//                                 }}
//                                 // onClick={handleEditImage}
//                             >
//                                 <EditIcon />
//                             </IconButton>
//                         </Box>
//                     )}
//                 </Box>
//             </Container>
//             <Box>
//                 <IconButton onClick={() => setShowPicker((val) => !val)}>
//                     <SentimentSatisfiedAltIcon fontSize="large" />
//                 </IconButton>
//                 {showPicker && (
//                     <Box
//                         sx={{
//                             position: 'absolute',
//                             top: '-50px',
//                             left: '20%',
//                         }}
//                     >
//                         <Picker pickerStyle={{ width: '100%' }} />
//                     </Box>
//                 )}
//             </Box>
//             {!imageUrl && (
//                 <Box>
//                     <Box sx={{ display: 'flex' }}>
//                         <UploadActions title="Upload Image">
//                             <IconButton>
//                                 <label htmlFor="upload-image">
//                                     <ImageIcon
//                                         fontSize="large"
//                                         sx={{
//                                             '&:hover': {
//                                                 cursor: 'pointer',
//                                             },
//                                         }}
//                                     />
//                                 </label>
//                                 <input
//                                     id="upload-image"
//                                     type="file"
//                                     accept="image/*"
//                                     hidden
//                                     onChange={handleUploadImage}
//                                 />
//                             </IconButton>
//                         </UploadActions>
//                         <UploadActions title="Upload Video">
//                             <IconButton>
//                                 <label htmlFor="upload-video">
//                                     <YouTubeIcon fontSize="large" />
//                                 </label>
//                                 <input
//                                     id="upload-video"
//                                     type="file"
//                                     accept="video/*"
//                                     hidden
//                                     onChange={handleUploadVideo}
//                                 />
//                             </IconButton>
//                         </UploadActions>
//                     </Box>
//                 </Box>
//             )}

//             <Divider sx={{ mt: 2, mb: 2 }} />
//             <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
//                 <Button
//                     variant="contained"
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
//         </Box>
//     );
// }

// export default PostModal;

function PostModal({ closeModal }) {
    const [editorText, setEditorText] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [showPicker, setShowPicker] = useState(false); // show emoij table

    const handleUploadImage = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImageUrl(reader.result);
            setEditorText(
                (prevText) =>
                    prevText +
                    `<img src="${reader.result}" alt="Uploaded Image" style="max-width: 100%; max-height: 300px;"/>`,
            );
        };
        reader.readAsDataURL(file);
    };

    const handleUploadVideo = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setVideoUrl(reader.result);
            setEditorText(
                (prevText) =>
                    prevText +
                    `<video controls style="max-width: 100%; max-height: 300px;"><source src="${reader.result}" type="${file.type}" /></video>`,
            );
        };
        reader.readAsDataURL(file);
    };

    // pick emoji
    const handleEmojiClick = (event, emojiObject) => {
        // const emoji = emojiObject.emoji;
        // // console.log('Ahihi: ', emoji);
        setEditorText((prevInput) => prevInput + event.emoji);
        setShowPicker(false);
    };
    const handleChange = (event) => {
        setEditorText(event.target.value);
    };

    return (
        <div>
            <Container
                sx={{
                    width: '650px',
                    height: '450px',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    alignItems: 'start',
                    overflowY: 'scroll',
                }}
            >
                <IconButton
                    sx={{
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        '&:hover': {
                            backgroundColor: 'transparent',
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
                <textarea
                    id="editor"
                    style={{
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        padding: '8px',
                        minHeight: '300px',
                        width: '100%',
                        overflowY: 'auto',
                    }}
                    value={editorText}
                    onChange={handleChange}
                />
                <Box>
                    {imageUrl && (
                        <Box sx={{ postion: 'absolute' }}>
                            <IconButton
                                sx={{
                                    postion: 'absolute',
                                    top: '-99px',
                                    right: 0,
                                    zIndex: '1', // Đảm bảo nút nằm trên cùng
                                }}
                                // onClick={handleDeleteImage}
                            >
                                <ClearIcon />
                            </IconButton>
                            <IconButton
                                sx={{
                                    top: '4px',
                                    left: '4px',
                                    zIndex: '1', // Đảm bảo nút nằm trên cùng
                                }}
                                // onClick={handleEditImage}
                            >
                                <EditIcon />
                            </IconButton>
                        </Box>
                    )}
                </Box>
            </Container>

            <div>
                <input type="file" accept="image/*" onChange={handleUploadImage} />
                <input type="file" accept="video/*" onChange={handleUploadVideo} />
                {/* <Picker onEmojiClick={handleEmojiClick} /> */}
                <Box>
                    <IconButton onClick={() => setShowPicker((val) => !val)}>
                        <SentimentSatisfiedAltIcon fontSize="large" />
                    </IconButton>
                    {showPicker && (
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '-50px',
                                left: '20%',
                            }}
                        >
                            <Picker
                                pickerStyle={{ width: '100%' }}
                                onEmojiClick={handleEmojiClick}
                            />
                        </Box>
                    )}
                </Box>
                {/* <Picker pickerStyle={{ width: '100%' }} onEmojiClick={handleEmojiClick} /> */}
            </div>
            {imageUrl && (
                <div>
                    <img
                        src={imageUrl}
                        alt="Uploaded Image"
                        style={{ maxWidth: '100%', maxHeight: '300px' }}
                    />
                </div>
            )}
            {videoUrl && (
                <div>
                    <video controls style={{ maxWidth: '100%', maxHeight: '300px' }}>
                        <source src={videoUrl} type="video/mp4" />
                    </video>
                </div>
            )}
        </div>
    );
}

export default PostModal;
