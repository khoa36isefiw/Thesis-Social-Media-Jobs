import React, { useState } from 'react';
import { Box, Typography, Avatar, Modal } from '@mui/material';
import { useSelector } from 'react-redux';
import { tabletScreen } from '../Theme/Theme';
import { ActionsTypography } from './CommentModal';
import { ActionsOnComment } from './ActionsOnComment';
import { useLoggedInUser } from '../CallDataInRedux/CallDataInRedux';
import { calculateTimeComment } from '../HandleTime/HandleTime';
import ImageOriginialSize from '../ImageOriginialSize/ImageOriginialSize';
import { blue } from '@mui/material/colors';
import ImageDetailInMessage from '../Messaging/ImageDetailInMessage';

export const ShowResponsesCommentList = ({ postId, commentIdx }) => {
    const [openImageCommentModal, setOpenImageCommentModal] = useState(null);
    const authenticatedInformation = useLoggedInUser();

    const replyCommentListOnEachPost = useSelector(
        (state) => state.managePost.repliedComments[postId],
    );
    // console.log('replyCommentListOnEachPost: ', replyCommentListOnEachPost);
    const handleOpenImageInReplyCommentModal = (postID, commentIndex, cmtReplyIndex) => {
        setOpenImageCommentModal({ postID, commentIndex, cmtReplyIndex });
    };

    const handleCloseImageInReplyCommentModal = () => {
        setOpenImageCommentModal(null);
    };

    return (
        <React.Fragment>
            {replyCommentListOnEachPost &&
                Object.entries(replyCommentListOnEachPost).map(([key, value]) =>
                    value.map((replyObj, replyCommentIdx) => {
                        const { replyCmt, timeStamp } = replyObj; // Destructure replyCmt and timeStamp
                        console.log('replyCmt and image: ', replyCmt);
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
                                                src={
                                                    authenticatedInformation.userPhoto &&
                                                    authenticatedInformation.userPhoto.imgUrl
                                                }
                                                alt="User Avatar"
                                                sx={{
                                                    height: '36px',
                                                    width: '36px',
                                                    zIndex: 7,
                                                    filter:
                                                        authenticatedInformation.userPhoto &&
                                                        authenticatedInformation.userPhoto
                                                            .imageStyle,
                                                    transform: `rotate(${authenticatedInformation.userPhoto.imageRotationAngle}deg)`,
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
                                                    userName={
                                                        authenticatedInformation.firstName +
                                                        ' ' +
                                                        authenticatedInformation.lastName
                                                    }
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
                                            <ActionsTypography sx={{ ml: 1 }}>
                                                Like
                                            </ActionsTypography>
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
