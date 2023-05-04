import { createSlice } from '@reduxjs/toolkit'

import type { SvgColor } from '@/types/svgColor'

export type AvatarState = {
  readonly size: number

  readonly skinColor: SvgColor

  readonly backgroundRadius: number
  readonly backgroundColor: SvgColor
}

const initialState: AvatarState = {
  size: 360,

  skinColor: '#84401A',

  backgroundRadius: 30,
  backgroundColor: '#2C2B5C',
} as const

const avatarSlice = createSlice({
  name: 'avatar',
  initialState,
  reducers: {},
})

export const { reducer: avatarReducer, actions: avatarActions } = avatarSlice
