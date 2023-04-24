export type PieceType = (typeof pieceTypes)[number]
export const pieceTypes = ['blush', 'body', 'ears', 'eyes', 'head', 'mouth', 'neck', 'nose', 'pants', 'top'] as const

export type PieceProps<PT extends PieceType> = {
  pieceType?: PT
}
