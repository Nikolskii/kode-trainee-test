import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { store } from './app/store';
import App from './App';
import GlobalStyle from './components/GlobalStyle';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <GlobalStyle />
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
);
