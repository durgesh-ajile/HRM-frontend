import { Box } from "@mui/material";
import New from "../../Component/Popups/New";
import ClientsCard from "../../Component/common/ClientsCard";
import "./AdminContractorTab.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import WhiteButton from "../../Component/common/WhiteButton";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncThunkGetContractor,
  asyncThunkSearchContractors,
} from "../../redux/createAsyncThunk";
import { showToast } from "../../redux/errorSlice/errorSlice";
import axios from "axios";

const AdminContractorTab = () => {
  const [page, setPage] = useState(1);
  const [isSearch, setisSearch] = useState(false);
  const [message, setMessage] = useState([]);
  const { usertoken } = JSON.parse(localStorage.getItem("token"));

  const [ContractorData, setContractorData] = useState([]);
  const limit = 9;
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let currentDate = new Date();

  const { ContractorData: { totalPages, totalContractors, page: pageIndicator, data }, } = useSelector((store) => store.admin);
  const payload = { searchQuery, page, limit };

  const handleChangeSerch = (e) => {
    setSearchQuery(e.target.value);
    e.target.value.length === 0 && dispatch(asyncThunkGetContractor(pageIndicator));
    setisSearch(false);
  };

  const handleSubmit = () => {
    setisSearch(true);
    dispatch(asyncThunkSearchContractors(payload));
  };


  const getNotificationforadmin = () =>
    axios({
      method: "get",
      url: `https://braided-complex-403612.el.r.appspot.com/api/getNotificationforadmin`,
      headers: {
        Authorization: `Bearer ${usertoken}`,
      },
    })
      .then((res) => {
        if (res.data.message !== "No notification are currently in database") {
          setMessage((preVal) => {
            return [...res.data.getNotification, ...preVal];
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

  useEffect(() => {
    getNotificationforadmin();
  }, []);


  const handlePrevPagination = () => {
    if (page >= 2) {
      setPage((prev) => prev - 1);
    } else {
      dispatch(
        showToast({
          type: "warning",
          message: "This Is First Page Please Click On Next Button",
        })
      );
    }
  };
  const handleNextPagination = () => {
    if (pageIndicator < totalPages) {
      setPage((prev) => prev + 1);
    } else {
      dispatch(
        showToast({
          type: "warning",
          message: "This Is Last Page Please Click On Prev Button",
        })
      );
    }
  };

  useEffect(() => {
    let token = null;
    let tokenExpiry = null;
    try {
      token = JSON.parse(localStorage.getItem("token"));
      tokenExpiry = new Date(token.expiry);
      token === null && dispatch(showToast({ type: "warning", message: "Token Has Expired ! Please SignIn Again", }));

    } catch (error) {
      dispatch(showToast({ type: "warning", message: "Token Has Expired ! Please SignIn Again", }));
    }
    !token?.usertoken && navigate("/signin");
    if (currentDate > tokenExpiry) {
      localStorage.removeItem("token");
      navigate("/signin");
    }
    setContractorData(data);
  }, [data, dispatch, navigate]);

  useEffect(() => {
    isSearch ? dispatch(asyncThunkSearchContractors(payload)) : dispatch(asyncThunkGetContractor(page));
  }, [dispatch, page]);

  console.log(ContractorData)
  return (
    <Box sx={{ backgroundColor: "#00000006" }}>
      <New totalPages={totalPages} />
      {/* <SearchBar page={page} /> */}
      <div className="client-search-form">
        <div className="form-row">
          <input
            onChange={(e) => handleChangeSerch(e)}
            type="text"
            placeholder="Search Contractor"
          />
          <button
            onClick={() => handleSubmit()}
            disabled={searchQuery ? false : true}
            style={{ cursor: !searchQuery && "no-drop" }}
            type="submit"
          >
            Search
          </button>
        </div>
      </div>
      <Box className={"AdminContractorTab_container"}>
        <Box className={"AdminContractorTab_container_fluid"}>
          {ContractorData
            ? ContractorData.map((value, i) => (
              <Box key={i}>
                <ClientsCard value={value} message={message} />
              </Box>
            ))
            : [...Array(limit)].map((_, index) => (
              <div key={index} className="skeletonDiv">
                <span className="loader"></span>
              </div>
            ))}
        </Box>
        <Box className={"AdminContractorTab_pagination"}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ marginLeft: "20px" }}>
              <WhiteButton onClick={handlePrevPagination} text={"prev"} />
            </Box>
            <p style={{padding:'7px'}}>Total Pages :- {totalPages}, Current Page :-{pageIndicator}</p>
            <Box sx={{ marginRight: "20px" }}>
              <WhiteButton onClick={handleNextPagination} text={"next"} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminContractorTab;
