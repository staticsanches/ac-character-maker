import {
  AvatarPiece,
  AvatarPieceIcon,
  type AvatarPieceBaseProps,
  type AvatarPieceIconBaseProps,
} from '@/components/AvatarPiece'
import { useRootSelector } from '@/hooks/useRootSelector'
import { selectors } from '@/redux/selectors'
import type { OnClickProps } from '@/types/react'
import React, { type ComponentType } from 'react'
import { CropTopBunnyPlaid } from '../cropTop/CropTopBunnyPlaid'
import { CropTopCloudy } from '../cropTop/CropTopCloudy'
import { CropTopDangerZone } from '../cropTop/CropTopDangerZone'
import { CropTopFlowerPower } from '../cropTop/CropTopFlowerPower'
import { CropTopGigaPudding } from '../cropTop/CropTopGigaPudding'
import { CropTopSecretCat } from '../cropTop/CropTopSecretCat'
import { CropTopSingleColor } from '../cropTop/CropTopSingleColor'
import { TeeAdventureAwaits } from '../tee/TeeAdventureAwaits'
import { TeeDots } from '../tee/TeeDots'
import { TeeFlames } from '../tee/TeeFlames'
import { TeeFroggy } from '../tee/TeeFroggy'
import { TeeNookIncAloha } from '../tee/TeeNookIncAloha'
import { TeePeanutButterAndJelly } from '../tee/TeePeanutButterAndJelly'
import { TeeSailor } from '../tee/TeeSailor'
import { TeeSingleColor } from '../tee/TeeSingleColor'
import { TeeSpringPlaid } from '../tee/TeeSpringPlaid'
import { TeeStar } from '../tee/TeeStar'

export type TopVariant = (typeof topVariants)[number]
export const topVariants = [
  'crop-top--bunny-plaid',
  'crop-top--cloudy',
  'crop-top--danger-zone',
  'crop-top--flower-power',
  'crop-top--giga-pudding',
  'crop-top--secret-cat',
  'crop-top--single-color',

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
    const variant = useRootSelector(selectors.pieces.top.variant.selectConsideringPreview)
    const Top = top(variant)
    return (
      <AvatarPiece
        ref={ref}
        {...avatarPieceProps}
        pieceType="top"
        viewBoxDimension={viewBoxDimension(variant)}
        highlightOnHover={!!onClick}
        contentComponent={Top}
        onClick={onClick}
      />
    )
  }
)

export const TopPieceIcon = (props: AvatarPieceIconBaseProps) => {
  const variant = useRootSelector(selectors.pieces.top.variant.selectConsideringPreview)
  const Top = top(variant)
  return (
    <AvatarPieceIcon {...props} pieceType="top" viewBoxDimension={viewBoxDimension(variant)}>
      <Top />
    </AvatarPieceIcon>
  )
}

const top = (variant: TopVariant): ComponentType<OnClickProps> => {
  switch (variant) {
    case 'crop-top--bunny-plaid':
      return CropTopBunnyPlaid
    case 'crop-top--cloudy':
      return CropTopCloudy
    case 'crop-top--danger-zone':
      return CropTopDangerZone
    case 'crop-top--flower-power':
      return CropTopFlowerPower
    case 'crop-top--giga-pudding':
      return CropTopGigaPudding
    case 'crop-top--secret-cat':
      return CropTopSecretCat
    case 'crop-top--single-color':
      return CropTopSingleColor

    case 'tee--adventure-awaits':
      return TeeAdventureAwaits
    case 'tee--dots':
      return TeeDots
    case 'tee--flames':
      return TeeFlames
    case 'tee--froggy':
      return TeeFroggy
    case 'tee--nook-inc-aloha':
      return TeeNookIncAloha
    case 'tee--peanut-butter-and-jelly':
      return TeePeanutButterAndJelly
    case 'tee--sailor':
      return TeeSailor
    case 'tee--single-color':
      return TeeSingleColor
    case 'tee--spring-plaid':
      return TeeSpringPlaid
    case 'tee--star':
      return TeeStar
  }
}

const viewBoxDimension = (variant: TopVariant): Opt<Dimension> => {
  if (variant.startsWith('crop-top--')) {
    return { width: 173, height: 100 }
  }
  if (variant.startsWith('tee--')) {
    return { width: 173, height: 125 }
  }
}
