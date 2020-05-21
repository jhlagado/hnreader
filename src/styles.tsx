import { AnyObj } from "./types";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html, body {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

#root {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
}
`

export const customTheme = (theme: AnyObj) => {
  return {
    ...theme,
  };
};
