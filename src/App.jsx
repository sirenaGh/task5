import './App.css'
import React from 'react'
import Home from './components/home/Home'
import Footer from './components/footers/Footer' 
import HomePage from './modules/HomePage/pages/HomePage' 
import { Outlet } from 'react-router-dom' 
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter basename="/app">
    <Home/>
    <HomePage/>
    <Outlet /> 
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
