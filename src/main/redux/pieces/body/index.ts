import type { SvgColor, SvgColorNotNone } from '@/types/svgColor'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type BodyState = {
  readonly color?: SvgColor
  readonly colorNotNone?: SvgColorNotNone
}

const getInitialState: () => BodyState = () => ({})

const slice = createSlice({
  name: 'pieces/body',
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

export const { reducer: bodyReducer, actions: bodyActions, getInitialState: getBodyInitialState } = slice
