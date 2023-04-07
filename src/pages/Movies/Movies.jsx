import { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import { getResponseSearch } from 'utils/api';
import { Loader } from 'components/Loader/Loader';

export const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const [pending, setPending] = useState(false);

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    setPending(true);
    getResponseSearch(query)
      .then(response => {
        if (!response.data) throw new Error('Sorry but something wrong ');
        const { results } = response.data;
        if (!results.length)
          throw new Error(
            'According to your request - nothing was found...((('
          );
        setMovies(results);
      })
      .catch(error => {
        toast.error(`${error.message}`);
      })
      .finally(() => {
        setPending(false);
      });
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.searchWord.value.trim().toLowerCase() });
    e.currentTarget.reset();
  };

  return (
    <>
      <div className="searchbar">
        <form className="SearchForm" onSubmit={handleSubmit}>
          <input
            className="SearchForm-input"
            type="text"
            name="searchWord"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
        </form>
        <Toaster />
      </div>
      {pending ? (
        <Loader />
      ) : (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
