import merge from 'ts-deepmerge'

import { RootStateContext } from '@/hooks/useRootSelector'
import { getInitialRootState, RootState } from '@/redux'

import type React from 'react'

export const withRootStateContext = <P extends {}>(
  Component: React.ComponentType<P>,
  stateOverride: DeepPartial<RootState>,
  baseState: RootState = getInitialRootState()
) => {
  const state = merge(baseState, stateOverride) as RootState
  const ComponentWithRootStateContext = (props: P) => (
    <RootStateContext.Provider value={state}>
      <Component {...props} />
    </RootStateContext.Provider>
  )
  const displayName = Component.displayName || Component.name || 'Component'
  ComponentWithRootStateContext.displayName = `withRootStateContext(${displayName})`
  return ComponentWithRootStateContext
}
