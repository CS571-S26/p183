import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App.jsx';
import { MatchaBookProvider } from './components/context/matchaBookContext.jsx';
import { MatchaAuthProvider } from './components/context/matchaAuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MatchaAuthProvider>
      <MatchaBookProvider>
        <App />
      </MatchaBookProvider>
    </MatchaAuthProvider>
  </StrictMode>
);