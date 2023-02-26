import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Blush } from './Blush';
import { Home } from './Home';
import {BlushSingle} from "./BlushSingle"
import { Login } from './Login';
import { Navbar } from './Navbar';
import { NewAccount } from './NewAccount';
import { Bronze } from './Bronze';
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/createaccount" element={<NewAccount />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/blush" element={<Blush />}></Route>
        <Route path="/blush/:id" element={<BlushSingle />}></Route>
        <Route path='/bronze' element={<Bronze/>}></Route>
      </Routes>
    </>
  );
};

// createaccount
