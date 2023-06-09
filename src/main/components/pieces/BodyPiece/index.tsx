import { AvatarPiece, type AvatarPieceBaseProps } from '@/components/AvatarPiece'
import { useRootSelector } from '@/hooks/useRootSelector'
import { useSvgDefsBuilder } from '@/hooks/useSvgDefsBuilder'
import { selectors } from '@/redux/selectors'
import type { OnClickProps } from '@/types/react'
import React from 'react'

export const BodyPiece = React.forwardRef<SVGSVGElement, AvatarPieceBaseProps & OnClickProps>(
  ({ onClick, ...avatarPieceProps }, ref) => (
    <AvatarPiece
      ref={ref}
      {...avatarPieceProps}
      pieceType="body"
      contentComponent={Body}
      highlightOnHover={!!onClick}
      onClick={onClick}
    />
  )
)

const Body = ({ onClick: handleClick }: OnClickProps): JSX.Element => {
  const color = useRootSelector(selectors.pieces.body.color.selectResolved)
  const defsBuilder = useSvgDefsBuilder()

  return (
    <>
      <path
        {...defsBuilder.addFillColor(color)}
        d="M 99.3531 0.5205 C 88.4733 2.609 70.11 11.1939 52.5 35.0001 C 37.5708 55.1822 27.8327 67.6094 20.5453 76.1118 C 19.8737 76.038 19.1913 76.0001 18.5 76.0001 C 8.2827 76.0001 0 84.2828 0 94.5001 C 0 104.717 8.2827 113 18.5 113 C 28.7173 113 37 104.717 37 94.5001 C 37 91.9647 36.49 89.5485 35.567 87.3484 C 49.4176 73.3751 69.5204 53.542 81.8526 46.5001 C 77.6494 60.5732 67.1811 118.514 81.8526 153.5 H 117.5 L 123.75 130.5 L 130.5 153.5 H 165.647 C 180.319 118.514 169.851 60.5732 165.647 46.5001 C 177.409 53.2163 197.274 72.6025 211.588 86.9895 C 210.567 89.2846 210 91.8261 210 94.5001 C 210 104.717 218.283 113 228.5 113 C 238.717 113 247 104.717 247 94.5001 C 247 84.2828 238.717 76.0001 228.5 76.0001 C 228.035 76.0001 227.574 76.0172 227.118 76.0509 C 219.383 67.0082 209.073 54.0252 195 35.0001 C 176.741 10.3165 157.672 1.9968 146.975 0.3157 C 139 0 132 0 122 0 C 113 0 106 0 99.3531 0.5205 Z"
        onClick={handleClick}
      />
      {defsBuilder.build()}
    </>
  )
}
