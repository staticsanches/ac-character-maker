import { EqualityFn, useSelector } from 'react-redux'

import { RootSelector } from '@/redux/selectors'

export const useRootSelector = <T>(selector: RootSelector<T>, equalityFn?: EqualityFn<T> | undefined): T => {
  // TODO: Add context check to allow custom values to be provided
  return useSelector(selector, equalityFn)
}
