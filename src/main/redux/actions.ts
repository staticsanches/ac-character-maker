import { avatarActions } from './avatar'
import { resetAll } from './globalActions'
import { piecesActions } from './pieces'

export const actions = {
  avatar: avatarActions,
  pieces: piecesActions,

  resetAll: resetAll,
} as const
