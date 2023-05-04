import React from 'react'

import type { AvatarPieceBaseProps } from '@/components/AvatarPiece'
import { useRootSelector } from '@/hooks/useRootSelector'
import { selectors } from '@/redux/selectors'
import type { HandleClickProps } from '@/types/react'
import { CircleEyesPiece } from '../CircleEyesPiece'

export type EyesPieceBaseProps = AvatarPieceBaseProps & HandleClickProps

export const EyesPiece = React.forwardRef<SVGSVGElement, EyesPieceBaseProps>((props, ref) => {
  const variant = useRootSelector(selectors.pieces.eyes.variant.select)
  switch (variant) {
    case 'circle':
      return <CircleEyesPiece ref={ref} {...props} />
  }
})
