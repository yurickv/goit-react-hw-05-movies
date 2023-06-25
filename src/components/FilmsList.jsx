import { MuviesList, MovieTitle } from '../styled-component/Home.styled'
import { NavLink, useLocation } from "react-router-dom";
import { routes } from '../routes';

export const FilmsList = ({ movies }) => {
    const location = useLocation();
    const imageDefaultUrl = 'https://image.tmdb.org/t/p/w300';

    return (
        <MuviesList as="ul">
            {movies.map(({ title, id, poster_path }) => (
                <li key={id}>
                    <NavLink to={`${routes.MOVIES}/${id}`} state={{ from: location }}>
                        <img src={imageDefaultUrl + poster_path} alt={title} />
                        <MovieTitle>{title}</MovieTitle>
                    </NavLink>
                </li>
            ))}
        </MuviesList>
    )
}