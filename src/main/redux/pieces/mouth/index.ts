import { createSlice } from '@reduxjs/toolkit'

import type { MouthVariant } from '@/components/pieces/MouthPiece'
import type { SvgColor } from '@/types/svgColor'

export type MouthState = {
  readonly variant: MouthVariant
  readonly color: SvgColor
  readonly accentColor: SvgColor
}

const initialState: MouthState = {
  variant: 'surprise',
  color: '#841616',
  accentColor: '#FFFFFF',
} as const

const slice = createSlice({
  name: 'pieces/mouth',
  initialState,
  reducers: {},
})

export const { reducer: mouthReducer, actions: mouthActions, getInitialState: getMouthInitialState } = slice
