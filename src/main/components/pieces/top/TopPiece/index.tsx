import React from 'react'

import {
    AvatarPiece, AvatarPieceBaseProps, AvatarPieceIcon, AvatarPieceIconBaseProps
} from '@/components/AvatarPiece'
import { useRootSelector } from '@/hooks/useRootSelector'
import { selectors } from '@/redux/selectors'

import { TeeAdventureAwaits } from '../TeeAdventureAwaits'
import { TeeDots } from '../TeeDots'
import { TeeFlames } from '../TeeFlames'
import { TeeFroggy } from '../TeeFroggy'
import { TeeSingleColor } from '../TeeSingleColor'

import type { OnClickProps } from '@/types/react'
export type TopVariant = (typeof topVariants)[number]
export const topVariants = [
  'tee--adventure-awaits',
  'tee--dots',
  'tee--flames',
  'tee--froggy',
  'tee--single-color',
] as const

export const TopPiece = React.forwardRef<SVGSVGElement, AvatarPieceBaseProps & OnClickProps>(
  ({ onClick, ...avatarPieceProps }, ref) => {
    const variant = useRootSelector(selectors.pieces.top.variant.select)
    return (
      <AvatarPiece
        ref={ref}
        {...avatarPieceProps}
        pieceType="top"
        viewBoxDimension={viewBoxDimension(variant)}
        position={position(variant)}
        highlightOnHover={!!onClick}
        contentComponent={Top}
        variant={variant}
        onClick={onClick}
      />
    )
  }
)

export const TopPieceIcon = (props: AvatarPieceIconBaseProps) => {
  const variant = useRootSelector(selectors.pieces.top.variant.select)
  return (
    <AvatarPieceIcon {...props} pieceType="top" viewBoxDimension={viewBoxDimension(variant)}>
      <Top variant={variant} />
    </AvatarPieceIcon>
  )
}

const Top = ({ variant, onClick }: { variant: TopVariant } & OnClickProps): JSX.Element => {
  switch (variant) {
    case 'tee--adventure-awaits':
      return <TeeAdventureAwaits onClick={onClick} />
    case 'tee--dots':
      return <TeeDots onClick={onClick} />
    case 'tee--flames':
      return <TeeFlames onClick={onClick} />
    case 'tee--froggy':
      return <TeeFroggy onClick={onClick} />
    case 'tee--single-color':
      return <TeeSingleColor onClick={onClick} />
  }
}

const viewBoxDimension = (variant: TopVariant): Opt<Dimension> => {
  if (variant.startsWith('tee--')) {
    return { width: 173, height: 125 }
  }
}

const position = (variant: TopVariant): Opt<XYPosition> => {
  if (variant.startsWith('tee--')) {
    return { x: 92.5, y: 198 }
  }
}
