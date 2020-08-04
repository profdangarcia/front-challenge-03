import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    border: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
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

  :root {
    --dark-mode-elem: hsl(209, 23%, 22%);
    --dark-mode-bg: hsl(207, 26%, 17%);
    --light-mode-tx: hsl(200, 15%, 8%);
    --light-mode-input: hsl(0, 0%, 52%);
    --light-mode-bg: hsl(0, 0%, 98%);
    --light-mode-elem: hsl(0, 0%, 100%);
  }

`;
