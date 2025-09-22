<<<<<<< HEAD
import SideBar from '../TaskListSide/TopButton'
import './App.css'

function App() {

  return (
    <>
      <SideBar/>
    </>
=======
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Register from './SignUp/Registration1.jsx';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Login from "./SignUp/Login1.jsx"
import Fpassword from './SignUp/ForgotPassword.jsx';
function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Register/>}/>
          <Route path="/forgotpassword" element={<Fpassword/>}/>
        </Routes>  
    </div>
>>>>>>> 73d53962a6a7ab84b72a0fc5cc0276cca702b988
  )
}

export default App
