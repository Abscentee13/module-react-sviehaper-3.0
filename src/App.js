import React, {useState} from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';

import { ThemeProvider } from "@material-ui/core/styles";
import {CssBaseline} from '@material-ui/core';

import {Header, ThemeSelection} from "./components";
import {ThemeContext} from './themes/theme-context';
import {lightTheme, darkTheme} from './themes/theme';
import {MoviesList} from "./components/MoviesList/MoviesList";



const App = () => {


    //////////////////////////////////////
    const [theme, setTheme] = useState(lightTheme ? lightTheme : darkTheme);

    const toggleTheme = () => {
        setTheme(theme === lightTheme ? darkTheme : lightTheme);
    };
////////////////////////////////////////////




    return (
        <Provider store={store}>
        <ThemeContext.Provider value={{ theme, setTheme: toggleTheme }}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ThemeSelection />
            <Header />

            <MoviesList />
        </ThemeProvider>
        </ThemeContext.Provider>
        </Provider>
    );
}

export {App};