import React, { useState } from 'react';
import {
    Box,
    IconButton,
    Divider,
    Typography,
    TextField,
    Button,
    Dialog,
    DialogContent,
} from '@mui/material';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import CloseIcon from '@mui/icons-material/Close';
import ConfirmDialog from '../DialogConfirm/DialogConfirm';

export const TextFieldConstant = ({
    label,
    isRequired = false,
    content,
    maxHeight,
    mRows = false,
    atLeast,
    suggestText,
}) => {
    return (
        <Box sx={{ mb: 2 }}>
            <Typography sx={{ fontSize: '14px', mb: '2px', color: '#404040' }}>
                {label} {isRequired ? '*' : ''}
            </Typography>
            <TextField
                placeholder={suggestText}
                fullWidth
                sx={{
                    '.MuiInputBase-root': {
                        height: maxHeight || '35px',
                        fontSize: '14px',
                    },
                }}
                // size="small"
                defaultValue={content}
                // multiline based on the value of mRows
                multiline={mRows ? true : false}
                maxRows={mRows}
                rows={atLeast ? atLeast : 1}
            />
        </Box>
    );
};

function EditInformationForm({ isOpen, handleClose, editContent, actionContent, children }) {
    const [school, setSchool] = useState('');
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);

    const handleSelectSchool = (event) => {
        setSchool(event.target.value);
    };

    const handleConfirmClose = () => {
        setConfirmOpen(false);
        handleClose();
    };

    const handleModalClose = () => {
        setConfirmOpen(true);
    };

    const handleDeleteClick = () => {
        setDeleteOpen(true);
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
                            {editContent}
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
                        <Typography sx={{ color: '#404040' }}>* Indicates required</Typography>
                        {/* First Name */}
                        {/* <Box sx={{ mt: 2 }}>
                            <Typography sx={{ fontSize: '14px', mb: '2px' }}>First Name*</Typography>
                            <TextField
                                fullWidth
                                sx={{
                                    '.MuiInputBase-root': {
                                        height: '35px',
                                        fontSize: '14px',
                                    },
                                }}
                            />
                        </Box> */}
                        {children}
                    </Box>
                    <Divider sx={{ mt: 2, mb: 2 }} />

                    {/* action button: save or delete */}
                    <Box
                        sx={{
                            display: 'flex',
                            // alignItems: 'flex-end',
                            // justifyContent: 'flex-end',
                            alignItems: actionContent ? 'center' : 'flex-end',
                            justifyContent: actionContent ? 'space-between' : 'flex-end',
                            mx: 2,
                        }}
                    >
                        {actionContent && (
                            <Button
                                variant="outlined"
                                sx={{
                                    fontSize: '14px',
                                    textTransform: 'initial',
                                    fontWeight: 'bold',
                                    px: '20px',

                                    borderRadius: '24px',

                                    mr: '8px',
                                    mb: 2,
                                }}
                                onClick={handleDeleteClick}
                            >
                                {actionContent}
                            </Button>
                        )}
                        <Button
                            variant="contained"
                            sx={{
                                fontSize: '14px',
                                textTransform: 'initial',
                                fontWeight: 'bold',
                                px: '20px',

                                borderRadius: '24px',

                                mr: '8px',
                                mb: 2,
                            }}
                            onClick={handleConfirmClose}
                        >
                            Save
                        </Button>
                    </Box>
                    {deleteOpen && ( // Nếu deleteOpen là true, hiển thị modal xóa
                        <ConfirmDialog
                            open={deleteOpen}
                            handleClose={() => setDeleteOpen(false)} // Đóng modal xóa khi người dùng hủy
                            handleConfirm={() => {
                                setDeleteOpen(false); // Đóng modal xóa
                                // setConfirmOpen(true); // Mở modal xác nhận
                            }}
                            title={actionContent}
                            content="Are you sure you want to delete your HCMUTE education?"
                            textActionButton1="No Thanks"
                            textActionButton2="Delete"
                        />
                    )}

                    {/* Confirmation Dialog */}
                </DialogContent>
            </Dialog>
            <ConfirmDialog
                open={confirmOpen}
                handleClose={() => setConfirmOpen(false)}
                handleConfirm={handleConfirmClose}
                title="Discard changes"
                content="Are you sure you want to discard the changes you made?"
                textActionButton1="No Thanks"
                textActionButton2="Discard"
            />
        </Box>
    );
}

export default EditInformationForm;
