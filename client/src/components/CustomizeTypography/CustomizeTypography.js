import { styled, Typography } from '@mui/material';

export const CustomizeTypography = styled(Typography)(({ fs }) => ({
    fontSize: fs || '16px',
}));
