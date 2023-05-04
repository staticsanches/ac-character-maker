import { createSlice } from '@reduxjs/toolkit'

import type { SvgColor } from '@/types/svgColor'

export type BodyState = {
  readonly color?: SvgColor
}

const initialState: BodyState = {} as const

const slice = createSlice({
  name: 'pieces/body',
  initialState,
  reducers: {},
})

export const { reducer: bodyReducer, actions: bodyActions, getInitialState: getBodyInitialState } = slice
