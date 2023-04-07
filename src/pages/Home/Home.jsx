import { useEffect, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLocation } from 'react-router-dom';

import { getResponseTrending } from 'utils/api';
import { Container } from './Home.styled';

export const Home = () => {
  const location = useLocation();

  const [movies, setMovies] = useState([]);

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      getResponseTrending()
        .then(response => {
          if (!response.data) throw new Error('Sorry but something wrong ');
          const { results } = response.data;
          if (!results.length)
            throw new Error('Unfortunately, there is nothing popular');
          setMovies(results);
        })
        .catch(error => {
          toast.error(`${error.message}`);
        });
    }
  }, []);

  return (
    <Container>
      <Toaster />
      {movies.map(movie => (
        <Link
          to={`movies/${movie.id}`}
          state={{ from: location }}
          key={movie.id}
        >
          {movie.title}
        </Link>
      ))}
    </Container>
  );
};
