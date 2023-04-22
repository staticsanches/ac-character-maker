import { AboutPage } from '@/pages/About'
import { MakerPage } from '@/pages/Maker'
import { Box, Toolbar } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { Header } from './Header'

export const App = () => {
  return (
    <Box>
      <Header />
      <Box component="main" height="100vh" display="flex" flexDirection="column">
        <Toolbar />
        <Routes>
          <Route path="" element={<MakerPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Box>
    </Box>
  )
}
