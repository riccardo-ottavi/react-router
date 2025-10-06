import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './components/HomePage'
import DefaultLayout from './layouts/DefaultLayout'
import AboutPage from './components/AboutPage'
import Products from './components/Products'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/products" element={<Products/>} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
