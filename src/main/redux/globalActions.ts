import { createAction } from '@reduxjs/toolkit'
import type { RootState } from '.'

export const resetAll = createAction('resetAll')

export const applyPreset = createAction<RootState>('applyPreset')
