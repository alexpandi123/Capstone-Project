import Navigation from "./Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from 'react';
import Main from './pages/Main';
import AK47Page from "./pages/AK-47";
import M16Page from "./pages/M-16";
import AddNewWeaponPage from "./pages/AddnewWeapon.js";


function App() {

  return (
    <>
      <BrowserRouter>
          <div className="App">
            <Navigation />
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/add-new-weapon" element={<AddNewWeaponPage />} />
                <Route path="/AK47-details" element={<AK47Page />}/>
                <Route path="/M16-details" element={<M16Page />}/>
              </Routes>
          </div>
      </BrowserRouter>
  </>
  );

};

export default App;
