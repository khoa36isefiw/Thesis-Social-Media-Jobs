import React from 'react';
import PublicIcon from '@mui/icons-material/Public';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CommentsDisabledIcon from '@mui/icons-material/CommentsDisabled';

export const commentControlDataAnyone = [
    {
        textAction: 'Anyone',
        commentControlIcon: <PublicIcon sx={{ fontSize: '24px' }} />,
    },
    {
        textAction: 'Connections only',
        commentControlIcon: <Diversity3Icon sx={{ fontSize: '24px' }} />,
    },
    {
        textAction: 'No one',
        commentControlIcon: <CommentsDisabledIcon sx={{ fontSize: '24px' }} />,
    },
];

export const commentControlDataConnections = [
    {
        textAction: 'Connections only',
        commentControlIcon: <Diversity3Icon sx={{ fontSize: '24px' }} />,
    },
    {
        textAction: 'No one',
        commentControlIcon: <CommentsDisabledIcon sx={{ fontSize: '24px' }} />,
    },
];
