import {Outlet} from "react-router-dom";
import {Header} from "../components";
import {MoviesPage} from "../pages/MoviesPage";

const MainLayout = () => {
    const page = 1;
    return (
        <div>
            <Header/>
            <MoviesPage page = {page} />
            {/*<Outlet/>*/}
        </div>
    );
};

export {MainLayout};