import { Title } from './Home.styled';
import { Box } from '../../Servise/Box'
import { useFetchTrends } from 'Hooks/useFetchTrends';
import { Loader } from 'components/Loader/Loader';
import { FilmsList } from 'components/MuvieList/FilmsList';

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