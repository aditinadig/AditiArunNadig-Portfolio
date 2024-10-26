import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#0d0d0d',
        },
        text: {
            primary: '#e0e0e0',
            secondary: '#b3b3b3',
        },
        primary: {
            main: '#8E2DE2',
        },
        secondary: {
            main: '#b3b3b3',
        },
    },
    typography: {
        fontFamily: "'Courier New', Courier, monospace",
    },
});

export default theme;