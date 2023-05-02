import { createSlice } from '@reduxjs/toolkit'

import type { EyesVariant } from '@/components/pieces/eyes/Eyes'
import type { SvgColor } from '@/types/svgColor'

export type EyesState = {
  readonly variant: EyesVariant

  readonly color: SvgColor
  readonly scleraColor: SvgColor

  readonly irisColor?: SvgColor
  readonly outlineColor?: SvgColor

  readonly bottomLashes: boolean
  readonly topLashes: boolean

  readonly lashesColor?: SvgColor
  readonly bottomLashesColor?: SvgColor
  readonly topLashesColor?: SvgColor
} & Readonly<Partial<CustomType<'sclera', SvgColor, 'pr' | 'pl', 'color'>>> &
  Readonly<Partial<CustomType<'iris', SvgColor, 'pr' | 'pl', 'color'>>> &
  Readonly<Partial<CustomType<'outline', SvgColor, 'pr' | 'pl', 'color'>>> &
  Readonly<Partial<CustomType<'lashes', SvgColor, 'pr' | 'pl', 'color'>>> &
  Readonly<Partial<CustomType<'bottomLashes', SvgColor, 'pr' | 'pl', 'color'>>> &
  Readonly<Partial<CustomType<`bottomLash${IntRange<1, 4>}`, SvgColor, 'pr' | 'pl', 'color'>>> &
  Readonly<Partial<CustomType<'topLashes', SvgColor, 'pr' | 'pl', 'color'>>> &
  Readonly<Partial<CustomType<`topLash${IntRange<1, 4>}`, SvgColor, 'pr' | 'pl', 'color'>>>

const initialState: EyesState = {
  variant: 'circle',
  color: '#275976',
  scleraColor: '#FFFFFF',
  bottomLashes: false,
  topLashes: true,
}

const slice = createSlice({
  name: 'pieces/eyes',
  initialState,
  reducers: {},
})

export const { reducer: eyesReducer, actions: eyesActions, getInitialState: getEyesInitialState } = slice
