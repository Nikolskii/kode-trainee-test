import { createGlobalStyle } from 'styled-components';

import InterRegularWoff2 from '../fonts/Inter-Regular.woff2';
import InterRegularWoff from '../fonts/Inter-Regular.woff';
import InterMediumWoff2 from '../fonts/Inter-Medium.woff2';
import InterMediumWoff from '../fonts/Inter-Medium.woff';
import InterSemiBoldWoff2 from '../fonts/Inter-SemiBold.woff2';
import InterSemiBoldWoff from '../fonts/Inter-SemiBold.woff';
import InterBoldWoff2 from '../fonts/Inter-Bold.woff2';
import InterBoldWoff from '../fonts/Inter-Bold.woff';

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 400;
    font-display: swap;
    src: url(${InterRegularWoff2}) format("woff2"),
        url(${InterRegularWoff}) format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 500;
    font-display: swap;
    src: url(${InterMediumWoff2}) format("woff2"),
        url(${InterMediumWoff}) format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 600;
    font-display: swap;
    src: url(${InterSemiBoldWoff2}) format("woff2"),
        url(${InterSemiBoldWoff}) format("woff");
  }


  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 700;
    font-display: swap;
    src: url(${InterBoldWoff2}) format("woff2"),
        url(${InterBoldWoff}) format("woff");
  }
`;

export default FontStyles;
