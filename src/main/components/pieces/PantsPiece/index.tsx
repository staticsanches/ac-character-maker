import React from 'react'
import { useSelector } from 'react-redux'

import { AvatarPiece, AvatarPieceBaseProps } from '@/components/AvatarPiece'
import { useSvgColor } from '@/hooks/useSvgColor'
import { selectPantsColor } from '@/redux/selectors'
import type { SvgColor } from '@/types/svgColor'

export type PantsPieceProps = AvatarPieceBaseProps & Partial<PantsProps>

export const PantsPiece = React.forwardRef<SVGSVGElement, PantsPieceProps>(({ color, ...avatarPieceProps }, ref) => {
  const colorFromStore = useSelector(selectPantsColor)

  return (
    <AvatarPiece
      ref={ref}
      {...avatarPieceProps}
      pieceType="pants"
      contentComponent={Pants}
      color={color ?? colorFromStore}
    />
  )
})

type PantsProps = {
  readonly color: SvgColor
}

const Pants = ({ color }: PantsProps): JSX.Element => {
  const [colorValue, colorOpacity, colorDef] = useSvgColor(color)

  return (
    <>
      <path
        fill={colorValue}
        fillOpacity={colorOpacity}
        d="M98.993 0.170044C91.3883 0.804877 64.0417 3 49.4999 3C36.5091 3 11.5476 1.24818 0.496335 0.421878C-0.312167 19.6509 1.13515 40.4815 7.85257 56.5H43.5L49.75 33.5L56.5 56.5H91.6475C98.3942 40.4116 99.8247 19.4689 98.993 0.170044Z"
      />
      {colorDef && <defs>{colorDef}</defs>}
    </>
  )
}
