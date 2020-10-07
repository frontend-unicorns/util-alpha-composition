import styled from 'styled-components'

import { mq } from 'styles/mq'

export const Header = styled.header`
  margin: 1rem 0.75rem;

  ${mq.md} {
    margin: 1.5rem 0.75rem;
  }
`

export const ResultTitle = styled.h2`
  font-size: 1.2rem;

  ${mq.md} {
    font-size: 1.4rem;
  }
`

export const Subtitle = styled.p`
  margin: 0.75rem auto;
  max-width: 26rem;
`

export const Title = styled.h1`
  font-size: 1.4rem;
  margin: 1rem 0;

  ${mq.md} {
    font-size: 1.8rem;
    margin: 3.5rem 0 1rem;
  }
`
