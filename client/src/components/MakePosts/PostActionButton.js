import React, { useState } from 'react';
import { Box, Typography, Avatar, IconButton, keyframes, Grow, Slide } from '@mui/material';
import Comment from '../../assets/images/comment.png';
import Send from '../../assets/images/send.png';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ipadProScreen, mobileScreen, tabletScreen } from '../Theme/Theme';
import Liked from '../../assets/images/like.png';
import { ReactionMenu } from './ReactionMenu';
import { ActionButton } from './ActionButton';
import { blue, red } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { setReactionOnPost } from '../../redux/ManagePost/managePostAction';

// define animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export function PostActionButton({ postID, onReactionClick, xAxisMargin = true }) {
    const dispatch = useDispatch();
    const [isHovering, setIsHovering] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [horverTimeout, setHoverTimeout] = useState(null);
    // get icon is selected
    const dataOfSelectedReaction = useSelector((state) => state.managePost.reactions[postID]);
    const getReactionText = dataOfSelectedReaction ? dataOfSelectedReaction.btnText : null;

    const handleMouseOver = () => {
        // set true after 1.5s when it is hovered
        const timeout = setTimeout(() => {
            setMenuVisible(true);
        }, 500);
        setHoverTimeout(timeout);
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        clearTimeout(horverTimeout);
        setIsHovering(false);
        setHoverTimeout(null);
        // setMenuVisible(false);
    };

    // button
    const handleLikeOnPostClick = () => {
        // default reaction for post/ blog
        dispatch(setReactionOnPost(postID, { srcImage: Liked, btnText: 'Liked a Post' }));
        clearTimeout(horverTimeout);
        setMenuVisible(false);
        setHoverTimeout(null);
        setIsHovering(false);
    };

    // remove reactions when user click on reaction button on post
    const handleRemoveReactionOnPost = () => {
        dispatch(setReactionOnPost(postID, null));
    };

    // choose reaction and close the menu
    const handleChooseReaction = () => {
        onReactionClick();
        // handleMouseOut();
        clearTimeout(horverTimeout);
        setMenuVisible(false);
        setIsHovering(false);
        setHoverTimeout(null);
    };

    return (
        <Box
            sx={{
                mt: 1,
                mx: xAxisMargin ? '24px' : 0,
                // mx: '24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
                [ipadProScreen]: {
                    mx: 1,
                },
                [tabletScreen]: {
                    mx: 1,
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
                    py: '4px',
                    borderRadius: '4px',
                    '&:hover': {
                        // backgroundColor: '#d3d3d3',
                        backgroundColor: '#8C8C8C1A',
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
                    [ipadProScreen]: {
                        px: 2,
                    },
                    [mobileScreen]: {
                        px: 1,
                    },
                    [tabletScreen]: {
                        px: 1,
                    },
                }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                <IconButton sx={{ padding: 0 }}>
                    {dataOfSelectedReaction ? (
                        getReactionText === 'Loved a Post' ? (
                            <ReactionButtons
                                handleAction={handleRemoveReactionOnPost}
                                icon={<FavoriteIcon sx={{ fontSize: '24px', color: red[900] }} />}
                                textAction={'Love'}
                                textColor={'#e91e63'}
                            />
                        ) : getReactionText === 'Laughed a Post' ? (
                            <ReactionButtons
                                handleAction={handleRemoveReactionOnPost}
                                icon={
                                    <Avatar
                                        src={dataOfSelectedReaction.srcImage}
                                        alt={getReactionText}
                                        sx={{
                                            height: '24px',
                                            width: '24px',
                                        }}
                                    />
                                }
                                textAction={'Laugh'}
                                textColor={'#ffc400'}
                            />
                        ) : (
                            <ReactionButtons
                                handleAction={handleRemoveReactionOnPost}
                                icon={
                                    <ThumbUpAltIcon
                                        sx={{ fontSize: '24px', color: blue[900], padding: 0 }}
                                    />
                                }
                                textAction={'Like'}
                                textColor={blue[900]}
                            />
                        )
                    ) : (
                        <ReactionButtons
                            handleAction={handleLikeOnPostClick}
                            icon={<ThumbUpOffAltIcon sx={{ fontSize: '24px' }} />}
                            textAction={'Like'}
                            textColor={'black'}
                            fw={false}
                        />
                    )}
                </IconButton>
                {menuVisible && isHovering && (
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '-70%',
                            left: '-30%',
                            zIndex: 999,
                            bgcolor: 'blue',
                            [tabletScreen]: {
                                left: '0%',
                            },
                            animation: `${fadeIn} 0.3s ease-in-out`,
                        }}
                    >
                        {<ReactionMenu postID={postID} handleChoose={handleChooseReaction} />}
                    </Box>
                )}
            </Box>
            <ActionButton src={Comment} alt="Comment a Post" text="Comment" />
            <ActionButton src={Send} alt="Send a Post" text="Send" />
        </Box>
    );
}

const ReactionButtons = ({ handleAction, icon, textAction, textColor, fw = true }) => {
    return (
        <Box
            onClick={handleAction}
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Box>{icon}</Box>
            <Typography
                sx={{
                    fontSize: '13px',
                    ml: 1,
                    color: textColor,
                    fontWeight: fw ? 'bold' : 'normal',
                }}
            >
                {textAction}
            </Typography>
        </Box>
    );
};