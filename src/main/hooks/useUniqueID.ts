import { useMemo } from 'react'

import { uniqueID } from '@/utils/uniqueID'

export const useUniqueID = (prefix = '') => {
  const id = useMemo(() => uniqueID(), [])
  return prefix + id
}
