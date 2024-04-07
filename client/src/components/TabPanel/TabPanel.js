import { Box } from '@mui/material';

export const TabPanel = ({ children, value, index, ...other }) => (
    <div
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
        {...other}
    >
        {value === index && <Box p={0}>{children}</Box>}
    </div>
);
