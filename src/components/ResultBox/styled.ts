import styled from 'styled-components'

import { mq } from 'styles/mq'

export const Text = styled.p`
  font-weight: 700;
  margin: 0.25rem 0;
`

export const Wrapper = styled.div`
  display: inline-block;
  margin: 1rem 0.75rem;
  padding: 0.75rem;
  width: calc(100% - 1.5rem);

  ${mq.md} {
    max-width: 320px;
  }
`
