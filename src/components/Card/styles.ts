import styled, { css } from 'styled-components'
import { colors } from '../../styles'

import { Props } from '.'

import { ButtonContainer } from '../Button/styles'

export const CardContainer = styled.div<Props>`
  display: grid;
  grid-template-areas: 'card_image' 'card_details';
  position: relative;

  ${(props) =>
    props.type === 'foods' &&
    css`
      padding: 0.5rem;
      background-color: ${colors.red};
      color: ${colors.beige};

      ${CardDetails} {
        padding: 0.5rem 0;
      }

      ${ButtonContainer} {
        width: 100%;
        color: ${colors.red};
        background-color: ${colors.beige};
      }
    `}
`
export const CardDetails = styled.div`
  border: 1px solid ${colors.red};
  border-top: none;
  grid-area: card_details;
  padding: 0.5rem;
`

export const CardTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: bold;
`

export const CardDescription = styled.p`
  margin: 1rem 0;
  font-size: 0.875rem;
`

export const CardInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.5rem;
  margin: auto;
`

export const CardImage = styled.img`
  grid-area: card_image;
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
`
export const CardTags = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: auto auto;
`
