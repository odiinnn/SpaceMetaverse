import React, {Suspense} from 'react';
import { useEthers } from "@usedapp/core";
import './App.css';
import Nav from '../Nav/Nav.js'
import Map from '../Map/Map.js'
import Enter from '../Enter/Enter.js'
import Account from '../Account/Account.js'
import Planets from '../Planets/Planets.js'
import PlanetsPage from '../PlanetsPage/PlanetsPage.js'
import Lands from '../Lands/Lands.js'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {

    const { account } = useEthers()

  return (
  <>
    <BrowserRouter>
        <Nav />
        <Routes>
        {account
         ?<><Route path="/" element={<Enter />} />
            <Route path="/map" element={<Map />} />
            <Route path="/planet/:id" element={<Planets />} />
            <Route path="/account" element={<Account />} />
            <Route path="/lands" element={<Lands />} />
            <Route path="/planets" element={<PlanetsPage />} /></>
         :<><Route path="/" element={<Enter />} /></>
         }
        </Routes>
        <Navigate to='/' />
    </BrowserRouter>
  </>
  );
}

export default App;
