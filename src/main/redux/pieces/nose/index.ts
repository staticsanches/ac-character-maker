import { createSlice } from '@reduxjs/toolkit'

import type { NoseVariant } from '@/components/pieces/NosePiece'
import type { SvgColor } from '@/types/svgColor'

export type NoseState = {
  readonly variant: NoseVariant
  readonly color: SvgColor
}

const getInitialState: () => NoseState = () => ({
  variant: 'rectangle',
  color: '#FFBAA5',
})

const slice = createSlice({
  name: 'pieces/nose',
  initialState: getInitialState,
  reducers: {},
})

export const { reducer: noseReducer, actions: noseActions, getInitialState: getNoseInitialState } = slice
