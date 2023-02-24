import {MoviesPage} from "../pages/MoviesPage";

const MainLayout = () => {
    const page = 1;
    return (
        <div>
            <MoviesPage page = {page} genres = {[]} />
        </div>
    );
};

export {MainLayout};