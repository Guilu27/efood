import styled from 'styled-components'
import { colors } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.red};
  color: ${colors.beige};
  font-size: 0.75rem;
  font-weight: bold;
  padding: 0.5rem 0.25rem;
  display: inline-block;
`
