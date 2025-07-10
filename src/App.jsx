import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './components/Register'
import Login from './components/Login'
// import Home from './components/Home.jsx'
// import Temp from './components/Temp.jsx'
// export default function App() {
//   return (
//     <>
//     <Home name="John" age={21}/>
//     <Temp/>
//     </>
//   )
//   }
  export default function App() {
  return (
    <div>
      <h1>Cafe Frontend</h1>
      <Register/>
      <Login/>
      <h3>This is the footer</h3>
    </div>
  )
}
 
