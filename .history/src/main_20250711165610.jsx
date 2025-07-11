import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MasterProvider } from './providers/MasterProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MasterProvider></MasterProvider>
    <App />
    </MasterProvider>
  </StrictMode>,
)
