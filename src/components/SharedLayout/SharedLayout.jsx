import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Logo, Link } from "./SharedLayout.styled";
import { FcFilmReel } from "react-icons/fc";
import { routes } from '../../Servise/routes';

export const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <Logo>
                    <FcFilmReel />
                    Let's discover the movies!
                </Logo>
                <nav>
                    <Link to={routes.HOME} end>
                        Home
                    </Link>
                    <Link to={routes.MOVIES}>Movies</Link>
                </nav>
            </Header>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>

        </Container>
    );
};
