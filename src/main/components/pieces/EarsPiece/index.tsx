import React from 'react'
import { useSelector } from 'react-redux'

import { AvatarPiece, AvatarPieceBaseProps } from '@/components/AvatarPiece'
import { useSvgDefsBuilder } from '@/hooks/useSvgDefsBuilder'
import { selectResolvedEarsPlColor, selectResolvedEarsPrColor } from '@/redux/selectors'
import type { SvgColor } from '@/types/svgColor'

export type EarsPieceProps = AvatarPieceBaseProps & Partial<EarsProps>

export const EarsPiece = React.forwardRef<SVGSVGElement, EarsPieceProps>(
  ({ prColor, plColor, handleClick, ...avatarPieceProps }, ref) => {
    const prColorFromStore = useSelector(selectResolvedEarsPrColor)
    const plColorFromStore = useSelector(selectResolvedEarsPlColor)

    return (
      <AvatarPiece
        ref={ref}
        {...avatarPieceProps}
        pieceType="ears"
        contentComponent={Ears}
        highlightOnHover={!!handleClick}
        prColor={prColor ?? prColorFromStore}
        plColor={plColor ?? plColorFromStore}
        handleClick={handleClick}
      />
    )
  }
)

type EarsProps = {
  prColor: SvgColor
  plColor: SvgColor

  handleClick?: React.MouseEventHandler
}

const Ears = ({ prColor, plColor, handleClick }: EarsProps): JSX.Element => {
  const defsBuilder = useSvgDefsBuilder()
  const [prColorValue, prColorOpacity] = defsBuilder.addColor(prColor)
  const [plColorValue, plColorOpacity] = defsBuilder.addColor(plColor)

  return (
    <>
      <ellipse cx="22" cy="19" rx="22" ry="19" fill={prColorValue} fillOpacity={prColorOpacity} onClick={handleClick} />
      <ellipse
        cx="191"
        cy="19"
        rx="22"
        ry="19"
        fill={plColorValue}
        fillOpacity={plColorOpacity}
        onClick={handleClick}
      />
      {defsBuilder.build()}
    </>
  )
}
