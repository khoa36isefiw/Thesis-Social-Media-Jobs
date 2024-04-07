import React, { useState } from 'react';
import {
    Box,
    IconButton,
    Divider,
    Typography,
    TextField,
    Avatar,
    Dialog,
    DialogContent,
} from '@mui/material';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import CloseIcon from '@mui/icons-material/Close';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function EducationListModal({ isOpen, handleClose, list }) {
    const [updatedList, setUpdatedList] = useState(list);
    const handleModalClose = () => {
        handleClose();
    };

    const handleMoveUp = (index) => {
        if (index === 0) return;
        const newList = [...updatedList];
        const temp = newList[index];
        newList[index] = newList[index - 1];
        newList[index - 1] = temp;
        setUpdatedList(newList);
        console.log(newList);
    };

    const handleMoveDown = (index) => {
        if (index === list.length - 1) return;
        const newList = [...updatedList];
        const temp = newList[index];
        newList[index] = newList[index + 1];
        newList[index + 1] = temp;
        setUpdatedList(newList);
    };

    return (
        <Box>
            <Dialog
                open={isOpen}
                onClose={handleModalClose}
                sx={{
                    '.MuiPaper-root': {
                        borderRadius: '12px',
                        boxShadow: '0 8px 4px #404040',
                        top: '-20%',
                    },
                }}
            >
                <DialogContent
                    sx={{
                        width: '600px',
                        padding: 0,
                        borderRadius: '24px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            p: 1,
                        }}
                    >
                        <CustomizeTypography fs={'20px'} fw={true} sx={{ mx: 2, flexGrow: 2 }}>
                            {/* Edit Introduction */}
                            Reorder
                        </CustomizeTypography>
                        <IconButton
                            disableFocusRipple
                            sx={{
                                mx: '2px',
                                '&:hover': {
                                    backgroundColor: '#d9d9d9',
                                },
                            }}
                            onClick={handleModalClose}
                        >
                            <CloseIcon fontSize="large" />
                        </IconButton>
                    </Box>
                    <Divider />
                    <Box sx={{ p: 1, overflowY: 'scroll', maxHeight: '500px', mx: 2 }}>
                        {updatedList.map((school, index) => (
                            <Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        py: 1,
                                    }}
                                >
                                    <Avatar
                                        src={school.schoolImage}
                                        alt={school.schoolName}
                                        sx={{ height: 50, width: 50, borderRadius: 0 }}
                                    />
                                    <Box
                                        sx={{
                                            flexGrow: 1,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <Box sx={{ px: 1 }}>
                                            <CustomizeTypography fs="14px" fw={true}>
                                                {/* University of Information Technology */}
                                                {school.schoolName}
                                            </CustomizeTypography>

                                            <CustomizeTypography
                                                fs="12px"
                                                sx={{ color: '#404040', mt: '4px' }}
                                            >
                                                {/* March 2024 - Feb 2025 */}
                                                {school.startDate} - {school.endDate}
                                            </CustomizeTypography>
                                        </Box>
                                        <Box>
                                            {/* <IconButton
                                                onClick={() => handleMoveUp(index)}
                                            ></IconButton>
                                            <IconButton onClick={() => handleMoveDown(index)}>
                                                <ArrowDownwardIcon sx={{ fontSize: '28px' }} />
                                            </IconButton> */}
                                            {index === 0 ? (
                                                <IconButton onClick={() => handleMoveDown(index)}>
                                                    <ArrowDownwardIcon sx={{ fontSize: '28px' }} />
                                                </IconButton>
                                            ) : (
                                                <>
                                                    {index === updatedList.length - 1 ? (
                                                        <IconButton
                                                            onClick={() => handleMoveUp(index)}
                                                        >
                                                            <ArrowUpwardIcon
                                                                sx={{ fontSize: '28px' }}
                                                            />
                                                        </IconButton>
                                                    ) : (
                                                        <>
                                                            <IconButton
                                                                onClick={() =>
                                                                    handleMoveDown(index)
                                                                }
                                                            >
                                                                <ArrowDownwardIcon
                                                                    sx={{ fontSize: '28px' }}
                                                                />
                                                            </IconButton>
                                                            <IconButton
                                                                onClick={() => handleMoveUp(index)}
                                                            >
                                                                <ArrowUpwardIcon
                                                                    sx={{ fontSize: '28px' }}
                                                                />
                                                            </IconButton>
                                                        </>
                                                    )}
                                                </>
                                            )}
                                        </Box>
                                    </Box>
                                </Box>
                                {index === updatedList.length - 1 ? null : <Divider />}
                            </Box>
                        ))}
                    </Box>
                </DialogContent>
            </Dialog>
        </Box>
    );
}

export default EducationListModal;
