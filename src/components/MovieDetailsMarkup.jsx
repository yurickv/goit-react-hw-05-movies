import { Box } from '../styled-component/Box';
import {
    MovieTitle,
    MovieUserScore,
    MovieOverviewTitle,
    MovievOverview,
    MovieGenresTitle,
    MovieGenres,
} from '../styled-component/Movie-detial.styled';

export const MovieDetailsMarkup = ({ movieInfo }) => {
    const { title, poster_path, release_date, genres, vote_average, overview } =
        movieInfo || {};
    const imageDefaultUrl = 'https://image.tmdb.org/t/p/w300';

    return (
        <Box p="4" display="flex">
            <img src={imageDefaultUrl + poster_path} alt={title} />
            <Box ml="3">
                <MovieTitle>
                    {title} (<span>{release_date.slice(0, 4)}</span>)
                </MovieTitle>
                <MovieUserScore>
                    User score: {Math.round(vote_average * 10)}%
                </MovieUserScore>
                <MovieOverviewTitle>Overview</MovieOverviewTitle>
                <MovievOverview>{overview}</MovievOverview>
                <MovieGenresTitle>Genres: </MovieGenresTitle>
                {genres.map(({ name }) => (
                    <MovieGenres key={name}>{name}</MovieGenres>
                ))}
            </Box>
        </Box>
    );

};
