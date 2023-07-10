import Navigation from "./Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from 'react';
import Main from './pages/Main';
import AddNewWeapon from './pages/AddnewWeapon.js';


function App() {

  return (
    <>
      <BrowserRouter>
          <div className="App">
            <Navigation />
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="add-new-weapon" element={<AddNewWeapon />} />
              </Routes>
          </div>
      </BrowserRouter>
  </>
  );

};

export default App;
