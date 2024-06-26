import React, { useState, useEffect, useRef } from 'react';
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
import { useLocation } from 'react-router-dom';
import { ActionButton } from './Post';
import Picker from 'emoji-picker-react';
import { ipadProScreen, mobileScreen, tabletScreen } from '../Theme/Theme';
import { PostActionButton } from './PostActionButton';
import { blue } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import { ReactionMenu } from './ReactionMenu';

// Customize styles for Typography in this Component
const ActionsTypography = styled(Typography)(({}) => ({
    color: '#000000BF',
    fontSize: '13px',
    fontWeight: '600',
    [tabletScreen]: {
        fontSize: '12px',
    },
}));

function CommentModal({
    postId,
    imageUrl,
    userAvatar,
    userName,
    follower,
    time,
    postHashtag,
    postContent,
    numberReactions,
    numberComments,
    handleClose,
    onReactionClick,
}) {
    const commentModalTextFieldRef = useRef(null);
    const location = useLocation();
    // get the initial width and height of the image
    const [originalWidth, setOriginalWidth] = useState(null);
    const [originalHeight, setOriginalHeight] = useState(null);
    const [isMobileScreen, setIsMobileScreen] = useState(false);
    const selectedReaction = useSelector((state) => state.managePost.reactions[postId]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileScreen(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
            let newHeight = img.naturalHeight;
            let newWidth = img.naturalWidth;
            console.log('Original height and width for image: ', newHeight, newWidth);
            if (newHeight >= 650) {
                newHeight = 650;
            }
            if (newWidth >= 700) {
                newWidth = 680;
            }

            setOriginalWidth(newWidth);
            setOriginalHeight(newHeight);
        };

        // close modal when user press ESC
        const handleKeydown = (e) => {
            // ESC is 27
            if (e.keyCode === 27) {
                handleClose();
            }
        };
        // add event
        window.addEventListener('keydown', handleKeydown);

        // clear function
        return () => {
            //unmount
            window.removeEventListener('keydown', handleKeydown);
        };
    }, [imageUrl]);
    const [expanded, setExpanded] = useState(false);

    const contentArray = Array.isArray(postContent) ? postContent : [postContent];

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    //auto focus on textfield to write comment

    const handleOpenCommentRegion = () => {
        // condition to check when button comment is clicked
        // --> It will auto focus on textfield comment in Comment Modal
        if (commentModalTextFieldRef.current) {
            commentModalTextFieldRef.current.focus();
        }
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
                boxShadow: '0 8px 4px #333',
                width: isMobileScreen ? '100%' : '1100px',
                maxHeight: '650px',
                [ipadProScreen]: {
                    width: '100%',
                },
                [tabletScreen]: {
                    width: '100%',
                },
                [mobileScreen]: {
                    // height: '100%',
                    borderRadius: 0,
                },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    [mobileScreen]: {
                        flexDirection: 'column',
                        maxHeight: '650px',
                        overflow: 'hidden',
                    },
                }}
            >
                {/* Image */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'black',
                        // backgroundColor: '#333',
                        width: '700px',
                        height: '650px',
                        borderTopLeftRadius: '8px',
                        borderBottomLeftRadius: '8px',
                        [mobileScreen]: {
                            width: '100%',
                            height: '350px',
                            borderRadius: 0,
                        },
                    }}
                >
                    {imageUrl && (
                        <Box
                            sx={{
                                textAlign: 'center',
                                // maxWidth: originalWidth,
                                // height: originalHeight,
                            }}
                        >
                            <Box
                                component="img"
                                src={imageUrl}
                                alt="Posted Image"
                                sx={{
                                    maxWidth: originalWidth,
                                    height: originalHeight,
                                    objectFit: 'cover',
                                    mt: '6px',
                                    [ipadProScreen]: {
                                        width: '100%',
                                        height: 'auto',
                                    },
                                    [tabletScreen]: {
                                        width: '100%',
                                        height: 'auto',
                                    },
                                }}
                            />
                        </Box>
                    )}
                </Box>

                {/* Comment Input */}
                <Box
                    sx={{
                        width: isMobileScreen ? '100%' : '400px',
                        maxHeight: '650px',
                        overflowY: 'scroll',
                        borderRadius: '12px',
                        [tabletScreen]: {
                            width: '400px',
                            // width: '100%',
                        },
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            position: 'sticky',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            top: '0px',
                            height: '70px',
                            bgcolor: '#fff',
                            borderTopRightRadius: '12px',
                            zIndex: 12,
                            p: 1,
                            borderBottom: '1px solid #d0d0d0',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                            }}
                        >
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
                                <Box>
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
                                <Box>
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
                        <IconButton
                            disableFocusRipple
                            sx={{
                                // position: 'absolute',
                                // top: '0',
                                // right: '8px',
                                color: '#000',
                                '&:hover': { backgroundColor: 'transparent' },
                            }}
                            onClick={handleClose}
                        >
                            <CloseIcon fontSize="large" />
                        </IconButton>
                    </Box>
                    {/* Content of post */}

                    <Box sx={{ mt: 1, mb: 2, px: 2 }}>
                        <Box>
                            {postHashtag && (
                                <Box>
                                    <Typography
                                        variant="body1"
                                        component="div" // Set component to "div" for line breaks
                                        sx={{ fontSize: '14px', color: blue[700] }}
                                    >
                                        {postHashtag}
                                    </Typography>
                                </Box>
                            )}
                        </Box>
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
                    <Box
                        sx={{
                            overflowY: 'scroll',
                            px: 2,
                            pb: 2,
                            [tabletScreen]: {
                                px: 1,
                            },
                            [mobileScreen]: {
                                px: 1,
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                my: '24px',
                                [tabletScreen]: {
                                    my: '12px',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    mb: '2px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexGrow: 1,
                                }}
                            >
                                {numberReactions || selectedReaction ? (
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
                                            {numberReactions + (selectedReaction ? 1 : 0)}
                                        </Typography>
                                    </Box>
                                ) : (
                                    <></>
                                )}
                            </Box>
                            <Box
                            // sx={{
                            //     [mobileScreen]: {
                            //         mr: 2,
                            //     },
                            // }}
                            >
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
                        <Box sx={{ mb: 2, mt: '-4px' }}>
                            <PostActionButton
                                openCommentRegion={handleOpenCommentRegion}
                                postID={postId}
                                onReactionClick={onReactionClick}
                                xAxisMargin={false}
                            />
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <Avatar
                                src={UserAvatar}
                                alt="User Image"
                                sx={{ height: '40px', width: '40px', objectFit: 'cover' }}
                            />
                            <TextField
                                inputRef={commentModalTextFieldRef}
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

                        <CommentData postId={postId} />
                        {/* <CommentData /> */}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default CommentModal;

export function CommentData({ postId }) {
    const commentList = useSelector((state) => state.managePost.comments[postId]);
    const [hoverStatus, setHoverStatus] = useState({ postId: null, commentId: null });

    const handleLikeHover = (commentId) => {
        setHoverStatus({ postId, commentId });
    };

    const handleLikeLeave = () => {
        setHoverStatus({ postId: null, commentId: null });
    };

    console.log('commentList: ', commentList && commentList[0]);
    return (
        <>
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
                        borderRadius: '12px',
                        backgroundColor: '#f2f2f2',
                        ml: 1,
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '16px',
                            fontWeight: 'bold',
                            [tabletScreen]: {
                                fontSize: '14px',
                            },
                        }}
                    >
                        Tim Tran
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '14px',
                            [tabletScreen]: {
                                fontSize: '13.5px',
                            },
                        }}
                    >
                        Where did you go? Please share with me the information about your journey.
                        What should I need to prepare for this trip?
                    </Typography>
                </Box>
            </Box>
            {/* Like, Reply actions */}

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    mt: 1,
                    ml: 1,
                    [tabletScreen]: {
                        mx: 4,
                    },
                }}
            >
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
                <ActionsTypography sx={{ fontWeight: 'normal' }}>1 Reply</ActionsTypography>
            </Box>

            {/* responses */}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', mt: 1, ml: 6 }}>
                    <Avatar
                        src={'https://i.scdn.co/image/ab67616d0000b27339f24c41b07bad078b64b146'}
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
                        <Typography
                            sx={{
                                fontSize: '16px',
                                fontWeight: 'bold',
                                [tabletScreen]: {
                                    fontSize: '14px',
                                },
                            }}
                        >
                            October
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                [tabletScreen]: {
                                    fontSize: '13.5px',
                                },
                            }}
                        >
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
            {/* Load comment  */}
            {commentList &&
                commentList.map((comment, index) => (
                    <Box key={index}>
                        <Box sx={{ display: 'flex', mt: 2 }}>
                            <Avatar
                                // src={'https://cdn.mos.cms.futurecdn.net/xaycNDmeyxpHDrPqU6LmaD.jpg'}
                                src={
                                    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
                                }
                                alt="User Image"
                                sx={{
                                    height: '40px',
                                    width: '40px',
                                    objectFit: 'cover',
                                    border: '1px solid #d0d0d0',
                                }}
                            />

                            <Box
                                sx={{
                                    border: '1px solid #f2f2f2',
                                    minHeight: '10px',
                                    width: '100%',
                                    px: 1,
                                    py: '4px',
                                    borderRadius: '12px',
                                    backgroundColor: '#f2f2f2',
                                    ml: 1,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: '16px',
                                            fontWeight: 'bold',
                                            [tabletScreen]: {
                                                fontSize: '14px',
                                            },
                                        }}
                                    >
                                        Luna Kei
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        {/* time comment */}
                                        <Typography>1m</Typography>
                                        {/* More action with this comment */}
                                        <IconButton>
                                            <MoreHoriz />
                                        </IconButton>
                                    </Box>
                                </Box>
                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        [tabletScreen]: {
                                            fontSize: '13.5px',
                                        },
                                    }}
                                >
                                    {comment}
                                </Typography>
                                {/* {comment && <Avatar src={comment.url} />} */}
                            </Box>
                        </Box>
                        {/* status of comment */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '220px',
                                mt: '4px',
                                ml: 5,
                                [tabletScreen]: {
                                    mx: 4,
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <Box>
                                    <ActionsTypography
                                        sx={{ ml: 1, position: 'relative' }}
                                        onMouseEnter={() => handleLikeHover(index)}
                                        onMouseLeave={handleLikeLeave}
                                    >
                                        Like
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: '-50%',
                                                left: '-20%',
                                                zIndex: 999,
                                            }}
                                        >
                                            {hoverStatus.postId === postId &&
                                                hoverStatus.commentId === index && (
                                                    <ReactionMenu
                                                        postId={postId}
                                                        handleChoose={''}
                                                    />
                                                )}
                                        </Box>
                                    </ActionsTypography>
                                </Box>
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
                            <ActionsTypography sx={{ fontWeight: 'normal' }}>
                                1 Reply
                            </ActionsTypography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    mt: 1,
                                    ml: 6,
                                }}
                            >
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
                                    <ActionsOnComment userName={'October'} timePostComment={'1m'} />
                                    <Typography
                                        sx={{
                                            fontSize: '14px',
                                            [tabletScreen]: {
                                                fontSize: '13.5px',
                                            },
                                        }}
                                    >
                                        Depends on the trip you take
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    ml: 11,
                                    mt: '4px',
                                    alignItems: 'center',
                                    width: '220px',
                                    // justifyContent: 'space-between',
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
                ))}
        </>
    );
}

const ActionsOnComment = ({ userName, timePostComment }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <Typography
                sx={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    [tabletScreen]: {
                        fontSize: '14px',
                    },
                }}
            >
                {/* Luna Kei */}
                {userName}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {/* time comment */}
                <Typography
                    sx={{
                        fontSize: '12px',
                    }}
                >
                    {timePostComment}
                </Typography>
                {/* More action with this comment */}
                <IconButton sx={{ py: 0, px: '4px' }}>
                    <MoreHoriz sx={{ fontSize: '18px' }} />
                </IconButton>
            </Box>
        </Box>
    );
};
