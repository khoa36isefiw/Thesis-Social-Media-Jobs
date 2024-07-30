import React from 'react';
import { Box, Avatar } from '@mui/material';
import Liked from '../../assets/images/like.png';
import Love from '../../assets/images/love.png';
import Laugh from '../../assets/images/laughing.png';
import { useDispatch } from 'react-redux';
import {
    setReactionOnCommentInPost,
    setReactionOnPost,
    setReactionOnResponseCommentInPost,
} from '../../redux/ManagePost/managePostAction';

import { mobileScreen } from '../Theme/Theme';

// define reactions button
const reactionsButtonList = [
    {
        srcImage: Liked,
        btnText: 'Liked a Post',
    },
    {
        srcImage: Love,
        btnText: 'Loved a Post',
    },
    {
        srcImage: Laugh,
        btnText: 'Laughed a Post',
    },
];

export const ReactionMenu = ({ postID, commentID, replyID, handleChoose, userInfor }) => {
    const dispatch = useDispatch();
    const handleChooseReaction = (reaction) => {
        handleChoose(reaction);
        // dispatch(setReactionOnPost(postID, reaction));
        // initial
        // if (commentID !== null) {
        //     // if commentID exists
        //     console.log('chạy về đây nè!');
        //     console.log('postID: ', postID);
        //     dispatch(setReactionOnCommentInPost(postID, commentID, reaction));
        // } else if (commentID !== null && replyID !== null) {
        //     dispatch(setReactionOnResponseCommentInPost(postID, commentID, replyID, reaction));
        // } else {
        //     console.log('có cái nịt :)');
        //     console.log('postID2 22: ', postID);
        //     dispatch(setReactionOnPost(postID, reaction));
        // }

        if (replyID !== null && commentID !== null) {
            // if commentID exists
            console.log('chạy về đây nè!');
            dispatch(setReactionOnResponseCommentInPost(postID, commentID, replyID, reaction));
        } else if (commentID !== null) {
            console.log('i love you chụt chụt');
            dispatch(setReactionOnCommentInPost(postID, commentID, reaction));
        } else {
            console.log('có cái nịt :)');
            dispatch(setReactionOnPost(postID, reaction, userInfor));
        }
    };
    return (
        <Box
            sx={{
                width: '140px',
                height: '40px',
                backgroundColor: '#fff',
                border: '1px solid #d9d9d9',
                boxShadow: '0 2px 4px #565656',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                mt: -4,
                [mobileScreen]: {
                    ml: 1,
                },
                animationDuration: '0.5s',
            }}
            className="animate__animated animate__zoomIn"
        >
            {reactionsButtonList.map((buttonReaction, index) => (
                <Box key={index} sx={{ '&:hover': { transform: 'scale(1.05)' } }}>
                    <Avatar
                        src={buttonReaction.srcImage}
                        alt={buttonReaction.btnText}
                        // onClick={() => handleChoose(buttonReaction)}
                        onClick={() => handleChooseReaction(buttonReaction)}
                        sx={{
                            height: '24px',
                            width: '24px',
                            '&:hover': {
                                cursor: 'pointer',
                                transform: 'scale(1.25)',
                            },
                        }}
                    />
                </Box>
            ))}
        </Box>
    );
};
