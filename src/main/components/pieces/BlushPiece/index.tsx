import React from 'react'
import { useSelector } from 'react-redux'

import { AvatarPiece, AvatarPieceBaseProps } from '@/components/AvatarPiece'
import { useSvgDefsBuilder } from '@/hooks/useSvgDefsBuilder'
import { useSvgLazyID } from '@/hooks/useSvgLazyID'
import {
  selectResolvedBlushPlColor,
  selectResolvedBlushPlSoft,
  selectResolvedBlushPrColor,
  selectResolvedBlushPrSoft,
} from '@/redux/selectors'
import type { SvgColor } from '@/types/svgColor'

export type BlushPieceProps = AvatarPieceBaseProps & Partial<BlushProps>

export const BlushPiece = React.forwardRef<SVGSVGElement, BlushPieceProps>(
  ({ prColor, plColor, prSoft, plSoft, ...avatarPieceProps }, ref) => {
    const prColorFromStore = useSelector(selectResolvedBlushPrColor)
    const plColorFromStore = useSelector(selectResolvedBlushPlColor)
    const prSoftFromStore = useSelector(selectResolvedBlushPrSoft)
    const plSoftFromStore = useSelector(selectResolvedBlushPlSoft)

    return (
      <AvatarPiece
        ref={ref}
        {...avatarPieceProps}
        pieceType="blush"
        contentComponent={Blush}
        prColor={prColor ?? prColorFromStore}
        plColor={plColor ?? plColorFromStore}
        prSoft={prSoft ?? prSoftFromStore}
        plSoft={plSoft ?? plSoftFromStore}
      />
    )
  }
)

type BlushProps = {
  prColor: SvgColor
  plColor: SvgColor

  prSoft: boolean
  plSoft: boolean
}

const Blush = ({ prColor, plColor, prSoft, plSoft }: BlushProps): JSX.Element => {
  const [lazyFilterID, lazyFilterUrl] = useSvgLazyID('blur')

  const defsBuilder = useSvgDefsBuilder()
  const [prColorValue, prColorOpacity] = defsBuilder.addColor(prColor)
  const [plColorValue, plColorOpacity] = defsBuilder.addColor(plColor)

  const prSvg = <ellipse cx="24.5" cy="15.5" rx="12.5" ry="10.5" fill={prColorValue} fillOpacity={prColorOpacity} />
  const plSvg = <ellipse cx="144.5" cy="15.5" rx="12.5" ry="10.5" fill={plColorValue} fillOpacity={plColorOpacity} />

  if (prSoft || plSoft) {
    defsBuilder.addDef(
      <filter
        id={lazyFilterID()}
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
    )
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
        <g opacity="0.7" filter={lazyFilterUrl()}>
          {prSoft && prSvg}
          {plSoft && plSvg}
        </g>
      )}
      {defsBuilder.build()}
    </>
  )
}
