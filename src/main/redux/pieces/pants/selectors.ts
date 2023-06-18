import type { RootSelector } from '@/redux/selectors'
import type { SvgColor, SvgColorNotNone } from '@/types/svgColor'

const selectColor: RootSelector<SvgColor> = (state) => state.pieces.pants.color
const selectColorNotNone: RootSelector<SvgColorNotNone> = (state) => state.pieces.pants.colorNotNone

export const pantsSelectors = {
  color: {
    select: selectColor,

    notNone: {
      select: selectColorNotNone,
    },
  },
} as const
