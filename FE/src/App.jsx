import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import Admin from './Admin'
import Edituser from './Edituser'
const App = () => {
  return (
    <BrowserRouter>

    <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/admin' element={<Admin/>}></Route>
    <Route path='/edit/:id' element={<Edituser/>}></Route>


    </Routes>
    </BrowserRouter>
  )
}

export default App