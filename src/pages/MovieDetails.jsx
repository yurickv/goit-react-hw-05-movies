import { useFetchFilmID } from 'Hooks/useFetchFilmID'
import { GoBackBtn } from '../components/GoBackBtn/GoBackBtn';
import { Loader } from 'components/Loader/Loader';
import { HiArrowLeft } from 'react-icons/hi';
import { MovieDetailsMarkup } from '../components/MuvieList/MovieDetailsMarkup'
import { Suspense } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { routes } from 'Servise/routes';
import { Container, Link } from "../components/SharedLayout/SharedLayout.styled";




const MovieDetails = () => {
    const location = useLocation();
    const { movieInfo, isLoading, error } = useFetchFilmID();

    const goBackLink = location?.state?.from ?? routes.HOME;

    return (

        <Container padding={20}>
            {isLoading && <Loader />}
            {error && <div>Error!!!</div>}
            {!isLoading &&
                <GoBackBtn path={goBackLink}>
                    <HiArrowLeft size="24" />
                    Go Back
                </GoBackBtn>}

            {movieInfo && <MovieDetailsMarkup movieInfo={movieInfo} />}

            {!isLoading && <Link to="cast" state={{ from: location.state?.from ?? `${routes.HOME}` }}>Cast</Link>}

            {!isLoading && <Link to="reviews" state={{ from: location.state?.from ?? `${routes.HOME}` }}>Reviews</Link>}

            <Suspense fallback={<div>Loading subpage...</div>}>
                <Outlet />
            </Suspense>
        </Container>

    );

};
export default MovieDetails;
