import React, { FC } from 'react'

import {
  calculateAdjustedColor,
  colorToHex,
  colorToHexa,
  colorToRgba,
} from 'util/color'

import * as S from './styled'

type Props = {
  background: Color
  foreground: Color
}

export const ResultBox: FC<Props> = ({ background, foreground }) => {
  const originalHexa = colorToHexa(foreground)
  const originalRgba = colorToRgba(foreground)
  const originalStyle = {
    color: originalRgba,
  }

  const adjustedColor = calculateAdjustedColor(background, foreground)
  const adjustedHexa = colorToHex(adjustedColor)
  const adjustedRgba = colorToRgba(adjustedColor)
  const adjustedStyle = {
    color: adjustedRgba,
  }

  const wrapperStyle = {
    background: colorToRgba({ ...background, alpha: 1 }),
  }

  return (
    <>
      <S.Wrapper style={wrapperStyle}>
        <S.Text style={originalStyle}>Original</S.Text>
        <S.Text style={originalStyle}>{originalHexa}</S.Text>
        <S.Text style={originalStyle}>{originalRgba}</S.Text>
      </S.Wrapper>
      <S.Wrapper style={wrapperStyle}>
        <S.Text style={adjustedStyle}>Adjusted</S.Text>
        <S.Text style={adjustedStyle}>{adjustedHexa}</S.Text>
        <S.Text style={adjustedStyle}>{adjustedRgba}</S.Text>
      </S.Wrapper>
    </>
  )
}
