import styled from 'styled-components'
import { colors } from '../../styles'

export const CardContainer = styled.div`
  display: grid;
  grid-template-areas: 'resturant_image' 'restaurant_details';
  position: relative;
`
export const RestaurantDetails = styled.div`
  border: 1px solid ${colors.red};
  border-top: none;
  grid-area: restaurant_details;
  padding: 8px;

  h2 {
    font-size: 1.125rem;
    font-weight: bold;
  }

  & > p {
    margin: 1rem 0;
  }

  div {
    display: grid;
    grid-template-columns: 1fr auto;
    place-content: center;
    gap: 0.5rem;
  }
`
export const RestaurantImage = styled.img`
  grid-area: resturant_image;
  width: 100%;
`
export const RestaurantTags = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: auto auto;
`
