import './Searchbar.css';
import React, { useState } from 'react';
import Card1 from './Card2';




export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
  

    const fetchData = () => {
      fetch("http://universities.hipolabs.com/search?name="+input+"&limit=15")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setSearchResults(json);
        });
    };
    
  
    const handleChange = (value) => {
      setInput(value);
      fetchData();
      
    };
  
    return (
      <div>
      <div className="input-wrapper">
        <i class="fa-solid fa-magnifying-glass"></i> 
        <input
          type="search"
          className='search-input'
          placeholder="Search Universities..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      {input.length > 1 && (
    <div className="search-results">
      {searchResults.map((result) => (
        <div className='unis' key={result.name}>
          
              <Card1 name={result.name} webpage={result.web_pages.join(", ")} country={result.country}/>
        </div>
      ))}
    </div>
  )}
      </div>
    );
  };