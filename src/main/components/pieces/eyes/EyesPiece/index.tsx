import React from 'react'

import { useRootSelector } from '@/hooks/useRootSelector'
import { selectors } from '@/redux/selectors'

import { CircleEyesPiece } from '../CircleEyesPiece'

import type { AvatarPieceBaseProps } from '@/components/AvatarPiece'
import type { OnClickProps } from '@/types/react'

export const EyesPiece = React.forwardRef<SVGSVGElement, AvatarPieceBaseProps & OnClickProps>((props, ref) => {
  const variant = useRootSelector(selectors.pieces.eyes.variant.select)
  switch (variant) {
    case 'circle':
      return <CircleEyesPiece ref={ref} {...props} />
  }
})
