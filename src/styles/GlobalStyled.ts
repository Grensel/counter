import { createGlobalStyle } from "styled-components";
import { thems } from "./Thems";
import { font } from "./Common";

export const GlobalStyled = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .App {
    height:100vw;
    background-color: ${thems.colors.background.primary};
  }

  h1 {
      ${font({
        color: `${thems.colors.text.title}`,
        weight: 600,
        Fmax: 80,
        Fmin: 70,
      })};
  }

  h2 {
    ${font({
      color: `${thems.colors.text.title}`,
      weight: 800,
      Fmax: 45,
      Fmin: 30,
    })};
  }

  h3 {
    ${font({
      color: `${thems.colors.text.title}`,
      weight: 800,
      Fmax: 80,
      Fmin: 66,
    })};
  }


  input {
    font-family: 'Epilogue', sans-serif;
    font-weight: 400;
  }

  label{
    ${font({
      color: `${thems.colors.text.title}`,
      weight: 400,
      Fmax: 20,
      Fmin: 16,
    })};
  }

  button {
    background-color: unset;
    border: transparent;
    cursor: pointer;
  }
`;
