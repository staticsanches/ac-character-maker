import { createSlice } from '@reduxjs/toolkit'

import type { MouthVariant } from '@/components/pieces/MouthPiece'
import type { SvgColor } from '@/types/svgColor'

export type MouthState = {
  /**
   * @defaultValue `surprise`
   */
  readonly variant: MouthVariant

  /**
   * @defaultValue `#841616`
   */
  readonly color: SvgColor

  /**
   * @defaultValue `#FFFFFF`
   */
  readonly accentColor: SvgColor
}

const initialState: MouthState = {
  variant: 'surprise',
  color: '#841616',
  accentColor: '#FFFFFF',
}

const slice = createSlice({
  name: 'pieces/mouth',
  initialState,
  reducers: {},
})

export const { reducer: mouthReducer, actions: mouthActions, getInitialState: getMouthInitialState } = slice
