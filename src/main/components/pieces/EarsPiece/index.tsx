import React from 'react'
import { useSelector } from 'react-redux'

import { AvatarPiece, AvatarPieceBaseProps } from '@/components/AvatarPiece'
import { useSvgDefsBuilder } from '@/hooks/useSvgDefsBuilder'
import { selectEarsPlColor, selectEarsPrColor } from '@/redux/selectors'
import type { SvgColor } from '@/types/svgColor'

export type EarsPieceProps = AvatarPieceBaseProps & Partial<EarsProps>

export const EarsPiece = React.forwardRef<SVGSVGElement, EarsPieceProps>(
  ({ prColor, plColor, ...avatarPieceProps }, ref) => {
    const prColorFromStore = useSelector(selectEarsPrColor)
    const plColorFromStore = useSelector(selectEarsPlColor)

    return (
      <AvatarPiece
        ref={ref}
        {...avatarPieceProps}
        pieceType="ears"
        contentComponent={Ears}
        prColor={prColor ?? prColorFromStore}
        plColor={plColor ?? plColorFromStore}
      />
    )
  }
)

type EarsProps = {
  prColor: SvgColor
  plColor: SvgColor
}

const Ears = ({ prColor, plColor }: EarsProps): JSX.Element => {
  const defsBuilder = useSvgDefsBuilder()
  const [prColorValue, prColorOpacity] = defsBuilder.addColor(prColor)
  const [plColorValue, plColorOpacity] = defsBuilder.addColor(plColor)

  return (
    <>
      <ellipse cx="22" cy="19" rx="22" ry="19" fill={prColorValue} fillOpacity={prColorOpacity} />
      <ellipse cx="191" cy="19" rx="22" ry="19" fill={plColorValue} fillOpacity={plColorOpacity} />
      {defsBuilder.build()}
    </>
  )
}
