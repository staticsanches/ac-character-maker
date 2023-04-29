import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { SvgColor } from '@/types/svgColor'

export type NoseState = {
  /**
   * Default value: #FF7E36
   */
  readonly color: SvgColor
}

const initialState: NoseState = {
  color: '#FF7E36',
} as const

const noseSlice = createSlice({
  name: 'pieces/nose',
  initialState,
  reducers: {
    changeColor: (state, action: PayloadAction<SvgColor>) => {
      state.color = action.payload
    },
  },
})

export const { reducer: noseReducer, actions: noseActions, getInitialState: getNoseInitialState } = noseSlice
