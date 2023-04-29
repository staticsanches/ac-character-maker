import React from 'react'
import { useSelector } from 'react-redux'

import { Head } from '@/pieces/Head'
import { selectHeadColor } from '@/redux/selectors'
import { AvatarPiece, AvatarPieceBaseProps } from '../AvatarPiece'

export const HeadPiece = React.forwardRef<SVGSVGElement>((props: AvatarPieceBaseProps, ref) => {
  const color = useSelector(selectHeadColor)
  console.log(color)
  return <AvatarPiece ref={ref} {...props} pieceComponent={Head} color={color} />
})
