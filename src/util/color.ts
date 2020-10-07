/* eslint-disable complexity */

export const computeColor = (rawColor: string): Color | null => {
  const cleanedColor = rawColor
    .replace('#', '')
    .replace('rgba(', '')
    .replace('rgb(', '')
    .replace(')', '')

  const splitColor = cleanedColor.split(',').map((val) => val.trim())

  // HEX color
  if (splitColor.length === 1) {
    const result = /^(?<r>[a-f\d]{2})(?<g>[a-f\d]{2})(?<b>[a-f\d]{2})(?<a>[a-f\d]{2})?$/iu.exec(
      splitColor[0]
    )

    return result?.groups
      ? {
          red: parseInt(result.groups.r, 16),
          green: parseInt(result.groups.g, 16),
          blue: parseInt(result.groups.b, 16),
          alpha: result.groups.a ? parseInt(result.groups.a, 16) / 255 : 1,
        }
      : null
  }

  // RGB color
  if (splitColor.length === 3 || splitColor.length === 4) {
    const [red, green, blue, alpha] = splitColor
    return red && green && blue
      ? {
          red: parseInt(red, 10),
          green: parseInt(green, 10),
          blue: parseInt(blue, 10),
          alpha: alpha ? parseFloat(alpha) : 1,
        }
      : null
  }

  return null
}

const calculateAdjustedColorValue = (
  background: number,
  foreground: number,
  alpha: number
): number => {
  return Math.round(alpha * foreground + (1 - alpha) * background)
}

export const calculateAdjustedColor = (
  background: Color,
  foreground: Color
): Color => {
  const foregroundAlpha = foreground.alpha

  return {
    red: calculateAdjustedColorValue(
      background.red,
      foreground.red,
      foregroundAlpha
    ),
    green: calculateAdjustedColorValue(
      background.green,
      foreground.green,
      foregroundAlpha
    ),
    blue: calculateAdjustedColorValue(
      background.blue,
      foreground.blue,
      foregroundAlpha
    ),
    alpha: 1,
  }
}

const numToHexNum = (num: number) => num.toString(16).padStart(2, '0')

export const colorToHex = ({ red, green, blue }: Color): string =>
  `#${numToHexNum(red)}${numToHexNum(green)}${numToHexNum(blue)}`

export const colorToHexa = ({ red, green, blue, alpha }: Color): string =>
  `#${numToHexNum(red)}${numToHexNum(green)}${numToHexNum(blue)}${numToHexNum(
    Math.round(alpha * 255)
  )}`

export const colorToRgba = ({ red, green, blue, alpha }: Color): string =>
  `rgba(${red}, ${green}, ${blue}, ${alpha.toPrecision(3)})`
