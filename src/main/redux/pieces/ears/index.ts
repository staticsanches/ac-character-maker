import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { SvgColor } from '@/types/svgColor'

export type EarsState = {
  readonly color?: SvgColor

  /**
   * @defaultValue color or darker version of avatar skin color
   */
  readonly prColor?: SvgColor

  /**
   * @defaultValue color or darker version of avatar skin color
   */
  readonly plColor?: SvgColor
}

const initialState: EarsState = {}

const slice = createSlice({
  name: 'pieces/ears',
  initialState,
  reducers: {
    changeColor: (state, action: PayloadAction<Opt<SvgColor>>) => {
      state.color = action.payload
    },
    changePrColor: (state, action: PayloadAction<Opt<SvgColor>>) => {
      state.prColor = action.payload
    },
    changePlColor: (state, action: PayloadAction<Opt<SvgColor>>) => {
      state.prColor = action.payload
    },
  },
})

export const { reducer: earsReducer, actions: earsActions, getInitialState: getEarsInitialState } = slice
