import { createSlice } from '@reduxjs/toolkit'

import type { SvgColor } from '@/types/svgColor'

export type ChestState = {
  readonly color: SvgColor
}

const getInitialState: () => ChestState = () => ({
  color: '#700000',
})

const slice = createSlice({
  name: 'pieces/chest',
  initialState: getInitialState,
  reducers: {},
})

export const { reducer: chestReducer, actions: chestActions, getInitialState: getChestInitialState } = slice
