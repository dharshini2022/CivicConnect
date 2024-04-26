import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; 

function SchemeDetails() {
  const { id } = useParams();
  useEffect(() => {
    // Fetch scheme details using the id
    const fetchSchemeDetails = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/api/schemes/${id}`);
            console.log(res);
            // Handle scheme data
        } catch (error) {
            console.error('Error fetching scheme details:', error);
        }
    };

    fetchSchemeDetails();
}, [id]);
  
  return (
    <main className='main-container'>
      {/* <div id="Basic">
        <Typography>{scheme.name}</Typography>
        <Typography>{scheme.category}</Typography>
      </div>
      <div id="Benefits">
        <Typography>{scheme.benefits}</Typography>
      </div>
      <div id="Eligibilty">
        <Typography>{scheme.eligibility}</Typography>
      </div>
      <div id="ApplicationProcess">
        <Typography>{scheme.applicationProcess}</Typography>
      </div>
      <div id="DocumentsRequired">
        <Typography>{scheme.documentsRequired}</Typography>
      </div> */}
        
    </main>
  )
}

export default SchemeDetails;