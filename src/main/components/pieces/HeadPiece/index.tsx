import { AvatarPiece, type AvatarPieceBaseProps } from '@/components/AvatarPiece'
import { useRootSelector } from '@/hooks/useRootSelector'
import { useSvgDefsBuilder } from '@/hooks/useSvgDefsBuilder'
import { selectors } from '@/redux/selectors'
import type { OnClickProps } from '@/types/react'
import React from 'react'

export const HeadPiece = React.forwardRef<SVGSVGElement, AvatarPieceBaseProps & OnClickProps>(
  ({ onClick, ...avatarPieceProps }, ref) => (
    <AvatarPiece
      ref={ref}
      {...avatarPieceProps}
      pieceType="head"
      contentComponent={Head}
      highlightOnHover={!!onClick}
      onClick={onClick}
    />
  )
)

const Head = ({ onClick }: OnClickProps): JSX.Element => {
  const color = useRootSelector(selectors.pieces.head.color.selectResolved)
  const defsBuilder = useSvgDefsBuilder()

  return (
    <>
      <path
        {...defsBuilder.addFillColor(color)}
        d="M84 0C53 0 1.5 11.2 1.5 82C1.60883 82 1.71648 82 1.82297 82C-0.0222255 93.0563 -0.590509 104.025 0.694239 113.5C3.89424 137.1 34.3609 155 49.1943 161C54.0276 163 67.8942 167 84.6942 167C101.494 167 115.361 163 120.194 161C135.028 155 165.494 137.1 168.694 113.5C169.99 103.946 169.392 92.8824 167.5 81.7417C167.375 11.1727 115.962 0 85 0H84Z"
        onClick={onClick}
      />
      {defsBuilder.build()}
    </>
  )
}
