import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { SvgColor } from '@/types/svgColor'

export type AvatarState = {
  /**
   * @defaultValue `360`
   */
  readonly size: number

  /**
   * @defaultValue `#D0784E`
   */
  readonly skinColor: SvgColor

  /**
   * @defaultValue `30`
   */
  readonly backgroundRadius: number
  /**
   * @defaultValue `#FFD686`
   */
  readonly backgroundColor: SvgColor
}

const initialState: AvatarState = {
  size: 360,

  skinColor: '#84401A',

  backgroundRadius: 30,
  backgroundColor: '#FFD686',
}

const avatarSlice = createSlice({
  name: 'avatar',
  initialState,
  reducers: {
    changeSize: (state, action: PayloadAction<number>) => {
      state.size = action.payload
    },
    changeSkinColor: (state, action: PayloadAction<SvgColor>) => {
      state.skinColor = action.payload
    },
  },
})

export const { reducer: avatarReducer, actions: avatarActions } = avatarSlice
