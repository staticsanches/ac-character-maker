import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { resetAll } from '../globalActions'

import type { SvgColor, SvgColorNotNone } from '@/types/svgColor'

export type AvatarState = {
  readonly size: number

  readonly skinColor: SvgColor
  readonly skinColorNotNone: SvgColorNotNone

  readonly backgroundRadius: number
  readonly backgroundColor: SvgColor
  readonly backgroundColorNotNone: SvgColorNotNone
}

const getInitialState: () => AvatarState = () => ({
  size: 360,

  skinColor: '#84401A',
  skinColorNotNone: '#84401A',

  backgroundRadius: 30,
  backgroundColor: '#2C2B5C',
  backgroundColorNotNone: '#2C2B5C',
})

const avatarSlice = createSlice({
  name: 'avatar',
  initialState: getInitialState,
  reducers: {
    reset: () => getInitialState(),

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
    builder.addCase(resetAll, () => getInitialState())
  },
})

export const { reducer: avatarReducer, actions: avatarActions } = avatarSlice
