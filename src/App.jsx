import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import Shop from './pages/Shop'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

function App() {

  let myRoute=createBrowserRouter(createRoutesFromElements(

    <Route>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
    </Route>
  ))
  
  return (
    <>
     <RouterProvider router={myRoute}/>
    </>
  )
}

export default App
