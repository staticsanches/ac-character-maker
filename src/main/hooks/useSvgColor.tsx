import type { SvgColor } from '@/types/svgColor'
import { isRGBAColor } from '@/utils/svgColorUtils'
import { useSvgLazyID } from './useSvgLazyID'

export const useSvgColor = (color: SvgColor): [string, Opt<number>, Opt<JSX.Element>] => {
  const [lazyID, lazyUrl] = useSvgLazyID(typeof color === 'string' || isRGBAColor(color) ? 'color' : color.type)

  let colorValue: string
  let colorOpacity: Opt<number>
  let definitionPiece: Opt<JSX.Element>
  if (typeof color === 'string') {
    colorValue = color
  } else if (isRGBAColor(color)) {
    colorValue = `rgb(${color.r}, ${color.g}, ${color.b})`
    colorOpacity = color.a
  } else {
    const id = lazyID()
    colorValue = lazyUrl()

    const stops = color.stops?.map((stop, index) => (
      <stop key={index} offset={stop.offset} stopColor={stop.color} stopOpacity={stop.opacity} />
    ))

    switch (color.type) {
      case 'linearGradient':
        definitionPiece = (
          <linearGradient id={id} x1={color.x1} x2={color.x2} y1={color.y1} y2={color.y2}>
            {stops}
          </linearGradient>
        )
        break
      case 'radialGradient':
        definitionPiece = (
          <radialGradient id={id} cx={color.cx} cy={color.cy} fx={color.fx} fy={color.fy} fr={color.fr} r={color.r}>
            {stops}
          </radialGradient>
        )
        break
    }
  }

  return [colorValue, colorOpacity, definitionPiece]
}
