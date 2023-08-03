import { Box } from '@mui/material'
import New from '../../Component/Popups/New'
import ClientsCard from '../../Component/common/ClientsCard'
import './AdminContractorTab.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import WhiteButton from '../../Component/common/WhiteButton'
import { useDispatch, useSelector } from 'react-redux'
import { asyncThunkGetContractor, asyncThunkSearchContractors } from '../../redux/createAsyncThunk'
import { showToast } from '../../redux/errorSlice/errorSlice'


const AdminContractorTab = () => {
    const [page, setPage] = useState(1)
    const [isSearch, setisSearch] = useState(false)
    const [ContractorData, setContractorData] = useState([])
    const limit = 9
    const [searchQuery, setSearchQuery] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { ContractorData: { totalPages, totalContractors, page: pageIndicator, data } } = useSelector(store => store.admin)
    const payload = { searchQuery, page, limit }

    const handleChangeSerch = (e) => {
        setSearchQuery(e.target.value)
        e.target.value.length === 0 && dispatch(asyncThunkGetContractor(1)); setisSearch(false)
    }

    const handleSubmit = () => {

        setisSearch(true)
        dispatch(asyncThunkSearchContractors(payload))
    }
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
            token === null && dispatch(showToast({ type: "warning", message: "Token Has Expired ! Please SignIn Again" }))
        } catch (error) {
            dispatch(showToast({ type: "warning", message: "Token Has Expired ! Please SignIn Again" }))
        }
        !token?.usertoken && navigate('/signin')
        setContractorData(data)
    }, [data, dispatch, navigate])

    useEffect(() => {
        isSearch ? dispatch(asyncThunkSearchContractors(payload)) : dispatch(asyncThunkGetContractor(page))
    }, [dispatch, page])

    return (
        <Box sx={{ backgroundColor: '#00000006' }}>
            <New />
            {/* <SearchBar page={page} /> */}
            <div className="client-search-form">
                <div className="form-row">
                    <input onChange={(e) => handleChangeSerch(e)} type="text" placeholder="Search Contractor" />
                    <button onClick={() => handleSubmit()} disabled={searchQuery ? false : true} style={{ cursor: !searchQuery && 'no-drop' }} type="submit">Search</button>
                </div>
            </div>
            <Box className={'AdminContractorTab_container'}>
                <Box className={'AdminContractorTab_container_fluid'} >
                    {
                        ContractorData?.map((value, i) => {
                            return <Box key={i}>
                                <ClientsCard value={value} />
                            </Box>
                        })
                    }
                </Box>
                <WhiteButton onClick={handlePrevPagination} text={'prev'} />
                <WhiteButton onClick={handleNextPagination} text={'next'} />
            </Box>
        </ Box>
    )
}

export default AdminContractorTab
