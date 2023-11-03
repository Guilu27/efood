import styled, { css } from 'styled-components'

import { Props } from '.'

export const CardsContainer = styled.main<Omit<Props, 'restaurants'>>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2rem 0;
  padding-top: 5rem;
  padding-bottom: 7.5rem;
  column-gap: 5rem;
  row-gap: 3rem;

  @media (max-width: 768px) {
    padding: 1rem 0;
    grid-template-columns: 1fr;
  }

  ${(props) =>
    props.type === 'foods' &&
    css`
      grid-template-columns: repeat(3, 1fr);
      align-items: center;
      text-align: left;
      gap: 2rem;
    `}
`
