import classes from '@/css/HighlightOnHover.module.css'
import type { PieceType } from '@/types/piece'
import { SvgIcon, type SvgIconProps } from '@mui/material'
import React from 'react'

export type AvatarPieceBaseProps = Partial<Dimension> & {
  readonly omitXY?: boolean
}

type AvatarPieceWithComponentBaseProps<P extends React.ElementType> = AvatarPieceBaseProps & {
  readonly pieceType: PieceType
  readonly contentComponent: P

  readonly viewBoxDimension?: Dimension
  readonly position?: XYPosition

  readonly highlightOnHover?: boolean
}

type AvatarPieceProps<P extends React.ElementType> = AvatarPieceWithComponentBaseProps<P> &
  DistributiveOmit<React.ComponentPropsWithoutRef<P>, keyof AvatarPieceWithComponentBaseProps<P>>

const _AvatarPiece = <P extends React.ElementType>(
  {
    pieceType,
    contentComponent,
    width,
    height,
    viewBoxDimension = defaultViewBoxDimension(pieceType),
    highlightOnHover = false,
    omitXY = false,
    position = defaultPosition(pieceType),
    ...contentProps
  }: AvatarPieceProps<P>,
  ref: React.ForwardedRef<SVGSVGElement>
): JSX.Element => (
  <svg
    ref={ref}
    viewBox={`0 0 ${viewBoxDimension.width} ${viewBoxDimension.height}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={width ?? viewBoxDimension.width}
    height={height ?? viewBoxDimension.height}
    {...(omitXY ? {} : position)}
    className={highlightOnHover ? classes.highlightOnHover : ''}
  >
    {React.createElement(contentComponent, contentProps)}
  </svg>
)

const defaultViewBoxDimension = (type: PieceType): Dimension => {
  switch (type) {
    case 'blush':
      return { width: 169, height: 31 }
    case 'body':
      return { width: 247, height: 153 }
    case 'chest':
      return { width: 67, height: 53 }
    case 'ears':
      return { width: 213, height: 38 }
    case 'eyes':
      return { width: 134, height: 59 }
    case 'hair':
      return { width: 295, height: 331 }
    case 'head':
      return { width: 170, height: 167 }
    case 'mouth':
      return { width: 65, height: 26 }
    case 'nose':
      return { width: 33, height: 33 }
    case 'pants':
      return { width: 100, height: 56 }
    case 'top':
      return { width: 213, height: 163 }
  }
}

const defaultPosition = (type: PieceType): XYPosition => {
  switch (type) {
    case 'blush':
      return { x: 95, y: 145 }
    case 'body':
      return { x: 56, y: 207 }
    case 'chest':
      return { x: 149, y: 207 }
    case 'ears':
      return { x: 72, y: 124 }
    case 'eyes':
      return { x: 113, y: 101 }
    case 'hair':
      return { x: 32, y: 4 }
    case 'head':
      return { x: 94, y: 43 }
    case 'mouth':
      return { x: 148, y: 160 }
    case 'nose':
      return { x: 164, y: 127 }
    case 'pants':
      return { x: 130, y: 304 }
    case 'top':
      return { x: 92.5, y: 198 }
  }
}

export const AvatarPiece = React.forwardRef(_AvatarPiece)

export type AvatarPieceIconBaseProps = Omit<SvgIconProps, 'viewBox' | 'children'>

type AvatarPieceIconProps = AvatarPieceIconBaseProps & {
  readonly pieceType: PieceType
  readonly viewBoxDimension?: Dimension

  readonly children: Exclude<React.ReactNode, null | undefined>
}

export const AvatarPieceIcon = ({
  pieceType,
  viewBoxDimension = defaultViewBoxDimension(pieceType),
  children,
  ...svgIconProps
}: AvatarPieceIconProps): JSX.Element => (
  <SvgIcon {...svgIconProps} viewBox={`0 0 ${viewBoxDimension.width} ${viewBoxDimension.height}`}>
    {children}
  </SvgIcon>
)
