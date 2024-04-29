import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        // for heading text and font bold for header text
        headingTextColor: '#000000e6',
        headerTextColor: '#0009',
        normalText: '#404040',
        primaryText: '#00000099',
        detailTextColor: '#2196f3',
        bgButtonHover: '#eeeeee',
        shadowColor: '#565656',
    },
    breakpoints: {
        // values: {
        //     mobile: 739,
        //     tablet: 740,
        //     ipadPro: 1023,
        //     desktop: 1024,
        // },
        values: {
            // đang xài. Nhưng show lên trên vài thiết bị còn bị lỗi
            // xs: 0,
            // sm: 739,
            // md: 740,x
            // lg: 1023,
            // xl: 1024,

            xs: 0, // Extra small devices (phones, 600px and down)
            sm: 739, // 600 or 739 - Small devices (portrait tablets and large phones, 600px and up)
            md: 740, // Medium devices (landscape tablets, 768px and up) --> tablet
            lg: 1023, // Large devices (laptops/desktops, 1024px and up) --> ipad pro
            xl: 1025, // Extra large devices (large laptops and desktops, 1025px and up)
        },
    },
});

// // Define a variable for the media query condition

// export const mobileScreen = `@media only screen and (max-width: ${theme.breakpoints.values.sm}px)`;
// export const tabletScreen = `@media only screen and (min-width: ${theme.breakpoints.values.md}px) and (max-width: ${theme.breakpoints.values.lg}px)`;
// export const ipadProScreen = `@media only screen and (max-width: ${theme.breakpoints.values.xl}px)`;
// export const desktopScreen = ` @media only screen and (min-width: ${theme.breakpoints.values.xl}px)`;

export const mobileScreen = `@media only screen and (max-width: ${theme.breakpoints.values.sm}px)`;

export const tabletScreen = `@media only screen and (min-width: ${theme.breakpoints.values.md}px) and (max-width: ${theme.breakpoints.values.lg}px)`;
// const numForIpadPro = theme.breakpoints.values.lg - 1;
// console.log('Ahiahi: ', numForTablet);
// console.log('tabletScreen: ', tabletScreen);

// put this size in the first when make responsive
export const ipadProScreen = `@media only screen and (max-width: ${
    theme.breakpoints.values.xl - 1
}px)`;
export const desktopScreen = `@media only screen and (min-width: ${
    theme.breakpoints.values.xl - 1
}px)`;
