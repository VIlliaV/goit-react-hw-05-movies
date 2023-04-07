import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { getImage } from 'utils/api';
import { Loader } from 'components/Loader/Loader';
import noimage500x750 from '../../images/noimage500x750.png';
import { Container } from './Actor.styled';

export const Actor = ({ actor }) => {
  const [img, setImg] = useState(null);

  const isImg = useRef(false);

  const { character, name, profile_path } = actor;

  useEffect(() => {
    if (profile_path) {
      getImage(profile_path)
        .then(() => {
          setImg(`https://image.tmdb.org/t/p/w500${profile_path}`);
        })
        .catch(() => {
          setImg(noimage500x750);
        })
        .finally(() => {
          isImg.current = true;
        });
    } else {
      setImg(noimage500x750);
      isImg.current = true;
    }
    return;
  }, [profile_path]);

  return (
    <Container>
      <h3>{name}</h3>
      {isImg.current ? <img src={img} alt={name} width="100" /> : <Loader />}
      <p>{character}</p>
    </Container>
  );
};

Actor.propTypes = {
  actor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
    character: PropTypes.string.isRequired,
  }),
};
