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
`

export const RestaurantTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: bold;
`

export const RestaurantDescription = styled.p`
  margin: 1rem 0;
  font-size: 0.875rem;
`

export const RestaurantInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.5rem;
  margin: auto;
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
