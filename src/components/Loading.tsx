import styled from 'styled-components';

import loadingImg from '../images/loading-img.svg';

const StyledLoading = styled.img`
  width: 343px;
  height: 84px;
`;

const Loading = () => {
  return <StyledLoading src={loadingImg} />;
};

export default Loading;
