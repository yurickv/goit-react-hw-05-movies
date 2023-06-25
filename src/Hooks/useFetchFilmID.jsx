import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieID } from 'Servise/Movie-servise';

export const useFetchFilmID = () => {
    const [movieInfo, setMovieInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const { id } = useParams();
    // console.log(id);

    useEffect(() => {
        const controller = new AbortController();
        const fetchDataMovie = async () => {
            try {
                setIsLoading(true);

                const fetchedMovie = await getMovieID(id, controller);
                setMovieInfo(fetchedMovie);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
                controller.abort();
            }
        };
        fetchDataMovie();
    }, [id]);

    return { movieInfo, isLoading, error };
};