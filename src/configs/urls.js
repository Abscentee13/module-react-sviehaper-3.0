const API_KEY = "c4afbfa3afc24cd4799e5c009de0e848";

export const requests = {

};

// https://api.themoviedb.org/3/movie/157336?api_key={api_key}
//     https://api.themoviedb.org/3/movie/157336/videos?api_key={api_key}
//https://api.themoviedb.org/3/movie/5/lists?api_key=c4afbfa3afc24cd4799e5c009de0e848&language=en-US&page=1
//https://api.themoviedb.org/3/discover/movie?api_key=c4afbfa3afc24cd4799e5c009de0e848&language=en-US&page=5


const baseURL = 'https://api.themoviedb.org'

const urls = {
    genres: '/3/genre/movie/list?',
    movies: '/3/discover/movie?',
    videos: '/3/movie/157336/videos',
    nowPlaying: '/movie/now_playing',
    popular: '/movie/popular',
    topRated: '/movie/top_rated',
    upcoming: '/movie/upcoming',
}


console.log(baseURL + urls.movies + API_KEY);
export {
    baseURL,
    urls,
    API_KEY
};
