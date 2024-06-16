import React, { useRef, useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Avatar,
    Divider,
    Modal,
    IconButton,
    TextField,
    Icon,
    InputAdornment,
} from '@mui/material';
import { mobileScreen, tabletScreen } from '../Theme/Theme';
import { PostActionButton } from './PostActionButton';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, setReactionOnPost } from '../../redux/ManagePost/managePostAction';
import { blue } from '@mui/material/colors';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import Liked from '../../assets/images/like.png';
import Love from '../../assets/images/love.png';
import Laugh from '../../assets/images/laughing.png';
import CommentModal, { CommentData } from './CommentModal';
import PostMenuSettings from './PostMenuSettings';
import HideThePost from './HideThePost';
import SnackbarShowNotifications from '../SnackbarShowNotifications/SnackbarShowNotifications';
import UserAvatar from '../../assets/images/avatar.jpeg';
import FilterComments from '../Messaging/FilterComments';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import MoodIcon from '@mui/icons-material/Mood';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

// definde typograph for this component
const CustomTypography = ({ children }) => (
    <Typography
        sx={{
            ml: '8px',
            fontSize: '13px',
            '&:hover': {
                cursor: 'pointer',
                color: '#0b66c2',
                textDecoration: 'underline',
                fontWeight: 'bold',
            },
        }}
    >
        {/* 88 comments */}
        {children}
    </Typography>
);

function Post({
    postID,
    avatarSrc,
    displayName,
    followers,
    time,
    hashtag,
    content,
    numberOfReaction,
    numberOfComment,
    imageUrl,
}) {
    // Check content is always an array?
    const dispatch = useDispatch();
    const commentTextFieldRef = useRef(null);
    const [editorText, setEditorText] = useState(''); // add text
    const [menuStatus, setMenuStatus] = useState(null);
    const contentArray = Array.isArray(content) ? content : [content];
    const [expanded, setExpanded] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [hideThePostSelected, setHideThePostSelected] = useState(false);
    const [isOpenCommentRegion, setIsOpenCommentRegion] = useState(false);
    const [isEmptyCommentField, setIsEmptyCommentField] = useState(true);
    const selectedReaction = useSelector((state) => state.managePost.reactions[postID]);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const handleImageClick = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleChooseReaction = (reaction) => {
        setReactionOnPost(postID, reaction);
        // console.log('Post has ID reaction on is: ', postID);
    };

    // open menu setting for post
    const handleOpenPostMenuSettings = (event) => {
        setMenuStatus(event.currentTarget);
    };

    const handleClosePostMenuSettings = () => {
        setMenuStatus(null);
    };

    const handleHideThePostSelected = () => {
        setHideThePostSelected(true);
    };

    const handleShowThePostJustHidden = () => {
        setHideThePostSelected(false);
    };

    const handleOpenCommentRegion = () => {
        setIsOpenCommentRegion(true);
        // condition to check when button comment is clicked --> It will auto focus on textfield comment
        setTimeout(() => {
            // use this because this setIsOpenCommentRegion occures before commentTextFieldRef running
            if (commentTextFieldRef.current) {
                commentTextFieldRef.current.focus();
            }
        }, 0);
    };

    // for textfield
    const handleCommentTextFieldChange = () => {
        const commentTextValue = commentTextFieldRef.current.value;
        setIsEmptyCommentField(commentTextValue.trim() === '');
    };

    console.log('isEmptyCommentField:', isEmptyCommentField);
    // for text field
    const handleCommentSubmit = () => {
        const commentText = commentTextFieldRef.current.value.trim();
        console.log(commentText);
        if (commentText !== '') {
            dispatch(addComment(postID, commentText));
            // clear input after submitting
            commentTextFieldRef.current.value = '';
            setIsEmptyCommentField(true);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault(); // Prevent newline insertion
            handleCommentSubmit();
        }
    };

    return (
        <Box>
            {hideThePostSelected ? (
                <HideThePost handleShowPostAgain={handleShowThePostJustHidden} />
            ) : (
                <Box
                    sx={{
                        border: '1px solid #d3d3d3',
                        backgroundColor: '#fff',
                        borderRadius: '12px',
                        minHeight: '10vh',
                        mb: 2,
                        [mobileScreen]: {
                            borderRadius: 0,
                            mb: 1,
                        },
                    }}
                >
                    <Box sx={{ p: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                            <Avatar
                                src={avatarSrc}
                                sx={{ height: '48px', width: '48px' }}
                                alt="User Avatar"
                            />
                            <Box sx={{ ml: 2, flexGrow: 1 }}>
                                <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>
                                    {displayName}
                                </Typography>
                                <Typography sx={{ fontSize: '13px', color: 'text.secondary' }}>
                                    {followers} followers
                                </Typography>
                                <Typography sx={{ fontSize: '13px', color: 'text.secondary' }}>
                                    {time}
                                </Typography>
                            </Box>
                            <IconButton onClick={handleOpenPostMenuSettings}>
                                <MoreHorizIcon sx={{ fontSize: '24px' }} />
                            </IconButton>
                            <PostMenuSettings
                                openMenuStatus={menuStatus}
                                handleClosePostMenuSettings={handleClosePostMenuSettings}
                            />
                            <IconButton onClick={handleHideThePostSelected}>
                                <CloseIcon sx={{ fontSize: '24px' }} />
                            </IconButton>
                        </Box>

                        {/* show post content */}
                        <Box>
                            {/* hash tag */}
                            {hashtag && (
                                <Box>
                                    <Typography
                                        variant="body1"
                                        component="div" // Set component to "div" for line breaks
                                        sx={{ fontSize: '14px', color: blue[700] }}
                                    >
                                        {hashtag}
                                    </Typography>
                                </Box>
                            )}

                            {/* content of post */}
                            <Box sx={{ mb: 2 }}>
                                {contentArray.map((paragraph, index) => (
                                    <Box key={index} sx={{ mb: 2 }}>
                                        <Typography
                                            variant="body1"
                                            component="div" // Set component to "div" for line breaks
                                            sx={{ fontSize: '14px', mt: 1, textAlign: 'justify' }}
                                        >
                                            {index < 2 || expanded ? paragraph : ''}
                                        </Typography>
                                        {/* show more content of this post */}
                                    </Box>
                                ))}
                                {/* show more content of this post */}
                                {!expanded && contentArray.length > 2 && (
                                    <Typography
                                        onClick={toggleExpanded}
                                        sx={{
                                            fontSize: '12.5px',
                                            '&:hover': {
                                                cursor: 'pointer',
                                                textDecoration: 'underline',
                                                fontWeight: 'bold',
                                                color: 'blue',
                                            },
                                        }}
                                    >
                                        ...Show More
                                    </Typography>
                                )}
                            </Box>
                        </Box>
                    </Box>

                    {/* Doesn't have image */}
                    {imageUrl && (
                        <Avatar
                            src={imageUrl}
                            onClick={handleImageClick}
                            sx={{
                                height: '100%',
                                width: '100%',
                                borderRadius: '0',
                                '&:hover': {
                                    cursor: 'pointer',
                                },
                            }}
                            alt="Image Upload by User"
                        />
                    )}

                    {/* region for: reaction, comment and share */}
                    <Box sx={{ p: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', my: '8px' }}>
                            <Box
                                sx={{
                                    mb: '2px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexGrow: 1,
                                }}
                            >
                                {numberOfReaction || selectedReaction ? (
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Avatar
                                            src={Liked}
                                            sx={{
                                                height: '24px',
                                                width: '24px',
                                                borderRadius: '0',
                                                zIndex: 2,
                                            }}
                                            alt="Liked a Post"
                                        />
                                        <Avatar
                                            src={Love}
                                            sx={{
                                                height: '24px',
                                                width: '24px',
                                                borderRadius: '0',
                                                ml: '-8px',
                                                zIndex: 1,
                                            }}
                                            alt="Loved a Post"
                                        />
                                        <Avatar
                                            src={Laugh}
                                            sx={{
                                                height: '24px',
                                                width: '24px',
                                                borderRadius: '0',
                                                ml: '-8px',
                                            }}
                                            alt="Laugh a Post"
                                        />
                                        {/* update the number of reations */}
                                        <CustomTypography>
                                            {numberOfReaction + (selectedReaction ? 1 : 0)}
                                        </CustomTypography>
                                    </Box>
                                ) : (
                                    <></>
                                )}
                            </Box>
                            <Box>
                                {numberOfComment !== 0 ? (
                                    <CustomTypography>{numberOfComment} comments</CustomTypography>
                                ) : (
                                    <></>
                                )}
                            </Box>
                        </Box>
                        <Divider />
                        <PostActionButton
                            openCommentRegion={handleOpenCommentRegion}
                            postID={postID}
                            onReactionClick={handleChooseReaction}
                        />
                        {isOpenCommentRegion && (
                            <Box>
                                <Box sx={{ display: 'flex', mt: 1 }}>
                                    <Avatar
                                        src={UserAvatar}
                                        alt="User Image"
                                        sx={{ height: '40px', width: '40px', objectFit: 'cover' }}
                                    />
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            flexGrow: 1,
                                            border: '1px solid #d0d0d0',
                                            ml: 1,
                                            borderRadius: '12px',
                                            backdropFilter: '',
                                        }}
                                    >
                                        <Test2
                                            inputRef={commentTextFieldRef}
                                            onChange={handleCommentTextFieldChange}
                                            disabled={false}
                                            isShowPlaceholder={true}
                                            handleKeyDown={handleKeyDown}
                                        />
                                        <Test2
                                            disabled={true}
                                            isEmptyCommentField={isEmptyCommentField}
                                            submitFunction={handleCommentSubmit}
                                        />
                                    </Box>
                                </Box>

                                <FilterComments />
                                <CommentData postId={postID} />
                            </Box>
                        )}
                    </Box>
                    {/* Comment Modal */}
                    <Modal open={openModal} onClose={handleCloseModal}>
                        <CommentModal
                            postId={postID}
                            imageUrl={imageUrl}
                            handleClose={handleCloseModal}
                            onReactionClick={handleChooseReaction}
                            userAvatar={avatarSrc}
                            userName={displayName}
                            follower={followers}
                            time={time}
                            postHashtag={hashtag}
                            postContent={content}
                            numberReactions={numberOfReaction}
                            numberComments={numberOfComment}
                        />
                    </Modal>
                </Box>
            )}
        </Box>
    );
}

export default Post;

const Test2 = ({
    disabled,
    onChange,
    inputRef,
    isShowPlaceholder = false,
    isEmptyCommentField,
    submitFunction,
    handleKeyDown,
}) => {
    return (
        <TextField
            inputRef={inputRef}
            onChange={onChange}
            placeholder={isShowPlaceholder && 'Write your comment...'}
            onKeyDown={handleKeyDown}
            variant="outlined"
            fullWidth
            multiline
            disabled={disabled}
            sx={{
                ml: 1,
                '& .MuiOutlinedInput-root': {
                    borderRadius: '24px',
                    border: 'none',
                    '& fieldset': {
                        border: 'none',
                    },
                    '& .MuiInputBase-input::placeholder': {
                        fontSize: '13px',
                        color: 'gray',
                    },
                    '& .MuiInputBase-input': {
                        fontSize: '13px',
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
                        <IconButton sx={{ padding: 0 }}>
                            <MoodIcon sx={{ fontSize: '24px' }} />
                        </IconButton>
                        <IconButton>
                            <InsertPhotoIcon sx={{ fontSize: '24px' }} />
                        </IconButton>
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
    );
};
