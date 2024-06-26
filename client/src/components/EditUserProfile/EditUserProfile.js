import React, { useState } from 'react';
import {
    Box,
    IconButton,
    Divider,
    Typography,
    TextField,
    FormControl,
    Select,
    MenuItem,
    Checkbox,
    FormGroup,
    FormControlLabel,
    Button,
    DialogTitle,
    DialogContent,
    DialogActions,
    Dialog,
} from '@mui/material';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import CloseIcon from '@mui/icons-material/Close';
import { blue } from '@mui/material/colors';
import { ipadProScreen, mobileScreen, tabletScreen, theme } from '../Theme/Theme';

const TextFieldConstant = ({ label, isRequired = false, content, maxHeight, mRows = false }) => {
    return (
        <Box sx={{ mb: 2 }}>
            <Typography sx={{ fontSize: '14px', mb: '2px', color: '#404040' }}>
                {label} {isRequired ? '*' : ''}
            </Typography>
            <TextField
                fullWidth
                sx={{
                    '.MuiInputBase-root': {
                        height: maxHeight || '35px',
                        fontSize: '14px',
                    },
                    [mobileScreen]: {
                        // width: '30px',
                    },
                }}
                // size="small"
                defaultValue={content}
                // multiline based on the value of mRows
                multiline={mRows ? true : false}
                maxRows={mRows}
            />
        </Box>
    );
};

function EditUserProfile({ handleClose }) {
    const [school, setSchool] = useState('');
    const [confirmOpen, setConfirmOpen] = useState(false);

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

    return (
        <Box
            sx={{
                position: 'relative',
                backgroundColor: '#fff',
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
                    // height: '800px',
                },
                [tabletScreen]: {
                    width: '90%',
                },
                [mobileScreen]: {
                    width: '100%',
                    // height: '640px'
                },
            }}
        >
            <DialogContent
                sx={{
                    padding: 0,
                    borderRadius: '24px',
                    [mobileScreen]: {
                        width: '100%',
                    },
                    [tabletScreen]: {
                        width: '100%',
                    },
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
                        Edit Introduction
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
                <Box
                    sx={{
                        p: 1,
                        overflowY: 'scroll',
                        height: '500px',
                        mx: 2,
                        [ipadProScreen]: {
                            height: '800px',
                        },
                        [mobileScreen]: {
                            height: '400px',
                        },
                        [tabletScreen]: {
                            height: '650px',
                        },
                    }}
                >
                    <CustomizeTypography
                        sx={{
                            color: '#404040',
                            [mobileScreen]: {
                                fontSize: '13px',
                            },
                        }}
                    >
                        * Indicates required
                    </CustomizeTypography>
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
                    <Box sx={{ mt: 2 }}>
                        <TextFieldConstant label={'First name'} isRequired={true} />
                        {/* Last Name */}
                        <TextFieldConstant label={'Last name'} isRequired={true} />
                        <TextFieldConstant label={'Aditional name'} />

                        {/* Headline study at? */}
                        <TextFieldConstant
                            mRows={true}
                            maxHeight={'50px'}
                            label={'Headline'}
                            isRequired={true}
                            content={'Student at HCMUTE'}
                        />
                    </Box>
                    {/* Education */}
                    <Box sx={{ mt: 2 }}>
                        <CustomizeTypography fs="20px" fw={true} sx={{ color: '#404040' }}>
                            Education
                        </CustomizeTypography>
                        <CustomizeTypography fs="14px" sx={{ color: '#404040' }}>
                            School *
                        </CustomizeTypography>
                        <FormControl
                            fullWidth
                            sx={{
                                '.MuiInputBase-root': {
                                    height: '35px',
                                    fontSize: '14px',
                                },
                                // [mobileScreen]: {
                                //     width: '330px',
                                // },
                            }}
                        >
                            <Select value={school} onChange={handleSelectSchool} displayEmpty>
                                <MenuItem value="">
                                    <em>Select School</em>
                                </MenuItem>
                                <MenuItem value={'HCMUT'}>HCMUT</MenuItem>
                                <MenuItem value={'HCMUS'}>HCMUS</MenuItem>
                                <MenuItem value={'HCMUTE'}>HCMUTE</MenuItem>
                            </Select>
                        </FormControl>

                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        defaultChecked
                                        color="success"
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: '22px',
                                            },
                                        }}
                                    />
                                }
                                label={
                                    <Typography sx={{ fontSize: '14px', color: '#404040' }}>
                                        Show school in my introduction
                                    </Typography>
                                }
                            />
                        </FormGroup>
                    </Box>

                    {/* Location */}
                    <Box sx={{ mt: 2 }}>
                        <CustomizeTypography fs="20px" fw={true}>
                            Location
                        </CustomizeTypography>
                        <TextFieldConstant
                            label={'Country/Region'}
                            isRequired={true}
                            content={'Viet Nam'}
                        />
                        <TextFieldConstant label={'City'} content={'Thủ Đức, Ho Chi Minh City'} />
                    </Box>

                    {/* Contact information  */}
                    <Box sx={{ mt: 2 }}>
                        <CustomizeTypography fs={'20px'}>Contact info</CustomizeTypography>
                        <CustomizeTypography fs={'14px'} fw={true} sx={{ color: '#0009' }}>
                            {' '}
                            Add or edit your profile URL, email, and more
                        </CustomizeTypography>
                        <Button
                            sx={{
                                fontSize: '14px',
                                textTransform: 'initial',
                                mt: 2,
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: blue[100],
                                },
                            }}
                        >
                            Edit contact information
                        </Button>
                    </Box>
                </Box>
                <Divider sx={{ mt: 2, mb: 2 }} />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-end',
                        mx: 2,
                    }}
                >
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

                {/* Confirmation Dialog */}
                <Dialog
                    open={confirmOpen}
                    onClose={() => setConfirmOpen(false)}
                    sx={{
                        '.MuiPaper-root': {
                            borderRadius: '12px',
                            boxShadow: `0 4px 4px ${theme.palette.shadowColor}`,
                        },
                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                        }}
                    >
                        <IconButton
                            disableFocusRipple
                            sx={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                },
                                borderRadius: '24px',
                            }}
                            onClick={handleModalClose}
                        >
                            <CloseIcon fontSize="large" />
                        </IconButton>
                        <DialogTitle
                            sx={{
                                fontSize: '18px',
                                fontWeight: 'bold',
                            }}
                        >
                            Discard changes
                        </DialogTitle>
                    </Box>
                    <Divider />
                    <DialogContent
                        sx={{
                            width: '340px',
                            [mobileScreen]: {
                                width: '300px',
                            },
                        }}
                    >
                        <Typography sx={{ fontSize: '14px' }}>
                            Are you sure you want to discard the changes you made?
                        </Typography>
                    </DialogContent>
                    <Divider />
                    <DialogActions>
                        <Button
                            variant="outlined"
                            sx={{
                                borderRadius: '24px',
                                fontWeight: 'bold',
                                px: 2,
                                fontSize: '14px',
                                textTransform: 'capitalize',
                            }}
                            onClick={() => setConfirmOpen(false)}
                        >
                            No Thanks
                        </Button>
                        <Button
                            onClick={handleConfirmClose}
                            autoFocus
                            variant="contained"
                            sx={{
                                borderRadius: '24px',
                                fontWeight: 'bold',
                                px: 2,
                                fontSize: '14px',
                                textTransform: 'capitalize',
                            }}
                        >
                            Discard
                        </Button>
                    </DialogActions>
                </Dialog>
            </DialogContent>
        </Box>
    );
}

export default EditUserProfile;
