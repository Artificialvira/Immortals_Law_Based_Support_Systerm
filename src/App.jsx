//import { useState } from 'react'
//import './App.css'

import {Routes,Route} from 'react-router-dom'
import UserRL from './Components/UserRL'
import Features from './Components/Landing/Features'
import NotFound from './Components/NotFound'



function App() {
  //const [count, setCount] = useState(0)
  

  return (
    < >
    
      
    <Routes>
      <Route exact path='/' element={<UserRL/>}/>
      <Route path='/features' element={<Features/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes> 
     
    
    </>
    

  )
}

export default App
