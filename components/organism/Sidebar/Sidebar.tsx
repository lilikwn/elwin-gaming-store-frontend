import React from 'react'
import SidebarProfile from './SidebarProfile'
import SidebarMenu from './SidebarMenu'
import SidebarFooter from './SidebarFooter'

function Sidebar() {
  return (
    <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
            <SidebarProfile />
            <div className="menus">
                <SidebarMenu title='Overview' icon='sidebar-menu-icon-1' href='/member/overview'/>
                <SidebarMenu title='Transactions' icon='sidebar-menu-icon-2' href='/member/transactions'/>
                <SidebarMenu title='Messages' icon='sidebar-menu-icon-3' />
                <SidebarMenu title='Card' icon='sidebar-menu-icon-4' />
                <SidebarMenu title='Rewards' icon='sidebar-menu-icon-5' />
                <SidebarMenu title='Settings' icon='sidebar-menu-icon-6' href='/member/edit-profile'/>
                <SidebarMenu title='Log Out' icon='sidebar-menu-icon-7' />
            </div>
            <SidebarFooter />
        </div>
    </section>
  )
}

export default Sidebar