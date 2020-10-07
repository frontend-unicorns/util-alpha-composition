import styled from 'styled-components'

import { mq } from 'styles/mq'
import { theme } from 'styles/theme'

export const HintText = styled.p`
  color: ${theme.color.text.grey};
  font-size: 0.7rem;
  margin: 0.25rem 0;
`

export const InputText = styled.input`
  border: 2px solid ${theme.color.text.grey};
  border-radius: 5px;
  font-size: 1rem;
  height: 2rem;
  margin-top: 0.25rem;
  padding: 0.25rem 0.5rem;
  text-transform: lowercase;
  width: 100%;
`

export const InputColor = styled.input`
  background: none;
  border: none;
  bottom: 0.25rem;
  height: 1.5rem;
  position: absolute;
  right: 0.25rem;
  width: 1.5rem;
`

export const Label = styled.label`
  display: inline-block;
  margin: 0.75rem;
  position: relative;
  text-align: left;
  width: calc(100% - 1.5rem);

  ${mq.md} {
    max-width: 320px;
  }
`

export const LabelText = styled.strong`
  display: inline-block;
  font-size: 0.9rem;
`
