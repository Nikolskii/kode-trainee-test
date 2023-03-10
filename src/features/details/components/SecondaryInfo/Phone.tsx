import styled from 'styled-components';
import phoneIcon from '../../../../images/phone-icon.svg';

const Phone = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: var(--text-color-primary);
  padding: 25px 34px;
  background: transparent url(${phoneIcon}) no-repeat left center;
  margin: 0;
  text-decoration: none;
  transition: opacity 0.4s;

  &:hover {
    opacity: 0.6;
  }
`;

export default Phone;
