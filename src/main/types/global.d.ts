export {}

declare global {
  type Opt<T> = T | undefined

  type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never

  type Prefixed<
    Key extends string | number | bigint | boolean | null | undefined,
    Prefix extends string | number | bigint | boolean | null | undefined
  > = Prefix extends '' ? Key : `${Prefix}${Capitalize<Key>}`
  type Suffixed<
    Key extends string | number | bigint | boolean | null | undefined,
    Suffix extends string | number | bigint | boolean | null | undefined
  > = Suffix extends '' ? Key : `${Key}${Capitalize<Suffix>}`

  type EnumerateFromZeroTo<UpperBound extends number, Acc extends number[] = []> = Acc['length'] extends UpperBound
    ? Acc[number]
    : EnumerateFromZeroTo<UpperBound, [...Acc, Acc['length']]>
  type IntRange<LowerBound extends number, UpperBound extends number> = Exclude<
    EnumerateFromZeroTo<UpperBound>,
    EnumerateFromZeroTo<LowerBound>
  >

  type CustomType<
    Keys extends string | number | symbol,
    Return,
    Prefix extends string | number | bigint | boolean | null | undefined = '',
    Suffix extends string | number | bigint | boolean | null | undefined = ''
  > = {
    [Key in Suffixed<Prefixed<Keys, Prefix>, Suffix>]: Return
  }

  type Mutable<T> = { -readonly [Key in keyof T]: T[Key] }

  type DeepReadonly<T> = { readonly [Key in keyof T]: DeepReadonly<T[Key]> }
  type DeepMutable<T> = { -readonly [Key in keyof T]: DeepMutable<T[Key]> }

  type Dimension = {
    readonly width: number
    readonly height: number
  }
}
