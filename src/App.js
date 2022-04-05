

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Navibar } from './components/Navibar';
import 'bootstrap/dist/css/bootstrap.min.css';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UserLogin from './components/User/UserLogin';
import UserRegister from './components/User/UserRegister';
import UserDashboard from './components/UserDashboard'
class App extends Component {
  


  render() {
  
    return (
       <>
      <Navibar/>
     
      {
        
      }
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/User/login' element={<UserLogin/>}></Route>
        <Route path='/User/register' element={<UserRegister/>}></Route>
        <Route path='/UserDashboard' element={<UserDashboard/>}></Route>
      </Routes>
      </>
    )
  }
}

export default App
