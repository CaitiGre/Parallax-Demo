import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../css/App.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  //Browser Router is added to allow us to use routing on any of the pages attached to App
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
