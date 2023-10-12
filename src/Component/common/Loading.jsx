import { Alert, AlertTitle, Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

const Loading = ({ error, query }) => {
  return error === true ? (
    <Alert severity="error" style={{paddingLeft:'60px'}}>
      <AlertTitle>Error</AlertTitle>
      <strong>Oop! something went wrong - </strong><br/> Please try again later
    </Alert>
  ) : error === 404 ? (
    <div className="not-present">
        <Box
          sx={{
            width: "100%",
            height: "71vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pb:"50px"
          }}
          id="not-present-box"
        >
          <Box>
            <Typography id="not-present-typo" variant="h4">
              No {query} present
            </Typography>
          </Box>
        </Box>
    </div>
  ) : (
    <Box id="progress-box">
      <CircularProgress />
    </Box>
  );
};

export default Loading;
