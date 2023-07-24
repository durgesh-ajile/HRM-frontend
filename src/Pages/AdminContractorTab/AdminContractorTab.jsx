import { Box } from '@mui/material'
import New from '../../Component/New'
import SearchBar from '../../Component/SearchBar'
import ClientsCard from '../../Component/common/ClientsCard'
import './AdminContractorTab.css'

const AdminContractorTab = () => {
    return (
        <Box sx={{ backgroundColor: '#00000006' }}>
            <New />
            <SearchBar />
            <Box className={'AdminContractorTab_container'} sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Box className={'AdminContractorTab_container_fluid'} >
                    {/* use map function here */}
                    <Box >
                        <ClientsCard />
                    </Box>
                    <Box >
                        <ClientsCard />
                    </Box>
                    <Box >
                        <ClientsCard />
                    </Box>
                    <Box >
                        <ClientsCard />
                    </Box>
                    <Box >
                        <ClientsCard />
                    </Box>
                    <Box >
                        <ClientsCard />
                    </Box>
                    <Box >
                        <ClientsCard />
                    </Box>
                    <Box >
                        <ClientsCard />
                    </Box>
                    <Box >
                        <ClientsCard />
                    </Box>
                    <Box >
                        <ClientsCard />
                    </Box>
                    <Box >
                        <ClientsCard />
                    </Box>
                    <Box >
                        <ClientsCard />
                    </Box>
                    <Box >
                        <ClientsCard />
                    </Box>
                </Box>
            </Box>
        </ Box>
    )
}

export default AdminContractorTab
