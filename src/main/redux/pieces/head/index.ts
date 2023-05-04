import { createSlice } from '@reduxjs/toolkit'

import type { SvgColor } from '@/types/svgColor'

export type HeadState = {
  readonly color?: SvgColor
}

const initialState: HeadState = {} as const

const slice = createSlice({
  name: 'pieces/head',
  initialState,
  reducers: {},
})

export const { reducer: headReducer, actions: headActions, getInitialState: getHeadInitialState } = slice
