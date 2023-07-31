import { useState } from 'react';
import './SearchBar.css';
import { asyncThunkSearchContractors } from '../redux/createAsyncThunk';
import { useDispatch } from 'react-redux';


function SearchBar() {
  
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  const handleChangeSerch = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = () => {
    dispatch(asyncThunkSearchContractors(inputValue))
  }

  return (
    <div className="client-search-form">
      <div className="form-row">
        <input onChange={(e) => handleChangeSerch(e)} type="text" placeholder="Search Contractor" />
        <button onClick={() => handleSubmit()} type="submit">Search</button>
      </div>
    </div>
  );
}



export default SearchBar;