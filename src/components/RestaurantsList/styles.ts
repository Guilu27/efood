import styled from 'styled-components'

export const RestaurantsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2rem;
  padding-top: 5rem;
  padding-bottom: 7.5rem;
  column-gap: 5rem;
  row-gap: 3rem;

  @media (max-width: 768px) {
    padding: 2rem;
    grid-template-columns: 1fr;
  }
`
