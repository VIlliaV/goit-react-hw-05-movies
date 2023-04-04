import { useEffect, useRef, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getResponseDetails } from 'utils/api';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const { poster_path } = movie;
  // const [pending, setPending] = useState(true);

  const pending = useRef(true);
  const firstRender = useRef(true);

  console.log('first', movie.id, pending.current, movieId);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      // console.log('🚀 ~ !movie.id:', !movie.id);

      getResponseDetails(movieId)
        .then(response => {
          console.log('object :>> ', response.status);
          setMovie(response.data);
        })
        .catch(error => {
          toast.error(`${error.message}`);
        })
        .finally(() => {
          console.log('finished');
          pending.current = false;
          // setPending(false);
        });
    }
    console.log('return');
    return;
  }, [movieId]);

  return (
    <>
      {pending.current ? (
        <>
          <p>load</p>
          <Toaster />
        </>
      ) : (
        movie.id && (
          <div>
            {console.log('RENDER', movie.id, pending.current, movieId)}
            <button />
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt=""
              />
              <h1>title</h1>
              <p>score</p>
              <h2>Overview</h2>
              <p>Overview(optoons)</p>
              <h3>Genres</h3>
              <p>Genres(optoons)</p>
            </div>
            <h4>Additional information</h4>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
            <Outlet />
          </div>
        )
      )}
    </>
  );
};
