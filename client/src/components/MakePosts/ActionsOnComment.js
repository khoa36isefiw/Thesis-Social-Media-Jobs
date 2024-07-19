import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';

import MoreHoriz from '@mui/icons-material/MoreHoriz';

import { tabletScreen } from '../Theme/Theme';
import { calculateTimeElapsed } from '../HandleTime/HandleTime';

export const ActionsOnComment = ({ userName, timePostComment }) => {
    return (
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
                {userName}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {/* time comment */}
                <Typography
                    sx={{
                        fontSize: '12px',
                    }}
                >
                    {timePostComment}
                </Typography>
                {/* More action with this comment */}
                <IconButton sx={{ py: 0, px: '4px' }}>
                    <MoreHoriz sx={{ fontSize: '18px' }} />
                </IconButton>
            </Box>
        </Box>
    );
};
