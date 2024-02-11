import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { theme } from './constant/theme'
import Routes from './routes'
// import { config } from './configs/baseName'
import NavigationScroll from './layout/NavigationScroll'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <BrowserRouter basename={config.baseName}> */}
        <BrowserRouter>
          <NavigationScroll>
            <Routes />
          </NavigationScroll>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
)
