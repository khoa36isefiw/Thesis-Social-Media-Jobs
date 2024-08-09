// backup for comments data

import React, { useState, useRef } from 'react';
import { Box, Typography, IconButton, Avatar, Modal } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import MoreHoriz from '@mui/icons-material/MoreHoriz';

import { tabletScreen, theme } from '../Theme/Theme';
import { ReactionMenu } from './ReactionMenu';
import ImageDetailInMessage from '../Messaging/ImageDetailInMessage';
import { ActionsTypography } from './CommentModal';
import { blue } from '@mui/material/colors';
import ImageOriginialSize from '../ImageOriginialSize/ImageOriginialSize';
import { replyComments, setReactionOnCommentInPost } from '../../redux/ManagePost/managePostAction';
import { CommentTextField } from './CommentTextField';
import UserAvatar from '../../assets/images/avatar.jpeg';
import { commentMenuSettings } from './Data/PostMenuSettingDatas';
import PostMenuSettings from './PostMenuSettings';
import { ActionsOnComment } from './ActionsOnComment';
import { useLoggedInUser } from '../CallDataInRedux/CallDataInRedux';
import { ShowResponsesCommentList } from './ShowResponsesCommentList';
import { calculateTimeComment } from '../HandleTime/HandleTime';
import SampleCommentsData from './Data/SampleCommentsData';
import HideThePost from './HideThePost';

export function CommentsData({ postId, imageUrl }) {
    const dispatch = useDispatch();
    const replyTextFieldRef = useRef(null);
    // get comment from each post, just comment not include inoformation of user
    const commentList = useSelector((state) => state.managePost.comments[postId]);
    const commentLists = useSelector((state) => state.managePost.comments);
    const hiddenComments = useSelector((state) => state.managePost.hiddenComments[postId] || []);

    console.log('hiddenComments: ', hiddenComments && hiddenComments);

    console.log('all the comments: ', commentLists);
    console.log('Comment List on postID: ', commentList);
    // get comment reply the comment in post

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
    const [checkRepliedPerson, setCheckRepliedPerson] = useState('');
    const authenticatedUser = useLoggedInUser();

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
    // console.log(`List reactions in ${postId}: `, reactionList);
    const renderReactionIcon = (commentId) => {
        const reaction = reactionList?.[commentId]; // get data from object
        const reactionCount = reaction ? 1 : 0;
        // console.log('what reaction is selected: ', reaction);
        // console.log('reaction: ', reaction);
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

    const handleCommentTextFieldChange = () => {
        const commentTextValue = replyTextFieldRef.current.value;

        setIsEmptyReplyField(commentTextValue.trim() === '');
    };

    const handleSubmitReplyComment = (replyPerson, postId, commentId) => {
        const userID = authenticatedUser.userId;
        const userName = authenticatedUser.firstName + ' ' + authenticatedUser.lastName;
        const userPhoto = authenticatedUser.userPhoto;
        console.log('replyPerson:', replyPerson);

        setCheckRepliedPerson(replyPerson);

        // console.log('userID: ', userID);
        // get the current string in input
        const replyCommentText = replyTextFieldRef.current.value.trim();

        if (!replyCommentText && !imageURL) {
            // If there's no text or image, do not proceed
            return;
        }

        let repliedCommentsSent = null;
        if (imageURL) {
            // if it has image
            repliedCommentsSent = [replyCommentText, imageURL.url];
            setImageURL(null); // Clear the image URL after using
        } else {
            // doesn't have image
            repliedCommentsSent = [replyCommentText];
        }

        // repliedCommentsSent is not an empty string before dispatching
        if (repliedCommentsSent && repliedCommentsSent.length > 0) {
            dispatch(
                replyComments(postId, commentId, repliedCommentsSent, userID, userName, userPhoto),
            );
            // dispatch(replyComments({ postId, commentId, userID, repliedCommentsSent }));
            replyTextFieldRef.current.value = ''; // remove the input after submitting
        }

        setShowIconUploadImage(true);
        // console.log('comment reply the comment: ', replyCommentText);
    };

    // console.log('commentList in each post: ', commentList && commentList);
    // console.log('Length of commentList: ', commentList && commentList.length);

    // Filter out hidden comments
    // const filteredCommentList = commentList?.filter((_, index) => !hiddenComments.includes(index));

    return (
        <>
            <SampleCommentsData />
            {/* Load comment  */}
            {commentList &&
                commentList.map((comment, index) => {
                    if (hiddenComments?.includes(index)) {
                        return <HideThePost />;
                    }
                    return (
                        <Box key={index}>
                            <Box sx={{ display: 'flex', mt: 2 }}>
                                <Avatar
                                    // src={'https://cdn.mos.cms.futurecdn.net/xaycNDmeyxpHDrPqU6LmaD.jpg'}
                                    src={comment[1].userPhoto && comment[1].userPhoto.imgUrl}
                                    alt="User Image"
                                    sx={{
                                        height: '40px',
                                        width: '40px',
                                        objectFit: 'cover',
                                        border: '1px solid #d0d0d0',
                                        filter:
                                            comment[1].userPhoto && comment[1].userPhoto.imageStyle,
                                        transform: `rotate(${
                                            comment[1].userPhoto &&
                                            comment[1].userPhoto.imageRotationAngle
                                        }deg)`,
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
                                            {/* Luna Kei */}
                                            {comment[1].userName}
                                        </Typography>

                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            {/* time comment */}
                                            {Array.isArray(comment[0]) &&
                                                comment[0].length === 3 && (
                                                    <Typography
                                                        sx={{
                                                            fontSize: '12px',
                                                        }}
                                                    >
                                                        {calculateTimeComment(comment[0][2])}
                                                    </Typography>
                                                )}
                                            {Array.isArray(comment[0]) &&
                                                comment[0].length === 2 && (
                                                    <Typography
                                                        sx={{
                                                            fontSize: '12px',
                                                        }}
                                                    >
                                                        {calculateTimeComment(comment[0][1])}
                                                    </Typography>
                                                )}

                                            {/* More action with this comment */}
                                            <IconButton
                                                onClick={handleOpenCommentMenuSettings}
                                                sx={{ py: 0, px: '4px' }}
                                            >
                                                <MoreHoriz sx={{ fontSize: '18px' }} />
                                            </IconButton>
                                        </Box>
                                    </Box>

                                    {/* check if comment is array */}
                                    <Box sx={{ width: '100%' }}>
                                        {Array.isArray(comment[0]) && (
                                            <Box
                                                sx={{
                                                    overflow: 'scroll',
                                                    maxHeight: '250px',
                                                }}
                                            >
                                                {/* If the comment[0] array contains both text and an image */}
                                                {comment[0].length > 2 && (
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
                                                            {comment[0][0]}
                                                            {/* {comment[0][2]} */}
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
                                                                imageURL={comment[0][1]}
                                                                maxImageHeight={200}
                                                                maxImageWidth={200}
                                                                customHeight={150}
                                                                customWidth={200}
                                                                handleFunction={() =>
                                                                    handleOpenImageModal(
                                                                        postId,
                                                                        index,
                                                                    )
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
                                                                imgUrl={comment[0][1]}
                                                                handleClose={handleCloseImageModal}
                                                            />
                                                        </Modal>
                                                    </Box>
                                                )}

                                                {comment[0].length === 2 && (
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
                                                            {comment[0][0]}
                                                            {/* {comment[2]} */}
                                                        </Typography>
                                                    </Box>
                                                )}
                                            </Box>
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
                                            colorAction={
                                                reactionList &&
                                                reactionList?.[index] &&
                                                reactionList?.[index].btnText
                                                    ? reactionList?.[index].btnText.includes(
                                                          'Loved',
                                                      )
                                                        ? '#e91e63'
                                                        : reactionList?.[index].btnText.includes(
                                                              'Laughed',
                                                          )
                                                        ? '#ffc400'
                                                        : blue[900]
                                                    : '#000000BF'
                                            }
                                            // textColor={'#e91e63'}
                                            // textColor={'#ffc400'}
                                            // textColor={blue[900]}
                                        >
                                            {/* const reaction = reactionList?.[commentId]; // get data from object */}

                                            {reactionList &&
                                            reactionList?.[index] &&
                                            reactionList?.[index].btnText
                                                ? reactionList?.[index].btnText.includes('Loved')
                                                    ? 'Love'
                                                    : reactionList?.[index].btnText.includes(
                                                          'Laughed',
                                                      )
                                                    ? 'Laugh'
                                                    : 'Like'
                                                : 'Like'}
                                            {/* Like */}
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
                                                            replyID={null}
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
                            {/* {showResponsesCommentList(postId, index)} */}
                            <ShowResponsesCommentList
                                repliedWho={checkRepliedPerson}
                                postId={postId}
                                commentIdx={index}
                            />
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
                                        <ActionsOnComment
                                            userName={'October'}
                                            timePostComment={'1m'}
                                        />
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
                                                    onChange={handleCommentTextFieldChange}
                                                    isShowPlaceholder={true}
                                                    imageURLUploaded={imageURL}
                                                    // defaultValue={'Luna Kei'}
                                                    defaultValue={comment[1].userName}
                                                    removeImageUploaded={handleRemoveImageUploaded}
                                                />
                                                <CommentTextField
                                                    disabled={true}
                                                    isEmptyCommentField={isEmptyReplyField}
                                                    showIconUploadImage={showIconUploadImage}
                                                    uploadedImage={handleImageUpload}
                                                    setShowPicker={setShowPicker}
                                                    showPicker={showPicker}
                                                    handleEmojiClick={handleEmojiClick}
                                                    submitFunction={() =>
                                                        handleSubmitReplyComment(
                                                            comment[1].userName,
                                                            postId,
                                                            index,
                                                        )
                                                    }
                                                />
                                            </Box>
                                        </Box>
                                    )}
                            </Box>
                            <PostMenuSettings
                                openMenuStatus={menuStatus}
                                handleClosePostMenuSettings={handleCloseCommentMenuSettings}
                                postMenuSettingsList={commentMenuSettings}
                                commnetIndex={index}
                                postId={postId}
                            />
                        </Box>
                    );
                })}
        </>
    );
}
