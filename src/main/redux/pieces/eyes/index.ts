import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { EyesVariant } from '@/components/pieces/eyes/Eyes'
import type { SvgColor } from '@/types/svgColor'

export type EyesState = {
  readonly variant: EyesVariant

  readonly pr: Partial<State>
  readonly pl: Partial<State>
} & State

type State = {
  readonly color: SvgColor
  readonly scleraColor: SvgColor

  readonly irisColor?: SvgColor
  readonly outlineColor?: SvgColor

  readonly bottomLashes: boolean
  readonly topLashes: boolean

  readonly lashesColor?: SvgColor
  readonly bottomLashesColor?: SvgColor
  readonly topLashesColor?: SvgColor
} & Readonly<Partial<CustomType<`bottomLash${IntRange<1, 4>}Color`, SvgColor>>> &
  Readonly<Partial<CustomType<`topLash${IntRange<1, 4>}Color`, SvgColor>>>

const getInitialState: () => EyesState = () => ({
  variant: 'circle',
  color: '#275976',
  scleraColor: '#FFFFFF',
  bottomLashes: false,
  topLashes: true,
  pr: {},
  pl: {},
})

const slice = createSlice({
  name: 'pieces/eyes',
  initialState: getInitialState,
  reducers: {
    changeBottomLashes: (state, action: PayloadAction<boolean>) => {
      state.bottomLashes = action.payload
    },
    changeSidedBottomLashes: (state, action: PayloadAction<[side: 'pr' | 'pl', value: Opt<boolean>]>) => {
      state[action.payload[0]].bottomLashes = action.payload[1]
    },

    changeTopLashes: (state, action: PayloadAction<boolean>) => {
      state.topLashes = action.payload
    },
    changeSidedTopLashes: (state, action: PayloadAction<[side: 'pr' | 'pl', value: Opt<boolean>]>) => {
      state[action.payload[0]].topLashes = action.payload[1]
    },
  },
})

export const { reducer: eyesReducer, actions: eyesActions, getInitialState: getEyesInitialState } = slice
