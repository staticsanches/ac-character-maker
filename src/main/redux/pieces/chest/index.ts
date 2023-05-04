import { createSlice } from '@reduxjs/toolkit'

import type { SvgColor } from '@/types/svgColor'

export type ChestState = {
  readonly color: SvgColor
}

const initialState: ChestState = {
  color: '#700000',
} as const

const slice = createSlice({
  name: 'pieces/chest',
  initialState,
  reducers: {},
})

export const { reducer: chestReducer, actions: chestActions, getInitialState: getChestInitialState } = slice
