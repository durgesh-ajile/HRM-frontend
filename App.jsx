
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Registration from './src/Component/Registration'
import AdminContractorTab from './src/Pages/AdminContractorTab/AdminContractorTab'
import SignInPage from './src/Pages/SignInPage'
import { useState } from 'react'
import Profile from './src/Component/profile/Profile'
import { Alert, Snackbar } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { hideToast } from './src/redux/errorSlice/errorSlice'
import Landing from './Landing'
import "./src/App.css"
import ResetPasswordPage from './src/Pages/ResetPasswordPage'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [routesData, setRoutesData] = useState([
    { path: '/signin', component: <SignInPage /> },
    { path: '/registration', component: <Registration /> },
    { path: '/resetpassword/:resetPassToken', component: <ResetPasswordPage /> },
    { path: '*', component: <Landing /> },

  ])

  const dispatch = useDispatch()
  const { errorType, message, errorShow } = useSelector((store) => store.error)

  return (
    <BrowserRouter>
      <Snackbar open={errorShow} autoHideDuration={3000} onClose={() => dispatch(hideToast())}>
        <Alert onClose={() => dispatch(hideToast())} severity={errorType ? errorType : 'success'} sx={{ width: '100%', textTransform: "uppercase" }}>
          {message}
        </Alert>
      </Snackbar>
      <Routes>
        {routesData?.map((route) => { return <Route path={route?.path} element={route?.component} key={route?.path} /> })}
      </Routes>
    </BrowserRouter>
  )
}

export default App
