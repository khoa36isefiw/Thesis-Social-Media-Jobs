import React, { useState, useEffect } from 'react';
import { Box, IconButton, Divider, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ipadProScreen, mobileScreen, tabletScreen } from '../Theme/Theme';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import { useDispatch, useSelector } from 'react-redux';
import {
    setLoggedInUser,
    setSelectedImageRotationAngle,
} from '../../redux/ManageAccount/manageAccountAction';
// import 'animate.css';

function DeleteSomething({ handleClose, showDeleteConfirm }) {
    const dispatch = useDispatch();
    const [confirmOpen, setConfirmOpen] = useState(showDeleteConfirm);
    const [animationClass, setAnimationClass] = useState('animate__fadeIn'); // default to start an animation
    const userLoggedInInformation = useSelector((state) => state.manageAccounts.loggedInUser);
    const rotationAngleImage = useSelector((state) => state.manageAccounts.selectedImageAngle);
    console.log('Before deleting: ', rotationAngleImage);

    const handleConfirmDelete = () => {
        dispatch(setSelectedImageRotationAngle(0));
        // delete image
        dispatch(
            setLoggedInUser({
                ...userLoggedInInformation,
                userPhoto: {
                    imgUrl: null,
                    imageStyle: null,
                },
            }),
        );
        setAnimationClass('animate__zoomOut'); // exist
        setTimeout(() => {
            setConfirmOpen(false);
            handleClose();
        }, 500); // Match the animation duration
        console.log('After deleting: ', rotationAngleImage);
    };

    const handleModalClose = () => {
        setAnimationClass('animate__zoomOut'); // exist
        setTimeout(() => {
            handleClose();
        }, 500); // Match the animation duration
        handleClose();
    };

    useEffect(() => {
        if (confirmOpen) {
            setAnimationClass('animate__fadeIn');
        }
    }, [confirmOpen]);

    return (
        <Box
            sx={{
                position: 'relative',
                backgroundColor: '#fff',
                width: '350px',
                minHeight: '50px',
                margin: 'auto',
                mt: 20,
                borderRadius: '8px',
                boxShadow: '0 4px 4px #333',
                //  close icon doesn't overflow
                overflow: 'hidden',
                [ipadProScreen]: {
                    width: '40%',
                },
                [tabletScreen]: {
                    width: '50%',
                },
                [mobileScreen]: {
                    width: '100%',
                    // height: '460px',
                },
            }}
            // use animation from animate.css
            // className="animate__animated animate__fadeIn"
            className={`animate__animated ${animationClass}`}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 1,
                }}
            >
                <CustomizeTypography fs={'16px'} fw={true}>
                    Delete profile photo
                </CustomizeTypography>
                <IconButton
                    disableFocusRipple
                    sx={{
                        '&:hover': {
                            backgroundColor: '#d9d9d9',
                        },
                    }}
                    onClick={handleClose}
                >
                    <CloseIcon fontSize="large" />
                </IconButton>
            </Box>

            <Divider sx={{ mb: 2 }} />
            <CustomizeTypography sx={{ color: '#191919', p: 1 }}>
                Are you sure? Having a profile picture helps others recognize you.
            </CustomizeTypography>

            <Divider sx={{ mt: 2, mb: 2 }} />
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                    mx: 1,
                    mb: 2,
                }}
            >
                <DeleteButton
                    variant={'outlined'}
                    deleteText={'Cancel'}
                    handleClickDelete={handleModalClose}
                />
                <DeleteButton
                    variant={'contained'}
                    deleteText={'Delete'}
                    handleClickDelete={handleConfirmDelete}
                />
            </Box>
        </Box>
    );
}

export default DeleteSomething;

const DeleteButton = ({ variant, deleteText, handleClickDelete }) => {
    return (
        <Button
            variant={variant}
            sx={{
                fontSize: '14px',
                padding: '4px 16px',
                textTransform: 'initial',
                fontWeight: 'bold',
                mx: 1,
                borderRadius: '24px',
            }}
            onClick={handleClickDelete}
        >
            {deleteText}
        </Button>
    );
};
