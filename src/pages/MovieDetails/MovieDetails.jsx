import { useEffect, useRef, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getResponseDetails, getImage } from 'utils/api';
import noImg from '../../images/noimage.png';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const { poster_path, original_title, vote_average, overview, genres } = movie;
  const [pending, setPending] = useState(true);
  const [img, setImg] = useState(noImg);
  // const pending = useRef(true);
  const firstRender = useRef(true);

  console.log('first', movie, pending, movieId);
  useEffect(() => {
    if (poster_path)
      getImage(poster_path)
        .then(() => {
          console.log('askPikt');
          setImg(`https://image.tmdb.org/t/p/w500${poster_path}`);
        })
        .catch(error => {
          toast.error(`Sorry we can get a pictures: ${error.message}`);
        });
    if (firstRender.current) {
      firstRender.current = false;
      // console.log('🚀 ~ !movie.id:', !movie.id);

      getResponseDetails(movieId)
        .then(response => {
          // console.log('object :>> ', response.status);
          setMovie(response.data);
        })
        .catch(error => {
          toast.error(`${error.message}`);
        })
        .finally(() => {
          // console.log('finished');
          // pending.current = false;
          setPending(false);
        });
    }
    // console.log('return');
    return;
  }, [movieId, poster_path]);

  return (
    <>
      {pending ? (
        <p>load</p>
      ) : (
        movie.id && (
          <div>
            {console.log('RENDER', movie.id, pending, movieId, img, noImg)}
            <button type="button">back</button>
            <div>
              <img src={img} alt="" />
              <h1>{original_title}</h1>
              <p>{vote_average}</p>
              <h2>Overview</h2>
              <p>{overview}</p>
              <h3>Genres</h3>
              <ul>
                {genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
            <h4>Additional information</h4>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
            <Outlet />
          </div>
        )
      )}
      <Toaster />
    </>
  );
};
