import type { SvgColor } from '@/types/svgColor'

export type EyesVariant = (typeof eyesVariants)[number]
export const eyesVariants = ['circle'] as const

export type IrisColorProps = Readonly<CustomType<'iris', SvgColor, 'pr' | 'pl', 'color'>>

export type OutlineColorProps = Readonly<CustomType<'outline', SvgColor, 'pr' | 'pl', 'color'>>

export type ScleraColorProps = Readonly<CustomType<'sclera', SvgColor, 'pr' | 'pl', 'color'>>

export type BottomLashesProps = {
  readonly bottomLashes: boolean
} & Readonly<CustomType<`bottomLash${IntRange<1, 4>}`, SvgColor, 'pr' | 'pl', 'color'>>

export type TopLashesProps = {
  readonly topLashes: boolean
} & Readonly<CustomType<`topLash${IntRange<1, 4>}`, SvgColor, 'pr' | 'pl', 'color'>>
