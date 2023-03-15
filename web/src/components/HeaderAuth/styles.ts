import styled from 'styled-components'
import { colors } from '../../constants/colors'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin: 0;
    color: ${colors.gray};
    font-style: italic;
    font-weight: bold;
    text-align: center;
    text-shadow: 4px 3px #bababa;

    &:nth-child(1) {
      font-size: 4.063rem;
      width: 15.25rem;
      margin-bottom: 30px;
    }
    &:nth-child(2) {
      font-size: 1.375rem;
      width: 9rem;
      height: 39px;
      color: ${colors.white};
      background-color: ${colors.green};
      background: linear-gradient(90deg, #707070 0%, #b5c401 35%, #27c383 100%);
      border-radius: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;

      position: relative;
      animation-name: move;
      animation-duration: 5s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-delay: 2s;
    }
    &:nth-child(3) {
      font-size: 5.188rem;
    }
  }

  @keyframes move {
    0% {
      left: 0px;
    }
    25% {
      left: 50px;
    }
    50% {
      left: 0px;
    }
    75% {
      left: -50px;
    }
    100% {
      left: 0px;
    }
  }
`
