import type { SvgColor } from '@/types/svgColor'
import type { RootSelector } from '../selectors'

const selectSize: RootSelector<number> = (state) => state.avatar.size

const selectSkinColor: RootSelector<SvgColor> = (state) => state.avatar.skinColor

const selectBackgroundRadius: RootSelector<number> = (state) => state.avatar.backgroundRadius

const selectBackgroundColor: RootSelector<SvgColor> = (state) => state.avatar.backgroundColor

export const avatarSelectors = {
  selectSize,
  selectSkinColor,
  selectBackgroundRadius,
  selectBackgroundColor,
} as const
