import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home Page/Home'
import Login from './components/Login Page/Login'
import Signup from './components/SignUp Page/SignUp'
import ForgotPassword from './components/Forgot Page/ForgotPassword'
import Qr from './components/Qr/QrPage'
import RecordPage from './components/Record/RecordPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element= {<Login />} />
        <Route path='/qr' element= {<Qr />} />
        <Route path='/record' element= {<RecordPage />} />
        <Route path='/signup' element= {<Signup />} />
        <Route path='/forgot' element= {<ForgotPassword />} />
      </Routes>
    </Router>

  )
}

export default App