import React from 'react';

import CancelIcon from '@mui/icons-material/Cancel';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LinkIcon from '@mui/icons-material/Link';

export const postMenuSettings = [
    {
        textAction: 'Copy to link post',
        iconActionn: (
            <LinkIcon sx={{ fontSize: '20px', color: 'black', transform: 'rotate(-45deg)' }} />
        ),
    },
    {
        textAction: "I don't to see it",
        iconActionn: <VisibilityOffIcon sx={{ fontSize: '20px', color: 'black' }} />,
    },
    {
        textAction: 'Unfollow User Name Here',
        iconActionn: <CancelIcon sx={{ fontSize: '20px', color: 'black' }} />,
    },
];

export const commentMenuSettings = [
    {
        textAction: 'Copy to link post',
        iconActionn: (
            <LinkIcon sx={{ fontSize: '20px', color: 'black', transform: 'rotate(-45deg)' }} />
        ),
    },
    {
        textAction: "I don't to see it",
        iconActionn: <VisibilityOffIcon sx={{ fontSize: '20px', color: 'black' }} />,
    },
];
