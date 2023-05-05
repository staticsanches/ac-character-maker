import { createSlice } from '@reduxjs/toolkit'

import type { SvgColor } from '@/types/svgColor'

export type PantsState = {
  readonly color: SvgColor
}

const getInitialState: () => PantsState = () => ({
  color: '#212121',
})

const slice = createSlice({
  name: 'pieces/pants',
  initialState: getInitialState,
  reducers: {},
})

export const { reducer: pantsReducer, actions: pantsActions, getInitialState: getPantsInitialState } = slice
