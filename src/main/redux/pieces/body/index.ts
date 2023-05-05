import { createSlice } from '@reduxjs/toolkit'

import type { SvgColor } from '@/types/svgColor'

export type BodyState = {
  readonly color?: SvgColor
}

const getInitialState: () => BodyState = () => ({})

const slice = createSlice({
  name: 'pieces/body',
  initialState: getInitialState,
  reducers: {},
})

export const { reducer: bodyReducer, actions: bodyActions, getInitialState: getBodyInitialState } = slice
