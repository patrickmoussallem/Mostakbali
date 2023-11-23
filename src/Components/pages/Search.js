import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom"
import Navbar from '../Navbar'
import { SearchBar } from '../Searchbar';



export default function Users(){
    return(
        <>
        <Navbar/>
        <div>
            <h1>Search Universities</h1>
            <div className='Search-bar'>
            <SearchBar/>
            </div>









        </div>
        
        
        </>




    );


    
}