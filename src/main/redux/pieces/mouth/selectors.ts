import type { MouthVariant } from '@/components/pieces/MouthPiece'
import type { RootSelector } from '@/redux/selectors'
import type { SvgColor, SvgColorNotNone } from '@/types/svgColor'

const selectVariant: RootSelector<MouthVariant> = (state) => state.pieces.mouth.variant

const selectColor: RootSelector<SvgColor> = (state) => state.pieces.mouth.color
const selectColorNotNone: RootSelector<SvgColorNotNone> = (state) => state.pieces.mouth.colorNotNone

const selectAccentColor: RootSelector<SvgColor> = (state) => state.pieces.mouth.accentColor
const selectAccentColorNotNone: RootSelector<SvgColorNotNone> = (state) => state.pieces.mouth.accentColorNotNone

export const mouthSelectors = {
  variant: {
    select: selectVariant,
  },
  color: {
    select: selectColor,

    notNone: {
      select: selectColorNotNone,
    },
  },
  accentColor: {
    select: selectAccentColor,

    notNone: {
      select: selectAccentColorNotNone,
    },
  },
} as const
