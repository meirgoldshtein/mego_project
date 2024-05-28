import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components-chaim/HomePage'
import MenuTopping from './components-chaim/MenuTopping'
import AddOnList from './components-chaim/MenuTopping'
import YourOrders from './components-chaim/YourOrders'
import UserSignUp from './components-chaim/UserSignUp'
// import FireStore from './components-chaim/FireStore'
import DataBase from './components-chaim/DataBase'
import Routerv from './components-chaim/Router'
import AppRouter from './components-chaim/Router'
// import React,{useState, useEffect}  from 'react'
// import db from './components-chaim/firebase-config.js'
// import DataBase from './components-chaim/DataBase'
import { db } from './components-chaim/firebase-config.js'
import { collection, getDocs } from "firebase/firestore";
import AllRestaurants from './components-chaim/Allresturants.jsx'



function App() {


  return (
    <>
    <AllRestaurants/>
    {/* <button onClick={omer}>aaa</button> */}
    {/* <FireStore/> */}
    {/* <DataBase/>
    <YourOrders/>
    <UserSignUp/>
    <HomePage/>
    <MenuTopping/>
    <AddOnList/> */}
    {/* <AppRouter/> */}

  </>
  )
}

export default App
