// definde button action
import { Box, Typography, Avatar } from '@mui/material';
import { ipadProScreen, mobileScreen, tabletScreen } from '../Theme/Theme';

export const ActionButton = ({ handleAction, src, alt, text, onMouseEnter, onMouseLeave }) => (
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
            [ipadProScreen]: {
                px: 2,
            },
            [mobileScreen]: {
                px: 1,
            },
            [tabletScreen]: {
                px: 1,
            },
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={handleAction}
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
