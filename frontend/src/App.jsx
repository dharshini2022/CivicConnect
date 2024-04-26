import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Dashboard from './Dashboard'
import Schemes from './Schemes';
import Categories from './Categories';
import Specific from './schemeSpecific';

function App() {
  
  
  return (
    <>
      <Routes>
        <Route path='/'element={<Dashboard/>}></Route>
        <Route path='/Schemes'element={<Schemes/>}></Route>
        <Route path='/Categories'element={<Categories/>}></Route>
        <Route path='/Schemes' element={<Schemes/>}> </Route>
        <Route path="/api/schemes/:_id" element={<Specific/>} />
  
      </Routes>
    </>
  )
}

export default App
