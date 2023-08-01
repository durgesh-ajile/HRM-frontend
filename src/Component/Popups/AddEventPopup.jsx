import { useState } from 'react';
import './New.css';
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { asyncThunkAddContractor, asyncThunkGetContractor } from '../../redux/createAsyncThunk';
import { Button } from '@mui/material';


function AddEventPopup({setShowPopup}) {
  const [timesheetDetails, setTimesheetDetails] = useState({
    date: '',
    task: '',
    time: '',
  });
  const dispatch = useDispatch();

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTimesheetDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleAddContractor = () => {
    const payload = {
      "first_name": timesheetDetails.date,
      "last_name": timesheetDetails.task,
      "email": timesheetDetails.time
    }
    dispatch(asyncThunkAddContractor(payload))
    dispatch(asyncThunkGetContractor(1));
    // setClients((prevClients) => [...prevClients, clientDetails]);
    // setClientDetails({
    //   name: '',
    //   email: '',
    //   phone: '',
    // });
    closePopup();
  };

  return (
        <div className="popup">
        <div className="popup" onClick={closePopup}></div>
          <div className="popup-inner">
            <h2>Add Timesheet</h2>
            
            <form>
              <label htmlFor="date">Date:</label>
              <input
                type="text"
                id="date"
                name="date"
                value={timesheetDetails.date}
                onChange={handleInputChange}
              />

              <label htmlFor="task">Task:</label>
              <input
                type="text"
                id="task"
                name="task"
                value={timesheetDetails.task}
                onChange={handleInputChange}
              />

              <label htmlFor="time">Working Hours:</label>
              <input
                type="email"
                id="time"
                name="time"
                value={timesheetDetails.time}
                onChange={handleInputChange}
              />

              <button type="button" className='add-button' onClick={handleAddContractor}>
                ADD
              </button>
              <Button variant="outlined" color="error" sx={{mt:"15px"}} onClick={closePopup}>
              Close
            </Button>
            </form>
          </div>
        </div>
  );
}

export default AddEventPopup;