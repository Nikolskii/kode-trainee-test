import { useNavigate } from 'react-router-dom';

import Img from './Img';
import Title from './Title';
import Button from './Button';
import Subtitle from './Subtitle';
import errorImg from '../../images/error-img.svg';
import notFoundImg from '../../images/not-found-error.svg';
import StyledErrorMessage from './StyledErrorMessage';
import ErrorMessageProps from '../../interfaces/errorMessageProps';

const ErrorMessage = ({
  isError,
  isEmployeesNotFound,
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
      {isEmployeesNotFound && (
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
