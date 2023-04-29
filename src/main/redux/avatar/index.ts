import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { SvgColor } from '@/types/svgColor'

export type AvatarState = {
  /**
   * Default value: #D0784E
   */
  readonly skinColor: SvgColor
}

const initialState: AvatarState = {
  skinColor: '#D0784E',
}

const avatarSlice = createSlice({
  name: 'avatar',
  initialState,
  reducers: {
    changeSkinColor: (state, action: PayloadAction<SvgColor>) => {
      state.skinColor = action.payload
    },
  },
})

export const { reducer: avatarReducer, actions: avatarActions } = avatarSlice
