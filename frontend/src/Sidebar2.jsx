import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

function Sidebar2({openSidebarToggle, openSidebar}) {
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
                <a href="#Basic">
                    <BsGrid1X2Fill className='icon'/> Details
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="#Benefits">
                    <BsMenuButtonWideFill className='icon'/> Benefits
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="#Eligibilty">
                    <BsFillGrid3X3GapFill className='icon'/> Eligibility
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="#ApplicationProcess">
                    <BsListCheck className='icon'/> Application Process
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="#DocumentsRequired">
                    <BsPeopleFill className='icon'/> Documents Required
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href="/Schemes">
                    <BsPeopleFill className='icon'/> Schemes
                </a>
            </li>
            
        </ul>
    </aside>
  )
}

export default Sidebar2;