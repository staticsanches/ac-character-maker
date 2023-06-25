import { avatarActions } from './avatar'
import { applyPreset, resetAll } from './globalActions'
import { piecesActions } from './pieces'

export const actions = {
  avatar: avatarActions,
  pieces: piecesActions,

  applyPreset,
  resetAll,
} as const
