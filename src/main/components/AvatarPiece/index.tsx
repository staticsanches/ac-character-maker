import React from 'react'

import { PieceProps, PieceType } from '@/types/piece'

export type AvatarPieceBaseProps<PT extends PieceType, P extends React.ComponentType<PieceProps<PT>>> = {
  readonly width?: number
  readonly height?: number

  readonly omitXY?: boolean

  readonly pieceType: PT
  readonly pieceComponent: P
}

export type AvatarPieceProps<
  PT extends PieceType,
  P extends React.ComponentType<PieceProps<PT>>
> = AvatarPieceBaseProps<PT, P> & DistributiveOmit<React.ComponentPropsWithoutRef<P>, keyof AvatarPieceBaseProps<PT, P>>

const _AvatarPiece = <PT extends PieceType, P extends React.ComponentType<PieceProps<PT>>>(
  { pieceType, pieceComponent, width, height, omitXY = false, ...pieceProps }: AvatarPieceProps<PT, P>,
  ref: React.ForwardedRef<SVGSVGElement>
): JSX.Element | null => {
  const dimension = defaultDimension(pieceType)
  const pieceElement = React.createElement(pieceComponent, pieceProps)

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${dimension.width} ${dimension.height}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={width ?? dimension.width}
      height={height ?? dimension.height}
      {...(omitXY ? {} : defaultPosition(pieceType))}
    >
      {pieceElement}
    </svg>
  )
}

const defaultDimension = (type: PieceType): { width: number; height: number } => {
  switch (type) {
    case 'blush':
      return { width: 169, height: 31 }
    case 'body':
      return { width: 247, height: 153 }
    case 'ears':
      return { width: 213, height: 38 }
    case 'eyes':
      return { width: 134, height: 59 }
    case 'head':
      return { width: 170, height: 167 }
    case 'mouth':
      return { width: 65, height: 26 }
    case 'neck':
      return { width: 67, height: 53 }
    case 'nose':
      return { width: 33, height: 33 }
    case 'pants':
      return { width: 100, height: 56 }
    case 'top':
      return { width: 213, height: 163 }
  }
}

const defaultPosition = (type: PieceType): { x: number; y: number } => {
  switch (type) {
    case 'blush':
      return { x: 95, y: 145 }
    case 'body':
      return { x: 56, y: 207 }
    case 'ears':
      return { x: 72, y: 125 }
    case 'eyes':
      return { x: 113, y: 101 }
    case 'head':
      return { x: 94, y: 43 }
    case 'mouth':
      return { x: 148, y: 160 }
    case 'neck':
      return { x: 149, y: 207 }
    case 'nose':
      return { x: 164, y: 127 }
    case 'pants':
      return { x: 130, y: 304 }
    case 'top':
      return { x: 72.5, y: 198 }
  }
}

export const AvatarPiece = React.forwardRef(_AvatarPiece)
