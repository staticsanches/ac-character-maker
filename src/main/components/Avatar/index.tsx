import React from 'react'

import { BlushPiece } from '@/components/pieces/BlushPiece'
import { BodyPiece } from '@/components/pieces/BodyPiece'
import { ChestPiece } from '@/components/pieces/ChestPiece'
import { EarsPiece } from '@/components/pieces/EarsPiece'
import { EyesPiece } from '@/components/pieces/eyes/EyesPiece'
import { HairPiece } from '@/components/pieces/HairPiece'
import { HeadPiece } from '@/components/pieces/HeadPiece'
import { MouthPiece } from '@/components/pieces/MouthPiece'
import { NosePiece } from '@/components/pieces/NosePiece'
import { PantsPiece } from '@/components/pieces/PantsPiece'
import { withNavigateToOnClick } from '@/hoc/withNavigateToOnClick'
import { useRootSelector } from '@/hooks/useRootSelector'
import { useSvgDefsBuilder } from '@/hooks/useSvgDefsBuilder'
import { selectors } from '@/redux/selectors'
import { SvgIcon, SvgIconProps } from '@mui/material'

export type AvatarProps = {
  withoutNavigateToOnClick?: boolean

  blush?: React.ElementType<{}>
  body?: React.ElementType<{}>
  chest?: React.ElementType<{}>
  ears?: React.ElementType<{}>
  eyes?: React.ElementType<{}>
  hair?: React.ElementType<{}>
  head?: React.ElementType<{}>
  mouth?: React.ElementType<{}>
  nose?: React.ElementType<{}>
  pants?: React.ElementType<{}>
}

export const Avatar = React.forwardRef<SVGSVGElement, AvatarProps>((props, ref) => {
  const size = useRootSelector(selectors.avatar.size.select)

  return (
    <svg ref={ref} viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg" fill="none" width={size} height={size}>
      <AvatarContent {...props} />
    </svg>
  )
})

export const AvatarIcon = (props: Omit<SvgIconProps, 'viewBox' | 'children'>) => (
  <SvgIcon {...props} viewBox="0 0 360 360">
    <AvatarContent withoutNavigateToOnClick />
  </SvgIcon>
)

const AvatarContent = ({
  withoutNavigateToOnClick = false,

  blush: Blush = withoutNavigateToOnClick ? BlushPiece : withNavigateToOnClick(BlushPiece, '/controls/blush'),
  body: Body = withoutNavigateToOnClick ? BodyPiece : withNavigateToOnClick(BodyPiece, '/controls/body'),
  chest: Chest = withoutNavigateToOnClick ? ChestPiece : withNavigateToOnClick(ChestPiece, '/controls/chest'),
  ears: Ears = withoutNavigateToOnClick ? EarsPiece : withNavigateToOnClick(EarsPiece, '/controls/ears'),
  eyes: Eyes = EyesPiece,
  hair: Hair = withoutNavigateToOnClick ? HairPiece : withNavigateToOnClick(HairPiece, '/controls/hair'),
  head: Head = withoutNavigateToOnClick ? HeadPiece : withNavigateToOnClick(HeadPiece, '/controls/head'),
  mouth: Mouth = withoutNavigateToOnClick ? MouthPiece : withNavigateToOnClick(MouthPiece, '/controls/mouth'),
  nose: Nose = withoutNavigateToOnClick ? NosePiece : withNavigateToOnClick(NosePiece, '/controls/nose'),
  pants: Pants = withoutNavigateToOnClick ? PantsPiece : withNavigateToOnClick(PantsPiece, '/controls/pants'),
}: AvatarProps) => {
  const backgroundRadius = useRootSelector(selectors.avatar.background.radius.select)
  const backgroundColor = useRootSelector(selectors.avatar.background.color.select)

  const defsBuilder = useSvgDefsBuilder()

  const clipPathUrl = defsBuilder.addDef('clip-path', (id) => (
    <clipPath id={id}>
      <rect x={0} y={0} width={360} height={360} rx={backgroundRadius} ry={backgroundRadius} />
    </clipPath>
  ))

  return (
    <>
      <g clipPath={clipPathUrl}>
        <rect x={0} y={0} width={360} height={360} {...defsBuilder.addFillColor(backgroundColor)} />
        <Ears />
        <Head />
        <Blush />
        <Eyes />
        <Nose />
        <Mouth />
        <Hair />
        <Body />
        <Chest />
        <Pants />
      </g>

      {defsBuilder.build()}
    </>
  )
}
