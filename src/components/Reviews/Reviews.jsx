import { useEffect, useRef, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { Response } from 'components/Response/Response';

import { getResponseDetails } from 'utils/api';
import { Container } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [pending, setPending] = useState(true);

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      getResponseDetails(movieId, '/reviews')
        .then(response => {
          if (!response.data.results)
            throw new Error('Sorry but something wrong, we cant load reviews');
          if (response.data.results.length) setReviews(response.data.results);
        })
        .catch(error => toast.error(`Sorry, we can get a reviews: ${error}`))
        .finally(setPending(false));
    }
    return;
  }, [movieId]);

  return (
    <Container>
      {pending ? (
        <Loader />
      ) : (
        <ul>
          {reviews.length ? (
            reviews.map(response => {
              const { id } = response;
              return (
                <li key={id}>
                  <Response response={response} />
                </li>
              );
            })
          ) : (
            <p>We don't have any reviews for this movie.</p>
          )}
        </ul>
      )}
      <Toaster />
    </Container>
  );
};

export default Reviews;
