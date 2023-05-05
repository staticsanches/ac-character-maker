import { createSlice } from '@reduxjs/toolkit'

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
  reducers: {},
})

export const { reducer: eyesReducer, actions: eyesActions, getInitialState: getEyesInitialState } = slice
