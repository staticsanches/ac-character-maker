import React from 'react'
import { useSelector } from 'react-redux'

import { BlushPiece } from '@/components/pieces/BlushPiece'
import { BodyPiece } from '@/components/pieces/BodyPiece'
import { ChestPiece } from '@/components/pieces/ChestPiece'
import { EarsPiece } from '@/components/pieces/EarsPiece'
import { HeadPiece } from '@/components/pieces/HeadPiece'
import { NosePiece } from '@/components/pieces/NosePiece'
import { PantsPiece } from '@/components/pieces/PantsPiece'
import { selectAvatarSize } from '@/redux/selectors'

export type AvatarProps = {
  size?: number

  blush?: React.ElementType<{}>
  body?: React.ElementType<{}>
  chest?: React.ElementType<{}>
  ears?: React.ElementType<{}>
  head?: React.ElementType<{}>
  nose?: React.ElementType<{}>
  pants?: React.ElementType<{}>
}

export const Avatar = React.forwardRef<SVGSVGElement, AvatarProps>(
  (
    {
      size,
      blush: Blush = BlushPiece,
      body: Body = BodyPiece,
      chest: Chest = ChestPiece,
      ears: Ears = EarsPiece,
      head: Head = HeadPiece,
      nose: Nose = NosePiece,
      pants: Pants = PantsPiece,
    },
    ref
  ) => {
    const sizeFromStore = useSelector(selectAvatarSize)

    return (
      <svg
        ref={ref}
        viewBox="0 0 360 360"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width={size ?? sizeFromStore}
        height={size ?? sizeFromStore}
      >
        <Ears />
        <Body />
        <Head />
        <Chest />
        <Pants />
        <Nose />
        <Blush />
      </svg>
    )
  }
)
