import { avatarActions } from './avatar'
import { piecesActions } from './pieces'

export const actions = {
  avatar: avatarActions,
  pieces: piecesActions,
} as const
