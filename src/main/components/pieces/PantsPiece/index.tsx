import React from 'react'

import { AvatarPiece, AvatarPieceBaseProps } from '@/components/AvatarPiece'
import { useRootSelector } from '@/hooks/useRootSelector'
import { useSvgDefsBuilder } from '@/hooks/useSvgDefsBuilder'
import { selectors } from '@/redux/selectors'
import type { HandleClickProps } from '@/types/react'

export type PantsPieceProps = AvatarPieceBaseProps & HandleClickProps

export const PantsPiece = React.forwardRef<SVGSVGElement, PantsPieceProps>(
  ({ handleClick, ...avatarPieceProps }, ref) => (
    <AvatarPiece
      ref={ref}
      {...avatarPieceProps}
      pieceType="pants"
      contentComponent={Pants}
      highlightOnHover={!!handleClick}
      handleClick={handleClick}
    />
  )
)

const Pants = ({ handleClick }: HandleClickProps): JSX.Element => {
  const color = useRootSelector(selectors.pieces.pants.color.select)

  const defsBuilder = useSvgDefsBuilder()

  return (
    <>
      <path
        {...defsBuilder.addFillColor(color)}
        d="M98.993 0.170044C91.3883 0.804877 64.0417 3 49.4999 3C36.5091 3 11.5476 1.24818 0.496335 0.421878C-0.312167 19.6509 1.13515 40.4815 7.85257 56.5H43.5L49.75 33.5L56.5 56.5H91.6475C98.3942 40.4116 99.8247 19.4689 98.993 0.170044Z"
        onClick={handleClick}
      />
      {defsBuilder.build()}
    </>
  )
}
