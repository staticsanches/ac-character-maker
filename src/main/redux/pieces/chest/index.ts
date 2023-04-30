import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { SvgColor } from '@/types/svgColor'

export type ChestState = {
  /**
   * @defaultValue `#700000`
   */
  readonly color: SvgColor
}

const initialState: ChestState = {
  color: '#700000',
}

const chestSlice = createSlice({
  name: 'pieces/chest',
  initialState,
  reducers: {
    changeColor: (state, action: PayloadAction<SvgColor>) => {
      state.color = action.payload
    },
  },
})

export const { reducer: chestReducer, actions: chestActions, getInitialState: getChestInitialState } = chestSlice
