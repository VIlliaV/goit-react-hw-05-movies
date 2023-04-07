import { Suspense, useEffect, useRef, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { getResponseDetails, getImage } from 'utils/api';
import noimage500x750 from '../../images/noimage500x750.png';

import { Container } from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const [movie, setMovie] = useState({});
  const [pending, setPending] = useState(true);
  const [img, setImg] = useState(null);

  const firstRender = useRef(true);
  const isImg = useRef(false);

  const backToPage = location.state?.from ?? '/';
  const { poster_path, original_title, vote_average, overview, genres } = movie;

  useEffect(() => {
    if (poster_path) {
      getImage(poster_path)
        .then(() => {
          setImg(`https://image.tmdb.org/t/p/w500${poster_path}`);
        })
        .catch(error => {
          setImg(noimage500x750);
          toast.error(`Sorry we can get a pictures: ${error.message}`);
        })
        .finally(() => {
          isImg.current = true;
        });
    } else if (original_title) {
      setImg(noimage500x750);
      isImg.current = true;
    }

    if (firstRender.current) {
      firstRender.current = false;

      getResponseDetails(movieId)
        .then(response => {
          if (!response.data) throw new Error('Sorry but something wrong ');
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
  }, [original_title, movieId, poster_path]);

  return (
    <Container>
      {pending ? (
        <Loader />
      ) : (
        movie.id && (
          <div>
            <Link to={backToPage}>BACK</Link>
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
                  {genres?.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <h4>Additional information</h4>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        )
      )}
      <Toaster />
    </Container>
  );
};
