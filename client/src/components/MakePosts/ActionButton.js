// definde button action
import { Box, Typography, Avatar } from '@mui/material';

export const ActionButton = ({ src, alt, text, onMouseEnter, onMouseLeave }) => (
    <Box
        sx={{
            '&:hover': {
                backgroundColor: '#8c8c8c1a',
                cursor: 'pointer',
            },
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: 2,
            py: 1,
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        <Avatar
            src={src}
            sx={{
                height: '20px',
                width: '20px',
                borderRadius: '0',
                mr: '4px',

                mr: 1,
            }}
            alt={alt}
        />
        <Typography sx={{ fontSize: '13px' }}>{text}</Typography>
    </Box>
);
