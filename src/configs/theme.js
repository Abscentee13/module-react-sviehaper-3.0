import { createTheme } from '@material-ui/core/styles';

export const lightTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#556655',
        },
        secondary: {
            main: '#f50057',
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#90caf9',
        },
        secondary: {
            main: '#556655',
        },
    },
});