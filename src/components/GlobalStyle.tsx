import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

import FontStyles from '../fonts/FontStyles';

const Styles = createGlobalStyle`
  :root {
    /* Typography */
    --family: 'Inter', Arial, sans-serif;
    --text-color-primary: #050510;
    --text-color-secondary-light: #97979B;
    --text-color-secondary-dark: #55555C;

    /* Colors */
    --colors-bg: #fff;

    /* Sizes */
    --sizes-min: 320px;
    --sizes-max: 1280px;
  }

  body {
    font-family: var(--family);
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
