import type { NoseVariant } from '@/components/pieces/NosePiece'
import type { RootSelector } from '@/redux/selectors'
import type { SvgColor } from '@/types/svgColor'

const selectVariant: RootSelector<NoseVariant> = (state) => state.pieces.nose.variant

const selectColor: RootSelector<SvgColor> = (state) => state.pieces.nose.color

export const noseSelectors = {
  variant: {
    select: selectVariant,
  },
  color: {
    select: selectColor,
  },
} as const
