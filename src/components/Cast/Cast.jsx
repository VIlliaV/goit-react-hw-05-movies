import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

import { Actor } from 'components/Actor/Actor';
import { Loader } from 'components/Loader/Loader';

import { getResponseDetails } from 'utils/api';
import { Container } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [pending, setPending] = useState(true);

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      getResponseDetails(movieId, '/credits')
        .then(response => {
          if (!response.data.cast)
            throw new Error('Sorry but something wrong, we cant load cast');
          setCast(response.data.cast);
        })
        .catch(error => toast.error(`Sorry, we can get a cast: ${error}`))
        .finally(setPending(false));
    }
    return;
  }, [movieId]);

  return (
    <Container>
      {pending ? (
        <Loader />
      ) : (
        <ul className="actors">
          {cast.length ? (
            cast?.map(actor => {
              const { cast_id } = actor;
              return (
                <li key={cast_id}>
                  <Actor actor={actor} />
                </li>
              );
            })
          ) : (
            <p>No Cast</p>
          )}
        </ul>
      )}
      <Toaster />
    </Container>
  );
};

export default Cast;
