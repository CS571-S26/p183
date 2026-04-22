import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import { MatchaBookProvider } from './components/context/matchaBookContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MatchaBookProvider>
      <App />
    </MatchaBookProvider>
  </StrictMode>
)