import { Box, IconButton } from '@mui/material';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';

export const ProfileButton = ({ icon, textAction, handleClick }) => {
    return (
        <Box
            onClick={handleClick}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mr: 2,
                // mb: 1,
                borderRadius: 1,
                p: 1,
                '&:hover': {
                    bgcolor: '#525455',
                    cursor: 'pointer',
                },
            }}
        >
            <IconButton>{icon}</IconButton>
            <CustomizeTypography sx={{ color: '#fff' }}>{textAction}</CustomizeTypography>
        </Box>
    );
};
