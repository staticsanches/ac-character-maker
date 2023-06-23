import type { HairVariant } from '@/components/pieces/HairPiece'
import type { RootSelector } from '@/redux/selectors'
import type { SvgColor, SvgColorNotNone } from '@/types/svgColor'

const selectVariant: RootSelector<HairVariant> = (state) => state.pieces.hair.variant

const selectColor: RootSelector<SvgColor> = (state) => state.pieces.hair.color
const selectColorNotNone: RootSelector<SvgColorNotNone> = (state) => state.pieces.hair.colorNotNone

export const hairSelectors = {
  variant: {
    select: selectVariant,
  },
  color: {
    select: selectColor,

    notNone: {
      select: selectColorNotNone,
    },
  },
} as const
