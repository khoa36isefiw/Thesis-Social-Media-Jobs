import {
    Box,
    Button,
    Divider,
    IconButton,
    Modal,
    Typography,
    Grow,
    Slide,
    Grid,
    keyframes,
} from '@mui/material';
import React, { useState, useEffect } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import PublicIcon from '@mui/icons-material/Public';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { useDispatch, useSelector } from 'react-redux';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import { ipadProScreen, mobileScreen, tabletScreen, theme } from '../Theme/Theme';
import { PrivacyButton } from '../MakePosts/PrivacyButton/PrivacyButton';
import { privacyPostSettingsData } from '../MakePosts/Data/PrivacyPostSettingsData';

function UserPhotoAvatarPrivacy({ handleClose }) {
    const dispatch = useDispatch();
    // open commment settings modal
    const [openCommentControl, setOpenCommentControl] = useState(false);
    const getPostPrivacySelected = useSelector(
        (state) => state.managePost.postSettingsPrivacySelection,
    );

    // default selected for post setting privacy
    const [selectedOptionPrivacy, setSelectedOptionPrivacy] = useState(getPostPrivacySelected);
    const handleShowOpenCommentControlModal = () => {
        setOpenCommentControl(true);
    };
    const handleCloseOpenCommentControlModal = () => {
        setOpenCommentControl(false);
    };

    // for settings privacy
    const handleOptionChoose = (textAction) => {
        setSelectedOptionPrivacy(textAction);
        // dispatch(privacySelected(textAction));
    };

    const handleDoneSelection = () => {
        handleClose();
        // dispatch(postSettingsPrivacySelection(selectedOptionPrivacy));
    };

    return (
        <Box
            sx={{
                position: 'relative',
                backgroundColor: '#1b1f23',
                width: '50%',
                minHeight: '300px',
                margin: 'auto',
                mt: '64px',
                borderRadius: '8px',
                boxShadow: '0 4px 4px #333',
                //  close icon doesn't overflow
                overflow: 'hidden',
                [ipadProScreen]: {
                    width: '70%',
                },
                [tabletScreen]: {
                    width: '90%',
                },
                [mobileScreen]: {
                    width: '100%',
                    height: '460px',
                },
            }}
        >
            <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
                <CustomizeTypography fw={true} fs={'20px'} sx={{ flexGrow: 1 }}>
                    Post Settings
                </CustomizeTypography>
                <IconButton onClick={handleClose} disableTouchRipple>
                    <CloseIcon sx={{ fontSize: '24px' }}></CloseIcon>
                </IconButton>
            </Box>
            <Divider />
            <Box sx={{ p: 2 }}>
                <CustomizeTypography fw={true} fs={'16px'} sx={{ flexGrow: 1 }}>
                    Who can see your post?
                </CustomizeTypography>
            </Box>
            {/* Choose option */}
            <Box>
                {privacyPostSettingsData.map((control, index) => (
                    <PrivacyButton
                        key={index}
                        textAction={control.textAction}
                        icon={control.commentControlIcon}
                        selected={selectedOptionPrivacy === control.textAction}
                        handleOnClick={() => handleOptionChoose(control.textAction)}
                    />
                ))}
            </Box>

            <Divider />
            {/* Button Action */}
            <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', p: 2 }}>
                <Button
                    variant="outlined"
                    sx={{
                        fontSize: '13px',
                        borderRadius: '24px',
                        padding: '8px 24px',
                        fontWeight: 'bold',
                        mr: 2,
                    }}
                    onClick={handleClose}
                >
                    Back
                </Button>

                <Button
                    variant="contained"
                    // check if editor is empty --> disabled this Button
                    sx={{
                        fontSize: '13px',
                        borderRadius: '24px',
                        padding: '8px 24px',
                        fontWeight: 'bold',
                    }}
                    onClick={handleDoneSelection}
                >
                    Done
                </Button>
            </Box>
        </Box>
    );
}

export default UserPhotoAvatarPrivacy;
