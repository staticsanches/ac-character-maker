import React from 'react'

import { AvatarPiece, AvatarPieceBaseProps } from '@/components/AvatarPiece'
import { useRootSelector } from '@/hooks/useRootSelector'
import { useSvgDefsBuilder } from '@/hooks/useSvgDefsBuilder'
import { selectors } from '@/redux/selectors'
import { OnClickProps } from '@/types/react'

export type EarsPieceProps = AvatarPieceBaseProps & OnClickProps

export const EarsPiece = React.forwardRef<SVGSVGElement, EarsPieceProps>(({ onClick, ...avatarPieceProps }, ref) => (
  <AvatarPiece
    ref={ref}
    {...avatarPieceProps}
    pieceType="ears"
    contentComponent={Ears}
    highlightOnHover={!!onClick}
    onClick={onClick}
  />
))

const Ears = ({ onClick }: OnClickProps): JSX.Element => {
  const prColor = useRootSelector(selectors.pieces.ears.pr.color.selectResolved)
  const plColor = useRootSelector(selectors.pieces.ears.pl.color.selectResolved)

  const defsBuilder = useSvgDefsBuilder()

  return (
    <>
      <ellipse cx="22" cy="19" rx="22" ry="19" {...defsBuilder.addFillColor(prColor)} onClick={onClick} />
      <ellipse cx="191" cy="19" rx="22" ry="19" {...defsBuilder.addFillColor(plColor)} onClick={onClick} />
      {defsBuilder.build()}
    </>
  )
}
