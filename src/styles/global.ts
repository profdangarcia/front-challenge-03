import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100%;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px 'Nunito Sans', sans-serif;;
  }

  button {
    cursor: pointer;
  }

  #root {
    padding: 40px 20px;
  }

`;
