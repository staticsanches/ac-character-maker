import { createSlice } from '@reduxjs/toolkit'

import type { NoseVariant } from '@/components/pieces/NosePiece'
import type { SvgColor } from '@/types/svgColor'

export type NoseState = {
  readonly variant: NoseVariant
  readonly color: SvgColor
}

const initialState: NoseState = {
  variant: 'rectangle',
  color: '#FFBAA5',
} as const

const slice = createSlice({
  name: 'pieces/nose',
  initialState,
  reducers: {},
})

export const { reducer: noseReducer, actions: noseActions, getInitialState: getNoseInitialState } = slice
