import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WeatherApi from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <WeatherApi></WeatherApi>
  </StrictMode>
)
