import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { NoseVariant } from '@/components/pieces/NosePiece'
import type { SvgColor, SvgColorNotNone } from '@/types/svgColor'

export type NoseState = {
  readonly variant: NoseVariant

  readonly color: SvgColor
  readonly colorNotNone: SvgColorNotNone
}

const getInitialState: () => NoseState = () => ({
  variant: 'rectangle',

  color: '#FFBAA5',
  colorNotNone: '#FFBAA5',
})

const slice = createSlice({
  name: 'pieces/nose',
  initialState: getInitialState,
  reducers: {
    changeVariant: (state, action: PayloadAction<NoseVariant>) => {
      state.variant = action.payload
    },

    changeColor: (state, action: PayloadAction<SvgColor>) => {
      state.color = action.payload
      if (action.payload !== 'none') {
        state.colorNotNone = action.payload
      }
    },
  },
})

export const { reducer: noseReducer, actions: noseActions, getInitialState: getNoseInitialState } = slice
