import './App.css'
import  {BrowserRouter, Route, Routes } from 'react-router-dom'
import { CardData } from './pages'

function App() {
  
  
  return (

      <BrowserRouter>
          <Routes>
            <Route path='/' element={<CardData />} /> 
          </Routes>
      </BrowserRouter>

  )
}

export default App

