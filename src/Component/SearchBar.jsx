import React from 'react';
import './SearchBar.css'; 


function SearchBar() {
  
  
    return (
      <div className="client-search-form">
      <div className="form-row">
        <input type="text" placeholder="Search Contractor" />
        <button type="submit">Search</button>
      </div>
    </div>
     );
    }
     

  
  export default SearchBar;