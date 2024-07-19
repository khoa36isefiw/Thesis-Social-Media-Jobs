import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { tabletScreen } from '../Theme/Theme';
import { ActionsTypography } from './CommentModal';
import { ActionsOnComment } from './ActionsOnComment';
import { useLoggedInUser } from '../CallDataInRedux/CallDataInRedux';
import { calculateTimeComment } from '../HandleTime/HandleTime';

// export const ShowResponsesCommentList = ({ postId, commentIdx }) => {
//     const authenticatedInformation = useLoggedInUser();

//     // const replyCommentList = useSelector((state) => state.managePost.repliedComments);
//     // get reply comment on each post (by postId)
//     const replyCommentListOnEachPost = useSelector(
//         (state) => state.managePost.repliedComments[postId],
//     );

//     const replyCommentListData = useSelector((state) => state.managePost.repliedComments);
//     console.log('replyCommentListData: ', replyCommentListData);

//     return (
//         <React.Fragment>
//             {replyCommentListOnEachPost &&
//                 replyCommentListOnEachPost[commentIdx] &&
//                 replyCommentListOnEachPost[commentIdx].map((reply, index) => {
//                     // conver key of Object to a number

//                     return (
//                         <Box sx={{ display: 'flex', flexDirection: 'column' }} key={index}>
//                             <React.Fragment>
//                                 <Box
//                                     sx={{
//                                         display: 'flex',
//                                         mt: 1,
//                                         ml: 6,
//                                     }}
//                                 >
//                                     <Avatar
//                                         src={
//                                             authenticatedInformation.userPhoto &&
//                                             authenticatedInformation.userPhoto.imgUrl
//                                         }
//                                         alt="User Avatar"
//                                         sx={{
//                                             height: '36px',
//                                             width: '36px',
//                                             zIndex: 7,
//                                             filter:
//                                                 authenticatedInformation.userPhoto &&
//                                                 authenticatedInformation.userPhoto.imageStyle,
//                                             transform: `rotate(${authenticatedInformation.userPhoto.imageRotationAngle}deg)`,
//                                         }}
//                                     />

//                                     <Box
//                                         sx={{
//                                             border: '1px solid #f2f2f2',
//                                             maxHeight: '150px',
//                                             width: '100%',
//                                             p: 1,
//                                             borderRadius: '10px',
//                                             backgroundColor: '#f2f2f2',
//                                             ml: 1,
//                                         }}
//                                     >
//                                         <ActionsOnComment
//                                             userName={
//                                                 authenticatedInformation.firstName +
//                                                 ' ' +
//                                                 authenticatedInformation.lastName
//                                             }
//                                             timePostComment={'1m'}
//                                         />
//                                         <Box>
//                                             {/* if reply is an array */}
//                                             {Array.isArray(reply) ? (
//                                                 reply.map((item, subIndex) => (
//                                                     <React.Fragment key={subIndex}>
//                                                         <Typography
//                                                             component="span"
//                                                             sx={{
//                                                                 display: 'block',
//                                                                 wordBreak: 'break-word',
//                                                                 whiteSpace: 'pre-wrap',
//                                                                 fontSize: '14px',
//                                                                 [tabletScreen]: {
//                                                                     fontSize: '13.5px',
//                                                                 },
//                                                             }}
//                                                         >
//                                                             {item}
//                                                         </Typography>
//                                                     </React.Fragment>
//                                                 ))
//                                             ) : (
//                                                 <Typography
//                                                     component="span"
//                                                     sx={{
//                                                         display: 'block',
//                                                         wordBreak: 'break-word',
//                                                         whiteSpace: 'pre-wrap',
//                                                         fontSize: '14px',
//                                                         [tabletScreen]: {
//                                                             fontSize: '13.5px',
//                                                         },
//                                                     }}
//                                                 >
//                                                     {reply}
//                                                 </Typography>
//                                             )}
//                                         </Box>
//                                     </Box>
//                                 </Box>
//                                 <Box
//                                     sx={{
//                                         display: 'flex',
//                                         ml: 11,
//                                         mt: '4px',
//                                         alignItems: 'center',
//                                         width: '220px',
//                                         // justifyContent: 'space-between',
//                                     }}
//                                 >
//                                     <ActionsTypography sx={{ ml: 1 }}>Like</ActionsTypography>
//                                     <Box
//                                         sx={{
//                                             width: '1px',
//                                             height: '21px',
//                                             bgcolor: 'gray',
//                                             ml: 2,
//                                         }}
//                                     />
//                                     <ActionsTypography sx={{ ml: 2 }}>Reply</ActionsTypography>
//                                 </Box>
//                             </React.Fragment>
//                         </Box>
//                     );
//                 })}
//         </React.Fragment>
//     );
// };

export const ShowResponsesCommentList = ({ postId, commentIdx }) => {
    const authenticatedInformation = useLoggedInUser();

    const replyCommentListOnEachPost = useSelector(
        (state) => state.managePost.repliedComments[postId],
    );
    console.log('replyCommentListOnEachPost: ', replyCommentListOnEachPost);

    return (
        <React.Fragment>
            {replyCommentListOnEachPost &&
                Object.entries(replyCommentListOnEachPost).map(([key, value]) =>
                    value.map((replyObj, index) => {
                        const { replyCmt, timeStamp } = replyObj; // Destructure replyCmt and timeStamp

                        const keyAsNumber = Number(key);

                        return (
                            <Box
                                sx={{ display: 'flex', flexDirection: 'column' }}
                                key={`${key}-${index}`}
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
                                                    maxHeight: '150px',
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
                                                    {Array.isArray(replyCmt) ? (
                                                        replyCmt.map((item, subIndex) => (
                                                            <React.Fragment key={subIndex}>
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
                                                                    {item}
                                                                </Typography>
                                                            </React.Fragment>
                                                        ))
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
                                                            {replyCmt}
                                                        </Typography>
                                                    )}
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
