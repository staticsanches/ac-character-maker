import { useSvgColor } from '@/hooks/useSvgColor'
import { withPieceType } from '@/types/piece.d'
import { SvgColor } from '@/types/svgColor'

export type NoseVariant = (typeof noseVariants)[number]
export const noseVariants = ['circle', 'oval', 'rectangle', 'triangle'] as const

export type NoseProps = {
  readonly variant: NoseVariant
  readonly color?: SvgColor
}

const _Nose = ({ variant, color = '#FF7E36' }: NoseProps): JSX.Element => {
  const [colorValue, colorDef] = useSvgColor(color)

  return (
    <>
      {nosePiece(variant, colorValue)}
      {colorDef && <defs>{colorDef}</defs>}
    </>
  )
}

const nosePiece = (variant: NoseVariant, color: string): JSX.Element => {
  switch (variant) {
    case 'circle':
      return <circle cx="17" cy="16" r="7" fill={color} />
    case 'oval':
      return <ellipse cx="17" cy="16.5" rx="9" ry="5.5" fill={color} />
    case 'rectangle':
      return <rect x="8" y="12" width="17" height="8" rx="1" fill={color} />
    case 'triangle':
      return <path d="M17 3L25.6603 25.5H8.33975L17 3Z" fill={color} />
  }
}

export const Nose = withPieceType('nose')(_Nose)
