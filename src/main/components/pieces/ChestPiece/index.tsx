import React from 'react'

import { AvatarPiece, AvatarPieceBaseProps } from '@/components/AvatarPiece'
import { useRootSelector } from '@/hooks/useRootSelector'
import { useSvgDefsBuilder } from '@/hooks/useSvgDefsBuilder'
import { selectors } from '@/redux/selectors'
import type { HandleClickProps } from '@/types/react'

export type ChestPieceProps = AvatarPieceBaseProps & HandleClickProps

export const ChestPiece = React.forwardRef<SVGSVGElement, ChestPieceProps>(
  ({ handleClick, ...avatarPieceProps }, ref) => (
    <AvatarPiece
      ref={ref}
      {...avatarPieceProps}
      pieceType="chest"
      contentComponent={Chest}
      highlightOnHover={!!handleClick}
      handleClick={handleClick}
    />
  )
)

const Chest = ({ handleClick }: HandleClickProps): JSX.Element => {
  const color = useRootSelector(selectors.pieces.chest.color.select)
  const defsBuilder = useSvgDefsBuilder()

  const filterUrl = defsBuilder.addDef('blur', (id) => (
    <filter
      id={id}
      colorInterpolationFilters="sRGB"
      filterUnits="userSpaceOnUse"
      height="52.6843"
      width="65.1671"
      x="0.926758"
      y="0.315674"
    >
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" />
      <feGaussianBlur stdDeviation="1" />
    </filter>
  ))

  return (
    <>
      <g filter={filterUrl} opacity="0.1" style={{ mixBlendMode: 'hard-light' }}>
        <path
          {...defsBuilder.addFillColor(color)}
          d="M64.0939 4.11979C63.1201 9.65216 60.6464 18.0348 59.4759 22C59.054 23.4294 58.7486 25.9495 58.3945 28.872C57.5099 36.1727 56.3209 45.9854 52.2499 47.5837C46.5492 49.8218 40.0825 51.0001 33.4999 51.0001C26.9173 51.0001 20.4506 49.8218 14.7499 47.5837C9.0492 45.3456 7.49995 32.5001 7.49995 23.0001C7.49995 17.3668 5.73342 12.4285 4.29536 8.40835C3.75618 6.90104 3.26316 5.52282 2.92676 4.28546C5.27239 3.46198 7.42964 2.88975 9.35302 2.52055C15.7023 3.87537 23.7859 5.00006 32.6942 5.00006C42.048 5.00006 50.4925 3.76006 56.9748 2.31567C59.054 2.64244 61.4495 3.22 64.0939 4.11979Z"
          onClick={handleClick}
        />
      </g>
      {defsBuilder.build()}
    </>
  )
}
