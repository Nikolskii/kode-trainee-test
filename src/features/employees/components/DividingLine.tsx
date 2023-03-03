import styled from 'styled-components';

const StyledDividingLine = styled.section`
  display: flex;
  align-items: center;
  padding: 20px 24px;
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--colors-rest);
`;

const Year = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  color: var(--colors-rest);
  padding: 0 74px;
  margin: 0;
`;

const DividingLine = () => {
  const year = new Date().getFullYear() + 1;

  return (
    <StyledDividingLine>
      <Line />
      <Year>{year}</Year>
      <Line />
    </StyledDividingLine>
  );
};

export default DividingLine;
