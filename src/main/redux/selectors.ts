import { Selector } from '@reduxjs/toolkit'

import type { NoseVariant } from '@/components/pieces/NosePiece'
import type { SvgColor } from '@/types/svgColor'
import { darken } from '@/utils/svgColorUtils'
import type { RootState } from '.'

export type RootSelector<Result> = Selector<RootState, Result>

// Avatar selectors

export const selectAvatarSize: RootSelector<number> = (state) => state.avatar.size

export const selectAvatarSkinColor: RootSelector<SvgColor> = (state) => state.avatar.skinColor

export const selectAvatarBackgroundRadius: RootSelector<number> = (state) => state.avatar.backgroundRadius

export const selectAvatarBackgroundColor: RootSelector<SvgColor> = (state) => state.avatar.backgroundColor

// Blush piece selectors

export const selectResolvedBlushPrColor: RootSelector<SvgColor> = (state) =>
  state.pieces.blush.prColor ?? state.pieces.blush.color

export const selectResolvedBlushPlColor: RootSelector<SvgColor> = (state) =>
  state.pieces.blush.plColor ?? state.pieces.blush.color

export const selectResolvedBlushPrSoft: RootSelector<boolean> = (state) =>
  state.pieces.blush.prSoft ?? state.pieces.blush.soft

export const selectResolvedBlushPlSoft: RootSelector<boolean> = (state) =>
  state.pieces.blush.plSoft ?? state.pieces.blush.soft

// Body piece selectors

export const selectResolvedBodyColor: RootSelector<SvgColor> = (state) =>
  state.pieces.body.color ?? selectAvatarSkinColor(state)

// Chest piece selectors

export const selectChestColor: RootSelector<SvgColor> = (state) => state.pieces.chest.color

// Ears piece selectors

export const selectResolvedEarsPrColor: RootSelector<SvgColor> = (state) =>
  state.pieces.ears.prColor ?? state.pieces.ears.color ?? darken(selectAvatarSkinColor(state))

export const selectResolvedEarsPlColor: RootSelector<SvgColor> = (state) =>
  state.pieces.ears.plColor ?? state.pieces.ears.color ?? darken(selectAvatarSkinColor(state))

// Head piece selectors

export const selectResolvedHeadColor: RootSelector<SvgColor> = (state) =>
  state.pieces.head.color ?? selectAvatarSkinColor(state)

// Nose piece selectors

export const selectNoseVariant: RootSelector<NoseVariant> = (state) => state.pieces.nose.variant

export const selectNoseColor: RootSelector<SvgColor> = (state) => state.pieces.nose.color

// Pants piece selectors

export const selectPantsColor: RootSelector<SvgColor> = (state) => state.pieces.pants.color
