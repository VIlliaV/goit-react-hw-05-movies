import { Loader } from 'components/Loader/Loader';
import { useEffect, useRef, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { getImage, getResponseDetails } from 'utils/api';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [pending, setPending] = useState(true);

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      getResponseDetails(movieId, '/credits')
        .then(response => {
          setCast(response.data?.cast);
        })
        .catch(error => toast.error(`Sorry, we can get a cast: ${error}`))
        .finally(setPending(false));
    }
    return;
  }, [movieId]);

  return (
    <div>
      {pending ? (
        <Loader />
      ) : (
        <ul>
          {console.log('cast RENDER', cast, pending, movieId)}
          {cast.length &&
            cast.map(actor => {
              const { cast_id, character, name, profile_path } = actor;
              return (
                <li key={cast_id}>
                  <h3>{name}</h3>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt={name}
                  />
                  <p>{character}</p>
                </li>
              );
            })}
        </ul>
      )}
      <Toaster />
    </div>
  );
};
