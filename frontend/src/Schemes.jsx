import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Box, Typography, Pagination } from '@mui/material';

function Schemes() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const [content, setContent] = useState('Schemes');
    const [schemes, setSchemes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 100;

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/schemes")
            .then((response) => {
                setSchemes(response.data);
            })
            .catch((error) => {
                console.error("Error fetching Schemes:", error);
            });
    }, []);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const openSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    const setContentText = (text) => {
        setContent(text);
    };

    const filteredSchemes = schemes.filter((scheme) => {
        const nameMatch = scheme.name && scheme.name.toLowerCase().includes(searchTerm.toLowerCase());
        return nameMatch;
    });

    useEffect(() => {
        setCurrentPage(1); // Reset currentPage whenever filteredSchemes changes
    }, [filteredSchemes]);

    const totalPages = Math.ceil(filteredSchemes.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredSchemes.slice(indexOfFirstItem, indexOfLastItem);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className='grid-container'>
            <Header 
                openSidebar={openSidebar} 
                content={content} 
                setContentText={setContentText} 
                handleInputChange={handleInputChange} // Pass handleInputChange to Header
            />
            <Sidebar openSidebarToggle={openSidebarToggle} openSidebar={openSidebar} />
            <div className='scheme-main'>
                {currentItems.map((scheme, index) => (
                    <div className='scheme-specific' key={index}>
                        <Link to={`/api/schemes/${scheme._id}`}>
                            <Typography>{scheme.name}</Typography>
                            <Typography>{scheme.category}</Typography>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Schemes;
