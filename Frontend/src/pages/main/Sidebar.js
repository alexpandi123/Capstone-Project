import SidebarMenu, { SidebarMenuBody, SidebarMenuBrand, SidebarMenuHeader, SidebarMenuNavIcon, SidebarMenuNavTitle } from 'react-bootstrap-sidebar-menu';
import { SidebarMenuNav } from 'react-bootstrap-sidebar-menu';
import { SidebarMenuNavLink } from 'react-bootstrap-sidebar-menu';
import { Link } from 'react-router-dom';
import { SidebarMenuSub } from 'react-bootstrap-sidebar-menu';
import { SidebarMenuCollapse } from 'react-bootstrap-sidebar-menu';

const SideBarMenu = () => {

    return(
        <SidebarMenu>
            <SidebarMenuCollapse>
                <SidebarMenuBody>
                    <SidebarMenuNav>
                        <SidebarMenuNavLink as={Link} to={"/AK47-details"}>
                        <SidebarMenuNavTitle>AK-47</SidebarMenuNavTitle>
                        </SidebarMenuNavLink>
                        <SidebarMenuSub>
                            <SidebarMenuNavTitle>Ak-47</SidebarMenuNavTitle>
                            <SidebarMenuNav>
                            <SidebarMenuNavLink>
                                <SidebarMenuNavTitle>2</SidebarMenuNavTitle>
                            </SidebarMenuNavLink>
                            </SidebarMenuNav>
                        </SidebarMenuSub>
                    </SidebarMenuNav>
                </SidebarMenuBody>
            </SidebarMenuCollapse>
        </SidebarMenu>
    )
};

export default SideBarMenu;

// cdbreact - boostrap react sidebar https://www.devwares.com/blog/create-responsive-sidebar-in-react/