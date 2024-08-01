import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* router takes childern that way we can set routes */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
