import React from 'react'

import { AvatarPiece, AvatarPieceBaseProps } from '@/components/AvatarPiece'
import { useRootSelector } from '@/hooks/useRootSelector'
import { useSvgDefsBuilder } from '@/hooks/useSvgDefsBuilder'
import { selectResolvedEarsPlColor, selectResolvedEarsPrColor } from '@/redux/selectors'
import { HandleClickProps } from '@/types/react'

export type EarsPieceProps = AvatarPieceBaseProps & HandleClickProps

export const EarsPiece = React.forwardRef<SVGSVGElement, EarsPieceProps>(
  ({ handleClick, ...avatarPieceProps }, ref) => {
    return (
      <AvatarPiece
        ref={ref}
        {...avatarPieceProps}
        pieceType="ears"
        contentComponent={Ears}
        highlightOnHover={!!handleClick}
        handleClick={handleClick}
      />
    )
  }
)

const Ears = ({ handleClick }: HandleClickProps): JSX.Element => {
  const prColor = useRootSelector(selectResolvedEarsPrColor)
  const plColor = useRootSelector(selectResolvedEarsPlColor)

  const defsBuilder = useSvgDefsBuilder()

  return (
    <>
      <ellipse cx="22" cy="19" rx="22" ry="19" {...defsBuilder.addFillColor(prColor)} onClick={handleClick} />
      <ellipse cx="191" cy="19" rx="22" ry="19" {...defsBuilder.addFillColor(plColor)} onClick={handleClick} />
      {defsBuilder.build()}
    </>
  )
}
