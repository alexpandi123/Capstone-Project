import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import "../css/sidebar.css"


const SideBarMenu = () => {


    return (
            <div style={{ display: "flex", height: "100vh" }}>
              <Sidebar className="sidebar">
                <Menu>
                  <MenuItem className="menu1">
                    <h2>Weapons Wiki</h2>
                  </MenuItem>
                  <SubMenu label="Assault Rifles">
                    <MenuItem> Ak-47 </MenuItem>
                    <MenuItem> M-16 </MenuItem>
                  </SubMenu>
                  <SubMenu label="Sniper Rifles">
                    <MenuItem> Ak-47 </MenuItem>
                    <MenuItem> M-16 </MenuItem>
                  </SubMenu>
                  <SubMenu label="Shotguns">
                    <MenuItem> Ak-47 </MenuItem>
                    <MenuItem> M-16 </MenuItem>
                  </SubMenu>
                  <SubMenu label="Pistols">
                    <MenuItem> Ak-47 </MenuItem>
                    <MenuItem> M-16 </MenuItem>
                  </SubMenu>
                  <SubMenu label="All Weapons">
                    <MenuItem> Ak-47 </MenuItem>
                    <MenuItem> M-16 </MenuItem>
                  </SubMenu>
                  <MenuItem> LOG IN </MenuItem>
                </Menu>
              </Sidebar>
            </div>
    );
};


export default SideBarMenu;

// cdbreact - boostrap react sidebar 

// to remove bootstrap-sidebar-menu


//https://blog.openreplay.com/simple-sidebars-with-react-pro-sidebar-and-material-ui/