import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import * as React from 'react';

import LoginIcon from '@mui/icons-material/Login';
import AddIcon from '@mui/icons-material/Add';
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi/";
import { GiAk47 } from "react-icons/gi";
import { GiCrosshair } from "react-icons/gi";
import { GiSawedOffShotgun } from "react-icons/gi";
import { GiGlock } from "react-icons/gi";
import { GiHouse } from "react-icons/gi";
import { GiStack } from "react-icons/gi";

import "../css/sidebar.css"

import Main from './Main';
import AK47Page from "../AK-47";
import M16Page from "../M-16";
import AddNewWeaponPage from "../AddnewWeapon.js";
import MG42Page from "../MG-42";
import BrengunPage from "../Brengun";
import M1918browningPage from "../M1918browning";
import Ar10Page from "../Ar10";
import M1garandPage from "../M1garand";
import Springfield1855Page from "../Springfield1855";
import Karabiner98kPage from "../Karabiner98k";
import Remington95Page from "../Remington95";
import SpencerriflePage from "../Spencerrifle";
import W9a91Page from "../9a91";
import RemingtonacrPage from "../Remingtonacr";
import Ak12Page from "../Ak12";
import Cz805brenPage from "../Cz805bren";
import Fnf2000Page from "../Fnf2000";
import Hecklerkochg11Page from "../Hecklerkochg11";
import LvoacPage from "../Lvoac";
import Ots14grozaPage from "../Ots14groza";
import Stg44Page from "../Stg44";
import Vepr12Page from "../Vepr12";
import Xm29oicwPage from "../Xm29oicw";
import Xm8Page from "../Xm8";
import Norinco86sPage from "../Norinco86s";
import AllWeaponsPage from "../AllWeapons";


const SideBarMenu = () => {
  const [ isCollapsed, setIsCollapsed ] = useState(false);

  const collapseSidebar = () => {
    if (isCollapsed === true) {
      setIsCollapsed(false);
    } else {
      setIsCollapsed(true);
    }
  };

    return (
            <div style={{ display: "flex", height: "100vh", position:"relative" }}>
              <Sidebar collapsed={isCollapsed} width="300px" className="sidebar">
                  <Menu>
                    {isCollapsed ? (
                        <MenuItem icon={<FiChevronsRight />} onClick={collapseSidebar}> </MenuItem>
                      ) : (
                        <MenuItem icon={<FiChevronsLeft />} onClick={collapseSidebar} >
                          <div className="page_title">
                            Weapons Wiki
                          </div>
                        </MenuItem>
                      )}
                  </Menu>
                  <hr />
                  <Menu>
                    <MenuItem icon={<GiHouse />} component={<Link to={"/"} className='link text_from_sidebar' />}> Main Page </MenuItem>
                    <SubMenu className='text_from_sidebar' icon={<GiAk47 />} label="Assault Rifles">
                      <MenuItem component={<Link to={"/AK47-details"} className='link text_from_sidebar'/>} > AK-47 </MenuItem>
                      <MenuItem component={<Link to={"/M16-details"} className='link text_from_sidebar'/>} > M-16 </MenuItem>
                      <MenuItem component={<Link to={"/MG42-details"} className='link text_from_sidebar'/>}> MG-42 </MenuItem>
                      <MenuItem component={<Link to={"/Brengun-details"} className='link text_from_sidebar'/>}> Bren Gun </MenuItem>
                      <MenuItem component={<Link to={"/M1918browning-details"} className='link text_from_sidebar'/>}> M1918 Browning </MenuItem>
                      <MenuItem component={<Link to={"/M1garand-details"} className='link text_from_sidebar'/>}> M1 Garand </MenuItem>
                      <MenuItem component={<Link to={"/Spencerrifle-details"} className='link text_from_sidebar'/>}> Spencer repeating rifle </MenuItem>
                      <MenuItem component={<Link to={"/9a91-details"} className='link text_from_sidebar'/>}> 9A-91 </MenuItem>
                      <MenuItem component={<Link to={"/Ak12-details"} className='link text_from_sidebar'/>}> AK-12 </MenuItem>
                      <MenuItem component={<Link to={"/Cz805bren-details"} className='link text_from_sidebar'/>}> CZ 805 BREN </MenuItem>
                      <MenuItem component={<Link to={"/Fnf2000-details"} className='link text_from_sidebar'/>}> FN F2000 </MenuItem>
                      <MenuItem component={<Link to={"/Hecklerkochg11-details"} className='link text_from_sidebar'/>}> Heckler & Koch G11 </MenuItem>
                      <MenuItem component={<Link to={"/Lvoac-details"} className='link text_from_sidebar'/>}> LVOA-C </MenuItem>
                      <MenuItem component={<Link to={"/Ots14groza-details"} className='link text_from_sidebar'/>}> OTs-14 Groza </MenuItem>
                      <MenuItem component={<Link to={"/Stg44-details"} className='link text_from_sidebar'/>}> StG 44 </MenuItem>
                      <MenuItem component={<Link to={"/Xm29oicw-details"} className='link text_from_sidebar'/>}> XM29 OICW </MenuItem>
                      <MenuItem component={<Link to={"/Xm8-details"} className='link text_from_sidebar'/>}> XM8 </MenuItem>
                      <MenuItem component={<Link to={"/Norinco86s-details"} className='link text_from_sidebar'/>}> Norinco Type 86S </MenuItem>
                    </SubMenu>
                    <SubMenu className='text_from_sidebar' icon={<GiCrosshair />} label="Sniper Rifles">
                      <MenuItem component={<Link to={"/Springfield1855-details"} className='link text_from_sidebar'/>}> Springfield Model 1855 </MenuItem>
                      <MenuItem component={<Link to={"/Karabiner98k-details"} className='link text_from_sidebar'/>}> Kar98K </MenuItem>
                    </SubMenu>
                    <SubMenu className='text_from_sidebar' icon={<GiSawedOffShotgun />} label="Shotguns">
                      <MenuItem component={<Link to={"/Vepr12-details"} className='link text_from_sidebar'/>}> Vepr-12 </MenuItem>
                    </SubMenu>
                    <SubMenu className='text_from_sidebar' icon={<GiGlock />} label="Pistols">
                      <MenuItem component={<Link to={"/Remington95-details"} className='link text_from_sidebar'/>}> Derringer </MenuItem>
                    </SubMenu>
                    <MenuItem component={<Link to={"/all-weapons"} className='link text_from_sidebar'/>} icon={<GiStack />}>All Weapons</MenuItem>
                    <MenuItem component={<Link to={"/add-new-weapon"} className='link text_from_sidebar'/>} icon={<AddIcon />}>Add A Weapon</MenuItem>
                    <MenuItem component={<Link to={"/AK47-details"} className='link text_from_sidebar'/>} icon={<LoginIcon />} > LOG IN </MenuItem>
                  </Menu>
              </Sidebar>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/all-weapons" element={<AllWeaponsPage />} />
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
    );
};

export default SideBarMenu;
