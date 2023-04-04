import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { getResponseTrending } from 'utils/api';

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
    <div>
      <Toaster />
      {movies && movies.map(movie => <h2 key={movie.id}>{movie.title}</h2>)}
    </div>
  );
};
