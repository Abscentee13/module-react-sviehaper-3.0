import React, {useState} from 'react';

import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline, Container, Button } from '@material-ui/core';





function App() {
    const [darkMode, setDarkMode] = useState(false);

    const handleThemeChange = () => {
        setDarkMode(!darkMode);
    };

    const theme = createTheme({
        palette: {
            type: darkMode ? 'dark' : 'light',
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                <Button onClick={handleThemeChange}>
                    {darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                </Button>
                <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
                <p>Here is some text to demonstrate the theme change.</p>
            </Container>
        </ThemeProvider>
    );
}

export default App;