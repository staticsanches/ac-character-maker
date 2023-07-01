import type { Selector } from '@reduxjs/toolkit'
import type { RootState } from '.'
import { avatarSelectors } from './avatar/selectors'
import { piecesSelectors } from './pieces/selectors'

export type RootSelector<Result> = Selector<RootState, Result>

export const selectors = {
  avatar: avatarSelectors,
  pieces: piecesSelectors,
}
