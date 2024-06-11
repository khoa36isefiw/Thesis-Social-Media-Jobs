import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import Liked from '../../assets/images/like.png';
import Love from '../../assets/images/love.png';
import Laugh from '../../assets/images/laughing.png';
import { useDispatch } from 'react-redux';
import { getReactionOnPost } from '../../redux/ManagePost/managePostAction';

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

export const ReactionMenu = ({ handleChoose }) => {
    const dispatch = useDispatch();
    const handleChooseReaction = (reaction) => {
        handleChoose(reaction);
        dispatch(getReactionOnPost(reaction));
    };
    return (
        <Box
            sx={{
                width: '140px',
                height: '40px',
                backgroundColor: '#fff',
                border: '1px solid #d9d9d9',
                boxShadow: '0 4px 4px #b3b3b3',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                mt: -4,
                [mobileScreen]: {
                    ml: 1,
                },
            }}
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
