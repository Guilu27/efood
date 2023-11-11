import styled from 'styled-components'
import { colors } from '../../styles'

export const ModalContainer = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 1;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContent = styled.div`
  background-color: ${colors.red};
  color: ${colors.white};
  position: relative;
  z-index: 1;

  display: grid;
  grid-template-areas: 'food-image food-details';
  grid-template-columns: 1fr 2fr;
  gap: 1.5rem;

  padding: 2rem;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    grid-area: food-image;
  }
`
export const FoodDetails = styled.div`
  grid-area: food-details;
  font-size: 18px;
  padding-bottom: 2rem;

  h3 {
    font-size: 1.125rem;
  }

  p {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 0.875rem;

    span {
      display: block;
      margin-top: 2rem;
    }
  }
  img {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    max-width: 1rem;
    max-height: 1rem;

    cursor: pointer;
  }
`
