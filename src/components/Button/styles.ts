import styled from 'styled-components'

import { colors } from '../../styles'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  color: ${(props) =>
    props.variant === 'primary' ? colors.red : colors.beige};
  font-size: 0.875rem;
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.beige : colors.red};
  text-decoration: none;
  border: none;
  width: auto;
  cursor: pointer;
`
