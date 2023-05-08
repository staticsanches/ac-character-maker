import { RootSelector, selectors } from '@/redux/selectors'
import type { SvgColor } from '@/types/svgColor'

const selectColor: RootSelector<Opt<SvgColor>> = (state) => state.pieces.body.color
const selectResolvedColor: RootSelector<SvgColor> = (state) =>
  selectColor(state) ?? selectors.avatar.skinColor.select(state)

export const bodySelectors = {
  color: {
    select: selectColor,
    selectResolved: selectResolvedColor,
  },
} as const
