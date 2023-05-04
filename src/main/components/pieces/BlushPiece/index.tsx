import React from 'react'

import { AvatarPiece, AvatarPieceBaseProps } from '@/components/AvatarPiece'
import { useRootSelector } from '@/hooks/useRootSelector'
import { useSvgDefsBuilder } from '@/hooks/useSvgDefsBuilder'
import { selectors } from '@/redux/selectors'
import type { HandleClickProps } from '@/types/react'

export type BlushPieceProps = AvatarPieceBaseProps & HandleClickProps

export const BlushPiece = React.forwardRef<SVGSVGElement, BlushPieceProps>(
  ({ handleClick, ...avatarPieceProps }, ref) => {
    return (
      <AvatarPiece
        ref={ref}
        {...avatarPieceProps}
        pieceType="blush"
        contentComponent={Blush}
        highlightOnHover={!!handleClick}
        handleClick={handleClick}
      />
    )
  }
)

const Blush = ({ handleClick }: HandleClickProps): JSX.Element => {
  const prColor = useRootSelector(selectors.pieces.blush.pr.color.selectResolved)
  const plColor = useRootSelector(selectors.pieces.blush.pl.color.selectResolved)

  const prSoft = useRootSelector(selectors.pieces.blush.pr.soft.selectResolved)
  const plSoft = useRootSelector(selectors.pieces.blush.pl.soft.selectResolved)

  const defsBuilder = useSvgDefsBuilder()

  const prSvg = (
    <ellipse cx="24.5" cy="15.5" rx="12.5" ry="10.5" {...defsBuilder.addFillColor(prColor)} onClick={handleClick} />
  )
  const plSvg = (
    <ellipse cx="144.5" cy="15.5" rx="12.5" ry="10.5" {...defsBuilder.addFillColor(plColor)} onClick={handleClick} />
  )

  let filterUrl: Opt<string>
  if (prSoft || plSoft) {
    filterUrl = defsBuilder.addDef('blur', (id) => (
      <filter
        id={id}
        x="-10"
        y="-10"
        width="189"
        height="51"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" />
        <feGaussianBlur stdDeviation="2.5" />
      </filter>
    ))
  }

  return (
    <>
      {(!prSoft || !plSoft) && (
        <g opacity="0.7">
          {!prSoft && prSvg}
          {!plSoft && plSvg}
        </g>
      )}
      {(prSoft || plSoft) && (
        <g opacity="0.7" filter={filterUrl}>
          {prSoft && prSvg}
          {plSoft && plSvg}
        </g>
      )}
      {defsBuilder.build()}
    </>
  )
}
