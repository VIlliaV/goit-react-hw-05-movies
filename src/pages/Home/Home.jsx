import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

import { getResponseTrending } from 'utils/api';
import { Container } from './Home.styled';

export const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getResponseTrending()
      .then(response => {
        const { results } = response.data;
        if (results.length < 1)
          throw new Error('Нічого популярного на жаль немає');
        setMovies(results);
      })
      .catch(error => {
        toast.error(`${error.message}`);
      });
  }, []);

  return (
    <Container>
      <Toaster />
      {movies &&
        movies.map(movie => (
          <Link to={`movies/${movie.id}`} key={movie.id}>
            {movie.title}
          </Link>
        ))}
    </Container>
  );
};
