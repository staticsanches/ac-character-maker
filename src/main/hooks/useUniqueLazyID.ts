import { uniqueID } from '@/utils/uniqueID'
import { useMemo } from 'react'

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
