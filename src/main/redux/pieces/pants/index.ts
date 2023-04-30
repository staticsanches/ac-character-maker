import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { SvgColor } from '@/types/svgColor'

export type PantsState = {
  /**
   * @defaultValue `#212121`
   */
  readonly color: SvgColor
}

const initialState: PantsState = {
  color: '#212121',
}

const pantsSlice = createSlice({
  name: 'pieces/pants',
  initialState,
  reducers: {
    changeColor: (state, action: PayloadAction<SvgColor>) => {
      state.color = action.payload
    },
  },
})

export const { reducer: pantsReducer, actions: pantsActions, getInitialState: getPantsInitialState } = pantsSlice
