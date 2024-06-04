// import React, { useState } from 'react';
// import { Box, IconButton, Divider, Button, DialogContent } from '@mui/material';
// import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
// import CloseIcon from '@mui/icons-material/Close';
// import { blue } from '@mui/material/colors';
// import { ipadProScreen, mobileScreen, tabletScreen, theme } from '../Theme/Theme';

// function DeleteConversation({ handleModalClose }) {
//     return (
//         <Box
//             sx={{
//                 position: 'relative',
//                 backgroundColor: '#fff',
//                 width: '40%',
//                 minHeight: '60px',
//                 margin: 'auto',
//                 mt: '64px',
//                 borderRadius: '8px',
//                 boxShadow: '0 4px 4px #333',
//                 //  close icon doesn't overflow
//                 overflow: 'hidden',
//                 [ipadProScreen]: {
//                     width: '70%',
//                 },
//                 [tabletScreen]: {
//                     width: '90%',
//                 },
//                 [mobileScreen]: {
//                     width: '100%',
//                 },
//             }}
//         >
//             <DialogContent
//                 sx={{
//                     padding: 0,
//                     borderRadius: '24px',
//                     [mobileScreen]: {
//                         width: '100%',
//                     },
//                     [tabletScreen]: {
//                         width: '100%',
//                     },
//                 }}
//             >
//                 <Box
//                     sx={{
//                         display: 'flex',
//                         justifyContent: 'space-between',
//                         alignItems: 'center',
//                         p: 1,
//                     }}
//                 >
//                     <CustomizeTypography fs={'20px'} fw={true} sx={{ mx: 2, flexGrow: 2 }}>
//                         Delete conversation from your inbox
//                     </CustomizeTypography>
//                     <IconButton
//                         disableFocusRipple
//                         sx={{
//                             mx: '2px',
//                             '&:hover': {
//                                 backgroundColor: '#d9d9d9',
//                             },
//                         }}
//                         onClick={handleModalClose}
//                     >
//                         <CloseIcon fontSize="large" />
//                     </IconButton>
//                 </Box>
//                 <Divider />
//                 <Box
//                     sx={{
//                         p: 1,
//                     }}
//                 >
//                     <CustomizeTypography
//                         sx={{
//                             color: '#404040',
//                             fontSize: '16px',
//                             textAlign: 'center',
//                         }}
//                     >
//                         This conversation will be deleted permanently
//                     </CustomizeTypography>
//                 </Box>
//                 <Divider sx={{ mt: 2, mb: 2 }} />
//                 <Box
//                     sx={{
//                         display: 'flex',
//                         alignItems: 'flex-end',
//                         justifyContent: 'flex-end',
//                         mx: 2,
//                     }}
//                 >
//                     <Button
//                         variant="outlined"
//                         sx={{
//                             borderRadius: '24px',
//                             fontWeight: 'bold',
//                             fontSize: '14px',
//                             textTransform: 'capitalize',
//                             color: '#404040',
//                             borderColor: '#404040',
//                             mr: '8px',
//                             mb: 2,
//                         }}
//                         onClick={handleModalClose}
//                     >
//                         Cancel
//                     </Button>
//                     <Button
//                         variant="contained"
//                         sx={{
//                             fontSize: '14px',
//                             textTransform: 'initial',
//                             fontWeight: 'bold',
//                             px: '20px',
//                             borderRadius: '24px',
//                             mr: '8px',
//                             mb: 2,
//                         }}
//                         // onClick={handleConfirmClose}
//                     >
//                         Delete
//                     </Button>
//                 </Box>
//             </DialogContent>
//         </Box>
//     );
// }

// export default DeleteConversation;

import React, { useState } from 'react';
import { Box, IconButton, Divider, Button, DialogContent } from '@mui/material';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import CloseIcon from '@mui/icons-material/Close';
import { blue } from '@mui/material/colors';
import { ipadProScreen, mobileScreen, tabletScreen, theme } from '../Theme/Theme';

function DeleteConversation({ handleModalClose }) {
    return (
        <Box
            sx={{
                position: 'relative',
                backgroundColor: '#fff',
                width: '40%',
                minHeight: '60px',
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
                },
            }}
        >
            <Box
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
                        Delete conversation from your inbox
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
                        // bgcolor: '#339999',
                        height: '60px',
                        display: 'flex',
                        alignItems: 'center',
                        // mx: 2,
                        justifyContent: 'center',
                    }}
                >
                    <CustomizeTypography
                        sx={{
                            color: '#404040',
                            fontSize: '16px',
                            // textAlign: 'center',
                        }}
                    >
                        This conversation will be deleted permanently
                    </CustomizeTypography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-end',
                        mx: 2,
                    }}
                >
                    <Button
                        variant="outlined"
                        sx={{
                            borderRadius: '24px',
                            fontWeight: 'bold',
                            fontSize: '14px',
                            textTransform: 'capitalize',
                            color: '#404040',
                            borderColor: '#404040',
                            mr: '8px',
                            mb: 2,
                            '&:hover': {
                                bgcolor: 'transparent',
                                borderColor: '#404040',
                                // use box shadow instead of using border width (change size of button)
                                boxShadow: '0 0 0 1px #404040',
                            },
                        }}
                        onClick={handleModalClose}
                    >
                        Cancel
                    </Button>
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
                        onClick={handleModalClose}
                    >
                        Delete
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default DeleteConversation;
