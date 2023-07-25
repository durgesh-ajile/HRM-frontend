import { Box } from '@mui/material'
import New from '../../Component/New'
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
    const { ContractorData: { totalPages, totalContractors, page: pageIndicator, data } } = useSelector(stro => stro.admin)
    console.log('ContractorData', totalPages, totalContractors, pageIndicator, data)

    const handlePrevPagination = () => {
        setPage((prev => prev - 1))
        dispatch(asyncThunkGetContractor(page))
        console.log(page)
    }
    const handleNextPagination = () => {
        if (pageIndicator < totalPages) {
            setPage((prev => prev + 1))
            console.log(page)
            dispatch(asyncThunkGetContractor(page))
        } else {
            dispatch(showToast({ type: "error", message: "Page End" }))
        }
    }

    useEffect(() => {
        const { usertoken } = JSON.parse(localStorage.getItem("token"))
        !usertoken && navigate('/signin')
        setContractorData(data)
    }, [data, navigate])

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
                                <ClientsCard value={value}/>
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
