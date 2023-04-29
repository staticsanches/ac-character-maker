import type { HexColor, Octal, RGBAColor } from '@/types/svgColor'

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

const toOctal = (value: number): Octal => {
  if (value < 0) return 0
  if (value > 255) return 255
  return (value | 0) as Octal
}
