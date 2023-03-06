import styled from 'styled-components';

const Title = styled.h1`
  color: var(--text-color-primary);
  padding: 0 8px;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  margin: 0;

  @media (max-width: 560px) {
    display: none;
  }
`;

export default Title;
