import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { SvgColor, SvgColorNotNone } from '@/types/svgColor'

export type PantsState = {
  readonly color: SvgColor
  readonly colorNotNone: SvgColorNotNone
}

const getInitialState: () => PantsState = () => ({
  color: '#212121',
  colorNotNone: '#212121',
})

const slice = createSlice({
  name: 'pieces/pants',
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

export const { reducer: pantsReducer, actions: pantsActions, getInitialState: getPantsInitialState } = slice
