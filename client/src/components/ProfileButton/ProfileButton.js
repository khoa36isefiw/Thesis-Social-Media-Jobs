import { Box, IconButton } from '@mui/material';
import { CustomizeTypography } from '../CustomizeTypography/CustomizeTypography';
import { mobileScreen } from '../Theme/Theme';

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
                [mobileScreen]: {
                    p: '4px',
                },
            }}
        >
            <IconButton>{icon}</IconButton>
            <CustomizeTypography sx={{ color: '#fff' }}>{textAction}</CustomizeTypography>
        </Box>
    );
};
