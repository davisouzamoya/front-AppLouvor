import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root{
      --background: rgba(31,78,120,255);
      --backTransparent: rgba(161,161,161,0.1);
      --white: white;
      --black: black;
      --button: rgba(54, 88, 122);
      --buttonHover: #2c4661;
      --menuHover: #f1f1f1;
      --backLoading: rgba(255,255,255, 0.5);
      --loadingP: #027cbf;
      --loadingHover: #027cbf;
      --menu: #56CCF2;
      --select: rgba(121,121,121,0.1);
      --selectSecond: rgba(56, 104, 148);
    }
    a{
      text-decoration: none;
      color: inherit; 
      display:grid
    }

  body {
    background: var(--background);
    font-family: 'Roboto', sans-serif;
    margin:0; 
    padding:0;
    margin-left: 7px;
    margin-right: 10px;
  }

  body, input, button {
    font: 16px "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }
  
  body::-webkit-scrollbar,
  textarea::-webkit-scrollbar{
    width: 0px;              
  }

body::-webkit-scrollbar-track,
textarea::-webkit-scrollbar-track{
  background: transparent;       
}

body::-webkit-scrollbar-thumb,
textarea::-webkit-scrollbar-thumb{
  background-color: transparent;    
  border-radius: 20px;       
  border: 0px;  
}
`;
