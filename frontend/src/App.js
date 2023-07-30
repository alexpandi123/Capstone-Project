import Navigation from "./Components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from 'react';
import Main from './pages/Main';
import AK47Page from "./pages/AK-47";
import M16Page from "./pages/M-16";
import AddNewWeaponPage from "./pages/AddnewWeapon.js";
import MG42Page from "./pages/MG-42";
import BrengunPage from "./pages/Brengun";
import M1918browningPage from "./pages/M1918browning";
import Ar10Page from "./pages/Ar10";
import M1garandPage from "./pages/M1garand";
import Springfield1855Page from "./pages/Springfield1855";
import Karabiner98kPage from "./pages/Karabiner98k";
import Remington95Page from "./pages/Remington95";
import SpencerriflePage from "./pages/Spencerrifle";
import W9a91Page from "./pages/9a91";
import RemingtonacrPage from "./pages/Remingtonacr";
import Ak12Page from "./pages/Ak12";
import Cz805brenPage from "./pages/Cz805bren";
import Fnf2000Page from "./pages/Fnf2000";
import Hecklerkochg11Page from "./pages/Hecklerkochg11";
import LvoacPage from "./pages/Lvoac";
import Ots14grozaPage from "./pages/Ots14groza";
import Stg44Page from "./pages/Stg44";
import Vepr12Page from "./pages/Vepr12";
import Xm29oicwPage from "./pages/Xm29oicw";
import Xm8Page from "./pages/Xm8";
import Norinco86sPage from "./pages/Norinco86s";


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
                <Route path="/MG42-details" element={<MG42Page />}/>
                <Route path="/Brengun-details" element={<BrengunPage />}/>
                <Route path="/M1918browning-details" element={<M1918browningPage />}/>
                <Route path="/Ar10-details" element={<Ar10Page />}/>
                <Route path="/M1garand-details" element={<M1garandPage />}/>
                <Route path="/Springfield1855-details" element={<Springfield1855Page />}/>
                <Route path="/Karabiner98k-details" element={<Karabiner98kPage />}/>
                <Route path="/Remington95-details" element={<Remington95Page />}/>
                <Route path="/Spencerrifle-details" element={<SpencerriflePage />}/>
                <Route path="/9a91-details" element={< W9a91Page />}/>
                <Route path="/Remingtonacr-details" element={<RemingtonacrPage />}/>
                <Route path="/Ak12-details" element={<Ak12Page />}/>
                <Route path="/Cz805bren-details" element={<Cz805brenPage />}/>
                <Route path="/Fnf2000-details" element={<Fnf2000Page />}/>
                <Route path="/Hecklerkochg11-details" element={<Hecklerkochg11Page />}/>
                <Route path="/Lvoac-details" element={<LvoacPage />}/>
                <Route path="/Ots14groza-details" element={<Ots14grozaPage />}/>
                <Route path="/Stg44-details" element={<Stg44Page />}/>
                <Route path="/Vepr12-details" element={<Vepr12Page />}/>
                <Route path="/Xm29oicw-details" element={<Xm29oicwPage />}/>
                <Route path="/Xm8-details" element={<Xm8Page />}/>
                <Route path="/Norinco86s-details" element={<Norinco86sPage />}/>
              </Routes>
          </div>
      </BrowserRouter>
  </>
  );

};

export default App;
