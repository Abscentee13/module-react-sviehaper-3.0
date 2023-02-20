import { createTheme } from '@material-ui/core/styles';

export const lightTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            contrastText: '#FF6347',
            dark: "rgb(59, 71, 59)",
            light: "rgb(119, 132, 119)",
            main: "#556655"
        },
        secondary: {
            main: '#f50057',
        },
        tomato: '#FF6347',
        pink: {
            deep: '#FF1493',
            hot: '#FF69B4',
            medium: '#C71585',
            pale: '#DB7093',
            light: '#FFB6C1',
        },
    },


    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h5',
                    h2: 'h5',
                    h3: 'h5',
                    h4: 'h5',
                    h5: 'h5',
                    h6: 'h5',
                    subtitle1: 'h3',
                    subtitle2: 'h3',
                    body1: 'span',
                    body2: 'span',
                },
            },
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            contrastText: '#FFB6C1',
            dark: '#FFB6C1',
            light: "rgb(119, 132, 119)",
            main: "#556655"
        },
        secondary: {
            main: '#556655',
        },
    },


    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h5',
                    h2: 'h5',
                    h3: 'h5',
                    h4: 'h5',
                    h5: 'h5',
                    h6: 'h5',
                    subtitle1: 'h3',
                    subtitle2: 'h6',
                    body1: 'span',
                    body2: 'span',
                },
            },
        },
    },
});