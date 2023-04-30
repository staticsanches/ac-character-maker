import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { SvgColor } from '@/types/svgColor'

export type BodyState = {
  /**
   * @defaultValue avatar skin color
   */
  readonly color?: SvgColor
}

const initialState: BodyState = {}

const bodySlice = createSlice({
  name: 'pieces/body',
  initialState,
  reducers: {
    changeColor: (state, action: PayloadAction<Opt<SvgColor>>) => {
      state.color = action.payload
    },
  },
})

export const { reducer: bodyReducer, actions: bodyActions, getInitialState: getBodyInitialState } = bodySlice
