import { RootSelector, selectors } from '@/redux/selectors'
import type { SvgColor } from '@/types/svgColor'

const selectColor: RootSelector<Opt<SvgColor>> = (state) => state.pieces.head.color
const selectResolvedColor: RootSelector<SvgColor> = (state) =>
  selectColor(state) ?? selectors.avatar.skinColor.select(state)

export const headSelectors = {
  color: {
    select: selectColor,
    selectResolved: selectResolvedColor,
  },
} as const
