import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { SvgColor } from '@/types/svgColor'

export type HeadState = {
  /**
   * @defaultValue avatar skin color
   */
  readonly color?: SvgColor
}

const initialState: HeadState = {}

const headSlice = createSlice({
  name: 'pieces/head',
  initialState,
  reducers: {
    changeColor: (state, action: PayloadAction<Opt<SvgColor>>) => {
      state.color = action.payload
    },
  },
})

export const { reducer: headReducer, actions: headActions, getInitialState: getHeadInitialState } = headSlice
