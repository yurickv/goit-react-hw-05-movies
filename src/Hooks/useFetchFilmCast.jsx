import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'Servise/Movie-serviseAPI';

export const useFetchFilmCast = () => {
    const [actors, setActors] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const { id } = useParams();


    useEffect(() => {
        const controller = new AbortController();
        const fetchDataMovie = async () => {
            try {
                setIsLoading(true);

                const fetchedMovie = await getMovieCast(id, controller);
                setActors(fetchedMovie);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
                controller.abort();
            }
        };
        fetchDataMovie();

    }, [id]);

    return { actors, isLoading, error };
};