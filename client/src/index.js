import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './layouts/GlobalStyles/GlobalStyles';
import reportWebVitals from './reportWebVitals';

// import { theme } from './components/Theme/Theme';
import { ThemeProvider } from '@mui/material';
import { unstable_createMuiStrictModeTheme } from '@mui/material/styles';
import { theme } from './components/Theme/Theme';

// const theme = unstable_createMuiStrictModeTheme();
const mergeTheme = {
    theme,
    ...unstable_createMuiStrictModeTheme(),
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ThemeProvider theme={mergeTheme}>
            <GlobalStyles>
                <App />
            </GlobalStyles>
        </ThemeProvider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
