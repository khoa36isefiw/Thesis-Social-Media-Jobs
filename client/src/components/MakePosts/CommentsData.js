import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, IconButton, Avatar, Modal } from '@mui/material';
import { useSelector } from 'react-redux';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import Liked from '../../assets/images/like.png';
import { tabletScreen } from '../Theme/Theme';
import { ReactionMenu } from './ReactionMenu';
import ImageDetailInMessage from '../Messaging/ImageDetailInMessage';
import { ActionsTypography } from './CommentModal';
import { blue } from '@mui/material/colors';
import ImageOriginialSize from '../ImageOriginialSize/ImageOriginialSize';

export function CommentsData({ postId, imageUrl }) {
    const commentList = useSelector((state) => state.managePost.comments[postId]);
    const [hoverStatus, setHoverStatus] = useState({ postId: null, commentId: null });
    const [openImageCommentModal, setOpenImageCommentModal] = useState(null);
    const handleOpenImageModal = (postID, commentIndex) => {
        setOpenImageCommentModal({ postID, commentIndex });
    };

    const handleCloseImageModal = () => {
        // console.log('Test open image: ', openImageCommentModal);
        setOpenImageCommentModal(null);
    };

    const handleLikeHover = (commentId) => {
        setHoverStatus({ postId, commentId });
    };

    const handleLikeLeave = () => {
        setHoverStatus({ postId: null, commentId: null });
    };

    console.log('what the hell???: ', commentList);
    console.log('imageUrl: ', imageUrl);
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
                        Where did you go? Please share with me the information about your
                        journey.What should I need to prepare for this trip?
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

                                {/* check if comment is array */}
                                <Box sx={{ width: '100%' }}>
                                    {Array.isArray(comment) ? (
                                        <Box
                                            sx={{
                                                overflow: 'scroll',
                                                maxHeight: '250px',
                                            }}
                                        >
                                            {/* If the comment array contains only an image */}
                                            {comment.length === 1 && (
                                                <Avatar
                                                    src={comment[0]}
                                                    alt="User Uploaded Image"
                                                    sx={{ height: '100px', width: '100px', mt: 1 }}
                                                />
                                            )}
                                            {/* If the comment array contains both text and an image */}
                                            {comment.length > 1 && (
                                                <Box sx={{ width: '100%' }}>
                                                    <Typography
                                                        sx={{
                                                            fontSize: {
                                                                xs: '13.5px',
                                                                md: '14px',
                                                            },
                                                            wordBreak: 'break-word',
                                                            whiteSpace: 'pre-wrap',
                                                        }}
                                                    >
                                                        {comment[0]}
                                                    </Typography>

                                                    <Box
                                                        sx={{
                                                            bgcolor: blue[100],
                                                            maxWidth: '210px',
                                                            maxHeight: '210px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }}
                                                    >
                                                        <ImageOriginialSize
                                                            imageURL={comment[1]}
                                                            maxImageHeight={200}
                                                            maxImageWidth={200}
                                                            customHeight={150}
                                                            customWidth={200}
                                                            handleFunction={() =>
                                                                handleOpenImageModal(postId, index)
                                                            }
                                                        />
                                                    </Box>

                                                    <Modal
                                                        open={
                                                            openImageCommentModal?.postID ===
                                                                postId &&
                                                            openImageCommentModal?.commentIndex ===
                                                                index
                                                        }
                                                        onClose={handleCloseImageModal}
                                                    >
                                                        <ImageDetailInMessage
                                                            imgUrl={comment[1]}
                                                            handleClose={handleCloseImageModal}
                                                        />
                                                    </Modal>
                                                </Box>
                                            )}
                                        </Box>
                                    ) : (
                                        // Not an array --> show comment
                                        <Typography
                                            sx={{
                                                maxHeight: '250px',
                                                overflow: 'scroll',
                                                // if text in the line too long --> break the text overflow to new line
                                                wordBreak: 'break-word',
                                                whiteSpace: 'pre-wrap', // maintain the space when we copy some text
                                                fontSize: { xs: '13.5px', md: '14px' },
                                            }}
                                        >
                                            {comment}
                                        </Typography>
                                    )}
                                </Box>
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
                                    sx={{
                                        height: '32px',
                                        width: '32px',
                                        objectFit: 'cover',
                                    }}
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
