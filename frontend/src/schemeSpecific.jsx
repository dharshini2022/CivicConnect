import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { Link,useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import Header from './Header';
import Sidebar2 from './Sidebar2';


function Specific(){
  const [scheme, setScheme] = useState({}); 
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [content, setContent] = useState('Scheme Details');
  const { _id } = useParams();
  useEffect(() => {
    // Fetch scheme details using the id
    const fetchSchemeDetails = async () => {
        try {
            console.log(`${_id}`);
            const res = await axios.get(`http://localhost:3000/api/schemes/${_id}`);
            console.log(res);
            setScheme(res.data);
            // Handle scheme data
        } catch (error) {
            console.error('Error fetching scheme details:', error);
        }
    };

    fetchSchemeDetails();
}, [_id]);
  
    const openSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    const setContentText = (text) => {
        setContent(text);
    };

  return (
    <div className='grid-container'>
            <Header openSidebar={openSidebar} content={content} setContentText={setContentText} />
            <Sidebar2 openSidebarToggle={openSidebarToggle} openSidebar={openSidebar} />
            <main className='main-container'>
            <div className="card">
              <div className="card-item" id="Basic">
                <Typography sx={{fontWeight:'bold',color:'black', display:'inline-block', fontSize: '1.5rem',lineHeight: '2rem',paddingX:'10px'}}>Scheme Name</Typography>
                <Typography sx={{paddingLeft:'40px'}}>{scheme.name}</Typography>
                <Typography sx={{fontWeight:'bold', display:'inline-block', fontSize: '1.5rem',lineHeight: '2rem',paddingX:'10px'}}>Scheme Category</Typography>
                <Typography sx={{paddingLeft:'40px'}}>{scheme.category}</Typography>
              </div>
              <div className="card-item" id="Benefits">
                <Typography sx={{fontWeight:'bold', display:'inline-block', fontSize: '1.5rem',lineHeight: '2rem',paddingX:'10px'}}>Scheme Benefits</Typography>
                <Typography sx={{paddingLeft:'40px'}}>{scheme.benefits}</Typography>
              </div>
              <div className="card-item" id="Eligibilty">
                <Typography sx={{fontWeight:'bold', display:'inline-block', fontSize: '1.5rem',lineHeight: '2rem',paddingX:'10px'}}>Scheme Eligibiltiy</Typography>
                <Typography sx={{paddingLeft:'40px'}}>{scheme.eligibility}</Typography>
              </div>
              <div className="card-item" id="ApplicationProcess">
                <Typography sx={{ fontWeight: 'bold', display: 'inline-block', fontSize: '1.5rem', lineHeight: '2rem', paddingX: '10px' }}>Application Process</Typography>
                <ul style={{ paddingLeft: '40px' }}>
                {scheme.applicationProcess && scheme.applicationProcess.split('.').map((point, index) => (
                <li key={index}>
                <Typography>{point.trim()}.</Typography>
                </li>
                ))}
                </ul>
              </div>

              <div className="card-item" id="DocumentsRequired">
                <Typography sx={{ fontWeight: 'bold', display: 'inline-block', fontSize: '1.5rem', lineHeight: '2rem', paddingX: '10px' }}>Documents Required</Typography>
                <ul style={{ paddingLeft: '40px', listStyleType: 'disc' }}>
                  {scheme.documentsRequired && scheme.documentsRequired.split(',').map((point, index) => (
                  <li key={index}>
                    <Typography>{point.trim()}.</Typography>
                  </li>
                  ))}
              </ul>
              </div>
            </div>
</main>

    </div>
  );
};

export default Specific;