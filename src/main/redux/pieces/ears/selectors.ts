import { RootSelector, selectors } from '@/redux/selectors'
import type { SvgColor } from '@/types/svgColor'
import { darken } from '@/utils/svgColorUtils'
import { createSelector } from '@reduxjs/toolkit'

// Darken coefficient

const selectDarkenCoefficient: RootSelector<number> = (state) => state.pieces.ears.darkenCoefficient

const selectPrDarkenCoefficient: RootSelector<Opt<number>> = (state) => state.pieces.ears.pr.darkenCoefficient
const selectResolvedPrDarkenCoefficient: RootSelector<number> = (state) =>
  selectPrDarkenCoefficient(state) ?? selectDarkenCoefficient(state)

const selectPlDarkenCoefficient: RootSelector<Opt<number>> = (state) => state.pieces.ears.pl.darkenCoefficient
const selectResolvedPlDarkenCoefficient: RootSelector<number> = (state) =>
  selectPlDarkenCoefficient(state) ?? selectDarkenCoefficient(state)

// Skin color

const selectSkinColor: RootSelector<SvgColor> = (state) => selectors.avatar.selectSkinColor(state)

const selectDarkerSkinColor: RootSelector<SvgColor> = createSelector(
  selectSkinColor,
  selectDarkenCoefficient,
  (color, coefficient) => darken(color, coefficient)
)

const selectPrDarkerSkinColor: RootSelector<SvgColor> = createSelector(
  selectSkinColor,
  selectResolvedPrDarkenCoefficient,
  (color, coefficient) => darken(color, coefficient)
)

const selectPlDarkerSkinColor: RootSelector<SvgColor> = createSelector(
  selectSkinColor,
  selectResolvedPlDarkenCoefficient,
  (color, coefficient) => darken(color, coefficient)
)

// Color

const selectColor: RootSelector<Opt<SvgColor>> = (state) => state.pieces.ears.color
const selectResolvedColor: RootSelector<SvgColor> = (state) => selectColor(state) ?? selectDarkerSkinColor(state)

const selectPrColor: RootSelector<Opt<SvgColor>> = (state) => state.pieces.ears.pr.color
const selectResolvedPrColor: RootSelector<SvgColor> = (state) => selectPrColor(state) ?? selectPrDarkerSkinColor(state)

const selectPlColor: RootSelector<Opt<SvgColor>> = (state) => state.pieces.ears.pl.color
const selectResolvedPlColor: RootSelector<SvgColor> = (state) => selectPlColor(state) ?? selectPlDarkerSkinColor(state)

export const earsSelectors = {
  color: {
    select: selectColor,
    selectResolved: selectResolvedColor,
  },

  darkenCoefficient: {
    select: selectDarkenCoefficient,
  },

  pr: {
    color: {
      select: selectPrColor,
      selectResolved: selectResolvedPrColor,
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
    },

    darkenCoefficient: {
      select: selectPlDarkenCoefficient,
      selectResolved: selectResolvedPlDarkenCoefficient,
    },
  },
} as const
