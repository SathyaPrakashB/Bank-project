import React from "react";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import Login from "./components/Login";
import AllData from "./components/Alldata";
import ContactForm from "./components/contactus";
import  NavBar  from "./Navbar";
import UserContext from "./userContext";
import {  Routes,  Route, } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'


export default function Apps() {
  return (
   
      <div>
        <NavBar/>        
        <UserContext.Provider value={{users:[{name:'',email:'legends.book@gmail.com',password:'secret80',balance:'0'}]}}>
          <div className="container" style={{padding: "20px"}}>
          <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/CreateAccount/" element={<CreateAccount />} />
           <Route path="/deposit/" element={<Deposit />} />
           <Route path="/withdraw/" element={<Withdraw />} />
           <Route path="/login/" element={<Login />} />
           <Route path="/Alldata/" element={<AllData />} />
           <Route path="/contactus/" element={<ContactForm />} />
          </Routes>
          </div>
        </UserContext.Provider>
      </div>
    
  );
}