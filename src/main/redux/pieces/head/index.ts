import { createSlice } from '@reduxjs/toolkit'

import type { SvgColor } from '@/types/svgColor'

export type HeadState = {
  readonly color?: SvgColor
}

const getInitialState: () => HeadState = () => ({})

const slice = createSlice({
  name: 'pieces/head',
  initialState: getInitialState,
  reducers: {},
})

export const { reducer: headReducer, actions: headActions, getInitialState: getHeadInitialState } = slice
