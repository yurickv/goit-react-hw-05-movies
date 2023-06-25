import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'Servise/Movie-serviseAPI';

export const useFetchFilmReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const controller = new AbortController();
        const fetchDataMovie = async () => {
            try {
                setIsLoading(true);

                const { results } = await getMovieReviews(id, controller);
                setReviews(results);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
                controller.abort();
            }
        };
        fetchDataMovie();

    }, [id]);

    return { reviews, isLoading, error };
};