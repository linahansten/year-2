import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./index.css"
import CounterPage from './pages/CounterPage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path ="/counter" Component = {CounterPage}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
