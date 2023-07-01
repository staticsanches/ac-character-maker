import type { SvgColor, SvgColorNotNone } from '@/types/svgColor'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type ChestState = {
  readonly color: SvgColor
  readonly colorNotNone: SvgColorNotNone
}

const getInitialState: () => ChestState = () => ({
  color: '#700000',
  colorNotNone: '#700000',
})

const slice = createSlice({
  name: 'pieces/chest',
  initialState: getInitialState,
  reducers: {
    changeColor: (state, action: PayloadAction<SvgColor>) => {
      state.color = action.payload
      if (action.payload !== 'none') {
        state.colorNotNone = action.payload
      }
    },
  },
})

export const { reducer: chestReducer, actions: chestActions, getInitialState: getChestInitialState } = slice
