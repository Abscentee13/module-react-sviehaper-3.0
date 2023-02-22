import React, {useState} from 'react';

import {Navigate, Route, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from '@material-ui/core';


import { MainLayout } from "./layouts";
import { ThemeSelection } from "./components";
import { ThemeContext } from './themes/theme-context';
import { lightTheme, darkTheme } from './themes/theme';
//import { MoviesList } from "./components/MoviesList/MoviesList";
//import { MoviesPage } from './pages/MoviesPage';
//import {Switch} from "@mui/material";


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
            <Routes>
                <Route index element={ <Navigate to={'home'} /> } />
                <Route path={'home'} element={<MainLayout/>}/>
                {/*    /!*<Route index element={<Navigate to={'cars'}/>}/>*!/*/}

                {/*    /!*<Route element={<AuthRequireLayout/>}>*!/*/}
                {/*    /!*    <Route path={'cars'} element={<CarsPage/>}/>*!/*/}
                {/*    /!*</Route>*!/*/}

                {/*    <Route path={'movies'} element={<MoviesPage />}/>*/}
                {/*</Route>*/}
                    {/*<Route path={'register'} element={<RegisterPage/>}/>*/}

            </Routes>
        </ThemeProvider>
        </ThemeContext.Provider>
        </Provider>
    );
}

export {App};