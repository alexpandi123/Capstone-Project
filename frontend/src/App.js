import * as React from 'react';
import SideBarMenu from "./pages/main/Sidebar";
import { Route, Router } from 'react-router-dom';
import AddNewWeaponPage from './pages/AddnewWeapon';


function App() {

  return (
    <>
          <div className="App">
            <SideBarMenu />
          </div>
  </>
  );

};

export default App;
