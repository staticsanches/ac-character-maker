import { createContext, useContext } from 'react'
import { EqualityFn, useSelector } from 'react-redux'
import merge from 'ts-deepmerge'

import { getInitialRootState, RootState } from '@/redux'

import type { RootSelector } from '@/redux/selectors'

const RootStateContext = createContext<RootState | null>(null)

export const useRootSelector = <T,>(selector: RootSelector<T>, equalityFn?: EqualityFn<T> | undefined): T => {
  let selected = useSelector(selector, equalityFn)

  const context = useContext(RootStateContext)
  if (context) {
    selected = selector(context) // give preference to value in context if available
  }

  return selected
}

export type RootStateProviderProps = {
  base?: RootState
  override: DeepPartial<RootState>
  children: React.ReactNode
}

export const RootStateProvider = ({ base = getInitialRootState(), override, children }: RootStateProviderProps) => {
  const newState = merge(base, override) as RootState
  return <RootStateContext.Provider value={newState}>{children}</RootStateContext.Provider>
}
