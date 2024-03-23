import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    IconButton,
    Avatar,
    Divider,
    styled,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Liked from '../../assets/images/like.png';
import Love from '../../assets/images/love.png';
import Laugh from '../../assets/images/laughing.png';
import UserAvatar from '../../assets/images/avatar.jpeg';
import { ActionButton, PostActionButton } from './Post';
import Picker from 'emoji-picker-react';

// Customize styles for Typography in this Component
const ActionsTypography = styled(Typography)(({}) => ({
    color: 'gray',
    fontSize: '13px',
    fontWeight: 'bold',
}));

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
                        {/* <Button variant="contained" color="primary" fullWidth>
                            Comment
                        </Button> */}

                        {/* Another User Comment in Posts */}
                        <Box sx={{ display: 'flex' }}>
                            <Avatar
                                src={'https://cdn.mos.cms.futurecdn.net/xaycNDmeyxpHDrPqU6LmaD.jpg'}
                                alt="User Image"
                                sx={{ height: '40px', width: '40px', objectFit: 'cover' }}
                            />
                            <Box
                                sx={{
                                    border: '1px solid #f2f2f2',
                                    maxHeight: '150px',
                                    width: '100%',
                                    p: 1,
                                    borderRadius: '10px',
                                    backgroundColor: '#f2f2f2',
                                    ml: 1,
                                }}
                            >
                                <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    Tim Tran
                                </Typography>
                                <Typography sx={{ fontSize: '14px' }}>
                                    Where did you go? Please share with me the information about
                                    your journey. What should I need to prepare for this trip?
                                </Typography>
                            </Box>
                        </Box>
                        {/* Like, Reply actions */}

                        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', mt: 1, ml: 1 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <ActionsTypography sx={{ ml: 1 }}>Like</ActionsTypography>
                                <ActionsTypography sx={{ ml: 1 }}>-</ActionsTypography>
                                <Avatar
                                    src={Liked}
                                    sx={{
                                        height: '16px',
                                        width: '16px',
                                        borderRadius: '0',
                                        zIndex: 10,
                                        ml: 1,
                                    }}
                                    alt="Liked a Post"
                                />
                            </Box>
                            <Box
                                sx={{
                                    width: '1px',
                                    bgcolor: 'gray',
                                }}
                            />
                            <ActionsTypography>Reply</ActionsTypography>
                            {/* The number of responses */}
                            <ActionsTypography>-</ActionsTypography>
                            <Typography fontSize="13px" color="gray">
                                1 Reply
                            </Typography>
                        </Box>

                        {/* responses */}
                        {/* <Box sx={{ display: 'flex', mt: 1, ml: 6 }}>
                            <Avatar
                                src={
                                    'https://i.scdn.co/image/ab67616d0000b27339f24c41b07bad078b64b146'
                                }
                                alt="User Image"
                                sx={{ height: '32px', width: '32px', objectFit: 'cover' }}
                            />
                            <Box
                                sx={{
                                    border: '1px solid #f2f2f2',
                                    maxHeight: '150px',
                                    width: '100%',
                                    p: 1,
                                    borderRadius: '10px',
                                    backgroundColor: '#f2f2f2',
                                    ml: 1,
                                }}
                            >
                                <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    October
                                </Typography>
                                <Typography sx={{ fontSize: '14px' }}>
                                    Depends on the trip you take
                                </Typography>
                            </Box>
                        </Box> */}
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Box sx={{ display: 'flex', mt: 1, ml: 6 }}>
                                <Avatar
                                    src={
                                        'https://i.scdn.co/image/ab67616d0000b27339f24c41b07bad078b64b146'
                                    }
                                    alt="User Image"
                                    sx={{ height: '32px', width: '32px', objectFit: 'cover' }}
                                />
                                <Box
                                    sx={{
                                        border: '1px solid #f2f2f2',
                                        maxHeight: '150px',
                                        width: '100%',
                                        p: 1,
                                        borderRadius: '10px',
                                        backgroundColor: '#f2f2f2',
                                        ml: 1,
                                    }}
                                >
                                    <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                                        October
                                    </Typography>
                                    <Typography sx={{ fontSize: '14px' }}>
                                        Depends on the trip you take
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    ml: 11,
                                    mt: 1,
                                    alignItems: 'center',
                                }}
                            >
                                <ActionsTypography sx={{ ml: 1 }}>Like</ActionsTypography>
                                <Box
                                    sx={{
                                        width: '1px',
                                        height: '21px',
                                        bgcolor: 'gray',
                                        ml: 2,
                                    }}
                                />
                                <ActionsTypography sx={{ ml: 2 }}>Reply</ActionsTypography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default CommentModal;
