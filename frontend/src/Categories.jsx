import { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import Header from './Header';
import {Link} from 'react-router-dom'

function Categories(){
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
    const [content, setContent] = useState('Scheme Categories')

    const openSidebar =() => {
      setOpenSidebarToggle(!openSidebarToggle)
    }

    const setContentText = (text) => {
        setContent(text)
    }

    const Cat =[ 
        {name: 'Agricultural, Rural & Environment', link : 'https://cdn.myscheme.in/images/categories/Agriculture.svg'},
        {name: 'Banking & Financial Services',link: 'https://cdn.myscheme.in/images/categories/Banking.svg'},
        {name: 'Business & Enterpreneurship Aids', link: 'https://cdn.myscheme.in/images/categories/Business.svg'},
        {name: 'Education & Learning Schemes', link:'https://cdn.myscheme.in/images/categories/Education.svg'},
        {name: 'Health & Wellness', link:'https://cdn.myscheme.in/images/categories/Health.svg'},
        {name: 'Housing & Shelter', link: 'https://cdn.myscheme.in/images/categories/Housing.svg'},
        {name:'Public Safety, Law & Justice', link: 'https://cdn.myscheme.in/images/categories/Public Safety.svg'},
        {name:'Science, IT & Communications', link: 'https://cdn.myscheme.in/images/categories/Science.svg'},
        {name: 'Skills & Employment', link : 'https://cdn.myscheme.in/images/categories/Skills.svg'},
        {name: 'Social Welfare & Empowerment', link: 'https://cdn.myscheme.in/images/categories/Social%20Welfare.svg'},
        {name: 'Sports & Culture', link: 'https://cdn.myscheme.in/images/categories/Sports.svg'},
        {name: 'Transport & Infrastructure', link: 'https://cdn.myscheme.in/images/categories/Transport.svg'},
        {name: 'Travel & Tourism', link: 'https://cdn.myscheme.in/images/categories/Travel.svg'},
        {name: 'Utility & Sanitation', link: 'https://cdn.myscheme.in/images/categories/Utility.svg'},
        {name: 'Women & Child', link:'https://cdn.myscheme.in/images/categories/Women.svg'}
    ]
    
    return(
        <div className='grid-container'>
        <Header openSidebar={openSidebar} content={content} setContentText={setContentText} />
        <Sidebar openSidebarToggle={openSidebarToggle} openSidebar={openSidebar}/>
        <div className='category-list'>
            {Cat.map((category, index) => (
            <Card key={index} sx={{ maxWidth: 345 }} className="category-item">
                <Link to={`/${category.name.split(' ')[0]}`}>
                <CardActionArea>
                    <CardMedia component="img" height="200px" image={category.link} alt={category.name} 
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div"> {category.name} </Typography>
                    </CardContent>
                </CardActionArea>
                </Link>
            </Card>
        ))}
        </div>  
      </div>
    )
}
export default Categories;