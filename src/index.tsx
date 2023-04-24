import React from 'react'
import ReactDOM from 'react-dom/client'

import reportWebVitals from './reportWebVitals'

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

import { App } from '@/App'
import { amber, purple } from '@mui/material/colors'
import { HashRouter, Route, Routes } from 'react-router-dom'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: purple,
    secondary: amber,
  },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
