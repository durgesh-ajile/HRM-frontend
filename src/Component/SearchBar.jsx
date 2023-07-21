import './SearchBar.css';


function SearchBar() {


  return (
    <div className="search-bar">
      <input type="text" placeholder="Client ID" />
      <input type="text" placeholder="Client Name" />
      <div className="dropdown show">
        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Company<br />Select Company
        </a>

        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a className="dropdown-item" href="/">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
      <button type="submit">Search</button>
    </div>
  );
}

export default SearchBar;