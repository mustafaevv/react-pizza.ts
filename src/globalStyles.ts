import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: #FFDF8C;
    font-family: 'Montserrat', sans-serif;
  }

  h1{
    font-weight: bold;
    font-size: 32px;
    color: #000000;
  }
`;

export default GlobalStyles;
