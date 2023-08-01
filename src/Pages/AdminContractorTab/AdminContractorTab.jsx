import { Box } from '@mui/material'
import New from '../../Component/Popups/New'
import SearchBar from '../../Component/SearchBar'
import ClientsCard from '../../Component/common/ClientsCard'
import './AdminContractorTab.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import WhiteButton from '../../Component/common/WhiteButton'
import { useDispatch, useSelector } from 'react-redux'
import { asyncThunkGetContractor } from '../../redux/createAsyncThunk'
import { showToast } from '../../redux/errorSlice/errorSlice'


const AdminContractorTab = () => {
    const [page, setPage] = useState(1)
    const [ContractorData, setContractorData] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { ContractorData: { totalPages, totalContractors, page: pageIndicator, data } } = useSelector(store => store.admin)
    // const { ContractorData: { totalPages, totalContractors, page: pageIndicator, data } } = useSelector(store => store.admin)

    const handlePrevPagination = () => {
        if (page >= 2) {
            setPage((prev => prev - 1))
        } else {
            dispatch(showToast({ type: "warning", message: "This Is First Page Please Click On Next Button" }))
        }
    }
    const handleNextPagination = () => {
        if (pageIndicator < totalPages) {
            setPage((prev => prev + 1))
        } else {
            dispatch(showToast({ type: "warning", message: "This Is Last Page Please Click On Prev Button" }))
        }
    }

    useEffect(() => {
        let token = null
        try {
            token = JSON.parse(localStorage.getItem("token"))
            token === null && dispatch(showToast({ type: "warning", message: "Token Has Expited ! Please SignIn Again" }))
        } catch (error) {
            dispatch(showToast({ type: "warning", message: "Token Has Expited ! Please SignIn Again" }))
        }
        !token?.usertoken && navigate('/signin')
        setContractorData(data)
    }, [data, dispatch, navigate])

    useEffect(() => {
        dispatch(asyncThunkGetContractor(page))
    }, [dispatch, page])

    return (
        <Box sx={{ backgroundColor: '#00000006' }}>
            <New />
            <SearchBar />
            <Box className={'AdminContractorTab_container'}>
                <Box className={'AdminContractorTab_container_fluid'} >
                    {/* use map function here */}
                    {
                        ContractorData?.map((value, i) => {
                            return <Box key={i}>
                                <ClientsCard value={value} />
                            </Box>
                        })
                    }
                </Box>
                <WhiteButton onClick={handlePrevPagination} text={'prev'} />
                {<WhiteButton onClick={handleNextPagination} text={'next'} />}
            </Box>
        </ Box>
    )
}

export default AdminContractorTab
