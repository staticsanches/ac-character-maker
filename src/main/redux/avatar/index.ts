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
}

const initialState: AvatarState = {
  size: 360,

  skinColor: '#84401A',
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
