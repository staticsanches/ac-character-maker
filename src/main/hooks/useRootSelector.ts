import { useSelector } from 'react-redux'

import { RootSelector } from '@/redux/selectors'

export const useRootSelector = <T>(selector: RootSelector<T>): T => {
  // TODO: Add context check to allow custom values to be provided
  return useSelector(selector)
}
