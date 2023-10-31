import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

const buttonStyles = `
  color: ${colors.beige};
  font-size: 0.875rem;
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  background-color: ${colors.red};
  text-decoration: none;
  border: none;
  width: auto;
  cursor: pointer;
`

export const ButtonContainer = styled.button`
  ${buttonStyles}
`
export const ButtonLink = styled(Link)`
  ${buttonStyles}
`
