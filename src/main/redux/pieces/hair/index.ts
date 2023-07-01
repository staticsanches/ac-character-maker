import type { HairVariant } from '@/components/pieces/HairPiece'
import type { SvgColor, SvgColorNotNone } from '@/types/svgColor'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type HairState = {
  readonly variant: HairVariant

  readonly color: SvgColor
  readonly colorNotNone: SvgColorNotNone
}

const getInitialState: () => HairState = () => ({
  variant: 'chill',
  color: '#161515',
  colorNotNone: '#161515',
})

const slice = createSlice({
  name: 'pieces/hair',
  initialState: getInitialState,
  reducers: {
    changeVariant: (state, action: PayloadAction<HairVariant>) => {
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

export const { reducer: hairReducer, actions: hairActions, getInitialState: getHairInitialState } = slice
