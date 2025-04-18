import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './main.css'
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Analytics />
    <App></App>
  </BrowserRouter>
);