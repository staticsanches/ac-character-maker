import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { SvgColor, SvgColorNotNone } from '@/types/svgColor'

export type EarsState = State & {
  pr: Partial<State>
  pl: Partial<State>
}

type State = {
  readonly color?: SvgColor
  readonly colorNotNone?: SvgColorNotNone
  readonly darkenCoefficient: number
}

const getInitialState: () => EarsState = () => ({
  darkenCoefficient: 10,
  pr: {},
  pl: {},
})

const slice = createSlice({
  name: 'pieces/ears',
  initialState: getInitialState,
  reducers: {
    changeColor: (state, action: PayloadAction<Opt<SvgColor>>) => {
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

    changeDarkenCoefficient: (state, action: PayloadAction<number>) => {
      const darkenCoefficient = action.payload
      if (darkenCoefficient >= 0 && darkenCoefficient <= 100) {
        state.darkenCoefficient = darkenCoefficient | 0
      }
    },
    changeSidedDarkenCoefficient: (state, action: PayloadAction<[side: 'pr' | 'pl', value: Opt<number>]>) => {
      const side = action.payload[0]
      const darkenCoefficient = action.payload[1]
      if (darkenCoefficient === undefined) {
        state[side].darkenCoefficient = undefined
      } else if (darkenCoefficient >= 0 && darkenCoefficient <= 100) {
        state[side].darkenCoefficient = darkenCoefficient | 0
      }
    },
  },
})

export const { reducer: earsReducer, actions: earsActions, getInitialState: getEarsInitialState } = slice
