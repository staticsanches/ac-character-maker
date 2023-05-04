import { createSlice } from '@reduxjs/toolkit'

import type { SvgColor } from '@/types/svgColor'

export type EarsState = State & {
  pr: Partial<State>
  pl: Partial<State>
}

type State = {
  readonly color?: SvgColor
  readonly darkenCoefficient: number
}

const initialState: EarsState = {
  darkenCoefficient: 10,
  pr: {},
  pl: {},
} as const

const slice = createSlice({
  name: 'pieces/ears',
  initialState,
  reducers: {},
})

export const { reducer: earsReducer, actions: earsActions, getInitialState: getEarsInitialState } = slice
