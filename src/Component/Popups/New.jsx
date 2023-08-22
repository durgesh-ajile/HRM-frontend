import { useState } from 'react';
import './New.css';
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { asyncThunkAddContractor, asyncThunkGetContractor } from '../../redux/createAsyncThunk';
import { Button } from '@mui/material';
import { showToast } from '../../redux/errorSlice/errorSlice';


function New() {
  const [showPopup, setShowPopup] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [clientDetails, setClientDetails] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const dispatch = useDispatch();


  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const closePopup = () => {
    setShowPopup(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setClientDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    setIsValid(value.endsWith('@ajiledone.com'))
  };

  const handleAddContractor = () => {
    // if (isValid) {
    const payload = {
      "first_name": clientDetails.name,
      "last_name": clientDetails.email,
      "email": clientDetails.phone
    }
    dispatch(asyncThunkAddContractor(payload))
    dispatch(asyncThunkGetContractor(1));
    closePopup();
    // } else {
    //   dispatch(showToast({ type: "warning", message: "Email Type Should be @ajiledone.com" }))
    // }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <h1 className="navbar-heading">Contractor<br />Dashboard /<span className='contractor-span'> Contractor</span>
        </h1>

        <button className="add-client-btn" onClick={togglePopup}>
          Add Contractor
        </button>

      </nav>

      {showPopup && (
        <div className="popup">
          <div className="popup" onClick={closePopup}></div>
          <div className="popup-inner">
            <h2>Add Contractor</h2>

            <form>
              <label htmlFor="name">First Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={clientDetails.name}
                onChange={handleInputChange}
              />

              <label htmlFor="email">Last Name:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={clientDetails.email}
                onChange={handleInputChange}
              />

              <label htmlFor="phone">Email:</label>
              <input
                type="email"
                id="phone"
                name="phone"
                value={clientDetails.phone}
                onChange={handleInputChange}
              />

              <button type="button" className='add-button' onClick={handleAddContractor}>
                ADD
              </button>
              <Button variant="outlined" color="error" sx={{ mt: "15px" }} onClick={closePopup}>
                Close
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default New;