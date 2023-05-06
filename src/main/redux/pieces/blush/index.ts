import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
  reducers: {
    changeSoft: (state, action: PayloadAction<boolean>) => {
      state.soft = action.payload
    },
    changeSidedSoft: (state, action: PayloadAction<[side: 'pr' | 'pl', value: Opt<boolean>]>) => {
      state[action.payload[0]].soft = action.payload[1]
    },
  },
})

export const { reducer: blushReducer, actions: blushActions, getInitialState: getBlushInitialState } = slice
