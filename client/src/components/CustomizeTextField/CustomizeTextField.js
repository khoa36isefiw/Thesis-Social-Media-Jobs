import { styled, TextField } from '@mui/material';

export const CustomizeTextField = styled(TextField)(
    ({ id, label, mt, wd, variant, inputFontSize, labelFontSize }) => ({
        width: 400,
        id: id || 'outlined-basic',
        marginTop: mt || '1px',
        '& label': {
            fontSize: labelFontSize || '16px',
        },
        '& input': {
            fontSize: inputFontSize || '16px',
        },
        // make space for label in text field
        '& .MuiInputBase-root': {
            fontSize: '2rem',
        },

        label: label || 'Email',
        variant: variant || 'outlined',

        // overflow: 'hidden',
        textOverflow: 'ellipsis',
    }),
);
