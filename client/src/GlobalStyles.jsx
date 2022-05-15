import { createGlobalStyle } from "styled-components";

/***** STYLED COMPONENTS *****/

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  font-family: 'Nunito Sans', sans-serif;
  color: ${(props) => props.theme.app.color};
  font-family: sans-serif; // Шрифты подобрать
  }
  a {
  text-decoration: none;
  }
  p,h1,h2,h3,h4,h5,h6 {
    padding: 0;
    margin: 0;
}
  ul,ol
  {margin: 0;
  padding: 0;}
  li
  {padding: 0;
  margin: 0;
  list-style-type: none;}
  body {
      margin: 0;
  padding: 0;
  background-color: ${(props) => props.theme.app.background};
}
  button, input
  {padding: 0;
  margin: 0;
  cursor: pointer;
  border-color: transparent;
  background-color: transparent;
  border: none;}
`;
export default GlobalStyle;
