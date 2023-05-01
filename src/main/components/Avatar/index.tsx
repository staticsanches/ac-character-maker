import React from 'react'
import { useSelector } from 'react-redux'

import { BlushPiece } from '@/components/pieces/BlushPiece'
import { BodyPiece } from '@/components/pieces/BodyPiece'
import { ChestPiece } from '@/components/pieces/ChestPiece'
import { EarsPiece } from '@/components/pieces/EarsPiece'
import { HeadPiece } from '@/components/pieces/HeadPiece'
import { MouthPiece } from '@/components/pieces/MouthPiece'
import { NosePiece } from '@/components/pieces/NosePiece'
import { PantsPiece } from '@/components/pieces/PantsPiece'
import { useSvgColor } from '@/hooks/useSvgColor'
import { useSvgID } from '@/hooks/useSvgID'
import { selectAvatarBackgroundColor, selectAvatarBackgroundRadius, selectAvatarSize } from '@/redux/selectors'
import { SvgColor } from '@/types/svgColor'

export type AvatarProps = {
  size?: number

  backgroundRadius?: number
  backgroundColor?: SvgColor

  blush?: React.ElementType<{}>
  body?: React.ElementType<{}>
  chest?: React.ElementType<{}>
  ears?: React.ElementType<{}>
  head?: React.ElementType<{}>
  mouth?: React.ElementType<{}>
  nose?: React.ElementType<{}>
  pants?: React.ElementType<{}>
}

export const Avatar = React.forwardRef<SVGSVGElement, AvatarProps>(
  (
    {
      size,

      backgroundRadius,
      backgroundColor,

      blush: Blush = BlushPiece,
      body: Body = BodyPiece,
      chest: Chest = ChestPiece,
      ears: Ears = EarsPiece,
      head: Head = HeadPiece,
      mouth: Mouth = MouthPiece,
      nose: Nose = NosePiece,
      pants: Pants = PantsPiece,
    },
    ref
  ) => {
    const sizeFromStore = useSelector(selectAvatarSize)
    const backgroundRadiusFromStore = useSelector(selectAvatarBackgroundRadius)
    const backgroundColorFromStore = useSelector(selectAvatarBackgroundColor)

    const [clipPathID, clipPathUrl] = useSvgID('clip-path')
    const [backgroundColorValue, backgroundColorOpacity, backgroundColorDef] = useSvgColor(
      backgroundColor ?? backgroundColorFromStore
    )

    return (
      <svg
        ref={ref}
        viewBox="0 0 360 360"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width={size ?? sizeFromStore}
        height={size ?? sizeFromStore}
      >
        <g clipPath={clipPathUrl}>
          <rect x={0} y={0} width={360} height={360} fill={backgroundColorValue} fillOpacity={backgroundColorOpacity} />
          <Ears />
          <Body />
          <Head />
          <Chest />
          <Pants />
          <Nose />
          <Mouth />
          <Blush />
        </g>

        <defs>
          {backgroundColorDef}

          <clipPath id={clipPathID}>
            <rect
              x={0}
              y={0}
              width={360}
              height={360}
              rx={backgroundRadius ?? backgroundRadiusFromStore}
              ry={backgroundRadius ?? backgroundRadiusFromStore}
            />
          </clipPath>
        </defs>
      </svg>
    )
  }
)
