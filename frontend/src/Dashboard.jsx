import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
function Dashboard() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
    const [content, setContent] = useState('Your Gateway to Government Resources & Services')

    const openSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    const setContentText = (text) => {
        setContent(text)
    }
  
  return (
    <>
      <div className='grid-container'>
      <Header openSidebar={openSidebar} content={content} setContentText={setContentText} />
        <Sidebar openSidebarToggle={openSidebarToggle} openSidebar={openSidebar}/>
        <Home/>
      </div>
    </>
  )
}

export default Dashboard
