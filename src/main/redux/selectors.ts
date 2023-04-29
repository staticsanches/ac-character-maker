import type { Selector } from '@reduxjs/toolkit'

import type { SvgColor } from '@/types/svgColor'
import type { RootState } from '.'

export type RootSelector<Result> = Selector<RootState, Result>

export const selectAvatarSkinColor: RootSelector<SvgColor> = (state) => state.avatar.skinColor

export const selectHeadColor: RootSelector<SvgColor> = (state) =>
  state.pieces.head.color ?? selectAvatarSkinColor(state)
