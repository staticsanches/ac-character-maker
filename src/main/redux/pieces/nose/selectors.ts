import type { NoseVariant } from '@/components/pieces/NosePiece'
import type { RootSelector } from '@/redux/selectors'
import type { SvgColor, SvgColorNotNone } from '@/types/svgColor'

const selectVariant: RootSelector<NoseVariant> = (state) => state.pieces.nose.variant

const selectColor: RootSelector<SvgColor> = (state) => state.pieces.nose.color
const selectColorNotNone: RootSelector<SvgColorNotNone> = (state) => state.pieces.nose.colorNotNone

export const noseSelectors = {
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
