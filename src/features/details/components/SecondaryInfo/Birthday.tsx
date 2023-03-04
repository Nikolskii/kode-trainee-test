import styled from 'styled-components';
import starIcon from '../../../../images/star-icon.svg';

const Birthday = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: var(--text-color-primary);
  padding: 22px 34px;
  background: transparent url(${starIcon}) no-repeat left center;
  margin: 0;
`;

export default Birthday;
