import type { SvgColor, SvgColorNotNone } from '@/types/svgColor'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type HeadState = {
  readonly color?: SvgColor
  readonly colorNotNone?: SvgColorNotNone
}

const getInitialState: () => HeadState = () => ({})

const slice = createSlice({
  name: 'pieces/head',
  initialState: getInitialState,
  reducers: {
    changeColor: (state, action: PayloadAction<Opt<SvgColor>>) => {
      state.color = action.payload
      if (action.payload !== 'none') {
        state.colorNotNone = action.payload
      }
    },
  },
})

export const { reducer: headReducer, actions: headActions, getInitialState: getHeadInitialState } = slice
