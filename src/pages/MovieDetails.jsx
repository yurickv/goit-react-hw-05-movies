import { useFetchFilmID } from 'Hooks/useFetchFilmID'
import { GoBackBtn } from '../components/GoBackBtn';
import { Loader } from 'components/Loader';
import { HiArrowLeft } from 'react-icons/hi';
import { MovieDetailsMarkup } from '../components/MovieDetailsMarkup'
import { Suspense } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { routes } from 'routes';
import { Container, Link } from "../styled-component/SharedLayout.styled";
import { Box } from 'styled-component/Box';



const MovieDetails = () => {
    const location = useLocation();
    const { movieInfo, isLoading, error } = useFetchFilmID();

    const goBackLink = location?.state?.from ?? routes.HOME;

    return (
        <Box>
            <Container>
                {isLoading && <Loader />}
                {error && <div>Error!!!</div>}
                {!isLoading &&
                    <GoBackBtn path={goBackLink}>
                        <HiArrowLeft size="24" />
                        Go Back
                    </GoBackBtn>}

                {movieInfo && <MovieDetailsMarkup movieInfo={movieInfo} />}

                {!isLoading && <Link to="cast" state={{ from: location.state?.from ?? '/' }}>Cast</Link>}

                {!isLoading && <Link to="reviews" state={{ from: location.state?.from ?? '/' }}>Reviews</Link>}

                <Suspense fallback={<div>Loading subpage...</div>}>
                    <Outlet />
                </Suspense>
            </Container>
        </Box>
    );

};
export default MovieDetails;
