import { createSlice } from '@reduxjs/toolkit'

import type { SvgColor } from '@/types/svgColor'
import { resetAll } from '../globalActions'

export type AvatarState = {
  readonly size: number

  readonly skinColor: SvgColor

  readonly backgroundRadius: number
  readonly backgroundColor: SvgColor
}

const getInitialState: () => AvatarState = () => ({
  size: 360,

  skinColor: '#84401A',

  backgroundRadius: 30,
  backgroundColor: '#2C2B5C',
})

const avatarSlice = createSlice({
  name: 'avatar',
  initialState: getInitialState,
  reducers: {
    reset: () => getInitialState(),
  },
  extraReducers: (builder) => {
    builder.addCase(resetAll, () => getInitialState())
  },
})

export const { reducer: avatarReducer, actions: avatarActions } = avatarSlice
