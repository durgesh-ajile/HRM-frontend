import { useState } from "react";
import "./New.css";
import { RxCross2 } from "react-icons/rx";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { HiBars3 } from "react-icons/hi2";

const New = () => {
  const [clients, setClients] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [clientDetails, setClientDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setClientDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const addClient = () => {
    setClients((prevClients) => [...prevClients, clientDetails]);
    setClientDetails({
      name: "",
      email: "",
      phone: "",
    });
    togglePopup();
  };
  const closePopup = () => {
    setShowPopup(false);
  };
  const cssStyle = {
    color: "black",
    marginLeft: "45px",
    margintop: "20px",
    fontSize: "40px",
    boxshadow: "0px 0px 10px black",
    fontfamily: "20px",
  };

  const cssStyles = {
    color: "white",
    background: "#ff9933",
    borderRadius: "30px",
    padding: " 10px 30px",
    float: "right",
    fontSize: "1.3rem",
  };
  return (
    <div>
      <h1 style={cssStyle}>
        Clients
        <br />
      </h1>
      <span className="dash ">
        <span style={{ color: "black" }}>Dashboard </span>/Clients
      </span>
      <BsFillGrid3X3GapFill className="icon" />
      <HiBars3 className="icon" />

      <button
        className="add-client-btn "
        onClick={togglePopup}
        style={cssStyles}
      >
        + Add Client
      </button>

      {showPopup && (
        <div className="popup ">
          <div className="popup-inner">
            <h2>Add Client </h2>
            <button className="cross" onClick={closePopup}>
              {" "}
              <RxCross2 />
            </button>
            {/* <button className='cross' > <RxCross2/></button> */}
            <form>
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                id="name"
                name="name"
                formTarget="_blank"
                value={clientDetails.name}
                onChange={handleInputChange}
              />
              <br />
              <label htmlFor="email">E-mail: </label>
              <input
                type="email"
                id="email"
                name="email"
                value={clientDetails.email}
                onChange={handleInputChange}
              />
              <br />

              <label htmlFor="phone">Phone: </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={clientDetails.phone}
                onChange={handleInputChange}
              />
              <br />

              <button type="button" className="bt" onClick={addClient}>
                Add
              </button>
            </form>
          </div>
        </div>
      )}
      {/* <table className="client-table">
        <thead > 
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default New;