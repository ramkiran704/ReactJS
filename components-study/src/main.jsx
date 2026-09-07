import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Card from "./components/Card";
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </StrictMode>,
)
