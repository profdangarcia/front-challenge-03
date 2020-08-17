import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    border: 0;
    font-size: 14px;
    transition: background 0.8s ease-in-out;
  }

  html, body, #root {
    height: 100%;
    background: ${props => props.theme.colors.bg};
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Nunito Sans', sans-serif;;
  }

  button {
    cursor: pointer;
  }
`;
