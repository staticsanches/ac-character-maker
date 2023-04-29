import React from 'react'
import { useSelector } from 'react-redux'

import { AvatarPiece, AvatarPieceBaseProps } from '@/components/AvatarPiece'
import { useSvgColor } from '@/hooks/useSvgColor'
import { selectHeadColor } from '@/redux/selectors'
import type { SvgColor } from '@/types/svgColor'

export type HeadPieceProps = AvatarPieceBaseProps & Partial<HeadProps>

export const HeadPiece = React.forwardRef<SVGSVGElement, HeadPieceProps>(({ color, ...avatarPieceProps }, ref) => {
  const colorFromStore = useSelector(selectHeadColor)

  return (
    <AvatarPiece
      ref={ref}
      {...avatarPieceProps}
      pieceType="head"
      contentComponent={Head}
      color={color ?? colorFromStore}
    />
  )
})

type HeadProps = {
  readonly color: SvgColor
}

const Head = ({ color }: HeadProps): JSX.Element => {
  const [colorValue, colorOpacity, colorDef] = useSvgColor(color)

  return (
    <>
      <path
        fill={colorValue}
        fillOpacity={colorOpacity}
        d="M84 0C53 0 1.5 11.2 1.5 82C1.60883 82 1.71648 82 1.82297 82C-0.0222255 93.0563 -0.590509 104.025 0.694239 113.5C3.89424 137.1 34.3609 155 49.1943 161C54.0276 163 67.8942 167 84.6942 167C101.494 167 115.361 163 120.194 161C135.028 155 165.494 137.1 168.694 113.5C169.99 103.946 169.392 92.8824 167.5 81.7417C167.375 11.1727 115.962 0 85 0H84Z"
      />
      {colorDef && <defs>{colorDef}</defs>}
    </>
  )
}