import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '543e36a38e5b1b446ccf2af6eb6b1556'

export const getTrendMovies = async (controller) => {
    const { data } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`,
        { signal: controller.signal }
    );
    return data.results;
};

export const getMovieID = async (movieId, controller) => {
    const { data } = await axios.get(`/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
        { signal: controller.signal }
    );
    return data;
};