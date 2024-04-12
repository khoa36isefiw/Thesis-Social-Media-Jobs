import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        // for heading text and font bold for header text
        headingTextColor: '#000000e6',
        headerTextColor: '#0009',
        normalText: '#404040',
        detailTextColor: '#2196f3',
    },
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 768,
            ipadPro: 1024,
            laptop: 1200,
            desktop: 1600,
            // laptop: 1024,
            // desktop: 1200,
        },
    },
});
