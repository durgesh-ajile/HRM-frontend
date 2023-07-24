import React from 'react';
import './SearchBar.css'; 


function SearchBar() {
  
  
    return (
      <div className="client-search-form">
      <div className="form-row">
        <input type="text" placeholder="Client ID" />
        <input type="text" placeholder="Client Name" />
        <select>
          <option value="">Select Company</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          {/* Add more options here */}
        </select>
        <button type="submit">Search</button>
      </div>
    </div>
     );
    }
     

  
  export default SearchBar;