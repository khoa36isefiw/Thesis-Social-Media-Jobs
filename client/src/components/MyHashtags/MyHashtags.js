import { Avatar, Box, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomizeBox } from '../CustomizeBox/CustomizeBox';
import { CustomizeText } from '../Notifications/FilterNotifications';
import { mobileScreen, theme } from '../Theme/Theme';
import NoHashtag from '../../assets/images/11115.jpg';

function MyHashtags() {
    return (
        <CustomizeBox
            sx={{
                minHeight: '50px',
                width: '100%',
                borderRadius: '12px',
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1px solid #d9d9d9',
                p: 1,
                [mobileScreen]: {
                    borderRadius: 0,
                    paddingLeft: 0,
                },
            }}
        >
            <Avatar
                src={NoHashtag}
                alt="No Activity"
                sx={{
                    mt: -1,
                    height: '300px',
                    width: '300px',
                    borderRadius: '0px',
                    [mobileScreen]: { objectFit: 'cover', with: '250px', height: '250px' },
                }}
            />
            <CustomizeText
                fs="24px"
                fw={true}
                sx={{
                    mt: '-15px',
                    [mobileScreen]: {
                        fontSize: '16px',
                        mt: 1,
                    },
                    zIndex: 2,
                }}
            >
                No hashtags followed
            </CustomizeText>
            <CustomizeText
                sx={{
                    color: theme.palette.primaryText,
                    fontSize: '16px',
                    [mobileScreen]: {
                        fontSize: '14px',
                    },
                    mb: 2,
                }}
            >
                Looks like you are not following any hashtags.
            </CustomizeText>
        </CustomizeBox>
    );
}

export default MyHashtags;
