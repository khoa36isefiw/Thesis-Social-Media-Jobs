import { Box, Button, Divider, IconButton } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { CustomizeTypography } from '../../CustomizeTypography/CustomizeTypography';
import CloseIcon from '@mui/icons-material/Close';

import { PrivacyButton } from '../PrivacyButton/PrivacyButton';
import {
    commentControlDataAnyone,
    commentControlDataConnections,
} from '../Data/CommentControlData';
import { useDispatch, useSelector } from 'react-redux';
import { commentControlSelection } from '../../../redux/ManagePost/managePostAction';

function CommentControl({ handleClose, onSave, selectedOption, showCommentControlOption }) {
    const dispatch = useDispatch();
    const [currentOption, setCurrentOption] = useState(
        showCommentControlOption === 'Anyone' ? selectedOption : 'Connections only',
    );
    console.log('selectedOption: ', selectedOption);
    useEffect(() => {
        setCurrentOption(selectedOption);
    }, [selectedOption]);

    const handleOptionChoose = (textAction) => {
        setCurrentOption(textAction);
    };

    const handleSave = () => {
        onSave(currentOption);
        dispatch(commentControlSelection(currentOption));
    };

    return (
        <Box>
            <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
                <CustomizeTypography fw={true} fs={'20px'} sx={{ flexGrow: 1 }}>
                    Comment Control
                </CustomizeTypography>
                <IconButton onClick={handleClose} disableTouchRipple>
                    <CloseIcon sx={{ fontSize: '24px' }}></CloseIcon>
                </IconButton>
            </Box>
            <Divider />
            {/* Choose option */}
            <Box>
                {showCommentControlOption === 'Anyone' ? (
                    <>
                        {commentControlDataAnyone.map((control, index) => (
                            <PrivacyButton
                                key={index}
                                textAction={control.textAction}
                                icon={control.commentControlIcon}
                                selected={currentOption === control.textAction}
                                handleOnClick={() => handleOptionChoose(control.textAction)}
                            />
                        ))}
                    </>
                ) : (
                    <>
                        {commentControlDataConnections.map((control, index) => (
                            <PrivacyButton
                                key={index}
                                textAction={control.textAction}
                                icon={control.commentControlIcon}
                                selected={currentOption === control.textAction}
                                handleOnClick={() => handleOptionChoose(control.textAction)}
                            />
                        ))}
                    </>
                )}
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
                    disabled={currentOption !== 'Anyone' ? false : true}
                    sx={{
                        fontSize: '13px',
                        borderRadius: '24px',
                        padding: '8px 24px',
                        fontWeight: 'bold',
                    }}
                    onClick={handleSave}
                >
                    Save
                </Button>
            </Box>
        </Box>
    );
}

export default CommentControl;
