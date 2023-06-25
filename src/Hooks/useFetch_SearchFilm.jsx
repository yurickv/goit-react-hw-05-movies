import { useState, useEffect } from 'react';
import { getMovieSearch } from 'Servise/Movie-serviseAPI';
import { useSearchParams } from 'react-router-dom';

export const useFetchSearch = () => {
    const [moviesSearch, setmoviesSearch] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();


    useEffect(() => {
        const controller = new AbortController();
        const film = searchParams.get('query');

        if (!film) {
            return;
        };

        const fetchData = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const fetchedMuvies = await getMovieSearch(film, controller);
                setmoviesSearch(fetchedMuvies);
                if (!fetchedMuvies.length) {
                    setError(`Зображення ${film} відсутні`);
                    return;
                };
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
                controller.abort();
            }
        };
        fetchData();

        // return () => {
        //     // controller.abort();
        //     setError(null);
        //     setmoviesSearch([]);
        // };
    }, [searchParams]);
    const handleChange = (query) => { setSearchParams({ query }) }
    return { moviesSearch, isLoading, error, handleChange };
};