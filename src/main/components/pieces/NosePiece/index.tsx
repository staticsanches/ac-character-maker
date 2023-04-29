import React from 'react'
import { useSelector } from 'react-redux'

import { AvatarPiece, AvatarPieceBaseProps } from '@/components/AvatarPiece'
import { useSvgColor } from '@/hooks/useSvgColor'
import { selectNoseColor, selectNoseVariant } from '@/redux/selectors'
import type { SvgColor } from '@/types/svgColor'

export type NoseVariant = (typeof noseVariants)[number]
export const noseVariants = ['circle', 'oval', 'rectangle', 'triangle'] as const

export type NosePieceProps = AvatarPieceBaseProps & Partial<NoseProps>

export const NosePiece = React.forwardRef<SVGSVGElement, NosePieceProps>(
  ({ variant, color, ...avatarPieceProps }, ref) => {
    const variantFromStore = useSelector(selectNoseVariant)
    const colorFromStore = useSelector(selectNoseColor)

    return (
      <AvatarPiece
        {...avatarPieceProps}
        ref={ref}
        pieceType="nose"
        contentComponent={Nose}
        variant={variant ?? variantFromStore}
        color={color ?? colorFromStore}
      />
    )
  }
)

type NoseProps = {
  readonly variant: NoseVariant
  readonly color: SvgColor
}

const Nose = ({ variant, color }: NoseProps): JSX.Element => {
  const [colorValue, colorOpacity, colorDef] = useSvgColor(color)

  return (
    <>
      {noseElement(variant, colorValue, colorOpacity)}
      {colorDef && <defs>{colorDef}</defs>}
    </>
  )
}

const noseElement = (variant: NoseVariant, color: string, opacity?: number): JSX.Element => {
  switch (variant) {
    case 'circle':
      return <circle cx="17" cy="16" r="7" fill={color} fillOpacity={opacity} />
    case 'oval':
      return <ellipse cx="17" cy="16.5" rx="9" ry="5.5" fill={color} fillOpacity={opacity} />
    case 'rectangle':
      return <rect x="8" y="12" width="17" height="8" rx="1" fill={color} fillOpacity={opacity} />
    case 'triangle':
      return <path d="M17 3L25.6603 25.5H8.33975L17 3Z" fill={color} fillOpacity={opacity} />
  }
}
