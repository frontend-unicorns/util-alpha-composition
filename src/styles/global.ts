import 'sanitize.css'
import { createGlobalStyle } from 'styled-components'

import { theme } from './theme'

export const GlobalStyles = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-family: sans-serif;
    font-size: 125%;
    height: 100%;
  }

  body {
    background-color: ${theme.color.background.light};
    color: ${theme.color.text.dark};
    font-size: 0.8rem;
    text-align: center;
  }

  #root {
    height: 100%;
    width: 100%;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
`
