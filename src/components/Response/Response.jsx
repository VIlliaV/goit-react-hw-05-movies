export const Response = ({ response }) => {
  const { author, content } = response;

  return (
    <>
      <h3>{`Author: ${author}`}</h3>
      <p>{content}</p>
    </>
  );
};
