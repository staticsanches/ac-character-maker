import { useContext } from 'react'

import { SkinColorContext } from '@/contexts/SkinColorContext'

export const useSkinColor = () => useContext(SkinColorContext)
