import { ReactNode } from 'react';
import ErrorMessage from './ErrorMessage/ErrorMessage';

interface MainProps {
  children?: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <main>
      {/* <ErrorMessage isUserNotFound /> */}
      {children}
    </main>
  );
};

export default Main;
