import React from 'react'

export type PieceType = (typeof pieceTypes)[number]
export const pieceTypes = ['blush', 'body', 'ears', 'eyes', 'head', 'mouth', 'neck', 'nose', 'pants', 'top'] as const

export const withPieceType = (type: PieceType) => {
  return <P extends object>(Component: React.ComponentType<P>) => {
    const ComponentWithPieceType = (props: P) => <Component {...props} />
    addPieceTypeMarker(ComponentWithPieceType, type)
    return ComponentWithPieceType
  }
}

export const extractPieceType = (child: React.ReactElement): PieceType => {
  const onlyChild = React.Children.only(child)

  let pieceType = tryExtractPieceType(onlyChild.type)
  if (pieceType) {
    return pieceType
  }

  // Tries to read originalType from props (Storybook rendered with MDX)
  if ('originalType' in onlyChild.props) {
    pieceType = tryExtractPieceType(onlyChild.props.originalType)
    if (pieceType) {
      return pieceType
    }
  }

  console.error('Invalid child', child)
  throw new Error('Invalid child')
}

const tryExtractPieceType = (type: any): PieceType | undefined => {
  if (PIECE_TYPE_MARKER in type) {
    const pieceType = type[PIECE_TYPE_MARKER]
    if (pieceTypes.indexOf(pieceType) >= 0) {
      return pieceType
    }
  }
}

const PIECE_TYPE_MARKER = '__AVATAR_CHARACTER_MAKER__PIECE_TYPE_MARKER__'

const addPieceTypeMarker = (component: any, type: PieceType) => {
  component[PIECE_TYPE_MARKER] = type
}
