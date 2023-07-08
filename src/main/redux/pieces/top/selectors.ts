import type { TopVariant } from '@/components/pieces/top/TopPiece'
import type { RootSelector } from '@/redux/selectors'
import type { SvgColor, SvgColorNotNone } from '@/types/svgColor'

const selectVariant: RootSelector<TopVariant> = (state) => state.pieces.top.variant
const selectVariantConsideringPreview: RootSelector<TopVariant> = (state) =>
  state.pieces.top.variantPreview ?? state.pieces.top.variant

const selectColor: RootSelector<SvgColor> = (state) => state.pieces.top.color
const selectColorNotNone: RootSelector<SvgColorNotNone> = (state) => state.pieces.top.colorNotNone

export const topSelectors = {
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
