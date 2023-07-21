import { Box } from '@mui/material'
import New from '../Component/New'
import SearchBar from '../Component/SearchBar'
import ClientsCard from '../Component/common/ClientsCard'

const AdminContractorTab = () => {
    return (
        <>
            <New />
            <SearchBar />
            {/* use map function here */}
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: '95%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Box sx={{marginBottom:'40px'}}>
                        <ClientsCard />
                    </Box>
                    <Box sx={{marginBottom:'40px'}}>
                        <ClientsCard />
                    </Box>
                    <Box sx={{marginBottom:'40px'}}>
                        <ClientsCard />
                    </Box>
                    <Box sx={{marginBottom:'40px'}}>
                        <ClientsCard />
                    </Box>
                    <Box sx={{marginBottom:'40px'}}>
                        <ClientsCard />
                    </Box>
                    <Box sx={{marginBottom:'40px'}}>
                        <ClientsCard />
                    </Box>
                    <Box sx={{marginBottom:'40px'}}>
                        <ClientsCard />
                    </Box>
                    <Box sx={{marginBottom:'40px'}}>
                        <ClientsCard />
                    </Box>
                    <Box sx={{marginBottom:'40px'}}>
                        <ClientsCard />
                    </Box>
                    <Box sx={{marginBottom:'40px'}}>
                        <ClientsCard />
                    </Box>
                    <Box sx={{marginBottom:'40px'}}>
                        <ClientsCard />
                    </Box>
                    <Box sx={{marginBottom:'40px'}}>
                        <ClientsCard />
                    </Box>
                </Box>
            </Box>
        </ >
    )
}

export default AdminContractorTab
