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

const getInitialState: () => BlushState = () => ({
  color: '#FF7E36',
  soft: true,
  pr: {},
  pl: {},
})

const slice = createSlice({
  name: 'pieces/blush',
  initialState: getInitialState,
  reducers: {},
})

export const { reducer: blushReducer, actions: blushActions, getInitialState: getBlushInitialState } = slice
