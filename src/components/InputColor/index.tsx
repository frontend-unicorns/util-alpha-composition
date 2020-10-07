import React, { FC, useCallback, useState } from 'react'

import { colorToHex, computeColor } from 'util/color'

import * as S from './styled'

type Action = { type: 'CHANGE_VALUE'; value: string; color: Color | null }

type Props = {
  hintText?: string
  label: string
  onUpdate: (action: Action) => void
}

export const InputColor: FC<Props> = React.memo(
  ({ hintText, label, onUpdate }) => {
    const [colorValue, setColorValue] = useState<string>('')
    const [textValue, setTextValue] = useState('')

    const onChange = useCallback(
      (event: React.FormEvent<HTMLInputElement>) => {
        const newValue = event.currentTarget.value

        const computedColor = computeColor(newValue)

        setTextValue(newValue)
        setColorValue(computedColor ? colorToHex(computedColor) : '')

        onUpdate({
          type: 'CHANGE_VALUE',
          value: newValue,
          color: computedColor,
        })
      },
      [onUpdate]
    )

    return (
      <S.Label>
        <S.LabelText>{label}</S.LabelText>
        {hintText ? <S.HintText>{hintText}</S.HintText> : null}
        <S.InputText onChange={onChange} value={textValue} />
        <S.InputColor onChange={onChange} type="color" value={colorValue} />
      </S.Label>
    )
  }
)
