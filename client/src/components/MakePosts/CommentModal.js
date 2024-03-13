import React, { useState } from 'react';
import { Box, Typography, TextField, Button, IconButton, Avatar, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Liked from '../../assets/images/like.png';
import Love from '../../assets/images/love.png';
import Laugh from '../../assets/images/laughing.png';
import UserAvatar from '../../assets/images/avatar.jpeg';
import { ActionButton, PostActionButton } from './Post';
import Picker from 'emoji-picker-react';

function CommentModal({
    imageUrl,
    userAvatar,
    userName,
    follower,
    time,
    postContent,
    numberReactions,
    numberComments,
    handleClose,
}) {
    const [expanded, setExpanded] = useState(false);

    const contentArray = Array.isArray(postContent) ? postContent : [postContent];

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <Box
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: 24,
                width: '1100px',
                maxHeight: '650px',

                mt: '36px',
            }}
        >
            {/* Close Button */}
            <IconButton
                disableFocusRipple
                sx={{
                    position: 'absolute',
                    top: '0',
                    right: '8px',
                    '&:hover': { backgroundColor: 'transparent' },
                }}
                onClick={handleClose}
            >
                <CloseIcon fontSize="large" />
            </IconButton>

            <Box sx={{ display: 'flex' }}>
                {/* Image */}
                <Box sx={{ backgroundColor: '#333', width: '700px', height: '650px' }}>
                    {imageUrl && (
                        <Box sx={{ textAlign: 'center', mb: 2 }}>
                            <img
                                src={imageUrl}
                                alt="Posted Image"
                                style={{ maxWidth: '85%', height: '650px' }}
                            />
                        </Box>
                    )}
                </Box>

                {/* Comment Input */}
                <Box sx={{ width: '400px', p: 2, maxHeight: '650px', overflowY: 'scroll' }}>
                    <Box sx={{ display: 'flex' }}>
                        <Box sx={{ mr: 1 }}>
                            {userAvatar && (
                                <Box sx={{ textAlign: 'center', mb: 2 }}>
                                    <Avatar
                                        src={userAvatar}
                                        alt="User Avatar"
                                        sx={{ height: '48px', width: '48px' }}
                                    />
                                </Box>
                            )}
                        </Box>
                        {/* If it has userName ==> show it on */}
                        <Box>
                            <Box>
                                {userName && (
                                    <Typography
                                        sx={{
                                            fontSize: '13px',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {userName}
                                    </Typography>
                                )}
                            </Box>
                            <Box sx={{}}>
                                {follower && (
                                    <Typography
                                        sx={{
                                            fontSize: '12.5px',
                                            color: 'text.secondary',
                                            fontWeight: '500',
                                        }}
                                    >
                                        {follower} followers
                                    </Typography>
                                )}
                            </Box>
                            <Box sx={{}}>
                                {time && (
                                    <Typography
                                        sx={{
                                            fontSize: '12.5px',
                                            color: 'text.secondary',
                                            fontWeight: '500',
                                        }}
                                    >
                                        {time}
                                    </Typography>
                                )}
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        {contentArray.map((paragraph, index) => (
                            <Box key={index}>
                                <Typography
                                    variant="body1"
                                    sx={{ fontSize: '12.5px', mt: 1, textAlign: 'justify' }}
                                >
                                    {expanded || paragraph.length < 250
                                        ? paragraph
                                        : `${paragraph.slice(0, 250)}...`}
                                    {!expanded && index === contentArray.length - 1 && (
                                        <Button
                                            variant="text"
                                            color="primary"
                                            onClick={toggleExpanded}
                                        >
                                            <Typography>See More</Typography>
                                        </Button>
                                    )}
                                </Typography>
                            </Box>
                        ))}
                        {expanded && (
                            <Button variant="text" color="primary" onClick={toggleExpanded}>
                                <Typography>See Less</Typography>
                            </Button>
                        )}
                    </Box>
                    {/* show reaction and comments */}
                    <Box sx={{ overflowY: 'scroll' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', my: '24px' }}>
                            <Box
                                sx={{
                                    mb: '2px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexGrow: 1,
                                }}
                            >
                                {numberReactions ? (
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
                                        <Typography sx={{ fontSize: '13px', ml: '8px' }}>
                                            {numberReactions}
                                        </Typography>
                                    </Box>
                                ) : (
                                    <></>
                                )}
                            </Box>
                            <Box>
                                {numberComments !== 0 ? (
                                    <Typography sx={{ fontSize: '13px' }}>
                                        {numberComments} comments
                                    </Typography>
                                ) : (
                                    <></>
                                )}
                            </Box>
                        </Box>
                        <Divider />
                        <Box sx={{ mb: 2 }}>
                            <PostActionButton />
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <Avatar
                                src={UserAvatar}
                                alt="User Image"
                                sx={{ height: '48px', width: '48px', objectFit: 'cover' }}
                            />
                            <TextField
                                id="comment"
                                placeholder="Write your comment..."
                                variant="outlined"
                                fullWidth
                                multiline
                                sx={{
                                    ml: 1,
                                    mb: 2,
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

                        {/* Submit Button */}
                        <Button variant="contained" color="primary" fullWidth>
                            Comment
                        </Button>
                    </Box>{' '}
                </Box>
            </Box>
        </Box>
    );
}

export default CommentModal;
