import { Box } from "@mui/material"
import ResetPassword from "../Component/common/ResetPassword"
import { useParams } from 'react-router-dom';

const ResetPasswordPage = () => {

    const { resetPassToken } = useParams();

  return (
    <Box>
      <ResetPassword resetPassToken={resetPassToken} />
    </Box>
  )
}

export default ResetPasswordPage
