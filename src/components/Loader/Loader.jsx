import { Triangle } from 'react-loader-spinner';
import { Container } from './Loader.styled';

export const Loader = () => {
  return (
    <Container>
      <Triangle
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Container>
  );
};
