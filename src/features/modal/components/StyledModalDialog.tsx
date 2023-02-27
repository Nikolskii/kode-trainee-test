import styled from 'styled-components';

export const StyledModalDialog = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 373px;
  background-color: var(--colors-bg);
  border-radius: 20px;
  padding: 24px 18px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 36px;
`;
