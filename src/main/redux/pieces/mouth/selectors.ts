import type { MouthVariant } from '@/components/pieces/MouthPiece'
import type { RootSelector } from '@/redux/selectors'
import type { SvgColor } from '@/types/svgColor'

const selectVariant: RootSelector<MouthVariant> = (state) => state.pieces.mouth.variant

const selectColor: RootSelector<SvgColor> = (state) => state.pieces.mouth.color

const selectAccentColor: RootSelector<SvgColor> = (state) => state.pieces.mouth.accentColor

export const mouthSelectors = {
  variant: {
    select: selectVariant,
  },
  color: {
    select: selectColor,
  },
  accentColor: {
    select: selectAccentColor,
  },
} as const
