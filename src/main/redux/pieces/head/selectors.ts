import { RootSelector, selectors } from '@/redux/selectors'

import type { SvgColor, SvgColorNotNone } from '@/types/svgColor'

const selectColor: RootSelector<Opt<SvgColor>> = (state) => state.pieces.head.color
const selectResolvedColor: RootSelector<SvgColor> = (state) =>
  selectColor(state) ?? selectors.avatar.skinColor.select(state)
const selectColorNotNone: RootSelector<Opt<SvgColorNotNone>> = (state) => state.pieces.head.colorNotNone
const selectResolvedColorNotNone: RootSelector<SvgColorNotNone> = (state) =>
  selectColorNotNone(state) ?? selectors.avatar.skinColor.notNone.select(state)

export const headSelectors = {
  color: {
    select: selectColor,
    selectResolved: selectResolvedColor,

    notNone: {
      select: selectColorNotNone,
      selectResolved: selectResolvedColorNotNone,
    },
  },
} as const
