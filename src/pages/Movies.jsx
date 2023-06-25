import { useFetchSearch } from '../Hooks/useFetch_SearchFilm';
import { Loader } from '../components/Loader';
import { FilmsList } from 'components/FilmsList';
import { SearchForm } from '../components/SearchForm'
import { Title } from '../styled-component/Home.styled';
import { Box } from 'styled-component/Box';


export const Movies = () => {

    const { moviesSearch, isLoading, error, handleChange } = useFetchSearch();


    return (
        <Box >
            <SearchForm onSubmit={handleChange} />
            {isLoading && <Loader />}
            {error && <Title>{error}</Title>}
            {moviesSearch && <FilmsList movies={moviesSearch} />}
        </Box>
    );
}