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
import { CustomizeTypography } from '../../CustomizeTypography/CustomizeTypography';
import CloseIcon from '@mui/icons-material/Close';
import PublicIcon from '@mui/icons-material/Public';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { theme } from '../../Theme/Theme';
import CommentControl from '../CommentControl/CommentControl';
import { privacyPostSettingsData } from '../Data/PrivacyPostSettingsData';
import { PrivacyButton } from '../PrivacyButton/PrivacyButton';
import { useDispatch, useSelector } from 'react-redux';
import {
    postSettingsPrivacySelection,
    privacySelected,
} from '../../../redux/ManagePost/managePostAction';

function PrivacyPostSettings({ handleClose }) {
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
        dispatch(privacySelected(textAction));
    };

    const handleDoneSelection = () => {
        handleClose();
        dispatch(postSettingsPrivacySelection(selectedOptionPrivacy));
    };

    return (
        <Box>
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
            {/* comment control */}
            <Box
                sx={{
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': { bgcolor: theme.palette.bgButtonHover, cursor: 'pointer' },
                }}
                onClick={handleShowOpenCommentControlModal}
            >
                <Box sx={{ flexGrow: 1 }}>
                    <CustomizeTypography fw={true} fs={'16px'} sx={{ flexGrow: 1 }}>
                        Comment Control
                    </CustomizeTypography>
                    <CustomizeTypography
                        fs={'14px'}
                        sx={{ flexGrow: 1, color: theme.palette.bgColorButton }}
                    >
                        {/* Anyone */}
                        {selectedOptionPrivacy}
                    </CustomizeTypography>
                </Box>
                <IconButton
                    disableTouchRipple
                    sx={{
                        '&:hover': { bgcolor: 'transparent' },
                    }}
                >
                    <ArrowRightIcon sx={{ fontSize: '28px' }} />
                </IconButton>
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

            {/* case 1: it's okay, but it's too long */}
            <Modal open={openCommentControl} onClose={handleCloseOpenCommentControlModal}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '35%',
                        minHeight: '200px',
                    }}
                >
                    <Grow in={openCommentControl}>
                        <Box
                            sx={{
                                bgcolor: 'background.paper',
                                borderRadius: '12px',
                                boxShadow: '10px 5px 10px #605e5e',
                                // p: 2,

                                // animation: `${spin} 1s infinite ease`,
                            }}
                        >
                            <CommentControl
                                handleClose={handleCloseOpenCommentControlModal}
                                showCommentControlOption={selectedOptionPrivacy}
                            />
                        </Box>
                    </Grow>
                </Box>
            </Modal>

            {/* case 2: it's okay, but can't turn of when click outside the modal */}
            {/* <Modal open={openCommentControl} onClose={handleCloseOpenCommentControlModal}>
                <Grow in={openCommentControl}>
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        style={{ minHeight: '100vh' }}
                    >
                        <Grid sx={{ width: '35%' }}>
                            <Box
                                sx={{
                                    bgcolor: 'background.paper',
                                    borderRadius: '12px',
                                    boxShadow: 24,
                                    minHeight: '200px',
                                }}
                            >
                                <CommentControl
                                    handleClose={handleCloseOpenCommentControlModal}
                                    showCommentControlOption={selectedOptionPrivacy}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Grow>
            </Modal> */}
        </Box>
    );
}

export default PrivacyPostSettings;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
