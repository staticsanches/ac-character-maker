import React from 'react'

import { BlushPiece } from '@/components/pieces/BlushPiece'
import { BodyPiece } from '@/components/pieces/BodyPiece'
import { ChestPiece } from '@/components/pieces/ChestPiece'
import { EarsPiece } from '@/components/pieces/EarsPiece'
import { EyesPiece } from '@/components/pieces/eyes/EyesPiece'
import { HeadPiece } from '@/components/pieces/HeadPiece'
import { MouthPiece } from '@/components/pieces/MouthPiece'
import { NosePiece } from '@/components/pieces/NosePiece'
import { PantsPiece } from '@/components/pieces/PantsPiece'
import { withNavigateToOnClick } from '@/hoc/withNavigateToOnClick'
import { useRootSelector } from '@/hooks/useRootSelector'
import { useSvgDefsBuilder } from '@/hooks/useSvgDefsBuilder'
import { selectors } from '@/redux/selectors'
import type { SvgColor } from '@/types/svgColor'

export type AvatarProps = {
  size?: number

  backgroundRadius?: number
  backgroundColor?: SvgColor

  blush?: React.ElementType<{}>
  body?: React.ElementType<{}>
  chest?: React.ElementType<{}>
  ears?: React.ElementType<{}>
  eyes?: React.ElementType<{}>
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

      blush: Blush = withNavigateToOnClick(BlushPiece, '/controls/blush'),
      body: Body = withNavigateToOnClick(BodyPiece, '/controls/body'),
      chest: Chest = withNavigateToOnClick(ChestPiece, '/controls/chest'),
      ears: Ears = withNavigateToOnClick(EarsPiece, '/controls/ears'),
      eyes: Eyes = EyesPiece,
      head: Head = HeadPiece,
      mouth: Mouth = MouthPiece,
      nose: Nose = NosePiece,
      pants: Pants = PantsPiece,
    },
    ref
  ) => {
    const sizeFromStore = useRootSelector(selectors.avatar.size.select)
    const backgroundRadiusFromStore = useRootSelector(selectors.avatar.background.radius.select)
    const backgroundColorFromStore = useRootSelector(selectors.avatar.background.color.select)

    const defsBuilder = useSvgDefsBuilder()

    const clipPathUrl = defsBuilder.addDef('clip-path', (id) => (
      <clipPath id={id}>
        <rect
          x={0}
          y={0}
          width={360}
          height={360}
          rx={backgroundRadius ?? backgroundRadiusFromStore}
          ry={backgroundRadius ?? backgroundRadiusFromStore}
        />
      </clipPath>
    ))

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
          <rect
            x={0}
            y={0}
            width={360}
            height={360}
            {...defsBuilder.addFillColor(backgroundColor ?? backgroundColorFromStore)}
          />
          <Ears />
          <Body />
          <Head />
          <Chest />
          <Pants />
          <Blush />
          <Eyes />
          <Nose />
          <Mouth />
        </g>

        {defsBuilder.build()}
      </svg>
    )
  }
)
