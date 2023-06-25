import { lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import { routes } from '../routes';
import { MovieDetails } from '../pages/MovieDetails';

const Movies = lazy(() => import('../pages/Movies'));
const Home = lazy(() => import('../pages/Home'));

const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path={routes.MOVIES} element={<Movies />} />
        <Route path={routes.MOVIES_ID} element={<MovieDetails />}>
          <Route path={routes.CAST} element={<Cast />} />
          <Route path={routes.REVIEWS} element={<Reviews />} />
        </Route>
        <Route path="*" index element={<Home />} />
      </Route>
    </Routes>
  );
};



