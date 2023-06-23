import { RootSelector, selectors } from '@/redux/selectors'
import { darken } from '@/utils/svgColorUtils'
import { createSelector } from '@reduxjs/toolkit'

import type { SvgColor, SvgColorNotNone } from '@/types/svgColor'

// Darken coefficient

const selectDarkenCoefficient: RootSelector<number> = (state) => state.pieces.ears.darkenCoefficient

const selectPrDarkenCoefficient: RootSelector<Opt<number>> = (state) => state.pieces.ears.pr.darkenCoefficient
const selectResolvedPrDarkenCoefficient: RootSelector<number> = (state) =>
  selectPrDarkenCoefficient(state) ?? selectDarkenCoefficient(state)

const selectPlDarkenCoefficient: RootSelector<Opt<number>> = (state) => state.pieces.ears.pl.darkenCoefficient
const selectResolvedPlDarkenCoefficient: RootSelector<number> = (state) =>
  selectPlDarkenCoefficient(state) ?? selectDarkenCoefficient(state)

// Skin color

const selectSkinColor: RootSelector<SvgColor> = (state) => selectors.avatar.skinColor.select(state)
const selectSkinColorNotNone: RootSelector<SvgColorNotNone> = (state) =>
  selectors.avatar.skinColor.notNone.select(state)

const selectDarkerSkinColor: RootSelector<SvgColor> = createSelector(
  selectSkinColor,
  selectDarkenCoefficient,
  (color, coefficient) => darken(color, coefficient)
)
const selectDarkerSkinColorNotNone: RootSelector<SvgColorNotNone> = createSelector(
  selectSkinColorNotNone,
  selectDarkenCoefficient,
  (color, coefficient) => darken(color, coefficient)
)

const selectPrDarkerSkinColor: RootSelector<SvgColor> = createSelector(
  selectSkinColor,
  selectResolvedPrDarkenCoefficient,
  (color, coefficient) => darken(color, coefficient)
)
const selectPrDarkerSkinColorNotNone: RootSelector<SvgColorNotNone> = createSelector(
  selectSkinColorNotNone,
  selectResolvedPrDarkenCoefficient,
  (color, coefficient) => darken(color, coefficient)
)

const selectPlDarkerSkinColor: RootSelector<SvgColor> = createSelector(
  selectSkinColor,
  selectResolvedPlDarkenCoefficient,
  (color, coefficient) => darken(color, coefficient)
)
const selectPlDarkerSkinColorNotNone: RootSelector<SvgColorNotNone> = createSelector(
  selectSkinColorNotNone,
  selectResolvedPlDarkenCoefficient,
  (color, coefficient) => darken(color, coefficient)
)

// Color

const selectColor: RootSelector<Opt<SvgColor>> = (state) => state.pieces.ears.color
const selectResolvedColor: RootSelector<SvgColor> = (state) => selectColor(state) ?? selectDarkerSkinColor(state)
const selectColorNotNone: RootSelector<Opt<SvgColorNotNone>> = (state) => state.pieces.ears.colorNotNone
const selectResolvedColorNotNone: RootSelector<SvgColorNotNone> = (state) =>
  selectColorNotNone(state) ?? selectDarkerSkinColorNotNone(state)

const selectPrColor: RootSelector<Opt<SvgColor>> = (state) => state.pieces.ears.pr.color
const selectResolvedPrColor: RootSelector<SvgColor> = (state) =>
  selectPrColor(state) ?? selectColor(state) ?? selectPrDarkerSkinColor(state)
const selectPrColorNotNone: RootSelector<Opt<SvgColorNotNone>> = (state) => state.pieces.ears.pr.colorNotNone
const selectResolvedPrColorNotNone: RootSelector<SvgColorNotNone> = (state) =>
  selectPrColorNotNone(state) ?? selectColorNotNone(state) ?? selectPrDarkerSkinColorNotNone(state)

const selectPlColor: RootSelector<Opt<SvgColor>> = (state) => state.pieces.ears.pl.color
const selectResolvedPlColor: RootSelector<SvgColor> = (state) =>
  selectPlColor(state) ?? selectColor(state) ?? selectPlDarkerSkinColor(state)
const selectPlColorNotNone: RootSelector<Opt<SvgColorNotNone>> = (state) => state.pieces.ears.pl.colorNotNone
const selectResolvedPlColorNotNone: RootSelector<SvgColorNotNone> = (state) =>
  selectPlColorNotNone(state) ?? selectColorNotNone(state) ?? selectPlDarkerSkinColorNotNone(state)

export const earsSelectors = {
  color: {
    select: selectColor,
    selectResolved: selectResolvedColor,

    notNone: {
      select: selectColorNotNone,
      selectResolved: selectResolvedColorNotNone,
    },
  },

  darkenCoefficient: {
    select: selectDarkenCoefficient,
  },

  pr: {
    color: {
      select: selectPrColor,
      selectResolved: selectResolvedPrColor,

      notNone: {
        select: selectPrColorNotNone,
        selectResolved: selectResolvedPrColorNotNone,
      },
    },

    darkenCoefficient: {
      select: selectPrDarkenCoefficient,
      selectResolved: selectResolvedPrDarkenCoefficient,
    },
  },

  pl: {
    color: {
      select: selectPlColor,
      selectResolved: selectResolvedPlColor,

      notNone: {
        select: selectPlColorNotNone,
        selectResolved: selectResolvedPlColorNotNone,
      },
    },

    darkenCoefficient: {
      select: selectPlDarkenCoefficient,
      selectResolved: selectResolvedPlDarkenCoefficient,
    },
  },
} as const
