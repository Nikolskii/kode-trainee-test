import styled from 'styled-components';
import Loading from '../../../components/Loading';

const StyledLoadingList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

const LoadingList = () => {
  return (
    <StyledLoadingList>
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
    </StyledLoadingList>
  );
};

export default LoadingList;
