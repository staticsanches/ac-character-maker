import colorConvert from 'color-convert'

import type { HexColor, Octal, RGBAColor, SvgColor } from '@/types/svgColor'

const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
export const isHexColor = (color: unknown): color is HexColor => typeof color === 'string' && hexRegex.test(color)

const isOctal = (value: unknown): value is Octal =>
  typeof value === 'number' && Number.isInteger(value) && value >= 0 && value <= 255

export const isRGBAColor = (color: unknown): color is RGBAColor =>
  color !== null &&
  typeof color === 'object' &&
  'r' in color &&
  isOctal(color.r) &&
  'g' in color &&
  isOctal(color.g) &&
  'b' in color &&
  isOctal(color.b) &&
  (!('a' in color) || color.a === undefined || (typeof color.a === 'number' && color.a >= 0 && color.a <= 1))

export const darken = (color: SvgColor, value: number = 5): SvgColor => {
  if (isHexColor(color)) {
    const hsl = colorConvert.hex.hsl(color.substring(1))
    hsl[2] -= value
    if (hsl[2] < 0) {
      hsl[2] = 0
    }
    return `#${colorConvert.hsl.hex(hsl)}`
  }
  if (isRGBAColor(color)) {
    const hsl = colorConvert.rgb.hsl([color.r, color.g, color.b])
    hsl[2] -= value
    if (hsl[2] < 0) {
      hsl[2] = 0
    }
    const [r, g, b] = colorConvert.hsl.rgb(hsl)
    return { r: toOctal(r), g: toOctal(g), b: toOctal(b), ...(color.a !== undefined ? { a: color.a } : {}) }
  }
  return color // unable to darken gradient
}

const toOctal = (value: number): Octal => {
  if (value < 0) return 0
  if (value > 255) return 255
  return (value | 0) as Octal
}
