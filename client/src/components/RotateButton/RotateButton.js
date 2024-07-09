import { IconButton } from '@mui/material';
export const RotateButton = ({ icon, handleClick }) => {
    return (
        <IconButton
            sx={{
                border: '1px solid #333',
                '&:hover': {
                    boxShadow: '0 0 0 1px black',
                },
                mr: 2,
            }}
            onClick={handleClick}
        >
            {icon}
        </IconButton>
    );
};
