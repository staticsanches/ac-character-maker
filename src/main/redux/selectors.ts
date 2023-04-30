import { createSelector, Selector } from '@reduxjs/toolkit'

import type { NoseVariant } from '@/components/pieces/NosePiece'
import type { SvgColor } from '@/types/svgColor'
import { darken } from '@/utils/svgColorUtils'
import type { RootState } from '.'

export type RootSelector<Result> = Selector<RootState, Result>

// Avatar selectors

export const selectAvatarWidth: RootSelector<number> = (state) => state.avatar.width
export const selectAvatarHeight: RootSelector<number> = (state) => state.avatar.height
export const selectAvatarDimension: RootSelector<{ width: number; height: number }> = createSelector(
  selectAvatarWidth,
  selectAvatarHeight,
  (width, height) => ({ width, height })
)

export const selectAvatarSkinColor: RootSelector<SvgColor> = (state) => state.avatar.skinColor

// Ears piece selectors

export const selectEarsPrColor: RootSelector<SvgColor> = (state) =>
  state.pieces.ears.prColor ?? state.pieces.ears.color ?? darken(selectAvatarSkinColor(state))

export const selectEarsPlColor: RootSelector<SvgColor> = (state) =>
  state.pieces.ears.plColor ?? state.pieces.ears.color ?? darken(selectAvatarSkinColor(state))

// Head piece selectors

export const selectHeadColor: RootSelector<SvgColor> = (state) =>
  state.pieces.head.color ?? selectAvatarSkinColor(state)

// Nose piece selectors

export const selectNoseVariant: RootSelector<NoseVariant> = (state) => state.pieces.nose.variant

export const selectNoseColor: RootSelector<SvgColor> = (state) => state.pieces.nose.color
