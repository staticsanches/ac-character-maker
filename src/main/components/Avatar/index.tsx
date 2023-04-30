import React from 'react'
import { useSelector } from 'react-redux'

import { selectAvatarDimension } from '@/redux/selectors'
import { AvatarBase, AvatarBaseProps } from '../AvatarBase'
import { BodyPiece } from '../pieces/BodyPiece'
import { ChestPiece } from '../pieces/ChestPiece'
import { EarsPiece } from '../pieces/EarsPiece'
import { HeadPiece } from '../pieces/HeadPiece'
import { NosePiece } from '../pieces/NosePiece'

export const Avatar = React.forwardRef<SVGSVGElement, Partial<AvatarBaseProps>>(({ width, height }, ref) => {
  const { width: widthFromStore, height: heightFromStore } = useSelector(selectAvatarDimension)

  return (
    <AvatarBase ref={ref} width={width ?? widthFromStore} height={height ?? heightFromStore}>
      <EarsPiece />
      <BodyPiece />
      <HeadPiece />
      <ChestPiece />
      <NosePiece />
    </AvatarBase>
  )
})
