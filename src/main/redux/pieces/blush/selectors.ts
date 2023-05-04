import type { RootSelector } from '@/redux/selectors'
import type { SvgColor } from '@/types/svgColor'

const selectColor: RootSelector<SvgColor> = (state) => state.pieces.blush.color

const selectPrColor: RootSelector<Opt<SvgColor>> = (state) => state.pieces.blush.pr.color
const selectResolvedPrColor: RootSelector<SvgColor> = (state) => selectPrColor(state) ?? selectColor(state)

const selectPlColor: RootSelector<Opt<SvgColor>> = (state) => state.pieces.blush.pl.color
const selectResolvedPlColor: RootSelector<SvgColor> = (state) => selectPlColor(state) ?? selectColor(state)

const selectSoft: RootSelector<boolean> = (state) => state.pieces.blush.soft

const selectPrSoft: RootSelector<Opt<boolean>> = (state) => state.pieces.blush.pr.soft
const selectResolvedPrSoft: RootSelector<boolean> = (state) => selectPrSoft(state) ?? selectSoft(state)

const selectPlSoft: RootSelector<Opt<boolean>> = (state) => state.pieces.blush.pl.soft
const selectResolvedPlSoft: RootSelector<boolean> = (state) => selectPlSoft(state) ?? selectSoft(state)

export const blushSelectors = {
  color: {
    select: selectColor,
  },

  soft: {
    select: selectSoft,
  },

  pr: {
    color: {
      select: selectPrColor,
      selectResolved: selectResolvedPrColor,
    },

    soft: {
      select: selectPrSoft,
      selectResolved: selectResolvedPrSoft,
    },
  },

  pl: {
    color: {
      select: selectPlColor,
      selectResolved: selectResolvedPlColor,
    },

    soft: {
      select: selectPlSoft,
      selectResolved: selectResolvedPlSoft,
    },
  },
} as const
