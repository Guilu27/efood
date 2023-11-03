import styled, { css } from 'styled-components'

import Background from '../../assets/images/header_background.svg'
import { colors } from '../../styles'

import { Props } from '.'

export const HeaderContainer = styled.header<Props>`
  background-image: url(${Background});
  padding: 2.5rem 0;
  text-align: center;

  ${(props) =>
    props.type === 'restaurant' &&
    css`
      div {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        text-align: left;
        ${Logo} {
          grid-column: 2;
          grid-row: 1;
        }
        ${HeaderButton} {
          grid-column: 3;
          grid-row: 1;
          display: flex;
          justify-content: end;
        }
        .restaurantsButton {
          grid-column: 1;
          grid-row: 1;
          display: flex;
          justify-content: flex-start;
        }
      }
    `}
`
export const Logo = styled.h1`
  display: grid;
  place-content: center;
`
export const Text = styled.h2`
  font-size: 2.25rem;
  font-weight: 900;
  margin-top: 8.5rem;
`
export const HeaderButton = styled.button`
  font-size: 1.125rem;
  font-weight: 900;
  cursor: pointer;
  text-decoration: none;
  color: ${colors.red};
  border: none;
  background-color: transparent;

  &:hover {
    text-decoration: underline;
  }
`
