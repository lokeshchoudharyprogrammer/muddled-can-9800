import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Blush } from './Blush';
import { Home } from './Home';
import { BlushSingle } from './BlushSingle';
import { Login } from './Login';
import { Navbar } from './Navbar';
import { NewAccount } from './NewAccount';
import { Bronze } from './Bronze';
import { Eyeliner } from './Eyeliner';
import { Eyeshadow } from './Eyeshadow';
import { Foundation } from './Foundation';
import { Lipliner } from './Lipliner';
import { Lipstick } from './Lipstick';
import { Mascara } from './Mascara';
import { Nailpolish } from './Nailpolish';
import Card from './Card';
import PaymentPage from './Payment';
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/card" element={<Card />} />
        <Route path="/createaccount" element={<NewAccount />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/blush" element={<Blush />}></Route>
        <Route path="/blush/:id" element={<BlushSingle />}></Route>
        <Route path="/bronze" element={<Bronze />}></Route>
        <Route path="/bronze/:id" element={<BlushSingle />}></Route>
        <Route path="/eyeliner" element={<Eyeliner />}></Route>
        <Route path="/eyeliner/:id" element={<BlushSingle />}></Route>
        <Route path="/eyeshadow" element={<Eyeshadow />}></Route>
        <Route path="/eyeshadow/:id" element={<BlushSingle />}></Route>
        <Route path="/foundation" element={<Foundation />}></Route>
        <Route path="/foundation/:id" element={<BlushSingle />}></Route>
        <Route path="/lipliner" element={<Lipliner />}></Route>
        <Route path="/lipliner/:id" element={<BlushSingle />}></Route>
        <Route path="/lipstick" element={<Lipstick />}></Route>
        <Route path="/lipstick/:id" element={<BlushSingle />}></Route>
        <Route path="/mascara" element={<Mascara />}></Route>
        <Route path="/mascara/:id" element={<BlushSingle />}></Route>
        <Route path="/nailpolish" element={<Nailpolish />}></Route>
        <Route path="/nailpolish/:id" element={<BlushSingle />}></Route>
      </Routes>
    </>
  );
};

// createaccount
