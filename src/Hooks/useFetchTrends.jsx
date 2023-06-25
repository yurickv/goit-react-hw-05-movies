import { useState, useEffect } from 'react';
import { getTrendMovies } from 'Servise/Movie-serviseAPI';

export const useFetchTrends = () => {
    const [moviesTrends, setMoviesTrends] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                setIsLoading(true);

                const fetchedCountries = await getTrendMovies(controller);
                setMoviesTrends(fetchedCountries);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
                controller.abort();
            }
        };
        fetchData();

        // return () => {
        //     controller.abort();
        // };
    }, []);

    return { moviesTrends, isLoading, error };
};