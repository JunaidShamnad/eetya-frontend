import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
 
 html,body{
   overflow-x:hidden;
 }
 
 .inputStyle {
  width: 3rem !important;
  height: 3rem;
  margin: 0 1rem;
  font-size: 2rem;
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,0.3);
}
`;

export default GlobalStyle;
