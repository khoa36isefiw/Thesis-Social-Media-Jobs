import React, { useState } from 'react';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import Comment from '../../assets/images/comment.png';
import Send from '../../assets/images/send.png';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { mobileScreen, tabletScreen } from '../Theme/Theme';
import Liked from '../../assets/images/like.png';
import { ReactionMenu } from './ReactionMenu';
import { ActionButton } from './ActionButton';
import { blue, red } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { setReactionOnPost } from '../../redux/ManagePost/managePostAction';

export function PostActionButton({ postID, onReactionClick }) {
    const dispatch = useDispatch();
    const [isHovering, setIsHovering] = useState(false);
    // get icon is selected
    const dataOfSelectedReaction = useSelector((state) => state.managePost.reactions[postID]);

    const getReactionText = dataOfSelectedReaction ? dataOfSelectedReaction.btnText : null;

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const handleLikeOnPost = () => {
        // default reaction for post/ blog
        dispatch(setReactionOnPost(postID, { srcImage: Liked, btnText: 'Liked a Post' }));
    };

    // remove reactions when user click on reaction button on post
    const handleRemoveReactionOnPost = () => {
        dispatch(setReactionOnPost(postID, null));
    };

    return (
        <Box
            sx={{
                mt: 1,
                mx: '24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
                [tabletScreen]: {
                    mx: 0,
                },
                [mobileScreen]: {
                    mx: 1,
                },
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: 2,
                    py: 1,
                    '&:hover': {
                        backgroundColor: '#d3d3d3',
                        cursor: 'pointer',
                    },
                    '::after': {
                        position: 'absolute',
                        content: '""',
                        width: '120px',
                        height: '40px',
                        backgroundColor: 'transparent',
                        // backgroundColor: '#333',
                        top: '-75%',
                        left: '-50%',
                    },
                }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                <IconButton sx={{ padding: 0 }}>
                    {dataOfSelectedReaction ? (
                        getReactionText === 'Loved a Post' ? (
                            <FavoriteIcon
                                sx={{ fontSize: '24px', color: red[900] }}
                                onClick={handleRemoveReactionOnPost}
                            />
                        ) : getReactionText === 'Laughed a Post' ? (
                            <Avatar
                                src={dataOfSelectedReaction.srcImage}
                                alt={getReactionText}
                                sx={{
                                    height: '24px',
                                    width: '24px',
                                }}
                                onClick={handleRemoveReactionOnPost}
                            />
                        ) : (
                            <ThumbUpAltIcon
                                sx={{ fontSize: '24px', color: blue[900] }}
                                onClick={handleRemoveReactionOnPost}
                            />
                        )
                    ) : (
                        <ThumbUpOffAltIcon sx={{ fontSize: '24px' }} onClick={handleLikeOnPost} />
                    )}
                </IconButton>
                <Typography
                    sx={{
                        ml: 1,
                        color:
                            dataOfSelectedReaction && getReactionText === 'Loved a Post'
                                ? '#e91e63'
                                : getReactionText === 'Laughed a Post'
                                ? '#ffc400'
                                : blue[900],

                        fontWeight: dataOfSelectedReaction ? 'bold' : 'normal',
                        fontSize: '13px',
                    }}
                >
                    {getReactionText === 'Loved a Post'
                        ? 'Love'
                        : getReactionText === 'Laughed a Post'
                        ? 'Laugh'
                        : 'Like'}
                </Typography>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '-70%',
                        left: '-30%',
                        zIndex: 9999,
                        [tabletScreen]: {
                            left: '0%',
                        },
                    }}
                >
                    {isHovering && <ReactionMenu postID={postID} handleChoose={onReactionClick} />}
                </Box>
            </Box>
            <ActionButton src={Comment} alt="Comment a Post" text="Comment" />
            <ActionButton src={Send} alt="Send a Post" text="Send" />
        </Box>
    );
}
