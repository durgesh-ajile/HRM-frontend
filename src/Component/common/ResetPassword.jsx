import { Box, TextField } from "@mui/material"
import WhiteButton from "./WhiteButton"
import { useState } from "react"
import { asyncThunkResetPassword } from "../../redux/createAsyncThunk"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const ResetPassword = ({ resetPassToken }) => {
    const navigate = useNavigate()
    const { ResetPasswordData:[PasswordData] } = useSelector(store => store.admin)

    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState({})

    const handleChangeInput = e => {
        setInputValue(prev => (prev[e.target.name] = e.target.value, { ...prev }))
    }
    const handleConfirmProfile = Token => {
        dispatch(asyncThunkResetPassword({ Token, inputValue }))
        PasswordData?.isPasswordChanged && navigate(`/signin`)
    }

    return (
        <Box sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <Box sx={{ width: { xs: '90%', md: '50%' } }} >
                <TextField onChange={e => handleChangeInput(e)} name='password' fullWidth type='password' id="standard-basic" label="Type your Password Here" variant="standard" />
                <TextField onChange={e => handleChangeInput(e)} name='cpassword' sx={{ marginBottom: '25px' }} fullWidth type='password' id="standard-basic" label="Type your Confirm Password Here" variant="standard" />
                <WhiteButton onClick={() => handleConfirmProfile(resetPassToken)} text={'Confirm'} />
            </Box>
        </Box>
    )
}

export default ResetPassword
