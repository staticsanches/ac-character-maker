export type SvgColor = 'none' | string | SvgGradient

export type SvgGradient = SvgLinearGradient | SvgRadialGradient

export type SvgLinearGradient = {
  readonly type: 'linearGradient'

  readonly x1?: number | string
  readonly x2?: number | string
  readonly y1?: number | string
  readonly y2?: number | string

  readonly stops?: SvgGradientStop[]
}

export type SvgRadialGradient = {
  readonly type: 'radialGradient'

  readonly cx?: number | string
  readonly cy?: number | string
  readonly fx?: number | string
  readonly fy?: number | string
  readonly fr?: number | string
  readonly r?: number | string

  readonly stops?: SvgGradientStop[]
}

export type SvgGradientStop = {
  readonly offset?: number | string
  readonly color?: string
}
