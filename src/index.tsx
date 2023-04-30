import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { amber, purple } from '@mui/material/colors'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import { App } from '@/App'
import { persistor, store } from '@/redux'
import './index.css'
import reportWebVitals from './reportWebVitals'

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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <HashRouter>
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </HashRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
