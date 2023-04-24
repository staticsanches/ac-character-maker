import { useMemo } from 'react'

import { uniqueID } from '../utils/uniqueID'

export const useUniqueLazyID = (prefix = '') => {
  const lazyID = useMemo(() => {
    let id: string | undefined
    return (prefix: string) => {
      if (!id) {
        id = uniqueID()
      }
      return prefix + id
    }
  }, [])
  return () => lazyID(prefix)
}
