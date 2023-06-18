import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { MouthVariant } from '@/components/pieces/MouthPiece'
import type { SvgColor, SvgColorNotNone } from '@/types/svgColor'

export type MouthState = {
  readonly variant: MouthVariant

  readonly color: SvgColor
  readonly colorNotNone: SvgColorNotNone

  readonly accentColor: SvgColor
  readonly accentColorNotNone: SvgColorNotNone
}

const getInitialState: () => MouthState = () => ({
  variant: 'surprise',
  color: '#841616',
  colorNotNone: '#841616',
  accentColor: '#FFFFFF',
  accentColorNotNone: '#FFFFFF',
})

const slice = createSlice({
  name: 'pieces/mouth',
  initialState: getInitialState,
  reducers: {
    changeVariant: (state, action: PayloadAction<MouthVariant>) => {
      state.variant = action.payload
    },

    changeColor: (state, action: PayloadAction<SvgColor>) => {
      state.color = action.payload
      if (action.payload !== 'none') {
        state.colorNotNone = action.payload
      }
    },

    changeAccentColor: (state, action: PayloadAction<SvgColor>) => {
      state.accentColor = action.payload
      if (action.payload !== 'none') {
        state.accentColorNotNone = action.payload
      }
    },
  },
})

export const { reducer: mouthReducer, actions: mouthActions, getInitialState: getMouthInitialState } = slice
