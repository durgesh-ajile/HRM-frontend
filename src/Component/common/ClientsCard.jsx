import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import WhiteButton from "./WhiteButton";
import AvatarComponent from "./Avatar ";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { asyncThunkApproveContractor } from "../../redux/createAsyncThunk";
import { useDispatch } from "react-redux";
import AlertDialogSlide from "./AlertDialogSlide/AlertDialogSlide";
import { showToast } from "../../redux/errorSlice/errorSlice";

// eslint-disable-next-line react/prop-types
const ClientsCard = ({ value }) => {
  const navigate = useNavigate();
  // eslint-disable-next-line react/prop-types
  const { first_name, last_name, email, _id, profileId } = value;
  const dispatch = useDispatch();

  const handleViewProfile = (contractorId) =>
    navigate(`/profile/${contractorId}`);
  const handleApproveProfile = (contractorId) => {
    const payload = { contractorId };
    profileId
      ? dispatch(asyncThunkApproveContractor(payload))
      : dispatch(
          showToast({
            type: "warning",
            message: "Contractor Has Not Fill The Form.",
          })
        );
  };

  return (
    <>
      <Card
        sx={{
          width: "300px",
          backgroundColor: "#ffffff",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        <CardContent sx={{ width: "100%" }}>
          <Typography
            sx={{ fontSize: 20, marginTop: "15px", fontWeight: "700" }}
            color="text.secondary"
            gutterBottom
          >
            {/* eslint-disable-next-line react/prop-types */}
            {profileId?.IsApproved && <p>&#10004; </p>}
          </Typography>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <AvatarComponent />
          </Box>
          <Typography
            sx={{ fontSize: 20, marginTop: "15px", fontWeight: "700" }}
            color="text.secondary"
            gutterBottom
          >
            {first_name}
          </Typography>
          <Typography
            sx={{ fontSize: 15, fontWeight: "700" }}
            color="text.secondary"
            gutterBottom
          >
            {last_name}
          </Typography>
          <Typography
            sx={{ fontSize: 10, fontWeight: "700" }}
            color="text.secondary"
            gutterBottom
          >
            {email}
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              margin: "10px",
            }}
          >
            <Box sx={{ marginRight: "10px" }}>
              {/* eslint-disable-next-line react/prop-types */}
              {!profileId?.IsApproved && (
                <WhiteButton
                  onClick={() => handleApproveProfile(_id)}
                  text={"Approve"}
                />
              )}
            </Box>
            <Box>
              {/* eslint-disable-next-line react/prop-types */}
              {!profileId?.IsApproved && (
                <AlertDialogSlide _id={_id} UI_Type={"DeclineUI"} />
              )}
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              margin: "10px",
            }}
          >
            <Box>
              <WhiteButton
                onClick={() => handleViewProfile(_id)}
                text={"Profile"}
              />
            </Box>
            <Box sx={{ marginLeft: "10px" }}>
              {/* eslint-disable-next-line react/prop-types */}
              {profileId?.IsApproved && (
                <WhiteButton
                  onClick={() => navigate(`/invoices/${_id}?page=1&page2=1`)}
                  text={"Invoices"}
                />
              )}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default ClientsCard;
