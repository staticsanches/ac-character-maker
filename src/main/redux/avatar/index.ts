import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { SvgColor, SvgColorNotNone } from '@/types/svgColor'
import { resetAll } from '../globalActions'

export type AvatarState = {
  readonly size: number

  readonly skinColor: SvgColor
  readonly skinColorNotNone: SvgColorNotNone

  readonly backgroundRadius: number
  readonly backgroundColor: SvgColor
}

const getInitialState: () => AvatarState = () => ({
  size: 360,

  skinColor: '#84401A',
  skinColorNotNone: '#84401A',

  backgroundRadius: 30,
  backgroundColor: '#2C2B5C',
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
  },
  extraReducers: (builder) => {
    builder.addCase(resetAll, () => getInitialState())
  },
})

export const { reducer: avatarReducer, actions: avatarActions } = avatarSlice
