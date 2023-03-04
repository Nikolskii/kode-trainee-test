import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from './Button';
import { Img } from './Img';
import { Subtitle } from './Subtitle';
import { Title } from './Title';
import errorImg from '../../images/error-img.svg';
import notFoundImg from '../../images/not-found-error.svg';

interface ErrorMessageProps {
  isError?: boolean;
  isUserNotFound?: boolean;
  isPageNotFound?: boolean;
}

const StyledErrorMessage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;
  padding: 133px 20px;
`;

const ErrorMessage = ({
  isError,
  isUserNotFound,
  isPageNotFound,
}: ErrorMessageProps) => {
  const navigate = useNavigate();

  return (
    <StyledErrorMessage>
      {isError && (
        <>
          <Img src={errorImg} alt="Произошла ошибка" />
          <Title>Какой-то сверхразум все сломал</Title>
          <Subtitle>Постараемся быстро починить</Subtitle>
          <Button onClick={() => window.location.reload()}>
            Попробовать снова
          </Button>
        </>
      )}
      {isUserNotFound && (
        <>
          <Img src={notFoundImg} alt="Сотрудник не найден" />
          <Title>Мы никого не нашли</Title>
          <Subtitle>Попробуй скорректировать запрос</Subtitle>
        </>
      )}
      {isPageNotFound && (
        <>
          <Img src={notFoundImg} alt="Страница не найдена" />
          <Title>Страница не найдена</Title>
          <Button onClick={() => navigate('/')}>Вернуться на главную</Button>
        </>
      )}
    </StyledErrorMessage>
  );
};

export default ErrorMessage;
