import React from 'react'

import { AvatarPiece, AvatarPieceBaseProps } from '@/components/AvatarPiece'
import { useRootSelector } from '@/hooks/useRootSelector'
import { useSvgDefsBuilder } from '@/hooks/useSvgDefsBuilder'
import { selectNoseColor, selectNoseVariant } from '@/redux/selectors'
import type { HandleClickProps } from '@/types/react'

export type NoseVariant = (typeof noseVariants)[number]
export const noseVariants = ['circle', 'oval', 'rectangle', 'triangle'] as const

export type NosePieceProps = AvatarPieceBaseProps & HandleClickProps

export const NosePiece = React.forwardRef<SVGSVGElement, NosePieceProps>(
  ({ handleClick, ...avatarPieceProps }, ref) => {
    return (
      <AvatarPiece
        {...avatarPieceProps}
        ref={ref}
        pieceType="nose"
        contentComponent={Nose}
        highlightOnHover={!!handleClick}
        handleClick={handleClick}
      />
    )
  }
)

const Nose = ({ handleClick }: HandleClickProps): JSX.Element => {
  const variant = useRootSelector(selectNoseVariant)
  const color = useRootSelector(selectNoseColor)

  const defsBuilder = useSvgDefsBuilder()

  return (
    <>
      {noseElement(variant, defsBuilder.addFillColor(color), handleClick)}
      {defsBuilder.build()}
    </>
  )
}

const noseElement = (
  variant: NoseVariant,
  fillColor: { fill: string; fillOpacity?: number },
  handleClick?: React.MouseEventHandler
): JSX.Element => {
  switch (variant) {
    case 'circle':
      return <circle cx="17" cy="16" r="7" {...fillColor} onClick={handleClick} />
    case 'oval':
      return <ellipse cx="17" cy="16.5" rx="9" ry="5.5" {...fillColor} onClick={handleClick} />
    case 'rectangle':
      return <rect x="8" y="12" width="17" height="8" rx="1" {...fillColor} onClick={handleClick} />
    case 'triangle':
      return <path d="M17 3L25.6603 25.5H8.33975L17 3Z" {...fillColor} onClick={handleClick} />
  }
}
