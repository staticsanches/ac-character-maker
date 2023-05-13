import type { RootSelector } from '@/redux/selectors'
import type { SvgColor, SvgColorNotNone } from '@/types/svgColor'

const selectColor: RootSelector<SvgColor> = (state) => state.pieces.chest.color
const selectColorNotNone: RootSelector<SvgColorNotNone> = (state) => state.pieces.chest.colorNotNone

export const chestSelectors = {
  color: {
    select: selectColor,

    notNone: {
      select: selectColorNotNone,
    },
  },
} as const
