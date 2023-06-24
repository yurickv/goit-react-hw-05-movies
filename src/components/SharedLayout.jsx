import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Logo, Link } from "../styled-component/SharedLayout.styled";
import { FcFilmReel } from "react-icons/fc";

export const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <Logo>
                    <FcFilmReel />
                    Go_Discovery Film
                </Logo>
                <nav>
                    <Link to="/" end>
                        Home
                    </Link>
                    <Link to="/movies">Movies</Link>
                </nav>
            </Header>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>

        </Container>
    );
};
