import React from 'react'

import {
    AvatarPiece, AvatarPieceBaseProps, AvatarPieceIcon, AvatarPieceIconBaseProps
} from '@/components/AvatarPiece'
import { useRootSelector } from '@/hooks/useRootSelector'
import { selectors } from '@/redux/selectors'

import { TeeAdventureAwaits } from '../TeeAdventureAwaits'
import { TeeSingleColor } from '../TeeSingleColor'

export type TopVariant = (typeof topVariants)[number]
export const topVariants = ['tee--single-color', 'tee--adventure-awaits'] as const

export const TopPiece = React.forwardRef<SVGSVGElement, AvatarPieceBaseProps>((avatarPieceProps, ref) => {
  const variant = useRootSelector(selectors.pieces.top.variant.select)
  return (
    <AvatarPiece
      ref={ref}
      {...avatarPieceProps}
      pieceType="top"
      viewBoxDimension={viewBoxDimension(variant)}
      position={position(variant)}
      contentComponent={Top}
      variant={variant}
    />
  )
})

export const TopPieceIcon = (props: AvatarPieceIconBaseProps) => {
  const variant = useRootSelector(selectors.pieces.top.variant.select)
  return (
    <AvatarPieceIcon {...props} pieceType="top" viewBoxDimension={viewBoxDimension(variant)}>
      <Top variant={variant} />
    </AvatarPieceIcon>
  )
}

const Top = ({ variant }: { variant: TopVariant }): JSX.Element => {
  switch (variant) {
    case 'tee--single-color':
      return <TeeSingleColor />
    case 'tee--adventure-awaits':
      return <TeeAdventureAwaits />
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
