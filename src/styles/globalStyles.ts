import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    /* Aqui nós definimos a DM Sans, com a sans-serif de reserva caso a internet caia */
    font-family: 'DM Sans', sans-serif;
  }

  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyles;