import React from 'react';
import { Typography } from '@mui/material';
import { BsJustify, BsSearch } from 'react-icons/bs';

function Header({ openSidebar, content, setContentText, handleInputChange }) {
  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={openSidebar} />
      </div>
      {content === 'Schemes' ? (
        <>
        <input type="text" placeholder="Search Scheme" className='search-bar' onChange={handleInputChange}/>
        <BsSearch  className='icon'/>
        </>
      ) : (
        <Typography variant='h3' style={{ whiteSpace: 'nowrap', color:'#411bbe', margin: '20px' }}>
          {content}
        </Typography>
      )}
    </header>
  );
}

export default Header;
