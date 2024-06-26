import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, openSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <a href="/">
                    <BsPeopleFill className='icon'/> Civic Connect
                </a>
            </div>
            <span className='icon close_icon' onClick={openSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="/">
                    <BsGrid1X2Fill className='icon'/> Home
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/Schemes">
                    <BsMenuButtonWideFill className='icon'/> Schemes
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/Categories">
                    <BsFillGrid3X3GapFill className='icon'/> Categories
                </a>
            </li>
            
        </ul>
    </aside>
  )
}

export default Sidebar;