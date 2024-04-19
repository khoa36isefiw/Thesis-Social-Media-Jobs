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
        // values: {
        //     mobile: 739,
        //     tablet: 740,
        //     ipadPro: 1023,
        //     desktop: 1024,
        // },
        values: {
            xs: 0,
            sm: 739,
            md: 740,
            lg: 1023,
            xl: 1024,

            // sm: 0,
            // xs: 739,
            // md: 740,
            // lg: 1023,
        },
    },
});

// // Define a variable for the media query condition
// const mobileScreen = '@media only screen and (max-width: 46.1875em)';
// const tabletScreen = '@media only screen between (min-width: 46.25em) and (max-width:63.9375em)';
// const desktopScreen = '@media only screen and (min-width: 64em)';

export const mobileScreen = `@media only screen and (max-width: ${theme.breakpoints.values.sm}px)`;
export const tabletScreen = `@media only screen and (min-width: ${theme.breakpoints.values.md}px) and (max-width: ${theme.breakpoints.values.lg}px)`;
export const ipadProScreen = `@media only screen and (max-width: ${theme.breakpoints.values.xl}px)`;
export const desktopScreen = ` @media only screen and (min-width: ${theme.breakpoints.values.xl}px)`;
