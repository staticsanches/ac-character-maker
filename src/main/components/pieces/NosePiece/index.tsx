import { AvatarPiece, type AvatarPieceBaseProps } from '@/components/AvatarPiece'
import { useRootSelector } from '@/hooks/useRootSelector'
import { useSvgDefsBuilder } from '@/hooks/useSvgDefsBuilder'
import { selectors } from '@/redux/selectors'
import type { OnClickProps } from '@/types/react'
import React from 'react'

export type NoseVariant = (typeof noseVariants)[number]
export const noseVariants = ['circle', 'oval', 'rectangle', 'triangle'] as const

export const NosePiece = React.forwardRef<SVGSVGElement, AvatarPieceBaseProps & OnClickProps>(
  ({ onClick, ...avatarPieceProps }, ref) => (
    <AvatarPiece
      {...avatarPieceProps}
      ref={ref}
      pieceType="nose"
      contentComponent={Nose}
      highlightOnHover={!!onClick}
      onClick={onClick}
    />
  )
)

const Nose = ({ onClick }: OnClickProps): JSX.Element => {
  const variant = useRootSelector(selectors.pieces.nose.variant.select)
  const color = useRootSelector(selectors.pieces.nose.color.select)

  const defsBuilder = useSvgDefsBuilder()

  return (
    <>
      {noseElement(variant, defsBuilder.addFillColor(color), onClick)}
      {defsBuilder.build()}
    </>
  )
}

const noseElement = (
  variant: NoseVariant,
  fillColor: { fill: string; fillOpacity?: number },
  onClick?: React.MouseEventHandler
): JSX.Element => {
  switch (variant) {
    case 'circle':
      return <circle cx="17" cy="16" r="7" {...fillColor} onClick={onClick} />
    case 'oval':
      return <ellipse cx="17" cy="16.5" rx="9" ry="5.5" {...fillColor} onClick={onClick} />
    case 'rectangle':
      return <rect x="8" y="12" width="17" height="8" rx="1" {...fillColor} onClick={onClick} />
    case 'triangle':
      return <path d="M17 3L25.6603 25.5H8.33975L17 3Z" {...fillColor} onClick={onClick} />
  }
}
