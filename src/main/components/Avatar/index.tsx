import React from 'react'
import { useSelector } from 'react-redux'

import { AvatarBase, AvatarBaseProps } from '@/components/AvatarBase'
import { BlushPiece } from '@/components/pieces/BlushPiece'
import { BodyPiece } from '@/components/pieces/BodyPiece'
import { ChestPiece } from '@/components/pieces/ChestPiece'
import { EarsPiece } from '@/components/pieces/EarsPiece'
import { HeadPiece } from '@/components/pieces/HeadPiece'
import { NosePiece } from '@/components/pieces/NosePiece'
import { PantsPiece } from '@/components/pieces/PantsPiece'
import { selectAvatarSize } from '@/redux/selectors'

export const Avatar = React.forwardRef<SVGSVGElement, Partial<AvatarBaseProps>>(({ size }, ref) => {
  const sizeFromStore = useSelector(selectAvatarSize)

  return (
    <AvatarBase ref={ref} size={size ?? sizeFromStore}>
      <EarsPiece />
      <BodyPiece />
      <HeadPiece />
      <ChestPiece />
      <PantsPiece />
      <NosePiece />
      <BlushPiece />
    </AvatarBase>
  )
})
