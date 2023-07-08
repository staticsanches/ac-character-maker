import { avatarActions } from './avatar'
import { applyPreset, resetAll, resetAvatarControls } from './globalActions'
import { piecesActions } from './pieces'

export const actions = {
  avatar: avatarActions,
  pieces: piecesActions,

  applyPreset,
  resetAll,
  resetAvatarControls,
} as const
