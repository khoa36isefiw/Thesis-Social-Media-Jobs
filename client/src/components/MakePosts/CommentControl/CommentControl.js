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

function CommentControl({ handleClose, showCommentControlOption }) {
    const dispatch = useDispatch();
    const getCommentControlPrivacySelected = useSelector(
        (state) => state.managePost.commentControlSelection,
    );

    const getCommentControlPrivateSelected = useSelector(
        (state) => state.managePost.commentControlPrivateSelection,
    );

    const getPrivacySelected = useSelector((state) => state.managePost.savePrivacySelected);
    // const [currentOption, setCurrentOption] = useState(getPrivacySelected === "Anyone" ?getCommentControlPrivacySelected:);
    const [currentOption, setCurrentOption] = useState(
        getPrivacySelected === 'Anyone'
            ? getCommentControlPrivacySelected
            : getCommentControlPrivateSelected,
    );
    const [currentOptionConnections, setCurrentOptionConnections] = useState(getPrivacySelected);
    console.log('getCommentControlPrivacySelected: ', getCommentControlPrivacySelected);

    const handleOptionChoose = (textAction) => {
        setCurrentOption(textAction);
        // if (getPrivacySelected === 'Anyone') {
        //     setCurrentOption(textAction);
        // } else if (getPrivacySelected === 'Connections only') {
        //     setCurrentOptionConnections(textAction);
        // }
    };

    const handleSave = () => {
        // if (getPrivacySelected === 'Anyone') {
        //     dispatch(commentControlSelection(currentOption));
        // } else {
        //     dispatch(commentControlSelection(currentOptionConnections));
        // }

        dispatch(commentControlSelection(currentOption));
        handleClose(); // close the current modal
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
                    // disabled={currentOption !== 'Anyone' ? false : true}
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
