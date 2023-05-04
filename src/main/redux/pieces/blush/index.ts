import { createSlice } from '@reduxjs/toolkit'

import type { SvgColor } from '@/types/svgColor'

export type BlushState = State & {
  readonly pr: Partial<State>
  readonly pl: Partial<State>
}

type State = {
  readonly color: SvgColor
  readonly soft: boolean
}

const initialState: BlushState = {
  color: '#FF7E36',
  soft: true,
  pr: {},
  pl: {},
} as const

const slice = createSlice({
  name: 'pieces/blush',
  initialState,
  reducers: {},
})

export const { reducer: blushReducer, actions: blushActions, getInitialState: getBlushInitialState } = slice
