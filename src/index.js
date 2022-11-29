// npm modules
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

// app modules
import App from './App'
import './index.css'

// helper modules
import { Auth0ProviderWithConfig } from './helpers/Auth0ProviderWithConfig'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithConfig>
        <App />
      </Auth0ProviderWithConfig>
    </Router>
  </React.StrictMode>
)
