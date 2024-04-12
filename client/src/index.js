import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './layouts/GlobalStyles/GlobalStyles';
import reportWebVitals from './reportWebVitals';

// import { theme } from './components/Theme/Theme';
import { ThemeProvider } from '@mui/material';
import { unstable_createMuiStrictModeTheme } from '@mui/material/styles';
import { theme as customTheme } from './components/Theme/Theme';

// Merge the custom theme with the Material-UI theme
const mergedTheme = {
    ...unstable_createMuiStrictModeTheme(),
    ...customTheme,
};

// const theme = unstable_createMuiStrictModeTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <GlobalStyles>
            <App />
        </GlobalStyles>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
