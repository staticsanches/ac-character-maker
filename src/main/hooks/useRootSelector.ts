import { createContext, useContext } from 'react'
import { EqualityFn, useSelector } from 'react-redux'

import type { RootState } from '@/redux'
import type { RootSelector } from '@/redux/selectors'

export const RootStateContext = createContext<RootState | null>(null)

export const useRootSelector = <T>(selector: RootSelector<T>, equalityFn?: EqualityFn<T> | undefined): T => {
  let selected = useSelector(selector, equalityFn)

  const context = useContext(RootStateContext)
  if (context) {
    selected = selector(context) // give preference to value in context if available
  }

  return selected
}
