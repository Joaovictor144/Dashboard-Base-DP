import {createGlobalStyle} from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar{
      width:5px;
      height:6px;
  }
  ::-webkit-scrollbar-track{
    box-shadow:inset 0 0 5px #a5aada;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb{
    background: #3ea175;
    border-radius:10px;
  }
  ::-webkit-scrollbar-thumb:hover{
    background: #a5aaad;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
`;