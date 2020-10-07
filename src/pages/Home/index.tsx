import React, { useState } from 'react'

import { InputColor } from 'components/InputColor'
import { ResultBox } from 'components/ResultBox'

import * as S from './styled'

export const HomePage = () => {
  const [backgroundColor, setBackgroundColor] = useState<Color | null>(null)
  const [foregroundColor, setForegroundColor] = useState<Color | null>(null)

  return (
    <>
      <S.Header>
        <S.Title>Opacity Calculator</S.Title>
        <S.Subtitle>
          This tool calculates the solid color value of foreground color with
          opacity, on top of a solid background color.
        </S.Subtitle>
      </S.Header>
      <InputColor
        hintText='e.g. "#42aaf4", "rgb(66, 170, 244)"'
        label="Background color"
        onUpdate={(action) => {
          if (action.type === 'CHANGE_VALUE' && action.color) {
            setBackgroundColor(action.color)
          }
        }}
      />
      <InputColor
        hintText='e.g. "#42aaf466", "rgb(66, 170, 244, .4)"'
        label="Foreground color"
        onUpdate={(action) => {
          if (action.type === 'CHANGE_VALUE' && action.color) {
            setForegroundColor(action.color)
          }
        }}
      />
      {foregroundColor && backgroundColor ? (
        <>
          <S.ResultTitle>Result</S.ResultTitle>
          <ResultBox
            background={backgroundColor}
            foreground={foregroundColor}
          />
        </>
      ) : null}
    </>
  )
}
