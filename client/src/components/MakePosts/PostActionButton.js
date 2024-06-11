import React, { useState } from 'react';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import Comment from '../../assets/images/comment.png';
import Send from '../../assets/images/send.png';

import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

import FavoriteIcon from '@mui/icons-material/Favorite';

import { mobileScreen, tabletScreen } from '../Theme/Theme';

import { ReactionMenu } from './ReactionMenu';
import { ActionButton } from './ActionButton';
import { blue, red, yellow } from '@mui/material/colors';
import { useSelector } from 'react-redux';

export function PostActionButton({ onReactionClick, selectedReaction }) {
    const [isHovering, setIsHovering] = useState(false);
    // get icon is selected
    const getIconSelected = useSelector((state) => state.managePost.reactionIs);
    console.log('icon is selected: ', getIconSelected);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
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
                onClick={onReactionClick}
            >
                <IconButton sx={{ padding: 0 }}>
                    {selectedReaction ? (
                        getIconSelected.btnText === 'Loved a Post' ? (
                            <FavoriteIcon sx={{ fontSize: '24px', color: red[900] }} />
                        ) : getIconSelected.btnText === 'Laughed a Post' ? (
                            // <EmojiEmotionsRoundedIcon sx={{ fontSize: '24px', color: '#ffef62' }} />
                            <Avatar
                                src={getIconSelected.srcImage}
                                alt={getIconSelected.btnText}
                                // onClick={() => handleChoose(buttonReaction)}
                                sx={{
                                    height: '24px',
                                    width: '24px',
                                }}
                            />
                        ) : (
                            <ThumbUpAltIcon sx={{ fontSize: '24px', color: blue[900] }} />
                        )
                    ) : (
                        <ThumbUpOffAltIcon sx={{ fontSize: '24px' }} />
                    )}
                </IconButton>
                <Typography
                    sx={{
                        ml: 1,
                        // color: selectedReaction ? blue[900] : getIconSelected.btnText === 'Loved a Post'? ,
                        // color: selectedReaction ? getIconSelected.btnText === 'Loved a Post' ? '#e91e63': getIconSelected.btnText === 'Laughed a Post'? '#ffea00' :blue[900],
                        color:
                            selectedReaction && getIconSelected.btnText === 'Loved a Post'
                                ? '#e91e63'
                                : getIconSelected.btnText === 'Laughed a Post'
                                ? '#ffc400'
                                : blue[900],

                        fontWeight: selectedReaction ? 'bold' : 'normal',
                        fontSize: '13px',
                    }}
                >
                    {getIconSelected.btnText === 'Loved a Post'
                        ? 'Love'
                        : getIconSelected.btnText === 'Laughed a Post'
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
                    {isHovering && <ReactionMenu handleChoose={onReactionClick} />}
                </Box>
            </Box>
            <ActionButton src={Comment} alt="Comment a Post" text="Comment" />
            <ActionButton src={Send} alt="Send a Post" text="Send" />
        </Box>
    );
}
