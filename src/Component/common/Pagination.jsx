import React, { useEffect, useState } from "react";
import "./common.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const Paginations = ({ totalPages, page2, page3 }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [pagiPage, setPagiPage] = useState(1);

  let querypage = searchParams.get("page");
  let querypage2 = searchParams.get("page2");

  const handleChange = (event, value) => {
    setPagiPage(value);
  };

  useEffect(() => {
    if (pagiPage && page2) {
      setSearchParams({  page: querypage, page2: pagiPage });
    } else if (pagiPage && querypage2) {
      setSearchParams({  page: pagiPage, page2: querypage2 });
    } else if (pagiPage) {
      setSearchParams({ page: pagiPage });
    }
  }, [pagiPage]);

  useEffect(()=>{
    if(page2){
      setPagiPage(querypage2)
    } else if (querypage) {
      setPagiPage(querypage)
    }
  }, [])

  console.log(totalPages)
  return (
    <div className="pagination">
      <Stack spacing={3}>
        {/* <Typography>Page: {page2 ? querypage2 : querypage}</Typography> */}
        <Pagination
          count={totalPages}
          page={pagiPage}
          onChange={handleChange}
          color="primary"
        />
      </Stack>
    </div>
  );
};

export default Paginations;
