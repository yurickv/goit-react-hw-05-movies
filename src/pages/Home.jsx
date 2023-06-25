import { Title } from '../styled-component/Home.styled';
import { Box } from '../styled-component/Box'
import { useFetchTrends } from 'Hooks/useFetchTrends';
import { Loader } from 'components/Loader';
import { FilmsList } from 'components/FilmsList';

const Home = () => {
    const { moviesTrends, isLoading, error } = useFetchTrends();

    return (
        <Box>
            <Title>Trending today</Title>
            {isLoading && <Loader />}
            {error && <Title>{error}</Title>}
            {moviesTrends.length && <FilmsList movies={moviesTrends} />}
        </Box>

    )
};

export default Home;