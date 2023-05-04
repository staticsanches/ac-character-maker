import { createSlice } from '@reduxjs/toolkit'

import type { SvgColor } from '@/types/svgColor'

export type PantsState = {
  readonly color: SvgColor
}

const initialState: PantsState = {
  color: '#212121',
} as const

const slice = createSlice({
  name: 'pieces/pants',
  initialState,
  reducers: {},
})

export const { reducer: pantsReducer, actions: pantsActions, getInitialState: getPantsInitialState } = slice
