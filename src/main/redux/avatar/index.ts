import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { SvgColor } from '@/types/svgColor'

export type AvatarState = {
  /**
   * @defaultValue `360`
   */
  readonly width: number
  /**
   * @defaultValue `360`
   */
  readonly height: number

  /**
   * @defaultValue `#D0784E`
   */
  readonly skinColor: SvgColor
}

const initialState: AvatarState = {
  width: 360,
  height: 360,

  skinColor: '#84401A',
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
