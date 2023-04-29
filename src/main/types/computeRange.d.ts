export type ComputeRange<N extends number, Result extends Array<unknown> = []> = Result['length'] extends N
  ? Result
  : ComputeRange<N, [...Result, Result['length']]>
