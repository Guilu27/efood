import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'
import trash from '../../assets/images/trash_can.svg'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const Sidebar = styled.aside`
  background-color: ${colors.red};
  z-index: 1;
  padding: 2rem 0.5rem 0 0.5rem;
  max-width: 22.5rem;
  width: 100%;

  ul {
    gap: 1rem;
    display: flex;
    flex-direction: column;
  }

  ${ButtonContainer} {
    width: 100%;
  }
`

export const CartItem = styled.li`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  background-color: ${colors.beige};
  padding: 0.5rem;
  padding-bottom: 0.75rem;
  position: relative;

  img {
    height: 5rem;
    width: 5rem;
    object-fit: cover;
    margin-right: 0.5rem;
  }

  h3 {
    color: ${colors.red};
    font-size: 1.125rem;
    font-weight: 900;
    margin-bottom: 1rem;
  }

  span {
    display: block;
    color: ${colors.red};
    font-size: 0.875rem;
  }

  button {
    background-image: url(${trash});
    width: 1rem;
    height: 1rem;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
  }
`
export const TotalValue = styled.div`
  color: ${colors.beige};
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 0.875rem;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
`
