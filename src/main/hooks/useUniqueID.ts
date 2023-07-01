import { uniqueID } from '@/utils/uniqueID'
import { useMemo } from 'react'

export const useUniqueID = (prefix = '') => {
  const id = useMemo(() => uniqueID(), [])
  return prefix + id
}
