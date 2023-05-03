import type { Selector } from '@reduxjs/toolkit'

import type { EyesVariant } from '@/components/pieces/eyes/Eyes'
import type { MouthVariant } from '@/components/pieces/MouthPiece'
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

// Eyes piece selectors

export const selectEyesVariant: RootSelector<EyesVariant> = (state) => state.pieces.eyes.variant

export const selectResolvedEyesPrOutlineColor: RootSelector<SvgColor> = (state) =>
  state.pieces.eyes.prOutlineColor ??
  state.pieces.eyes.outlineColor ??
  state.pieces.eyes.prColor ??
  state.pieces.eyes.color
export const selectResolvedEyesPlOutlineColor: RootSelector<SvgColor> = (state) =>
  state.pieces.eyes.plOutlineColor ??
  state.pieces.eyes.outlineColor ??
  state.pieces.eyes.plColor ??
  state.pieces.eyes.color

export const selectResolvedEyesPrIrisColor: RootSelector<SvgColor> = (state) =>
  state.pieces.eyes.prIrisColor ?? state.pieces.eyes.irisColor ?? state.pieces.eyes.prColor ?? state.pieces.eyes.color
export const selectResolvedEyesPlIrisColor: RootSelector<SvgColor> = (state) =>
  state.pieces.eyes.plIrisColor ?? state.pieces.eyes.irisColor ?? state.pieces.eyes.plColor ?? state.pieces.eyes.color

export const selectResolvedEyesPrScleraColor: RootSelector<SvgColor> = (state) =>
  state.pieces.eyes.prScleraColor ?? state.pieces.eyes.scleraColor
export const selectResolvedEyesPlScleraColor: RootSelector<SvgColor> = (state) =>
  state.pieces.eyes.plScleraColor ?? state.pieces.eyes.scleraColor

export const selectEyesBottomLashes: RootSelector<boolean> = (state) => state.pieces.eyes.bottomLashes
export const selectResolvedEyesPrBottomLash1Color: RootSelector<SvgColor> = (state) =>
  state.pieces.eyes.prBottomLash1Color ??
  state.pieces.eyes.prBottomLashesColor ??
  state.pieces.eyes.lashesColor ??
  state.pieces.eyes.prColor ??
  state.pieces.eyes.color
export const selectResolvedEyesPrBottomLash2Color: RootSelector<SvgColor> = (state) =>
  state.pieces.eyes.prBottomLash2Color ??
  state.pieces.eyes.prBottomLashesColor ??
  state.pieces.eyes.lashesColor ??
  state.pieces.eyes.prColor ??
  state.pieces.eyes.color
export const selectResolvedEyesPrBottomLash3Color: RootSelector<SvgColor> = (state) =>
  state.pieces.eyes.prBottomLash3Color ??
  state.pieces.eyes.prBottomLashesColor ??
  state.pieces.eyes.lashesColor ??
  state.pieces.eyes.prColor ??
  state.pieces.eyes.color
export const selectResolvedEyesPlBottomLash1Color: RootSelector<SvgColor> = (state) =>
  state.pieces.eyes.plBottomLash1Color ??
  state.pieces.eyes.plBottomLashesColor ??
  state.pieces.eyes.lashesColor ??
  state.pieces.eyes.plColor ??
  state.pieces.eyes.color
export const selectResolvedEyesPlBottomLash2Color: RootSelector<SvgColor> = (state) =>
  state.pieces.eyes.plBottomLash2Color ??
  state.pieces.eyes.plBottomLashesColor ??
  state.pieces.eyes.lashesColor ??
  state.pieces.eyes.plColor ??
  state.pieces.eyes.color
export const selectResolvedEyesPlBottomLash3Color: RootSelector<SvgColor> = (state) =>
  state.pieces.eyes.plBottomLash3Color ??
  state.pieces.eyes.plBottomLashesColor ??
  state.pieces.eyes.lashesColor ??
  state.pieces.eyes.plColor ??
  state.pieces.eyes.color

export const selectEyesTopLashes: RootSelector<boolean> = (state) => state.pieces.eyes.topLashes
export const selectResolvedEyesPrTopLash1Color: RootSelector<SvgColor> = (state) =>
  state.pieces.eyes.prTopLash1Color ??
  state.pieces.eyes.prTopLashesColor ??
  state.pieces.eyes.lashesColor ??
  state.pieces.eyes.prColor ??
  state.pieces.eyes.color
export const selectResolvedEyesPrTopLash2Color: RootSelector<SvgColor> = (state) =>
  state.pieces.eyes.prTopLash2Color ??
  state.pieces.eyes.prTopLashesColor ??
  state.pieces.eyes.lashesColor ??
  state.pieces.eyes.prColor ??
  state.pieces.eyes.color
export const selectResolvedEyesPrTopLash3Color: RootSelector<SvgColor> = (state) =>
  state.pieces.eyes.prTopLash3Color ??
  state.pieces.eyes.prTopLashesColor ??
  state.pieces.eyes.lashesColor ??
  state.pieces.eyes.prColor ??
  state.pieces.eyes.color
export const selectResolvedEyesPlTopLash1Color: RootSelector<SvgColor> = (state) =>
  state.pieces.eyes.plTopLash1Color ??
  state.pieces.eyes.plTopLashesColor ??
  state.pieces.eyes.lashesColor ??
  state.pieces.eyes.plColor ??
  state.pieces.eyes.color
export const selectResolvedEyesPlTopLash2Color: RootSelector<SvgColor> = (state) =>
  state.pieces.eyes.plTopLash2Color ??
  state.pieces.eyes.plTopLashesColor ??
  state.pieces.eyes.lashesColor ??
  state.pieces.eyes.plColor ??
  state.pieces.eyes.color
export const selectResolvedEyesPlTopLash3Color: RootSelector<SvgColor> = (state) =>
  state.pieces.eyes.plTopLash3Color ??
  state.pieces.eyes.plTopLashesColor ??
  state.pieces.eyes.lashesColor ??
  state.pieces.eyes.plColor ??
  state.pieces.eyes.color

// Head piece selectors

export const selectResolvedHeadColor: RootSelector<SvgColor> = (state) =>
  state.pieces.head.color ?? selectAvatarSkinColor(state)

// Mouth piece selectors

export const selectMouthVariant: RootSelector<MouthVariant> = (state) => state.pieces.mouth.variant

export const selectMouthColor: RootSelector<SvgColor> = (state) => state.pieces.mouth.color

export const selectMouthAccentColor: RootSelector<SvgColor> = (state) => state.pieces.mouth.accentColor

// Nose piece selectors

export const selectNoseVariant: RootSelector<NoseVariant> = (state) => state.pieces.nose.variant

export const selectNoseColor: RootSelector<SvgColor> = (state) => state.pieces.nose.color

// Pants piece selectors

export const selectPantsColor: RootSelector<SvgColor> = (state) => state.pieces.pants.color
