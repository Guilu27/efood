import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'
import trash from '../../assets/images/trash_can.svg'
import close from '../../assets/images/close.svg'

type InputGroupProps = {
  maxWidth?: string
}

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
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

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.beige};
    text-align: center;
  }
`

export const CartCloseButton = styled.button`
  background-image: url(${close});
  width: 1rem;
  height: 1rem;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
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
export const Form = styled.form`
  width: 100%;
  h2 {
    color: ${colors.beige};
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  ${ButtonContainer} {
    margin-bottom: 0.5rem;
  }

  > div {
    margin-bottom: 1.5rem;
  }
`

export const Row = styled.div`
  display: flex;
  column-gap: 24px;
  margin-bottom: 0.5rem;
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  input {
    color: ${colors.gray};
    font-size: 0.875rem;
    font-weight: bold;
    width: 100%;
    height: 2rem;
    background-color: ${colors.beige};
    border: 2px solid ${colors.beige};
  }

  label {
    color: ${colors.beige};
    display: block;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }
`
