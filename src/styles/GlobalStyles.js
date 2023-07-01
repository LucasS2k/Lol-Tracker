import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}
html {
  height: auto;
  scroll-behavior: smooth;
  overflow-x: hidden;
}
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  overflow: hidden;
  height: auto;
  gap: 1rem;
  @media (max-width: 992px){
    max-width: 992px;
  }
  @media (max-width: 576px) {
  main {
    max-width: 576px;
  }}
}
`;
