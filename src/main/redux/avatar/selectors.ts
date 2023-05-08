import type { SvgColor } from '@/types/svgColor'
import type { RootSelector } from '../selectors'

const selectSize: RootSelector<number> = (state) => state.avatar.size

const selectSkinColor: RootSelector<SvgColor> = (state) => state.avatar.skinColor

const selectSkinColorNotNone: RootSelector<Exclude<SvgColor, 'none'>> = (state) => state.avatar.skinColorNotNone

const selectBackgroundRadius: RootSelector<number> = (state) => state.avatar.backgroundRadius

const selectBackgroundColor: RootSelector<SvgColor> = (state) => state.avatar.backgroundColor

export const avatarSelectors = {
  size: {
    select: selectSize,
  },

  skinColor: {
    select: selectSkinColor,

    notNone: {
      select: selectSkinColorNotNone,
    },
  },

  background: {
    color: {
      select: selectBackgroundColor,
    },

    radius: {
      select: selectBackgroundRadius,
    },
  },
} as const
