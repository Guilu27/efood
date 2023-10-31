import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${colors.beige};
  padding: 2.5rem;
  text-align: center;

  p {
    font-size: 0.625rem;
    max-width: 28rem;
    width: 100%;
    margin: 0 auto;
  }
`
export const FooterSocials = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto;
  place-content: center;
  place-items: center;
  column-gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 5rem;
`
