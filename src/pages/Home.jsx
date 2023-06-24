import { Title, TrendingList, MovieTitle } from '../styled-component/Home.styled';
import { Box } from '../styled-component/Box'
import axios from 'axios';
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

const Home = () => {
    const [moviesTrends, setMoviesTrends] = useState([]);
    const location = useLocation();

    useEffect(() => {

        const controller = new AbortController();
        try {
            (function getTrends() {
                axios
                    .get(
                        'https://api.themoviedb.org/3/trending/movie/day?api_key=543e36a38e5b1b446ccf2af6eb6b1556',
                        { signal: controller.signal }
                    )
                    .then(({ data }) => {
                        setMoviesTrends(data.results);
                    });
            })();
        } catch (error) {
            console.log(error);
        }

        return () => {
            controller.abort();
        };
    }, []);
    const imageDefaultUrl = 'https://image.tmdb.org/t/p/w300';

    return (
        <Box>
            <Title>Trending today</Title>
            <TrendingList as="ul">
                {moviesTrends.map(({ title, id, poster_path }) => (
                    <li key={id}>
                        <NavLink to={`/movies/${id}`} state={{ from: location }}>
                            <img src={imageDefaultUrl + poster_path} alt={title} />
                            <MovieTitle>{title}</MovieTitle>
                        </NavLink>
                    </li>
                ))}
            </TrendingList>
        </Box>

    )
};

export default Home;