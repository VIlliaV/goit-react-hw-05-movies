import { useEffect, useRef, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Link, Outlet, useParams } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { getResponseDetails, getImage } from 'utils/api';
import noImg from '../../images/noimage.png';

import { Container } from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState({});
  const [pending, setPending] = useState(true);
  const [img, setImg] = useState(null);

  const firstRender = useRef(true);
  const isImg = useRef(false);

  const { poster_path, original_title, vote_average, overview, genres } = movie;

  useEffect(() => {
    if (poster_path)
      getImage(poster_path)
        .then(() => {
          setImg(`https://image.tmdb.org/t/p/w500${poster_path}`);
        })
        .catch(error => {
          setImg(noImg);
          toast.error(`Sorry we can get a pictures: ${error.message}`);
        })
        .finally(() => {
          isImg.current = true;
        });

    if (firstRender.current) {
      firstRender.current = false;

      getResponseDetails(movieId)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          toast.error(`${error.message}`);
        })
        .finally(() => {
          setPending(false);
        });
    }

    return;
  }, [movieId, poster_path]);

  return (
    <Container>
      {console.log('RENDER')}
      {pending ? (
        <Loader />
      ) : (
        movie.id && (
          <div>
            {/* {console.log('RENDER', movie.id, pending, movieId, img, isImg)} */}
            <button type="button">back</button>
            <div className="movie_head">
              <div className="movie_head_img">
                {isImg.current ? (
                  <img src={img} alt={original_title || 'no images'} />
                ) : (
                  <Loader />
                )}
              </div>

              <div className="movie_head_about">
                <h1>{original_title}</h1>
                <p>{`User Score:  ${(vote_average * 10).toFixed(0)}%`}</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h3>Genres</h3>
                <ul>
                  {genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <h4>Additional information</h4>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
            <Outlet />
          </div>
        )
      )}
      <Toaster />
    </Container>
  );
};
