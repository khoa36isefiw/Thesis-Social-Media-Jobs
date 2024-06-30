import React from 'react';
import PublicIcon from '@mui/icons-material/Public';
import Diversity3Icon from '@mui/icons-material/Diversity3';

export const privacyPostSettingsData = [
    {
        textAction: 'Anyone',
        commentControlIcon: <PublicIcon sx={{ fontSize: '24px' }} />,
    },
    {
        textAction: 'Connections only',
        commentControlIcon: <Diversity3Icon sx={{ fontSize: '24px' }} />,
    },
];
