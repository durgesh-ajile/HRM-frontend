// import React from 'react'
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Registration from './src/Component/Registration'
import Calender from './src/Pages/Calender'
import AdminContractorTab from './src/Pages/AdminContractorTab/AdminContractorTab'
import SignInPage from './src/Pages/SignInPage'
import { useState } from 'react'
import Profile from './src/Component/profile/Profile'
// import Cards from './src/Component/profile/Cards'


function App() {
  // eslint-disable-next-line no-unused-vars
  const [routesData, setRoutesData] = useState([
    { path: '/', component: <AdminContractorTab /> },
    { path: '/signin', component: <SignInPage /> },
    { path: '/registration', component: <Registration /> },
    { path: '/calender', component: <Calender /> },
    { path: '/profile', component: <Profile /> },
  ])
  return (
    <BrowserRouter>
      <Routes>
        {routesData?.map((route) => { return <Route path={route?.path} element={route?.component} key={route?.path} /> })}
      </Routes>
      {/* <Cards /> */}
    </BrowserRouter>
  )
}

export default App
