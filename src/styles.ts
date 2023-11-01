import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff8f1',
  white2: '#fff',
  beige: '#FFEBD9',
  red: '#E66767'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing:border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    line-height: calc(1em + 0.5rem);
  }

  body{
    background-color: ${colors.white};
    color: ${colors.red};
  }

  .container {
    max-width: 1024px;
    width: 98%;
    margin: 0 auto;
  }
`
