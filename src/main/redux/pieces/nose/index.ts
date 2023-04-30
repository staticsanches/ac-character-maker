import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { NoseVariant } from '@/components/pieces/NosePiece'
import type { SvgColor } from '@/types/svgColor'

export type NoseState = {
  /**
   * @defaultValue `rectangle`
   */
  readonly variant: NoseVariant

  /**
   * @defaultValue `#FFBAA5`
   */
  readonly color: SvgColor
}

const initialState: NoseState = {
  variant: 'rectangle',
  color: '#FFBAA5',
} as const

const noseSlice = createSlice({
  name: 'pieces/nose',
  initialState,
  reducers: {
    changeVariant: (state, action: PayloadAction<NoseVariant>) => {
      state.variant = action.payload
    },
    changeColor: (state, action: PayloadAction<SvgColor>) => {
      state.color = action.payload
    },
  },
})

export const { reducer: noseReducer, actions: noseActions, getInitialState: getNoseInitialState } = noseSlice
