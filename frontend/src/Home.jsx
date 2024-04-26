import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home() {

    

  return (
    <main className='main-container'>
      <video
            src='/home vdo.mp4'
            width='100%'
            height='100%'
            controls
            autoPlay
            muted
            playsInline
            loop
        />
        
    </main>
  )
}

export default Home;