import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main/Main';

const Movies = lazy(() => import('../pages/MoviesPage/MoviesPage.jsx'));
const HomePage =  lazy(() => import("../pages/HomePage/HomePage"));
const MovieDetails =  lazy(() => import("../pages/MovieDetails/MovieDetails.jsx"));
const Cast =  lazy(() => import("../components/Cast/Cast.jsx"));
const Review =  lazy(() => import("../components/Rewiew/Rewiew.jsx"));

export const App = () => {
  return (    
     <Routes>
      <Route path="/" element={<Main/>}>        
        <Route index element={<HomePage/>}/>
        <Route path="movies" element={<Movies/>} />
        <Route path="movies/:id" element={<MovieDetails/>}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Review />} />
        </Route> 
        </Route>    
    </Routes>
  );
};