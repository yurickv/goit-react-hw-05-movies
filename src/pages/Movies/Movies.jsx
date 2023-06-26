import { useFetchSearch } from '../../Hooks/useFetch_SearchFilm';
import { Loader } from '../../components/Loader/Loader';
import { FilmsList } from 'components/MuvieList/FilmsList';
import { SearchForm } from '../../components/SearchForm/SearchForm'
import { Title } from '../Home/Home.styled';
import { Box } from 'Servise/Box';


const Movies = () => {

    const { moviesSearch, isLoading, error, handleChange } = useFetchSearch();


    return (
        <Box >
            <SearchForm onSubmit={handleChange} />
            {isLoading && <Loader />}
            {error && <Title>{error}</Title>}
            {moviesSearch && <FilmsList movies={moviesSearch} />}
        </Box>
    );
};
export default Movies;