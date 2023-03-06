import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

import FontStyles from '../fonts/FontStyles';

const Styles = createGlobalStyle`
  :root {
    /* Typography */
    --family: 'Inter', Arial, sans-serif;


    /* Colors */
    --colors-bg: #fff;
    --colors-accent: #6534ff;
    --colors-rest: #c3c3c6;
    --colors-rest-secondary: #f7f7f8;
    --text-color-primary: #050510;
    --text-color-secondary-light: #97979B;
    --text-color-secondary-dark: #55555C;

    /* Sizes */
    --sizes-min: 320px;
    --sizes-max: 1280px;
    --sizes-mobile: 560px;
  }

  body {
    font-family: var(--family);
    font-style: normal;
    background: var(--colors-bg);
    min-width: var(--sizes-min);
    max-width: var(--sizes-max);
    margin: 0 auto;
  }
`;

const GlobalStyle = () => {
  return (
    <>
      <Normalize />
      <FontStyles />
      <Styles />
    </>
  );
};

export default GlobalStyle;
