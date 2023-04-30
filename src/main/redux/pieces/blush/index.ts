import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { SvgColor } from '@/types/svgColor'

export type BlushState = {
  /**
   * @defaultValue `#FF7E36`
   */
  readonly color: SvgColor

  /**
   * @defaultValue color
   */
  readonly prColor?: SvgColor

  /**
   * @defaultValue color
   */
  readonly plColor?: SvgColor

  /**
   * @defaultValue `false`
   */
  readonly soft: boolean

  /**
   * @defaultValue soft
   */
  readonly prSoft?: boolean

  /**
   * @defaultValue soft
   */
  readonly plSoft?: boolean
}

const initialState: BlushState = {
  color: '#FF7E36',
  soft: false,
}

const blushSlice = createSlice({
  name: 'pieces/blush',
  initialState,
  reducers: {
    changeColor: (state, action: PayloadAction<SvgColor>) => {
      state.color = action.payload
    },
    changePrColor: (state, action: PayloadAction<Opt<SvgColor>>) => {
      state.prColor = action.payload
    },
    changePlColor: (state, action: PayloadAction<Opt<SvgColor>>) => {
      state.prColor = action.payload
    },

    changeSoft: (state, action: PayloadAction<boolean>) => {
      state.soft = action.payload
    },
    changePrSoft: (state, action: PayloadAction<Opt<boolean>>) => {
      state.prSoft = action.payload
    },
    changePlSoft: (state, action: PayloadAction<Opt<boolean>>) => {
      state.plSoft = action.payload
    },
  },
})

export const { reducer: blushReducer, actions: blushActions, getInitialState: getBlushInitialState } = blushSlice
