import PropTypes from 'prop-types';

export const Response = ({ response }) => {
  const { author, content } = response;

  return (
    <>
      <h3>{`Author: ${author}`}</h3>
      <p>{content}</p>
    </>
  );
};

Response.propTypes = {
  actor: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};
