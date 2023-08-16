import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Routes, Route, Link } from "react-router-dom";

import AppsIcon from '@mui/icons-material/Apps';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';

import "../css/sidebar.css"

import * as React from 'react';
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


const SideBarMenu = () => {


    return (
            <div style={{ display: "flex", height: "100vh" }}>
              <Sidebar className="sidebar">
                <Menu>
                  <MenuItem component={<Link to={"/"} className='link'/>} icon={<MenuIcon />} className="page_title">
                    <h2>Weapons Wiki</h2>
                  </MenuItem>
                  <SubMenu className='padding_text_from_sidebar' label="Assault Rifles">
                    <MenuItem component={<Link to={"/AK47-details"} className='link padding_text_from_sidebar'/>}> Ak-47 </MenuItem>
                    <MenuItem className='padding_text_from_sidebar'> M-16 </MenuItem>
                  </SubMenu>
                  <SubMenu className='padding_text_from_sidebar' label="Sniper Rifles">
                    <MenuItem className='padding_text_from_sidebar'> Ak-47 </MenuItem>
                    <MenuItem className='padding_text_from_sidebar'> M-16 </MenuItem>
                  </SubMenu>
                  <SubMenu className='padding_text_from_sidebar' label="Shotguns">
                    <MenuItem className='padding_text_from_sidebar'> Ak-47 </MenuItem>
                    <MenuItem className='padding_text_from_sidebar'> M-16 </MenuItem>
                  </SubMenu>
                  <SubMenu className='padding_text_from_sidebar' label="Pistols">
                    <MenuItem className='padding_text_from_sidebar'> Ak-47 </MenuItem>
                    <MenuItem className='padding_text_from_sidebar'> M-16 </MenuItem>
                  </SubMenu>
                  <MenuItem className='padding_text_from_sidebar' icon={<AppsIcon />}>All Weapons</MenuItem>
                  <MenuItem component={<Link to={"/add-new-weapon"} className='link padding_text_from_sidebar'/>} icon={<AddIcon />}>Add A Weapon</MenuItem>
                  <MenuItem className='padding_text_from_sidebar' icon={<LoginIcon />} > LOG IN </MenuItem>
                </Menu>
              </Sidebar>
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
    );
};

export default SideBarMenu;


// to remove bootstrap-sidebar-menu


//https://blog.openreplay.com/simple-sidebars-with-react-pro-sidebar-and-material-ui/