import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, IconButton, Avatar, Modal } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import Liked from '../../assets/images/like.png';
import { tabletScreen, theme } from '../Theme/Theme';
import { ReactionMenu } from './ReactionMenu';
import ImageDetailInMessage from '../Messaging/ImageDetailInMessage';
import { ActionsTypography } from './CommentModal';
import { blue } from '@mui/material/colors';
import ImageOriginialSize from '../ImageOriginialSize/ImageOriginialSize';
import { setReactionOnCommentInPost } from '../../redux/ManagePost/managePostAction';
import { CommentTextField } from './CommentTextField';
import UserAvatar from '../../assets/images/avatar.jpeg';
import { commentMenuSettings } from './Data/PostMenuSettingDatas';
import PostMenuSettings from './PostMenuSettings';
import { ActionsOnComment } from './ActionsOnComment';

export function CommentsData({ postId, imageUrl }) {
    const dispatch = useDispatch();
    const replyTextFieldRef = useRef(null);
    const commentList = useSelector((state) => state.managePost.comments[postId]);
    const reactionList = useSelector((state) => state.managePost.commentReactions[postId]);
    // const reactionList = useSelector((state) => state.managePost.commentReactions);
    const [hoverStatus, setHoverStatus] = useState({ postId: null, commentId: null });
    const [replyStatus, setReplyStatus] = useState({ postId: null, commentId: null });
    const [menuStatus, setMenuStatus] = useState(null);
    const [openImageCommentModal, setOpenImageCommentModal] = useState(null);
    const [showReplyCommentField, setShowReplyCommentField] = useState(false);
    const [showIconUploadImage, setShowIconUploadImage] = useState(true);

    const [isEmptyReplyField, setIsEmptyReplyField] = useState(true);
    const [showPicker, setShowPicker] = useState(false); // add and show emoji picker
    const [imageURL, setImageURL] = useState(null);

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

    const handleChooseReactionOnComment = (postId, commentId) => {
        dispatch(setReactionOnCommentInPost(postId, commentId));
        // hide the Menu after choosing reaction on Comment
        setHoverStatus({ postId: null, commentId: null });
    };
    // console.log('List comment in$`{postId}` : ', commentList);
    // console.log(`List comment in ${postId}: `, commentList);
    console.log(`List reactions in ${postId}: `, reactionList);
    const renderReactionIcon = (commentId) => {
        const reaction = reactionList?.[commentId]; // get data from object
        const reactionCount = reaction ? 1 : 0;
        console.log('reaction: ', reaction);
        return reaction ? (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                    sx={{
                        height: '5px',
                        width: '5px',
                        bgcolor: 'black',
                        ml: 1,
                        borderRadius: '50%',
                    }}
                />
                <Avatar
                    src={reaction.srcImage}
                    sx={{
                        height: '16px',
                        width: '16px',
                        borderRadius: '0',
                        zIndex: 10,
                        ml: 1,
                    }}
                    alt="Reaction"
                />

                <Typography sx={{ ml: 1, fontSize: '12.5px', color: theme.palette.primaryText }}>
                    {reactionCount}
                </Typography>
            </Box>
        ) : null;
    };

    const handleShowReplyField = (commentId) => {
        setShowReplyCommentField(true);
        setTimeout(() => {
            if (replyTextFieldRef.current) {
                replyTextFieldRef.current.focus();
            }
        }, 100);
        setReplyStatus({ postId, commentId });
    };

    // upload image
    const handleImageUpload = (event) => {
        const file = event.target.files[0]; // Get the list of selected file
        const uploadedImages = []; // get the existing array of images
        const reader = new FileReader();
        reader.onload = () => {
            const imageDataURL = reader.result;
            // get the name of the uploaded image
            const imageName = file.name;
            // store both the name and URL
            setImageURL({ name: imageName, url: imageDataURL });
            setShowIconUploadImage(false);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
        setIsEmptyReplyField(false);
    };

    const handleRemoveImageUploaded = () => {
        setImageURL(null);
        setShowIconUploadImage(true);
        setIsEmptyReplyField(true);
    };

    // add emoji
    const handleEmojiClick = (event) => {
        // const commentText = commentTextFieldRef.current.value + event.emoji;
        if (replyTextFieldRef.current) {
            const currentValue = replyTextFieldRef.current.value;
            const newValue = currentValue + event.emoji;
            replyTextFieldRef.current.value = newValue;
        }
        setIsEmptyReplyField(false);
        setShowPicker(false);
    };

    // open menu setting for post
    const handleOpenCommentMenuSettings = (event) => {
        setMenuStatus(event.currentTarget);
        // setMenuStatus({ anchorEl: event.currentTarget, postId: postID });
    };

    const handleCloseCommentMenuSettings = () => {
        setMenuStatus(null);
        // setMenuStatus({ anchorEl: null, postId: null });
    };

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
                                        <IconButton onClick={handleOpenCommentMenuSettings}>
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
                                        sx={{
                                            ml: 1,
                                            position: 'relative',
                                            '::before': {
                                                position: 'absolute',
                                                content: '""',
                                                width: '20px',
                                                // bgcolor: 'yelloReplyw',
                                                height: '40px',
                                                top: '-10px',
                                                left: '0%',
                                            },
                                            [tabletScreen]: {
                                                ml: 2,
                                            },
                                        }}
                                        onMouseEnter={() => handleLikeHover(index)}
                                        onMouseLeave={handleLikeLeave}
                                    >
                                        Like
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: '-50%',
                                                left: '-20%',
                                                zIndex: 10,
                                            }}
                                        >
                                            {hoverStatus.postId === postId &&
                                                hoverStatus.commentId === index && (
                                                    <ReactionMenu
                                                        postID={postId}
                                                        handleChoose={() =>
                                                            handleChooseReactionOnComment(
                                                                postId,
                                                                index,
                                                            )
                                                        }
                                                        commentID={index}
                                                    />
                                                )}
                                        </Box>
                                    </ActionsTypography>
                                </Box>

                                {/* need have field: numberOfReaction to plus with reaction */}
                                {renderReactionIcon(index)}
                            </Box>
                            <Box
                                sx={{
                                    width: '1px',
                                    bgcolor: 'gray',
                                }}
                            />
                            <ActionsTypography onClick={() => handleShowReplyField(index)}>
                                Reply
                            </ActionsTypography>
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

                            {/* show textfield to reply the comment */}
                            {showReplyCommentField &&
                                replyStatus.postId === postId &&
                                replyStatus.commentId === index && (
                                    <Box sx={{ display: 'flex', mt: 1, ml: 6 }}>
                                        <Avatar
                                            src={UserAvatar}
                                            alt="User Image"
                                            sx={{
                                                height: '32px',
                                                width: '32px',
                                                objectFit: 'cover',
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                flexGrow: 1,
                                                border: '1px solid #d0d0d0',
                                                ml: 1,
                                                borderRadius: '12px',
                                            }}
                                        >
                                            <CommentTextField
                                                inputRef={replyTextFieldRef}
                                                isShowPlaceholder={true}
                                                imageURLUploaded={imageURL}
                                                defaultValue={'Luna Kei'}
                                                removeImageUploaded={handleRemoveImageUploaded}
                                            />
                                            <CommentTextField
                                                disabled={true}
                                                showIconUploadImage={showIconUploadImage}
                                                uploadedImage={handleImageUpload}
                                                setShowPicker={setShowPicker}
                                                showPicker={showPicker}
                                                handleEmojiClick={handleEmojiClick}
                                            />
                                        </Box>
                                    </Box>
                                )}
                        </Box>
                    </Box>
                ))}
            <PostMenuSettings
                openMenuStatus={menuStatus}
                handleClosePostMenuSettings={handleCloseCommentMenuSettings}
                postMenuSettingsList={commentMenuSettings}
            />
        </>
    );
}
