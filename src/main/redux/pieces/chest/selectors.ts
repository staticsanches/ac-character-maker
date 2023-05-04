import type { RootSelector } from '@/redux/selectors'
import type { SvgColor } from '@/types/svgColor'

const selectColor: RootSelector<SvgColor> = (state) => state.pieces.chest.color

export const chestSelectors = {
  color: {
    select: selectColor,
  },
} as const
