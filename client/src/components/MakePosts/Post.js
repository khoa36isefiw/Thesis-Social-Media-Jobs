import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Avatar,
    Divider,
    Modal,
    IconButton,
    TextField,
} from '@mui/material';
import { mobileScreen, tabletScreen } from '../Theme/Theme';
import { PostActionButton } from './PostActionButton';
import { useSelector } from 'react-redux';
import { setReactionOnPost } from '../../redux/ManagePost/managePostAction';
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
    const [menuStatus, setMenuStatus] = useState(null);
    const contentArray = Array.isArray(content) ? content : [content];
    const [expanded, setExpanded] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [hideThePostSelected, setHideThePostSelected] = useState(false);
    const [isOpenCommentRegion, setIsOpenCommentRegion] = useState(false);
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
        console.log(event.currentTarget);
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
        console.log('âhhaahi');
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
                            <SnackbarShowNotifications />
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
                                <Box sx={{ display: 'flex' }}>
                                    <Avatar
                                        src={UserAvatar}
                                        alt="User Image"
                                        sx={{ height: '40px', width: '40px', objectFit: 'cover' }}
                                    />
                                    <TextField
                                        id="comment"
                                        placeholder="Write your comment..."
                                        variant="outlined"
                                        fullWidth
                                        multiline
                                        sx={{
                                            ml: 1,
                                            mb: 1,
                                            '& .MuiOutlinedInput-root': {
                                                // Apply styles to the root of the input
                                                borderRadius: '24px', // Set border radius to 50px
                                                '& .MuiInputBase-input::placeholder': {
                                                    fontSize: '13px',
                                                    color: 'gray',
                                                },
                                                '& .MuiInputBase-input': {
                                                    fontSize: '13px',
                                                },
                                            },
                                        }}
                                    />
                                </Box>
                                <FilterComments />
                                <CommentData />
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
