import React from 'react';
// import {Route,Routes} from "re"
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Login } from './Login';
import { Navbar } from './Navbar';
import { NewAccount } from './NewAccount';
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/createaccount" element={<NewAccount />} />
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
};

// createaccount
