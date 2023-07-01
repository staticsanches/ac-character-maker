import type { TopVariant } from '@/components/pieces/top/TopPiece'
import type { SvgColor, SvgColorNotNone } from '@/types/svgColor'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type TopState = {
  readonly variant: TopVariant

  readonly color: SvgColor
  readonly colorNotNone: SvgColorNotNone
}

const getInitialState: () => TopState = () => ({
  variant: 'tee--adventure-awaits',

  color: '#A51C45',
  colorNotNone: '#A51C45',
})

const slice = createSlice({
  name: 'pieces/top',
  initialState: getInitialState,
  reducers: {
    changeVariant: (state, action: PayloadAction<TopVariant>) => {
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

export const { reducer: topReducer, actions: topActions, getInitialState: getTopInitialState } = slice
