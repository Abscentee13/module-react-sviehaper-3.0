const API_KEY = "c4afbfa3afc24cd4799e5c009de0e848";

export const requests = {
    // fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    // fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    // fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    // fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    // fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    // fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    // fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    // fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    // fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    // fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    // fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
};

// https://api.themoviedb.org/3/movie/157336?api_key={api_key}
//     https://api.themoviedb.org/3/movie/157336/videos?api_key={api_key}

const baseURL = 'https://api.themoviedb.org'

const urls = {
    genres: '/3/genre/movie/list?', //api_key=' // + API_KEY + '&language=en-US',
    movies: '/3/movie/157336',
    videos: '/3/movie/157336/videos'
    //comments: '/comments'
}

export {
    baseURL,
    urls,
    API_KEY
};
