import { useUniqueLazyID } from './useUniqueLazyID'

export const useSvgLazyID = (type: string): [() => string, () => string] => {
  const lazyID = useUniqueLazyID(type + '-')
  return [lazyID, () => `url(#${lazyID()})`]
}
