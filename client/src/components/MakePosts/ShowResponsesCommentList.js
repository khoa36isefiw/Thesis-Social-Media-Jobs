import React, { useState } from 'react';
import { Box, Typography, Avatar, Modal } from '@mui/material';
import { useSelector } from 'react-redux';
import { tabletScreen, theme } from '../Theme/Theme';
import { ActionsTypography } from './CommentModal';
import { ActionsOnComment } from './ActionsOnComment';
import { useLoggedInUser } from '../CallDataInRedux/CallDataInRedux';
import { calculateTimeComment } from '../HandleTime/HandleTime';
import ImageOriginialSize from '../ImageOriginialSize/ImageOriginialSize';
import { blue } from '@mui/material/colors';
import ImageDetailInMessage from '../Messaging/ImageDetailInMessage';
import { ReactionMenu } from './ReactionMenu';
import { useDispatch } from 'react-redux';
import { setReactionOnResponseCommentInPost } from '../../redux/ManagePost/managePostAction';

export const ShowResponsesCommentList = ({ postId, commentIdx }) => {
    const dispatch = useDispatch();
    const [openImageCommentModal, setOpenImageCommentModal] = useState(null);
    const [hoverStatus, setHoverStatus] = useState({
        postId: null,
        commentId: null,
        replyId: null,
    });

    const authenticatedInformation = useLoggedInUser();

    const replyCommentListOnEachPost = useSelector(
        (state) => state.managePost.repliedComments[postId],
    );

    const reactionsResposeComment = useSelector(
        (state) => state.managePost.listReactionsInResponseToComment[postId],
    );

    console.log('reactionsResposeComment on postID: ', reactionsResposeComment);

    const handleOpenImageInReplyCommentModal = (postID, commentIndex, cmtReplyIndex) => {
        setOpenImageCommentModal({ postID, commentIndex, cmtReplyIndex });
    };

    const handleCloseImageInReplyCommentModal = () => {
        setOpenImageCommentModal(null);
    };

    const handleLikeHover = (postId, commentId, replyId) => {
        setHoverStatus({ postId, commentId, replyId });
    };

    const handleLikeLeave = () => {
        setHoverStatus({ postId: null, commentId: null, replyId: null });
    };

    const handleReaction = (postId, commentIdx, replyCommentId) => {
        dispatch(setReactionOnResponseCommentInPost(postId, commentIdx, replyCommentId));
        setHoverStatus({ postId: null, commentIdx: null, replyCommentId: null });
    };

    const renderReactionIcon = (replyID) => {
        const reaction = reactionsResposeComment?.[commentIdx]?.[replyID];
        console.log('reaction: ', reaction);
        // const reactionCount = reaction ? Object.keys(reaction).length : 0;
        const reactionCount = reaction ? 1 : 0;
        console.log('reactionCount: ', reactionCount);
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

    return (
        <React.Fragment>
            {replyCommentListOnEachPost &&
                Object.entries(replyCommentListOnEachPost).map(([key, value]) =>
                    value.map((replyObj, replyCommentIdx) => {
                        const { replyCmt, timeStamp, userId, userName, userPhoto } = replyObj; // Destructure replyCmt, timeStamp, userId, userName, and userPhoto
                        const keyAsNumber = Number(key);

                        return (
                            <Box
                                sx={{ display: 'flex', flexDirection: 'column' }}
                                key={`${key}-${replyCommentIdx}`}
                            >
                                {commentIdx === keyAsNumber && (
                                    <React.Fragment>
                                        <Box sx={{ display: 'flex', mt: 1, ml: 6 }}>
                                            <Avatar
                                                src={userPhoto || 'default-avatar.png'} // Replace 'default-avatar.png' with actual default
                                                alt="User Avatar"
                                                sx={{
                                                    height: '36px',
                                                    width: '36px',
                                                    zIndex: 7,
                                                    filter: userPhoto?.imageStyle || 'none',
                                                    transform: `rotate(${
                                                        userPhoto?.imageRotationAngle || 0
                                                    }deg)`,
                                                }}
                                            />

                                            <Box
                                                sx={{
                                                    border: '1px solid #f2f2f2',
                                                    minHeight: '50px',
                                                    width: '100%',
                                                    p: 1,
                                                    borderRadius: '10px',
                                                    backgroundColor: '#f2f2f2',
                                                    ml: 1,
                                                }}
                                            >
                                                <ActionsOnComment
                                                    userName={userName}
                                                    timePostComment={calculateTimeComment(
                                                        timeStamp,
                                                    )} // Format the timestamp
                                                />
                                                <Box>
                                                    {Array.isArray(replyCmt) &&
                                                        (replyCmt.length === 2 ? (
                                                            <React.Fragment>
                                                                <Typography
                                                                    component="span"
                                                                    sx={{
                                                                        display: 'block',
                                                                        wordBreak: 'break-word',
                                                                        whiteSpace: 'pre-wrap',
                                                                        fontSize: '14px',
                                                                        [tabletScreen]: {
                                                                            fontSize: '13.5px',
                                                                        },
                                                                    }}
                                                                >
                                                                    {replyCmt[0]}
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
                                                                        imageURL={replyCmt[1]}
                                                                        maxImageHeight={200}
                                                                        maxImageWidth={200}
                                                                        customHeight={150}
                                                                        customWidth={200}
                                                                        handleFunction={() =>
                                                                            handleOpenImageInReplyCommentModal(
                                                                                postId,
                                                                                commentIdx,
                                                                                replyCommentIdx,
                                                                            )
                                                                        }
                                                                    />
                                                                </Box>
                                                                <Modal
                                                                    open={
                                                                        openImageCommentModal?.postID ===
                                                                            postId &&
                                                                        openImageCommentModal?.commentIndex ===
                                                                            commentIdx &&
                                                                        openImageCommentModal?.cmtReplyIndex ===
                                                                            replyCommentIdx
                                                                    }
                                                                    onClose={
                                                                        handleCloseImageInReplyCommentModal
                                                                    }
                                                                >
                                                                    <ImageDetailInMessage
                                                                        imgUrl={replyCmt[1]}
                                                                        handleClose={
                                                                            handleCloseImageInReplyCommentModal
                                                                        }
                                                                    />
                                                                </Modal>
                                                            </React.Fragment>
                                                        ) : (
                                                            <Typography
                                                                component="span"
                                                                sx={{
                                                                    display: 'block',
                                                                    wordBreak: 'break-word',
                                                                    whiteSpace: 'pre-wrap',
                                                                    fontSize: '14px',
                                                                    [tabletScreen]: {
                                                                        fontSize: '13.5px',
                                                                    },
                                                                }}
                                                            >
                                                                {replyCmt[0]}
                                                            </Typography>
                                                        ))}
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                ml: 11,
                                                mt: '4px',
                                                alignItems: 'center',
                                                width: '220px',
                                            }}
                                        >
                                            <ActionsTypography
                                                sx={{ ml: 1, position: 'relative' }}
                                                onMouseEnter={() =>
                                                    handleLikeHover(
                                                        postId,
                                                        commentIdx,
                                                        replyCommentIdx,
                                                    )
                                                }
                                                onMouseLeave={handleLikeLeave}
                                                colorAction={
                                                    reactionsResposeComment &&
                                                    reactionsResposeComment?.[commentIdx]?.[
                                                        replyCommentIdx
                                                    ]
                                                        ? reactionsResposeComment?.[commentIdx]?.[
                                                              replyCommentIdx
                                                          ].btnText.includes('Loved')
                                                            ? '#e91e63'
                                                            : reactionsResposeComment?.[
                                                                  commentIdx
                                                              ]?.[replyCommentIdx].btnText.includes(
                                                                  'Laughed',
                                                              )
                                                            ? '#ffc400'
                                                            : blue[900]
                                                        : '#000000BF'
                                                }
                                            >
                                                {reactionsResposeComment &&
                                                reactionsResposeComment?.[commentIdx]?.[
                                                    replyCommentIdx
                                                ]
                                                    ? reactionsResposeComment?.[commentIdx]?.[
                                                          replyCommentIdx
                                                      ].btnText.includes('Loved')
                                                        ? 'Love'
                                                        : reactionsResposeComment?.[commentIdx]?.[
                                                              replyCommentIdx
                                                          ]?.btnText.includes('Laughed')
                                                        ? 'Laugh'
                                                        : 'Like'
                                                    : 'Like'}
                                                <Box
                                                    sx={{
                                                        position: 'absolute',
                                                        top: '-50%',
                                                        left: '-20%',
                                                        zIndex: 10,
                                                    }}
                                                >
                                                    {hoverStatus.postId === postId &&
                                                        hoverStatus.commentId === commentIdx &&
                                                        hoverStatus.replyId === replyCommentIdx && (
                                                            <ReactionMenu
                                                                postID={postId}
                                                                handleChoose={() =>
                                                                    handleReaction(
                                                                        postId,
                                                                        commentIdx,
                                                                        replyCommentIdx,
                                                                    )
                                                                }
                                                                commentID={commentIdx}
                                                                replyID={replyCommentIdx}
                                                            />
                                                        )}
                                                </Box>
                                            </ActionsTypography>

                                            {renderReactionIcon(replyCommentIdx)}
                                            <Box
                                                sx={{
                                                    width: '1px',
                                                    height: '21px',
                                                    bgcolor: 'gray',
                                                    ml: 2,
                                                }}
                                            />
                                            <ActionsTypography sx={{ ml: 2 }}>
                                                Reply
                                            </ActionsTypography>
                                        </Box>
                                    </React.Fragment>
                                )}
                            </Box>
                        );
                    }),
                )}
        </React.Fragment>
    );
};
