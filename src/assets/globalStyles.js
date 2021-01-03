import { createGlobalStyle } from 'styled-components';
import colors from './variables.js';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.darkGray};
  }

  h1, h2, h3, h4, p, span, text, a,
  div, li, label {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0.05em;
    color: ${colors.white};
  }
`

export default GlobalStyle;