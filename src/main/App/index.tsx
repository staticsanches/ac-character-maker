import { Route, Routes } from 'react-router-dom'

import { AboutPage } from '@/pages/About'
import { MakerPage } from '@/pages/Maker'
import { Box, useTheme } from '@mui/material'

import { Header } from './Header'

import type { CSSProperties } from '@mui/styled-engine'

export const App = () => {
  const theme = useTheme()
  return (
    <Box height="100%">
      <Header />
      <Box component="main" sx={mainSx(theme.mixins.toolbar)}>
        <Routes>
          <Route path="/*" element={<MakerPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Box>
    </Box>
  )
}

// Fixes the toolbar height problem
const mainSx = (toolbar: CSSProperties): CSSProperties => {
  const sx = createRecordWithHeight(toolbar)
  let key: keyof typeof toolbar
  for (key in toolbar) {
    if (key === 'minHeight') continue
    sx[key] = createRecordWithHeight(toolbar[key] as CSSProperties)
  }
  return sx
}

const createRecordWithHeight = (css: CSSProperties): Record<string, any> => {
  if ('minHeight' in css) {
    return { height: `calc(100% - ${css.minHeight ?? 0}px)` }
  }
  // Check 1 more level
  let key: keyof typeof css
  for (key in css) {
    const cssValue = css[key]
    if (typeof cssValue === 'object' && 'minHeight' in cssValue) {
      const record: Record<string, any> = {}
      record[key] = { height: `calc(100% - ${cssValue.minHeight ?? 0}px)` }
      return record
    }
  }
  return {}
}
