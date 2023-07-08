import type { SvgColor, SvgColorNotNone } from '@/types/svgColor'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { applyPreset, resetAll, resetAvatarControls } from '../globalActions'

export type AvatarState = {
  readonly size: number

  readonly skinColor: SvgColor
  readonly skinColorNotNone: SvgColorNotNone

  readonly backgroundRadius: number
  readonly backgroundColor: SvgColor
  readonly backgroundColorNotNone: SvgColorNotNone
}

export const getAvatarInitialState: () => AvatarState = () => ({
  size: 360,

  skinColor: '#84401A',
  skinColorNotNone: '#84401A',

  backgroundRadius: 30,
  backgroundColor: '#2C2B5C',
  backgroundColorNotNone: '#2C2B5C',
})

const avatarSlice = createSlice({
  name: 'avatar',
  initialState: getAvatarInitialState,
  reducers: {
    changeSkinColor: (state, action: PayloadAction<SvgColor>) => {
      const color = action.payload
      state.skinColor = color
      if (color !== 'none') {
        state.skinColorNotNone = color
      }
    },

    changeBackgroundColor: (state, action: PayloadAction<SvgColor>) => {
      const color = action.payload
      state.backgroundColor = color
      if (color !== 'none') {
        state.backgroundColorNotNone = color
      }
    },

    changeBackgroundRadius: (state, action: PayloadAction<number>) => {
      const radius = action.payload
      if (radius >= 0 && radius <= 180) {
        state.backgroundRadius = radius | 0
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(applyPreset, (state, action) => ({ ...action.payload.avatar, size: state.size }))
      .addCase(resetAll, (state) => ({ ...getAvatarInitialState(), size: state.size }))
      .addCase(resetAvatarControls, (state) => ({ ...getAvatarInitialState(), size: state.size }))
  },
})

export const { reducer: avatarReducer, actions: avatarActions } = avatarSlice
