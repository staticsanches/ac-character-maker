import type { RootSelector } from '@/redux/selectors'
import type { SvgColor } from '@/types/svgColor'

const selectColor: RootSelector<SvgColor> = (state) => state.pieces.pants.color

export const pantsSelectors = {
  color: {
    select: selectColor,
  },
} as const
