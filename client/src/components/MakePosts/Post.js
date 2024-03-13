import React, { useState } from 'react';
import { Box, Container, Typography, Avatar, Divider, Modal } from '@mui/material';
import Liked from '../../assets/images/like.png';
import Comment from '../../assets/images/comment.png';
import Send from '../../assets/images/send.png';
import Like from '../../assets/images/like-no-color.png';
import Love from '../../assets/images/love.png';
import Laugh from '../../assets/images/laughing.png';
import CommentModal from './CommentModal';

// definde button action
export const ActionButton = ({ src, alt, text }) => (
    <Box
        sx={{
            '&:hover': {
                backgroundColor: '#d3d3d3',
                cursor: 'pointer',
            },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: 2,
            py: 1,
        }}
    >
        <Avatar
            src={src}
            sx={{
                height: '20px',
                width: '20px',
                borderRadius: '0',
                mr: '4px',

                mr: 1,
            }}
            alt={alt}
        />
        <Typography>{text}</Typography>
    </Box>
);

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
    avatarSrc,
    displayName,
    followers,
    time,
    content,
    numberOfReaction,
    numberOfComment,
    imageUrl,
}) {
    // Check content is always an array?
    const contentArray = Array.isArray(content) ? content : [content];
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };
    const [openModal, setOpenModal] = useState(false);

    const handleImageClick = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <Box
            sx={{
                border: '1px solid #d3d3d3',
                backgroundColor: '#fff',
                borderRadius: '12px',
                minHeight: '10vh',
                mb: 2,
            }}
        >
            <Box sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'start' }}>
                    <Avatar
                        src={avatarSrc}
                        sx={{ height: '48px', width: '48px' }}
                        alt="User Avatar"
                    />
                    <Box sx={{ ml: 2 }}>
                        <Typography sx={{ fontSize: '13px', fontWeight: 'bold' }}>
                            {displayName}
                        </Typography>
                        <Typography sx={{ fontSize: '12.5px', color: 'text.secondary' }}>
                            {followers} followers
                        </Typography>
                        <Typography sx={{ fontSize: '12.5px', color: 'text.secondary' }}>
                            {time}
                        </Typography>
                    </Box>
                </Box>

                {/* show post content */}
                <Box>
                    <Box sx={{ mb: 2 }}>
                        {contentArray.map((paragraph, index) => (
                            <Box key={index} sx={{ mb: 2 }}>
                                <Typography
                                    variant="body1"
                                    component="div" // Set component to "div" for line breaks
                                    sx={{ fontSize: '12.5px', mt: 1, textAlign: 'justify' }}
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
                    <Box sx={{ mb: '2px', display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                        {numberOfReaction ? (
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar
                                    src={Liked}
                                    sx={{
                                        height: '24px',
                                        width: '24px',
                                        borderRadius: '0',
                                        zIndex: 10,
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
                                        zIndex: 9,
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
                                    alt="Loved a Post"
                                />
                                {/* <Typography>112</Typography> */}
                                <CustomTypography>{numberOfReaction}</CustomTypography>
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
                <PostActionButton />
            </Box>
            {/* Comment Modal */}
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <CommentModal
                    imageUrl={imageUrl}
                    handleClose={handleCloseModal}
                    userAvatar={avatarSrc}
                    userName={displayName}
                    follower={followers}
                    time={time}
                    postContent={content}
                    numberReactions={numberOfReaction}
                    numberComments={numberOfComment}
                />
            </Modal>
        </Box>
    );
}

export default Post;

export function PostActionButton() {
    return (
        <Container
            sx={{
                mt: 1,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <ActionButton src={Like} alt="React a Post" text="Like" />
            <ActionButton src={Comment} alt="Comment a Post" text="Comment" />
            <ActionButton src={Send} alt="Send a Post" text="Send" />
        </Container>
    );
}
