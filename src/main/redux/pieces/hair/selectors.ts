import type { HairVariant } from '@/components/pieces/HairPiece'
import type { RootSelector } from '@/redux/selectors'
import type { SvgColor, SvgColorNotNone } from '@/types/svgColor'

const selectVariant: RootSelector<HairVariant> = (state) => state.pieces.hair.variant
const selectVariantConsideringPreview: RootSelector<HairVariant> = (state) =>
  state.pieces.hair.variantPreview ?? state.pieces.hair.variant

const selectColor: RootSelector<SvgColor> = (state) => state.pieces.hair.color
const selectColorNotNone: RootSelector<SvgColorNotNone> = (state) => state.pieces.hair.colorNotNone

export const hairSelectors = {
  variant: {
    select: selectVariant,
    selectConsideringPreview: selectVariantConsideringPreview,
  },
  color: {
    select: selectColor,

    notNone: {
      select: selectColorNotNone,
    },
  },
} as const
