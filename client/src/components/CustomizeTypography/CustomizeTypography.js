import { styled, Typography } from '@mui/material';

export const CustomizeTypography = styled(Typography)(({ fs, fw = false }) => ({
    fontSize: fs || '16px',
    fontWeight: fw ? 'bold' : 'normal',
}));
