import styled from 'styled-components'
import { colors } from '../../styles'

export const Image = styled.div`
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
  }

  position: relative;
  width: 100%;
  height: 17.5rem;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    height: 100%;
    padding-top: 1.5rem;
    padding-bottom: 2rem;
    font-size: 2rem;
    color: ${colors.white2};

    p {
      font-weight: 100;
    }
  }
`
