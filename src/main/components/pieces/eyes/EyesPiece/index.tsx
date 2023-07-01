import type { AvatarPieceBaseProps } from '@/components/AvatarPiece'
import { useRootSelector } from '@/hooks/useRootSelector'
import { selectors } from '@/redux/selectors'
import type { OnClickProps } from '@/types/react'
import React from 'react'
import { CircleEyesPiece } from '../CircleEyesPiece'

export const EyesPiece = React.forwardRef<SVGSVGElement, AvatarPieceBaseProps & OnClickProps>((props, ref) => {
  const variant = useRootSelector(selectors.pieces.eyes.variant.select)
  switch (variant) {
    case 'circle':
      return <CircleEyesPiece ref={ref} {...props} />
  }
})
