import { createSlice } from '@reduxjs/toolkit'

import type { MouthVariant } from '@/components/pieces/MouthPiece'
import type { SvgColor } from '@/types/svgColor'

export type MouthState = {
  readonly variant: MouthVariant
  readonly color: SvgColor
  readonly accentColor: SvgColor
}

const getInitialState: () => MouthState = () => ({
  variant: 'surprise',
  color: '#841616',
  accentColor: '#FFFFFF',
})

const slice = createSlice({
  name: 'pieces/mouth',
  initialState: getInitialState,
  reducers: {},
})

export const { reducer: mouthReducer, actions: mouthActions, getInitialState: getMouthInitialState } = slice
