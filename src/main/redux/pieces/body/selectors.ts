import { RootSelector, selectors } from '@/redux/selectors'
import type { SvgColor, SvgColorNotNone } from '@/types/svgColor'

const selectColor: RootSelector<Opt<SvgColor>> = (state) => state.pieces.body.color
const selectResolvedColor: RootSelector<SvgColor> = (state) =>
  selectColor(state) ?? selectors.avatar.skinColor.select(state)
const selectColorNotNone: RootSelector<Opt<SvgColorNotNone>> = (state) => state.pieces.ears.colorNotNone
const selectResolvedColorNotNone: RootSelector<SvgColorNotNone> = (state) =>
  selectColorNotNone(state) ?? selectors.avatar.skinColor.notNone.select(state)

export const bodySelectors = {
  color: {
    select: selectColor,
    selectResolved: selectResolvedColor,

    notNone: {
      select: selectColorNotNone,
      selectResolved: selectResolvedColorNotNone,
    },
  },
} as const
