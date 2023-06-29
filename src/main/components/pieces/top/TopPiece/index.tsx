import React from 'react'

import { AvatarPiece, AvatarPieceBaseProps, AvatarPieceIcon, AvatarPieceIconBaseProps } from '@/components/AvatarPiece'
import { useRootSelector } from '@/hooks/useRootSelector'
import { selectors } from '@/redux/selectors'

import { TeeAdventureAwaits } from '../TeeAdventureAwaits'
import { TeeDots } from '../TeeDots'
import { TeeFlames } from '../TeeFlames'
import { TeeFroggy } from '../TeeFroggy'
import { TeeNookIncAloha } from '../TeeNookIncAloha'
import { TeePeanutButterAndJelly } from '../TeePeanutButterAndJelly'
import { TeeSailor } from '../TeeSailor'
import { TeeSingleColor } from '../TeeSingleColor'
import { TeeSpringPlaid } from '../TeeSpringPlaid'
import { TeeStar } from '../TeeStar'

import type { OnClickProps } from '@/types/react'

export type TopVariant = (typeof topVariants)[number]
export const topVariants = [
  'tee--adventure-awaits',
  'tee--dots',
  'tee--flames',
  'tee--froggy',
  'tee--nook-inc-aloha',
  'tee--peanut-butter-and-jelly',
  'tee--sailor',
  'tee--single-color',
  'tee--spring-plaid',
  'tee--star',
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
    case 'tee--nook-inc-aloha':
      return <TeeNookIncAloha onClick={onClick} />
    case 'tee--peanut-butter-and-jelly':
      return <TeePeanutButterAndJelly onClick={onClick} />
    case 'tee--sailor':
      return <TeeSailor onClick={onClick} />
    case 'tee--single-color':
      return <TeeSingleColor onClick={onClick} />
    case 'tee--spring-plaid':
      return <TeeSpringPlaid onClick={onClick} />
    case 'tee--star':
      return <TeeStar onClick={onClick} />
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
