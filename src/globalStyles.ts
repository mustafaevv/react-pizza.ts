import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body{
    background: #FFDF8C;
    font-family: 'Montserrat', sans-serif;
  }

  h1{
    font-weight: bold;
    font-size: 32px;
    color: #000000;
  }
  
  h5{
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    color: #000000;
  }
`;

export default GlobalStyles;
