import './App.css'
import  {BrowserRouter, Route, Routes } from 'react-router-dom'
import { CardX, CardY } from './pages'

function App() {
  
  
  return (

      <BrowserRouter>
          <Routes>
            <Route path='/' element={<CardX />} /> 
            <Route path='/' element={<CardY />} /> 
          </Routes>
      </BrowserRouter>

  )
}

export default App

