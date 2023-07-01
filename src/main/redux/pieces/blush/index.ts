import type { SvgColor, SvgColorNotNone } from '@/types/svgColor'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type BlushState = State & {
  readonly pr: Partial<State>
  readonly pl: Partial<State>
}

type State = {
  readonly color: SvgColor
  readonly colorNotNone: SvgColorNotNone

  readonly soft: boolean
}

const getInitialState: () => BlushState = () => ({
  color: '#FF7E36',
  colorNotNone: '#FF7E36',
  soft: true,
  pr: {},
  pl: {},
})

const slice = createSlice({
  name: 'pieces/blush',
  initialState: getInitialState,
  reducers: {
    changeColor: (state, action: PayloadAction<SvgColor>) => {
      state.color = action.payload
      if (action.payload !== 'none') {
        state.colorNotNone = action.payload
      }
    },
    changeSidedColor: (state, action: PayloadAction<[side: 'pr' | 'pl', value: Opt<SvgColor>]>) => {
      const side = action.payload[0]
      const color = action.payload[1]
      state[side].color = color
      if (color !== 'none') {
        state[side].colorNotNone = color
      }
    },

    changeSoft: (state, action: PayloadAction<boolean>) => {
      state.soft = action.payload
    },
    changeSidedSoft: (state, action: PayloadAction<[side: 'pr' | 'pl', value: Opt<boolean>]>) => {
      state[action.payload[0]].soft = action.payload[1]
    },
  },
})

export const { reducer: blushReducer, actions: blushActions, getInitialState: getBlushInitialState } = slice
