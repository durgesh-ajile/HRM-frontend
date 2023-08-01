import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import WhiteButton from './WhiteButton';
import AvatarComponent from './Avatar ';
import { Box } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import { asyncThunkApproveContractor, asyncThunkDeclineContractor } from '../../redux/createAsyncThunk';
import { useDispatch } from 'react-redux';
import AlertDialogSlide from './AlertDialogSlide';

// eslint-disable-next-line react/prop-types
const ClientsCard = ({ value }) => {

    const navigate = useNavigate()
    // eslint-disable-next-line react/prop-types
    const { first_name, last_name, email, _id } = value;
    // const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const handleViewProfile = (contractorId) => { navigate(`/profile/${contractorId}`) }
    const handleApproveProfile = (contractorId) => { const payload = { contractorId }; dispatch(asyncThunkApproveContractor(payload)) }
    // const handleDeclineProfile = (contractorId) => { const payload = { contractorId }; dispatch(asyncThunkDeclineContractor(payload)) }

    return (<>
    
        <Card sx={{ width: "300px", backgroundColor: '#ffffff', display: 'flex', justifyContent: 'center', textAlign: 'center', marginBottom: '10px' }}>
            <CardContent sx={{ width: '100%' }}>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
                    <MoreVertIcon sx={{ cursor: 'pointer', fontSize: '30px', color: 'gray' }} />
                </Box>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <AvatarComponent />
                </Box>
                <Typography sx={{ fontSize: 20, marginTop: '15px', fontWeight: '700' }} color="text.secondary" gutterBottom>
                    {first_name}
                </Typography>
                <Typography sx={{ fontSize: 15, fontWeight: '700' }} color="text.secondary" gutterBottom>
                    {last_name}
                </Typography>
                <Typography sx={{ fontSize: 10, fontWeight: '700' }} color="text.secondary" gutterBottom>
                    {email}
                </Typography>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '10px' }}>
                    <Box sx={{ marginRight: '10px' }}>
                        <WhiteButton onClick={() => handleApproveProfile(_id)} text={'Approve'} />
                    </Box>
                    <Box>
                    <AlertDialogSlide _id={_id} />
                    {/* <WhiteButton onClick={() => handleDeclineProfile(_id)} text={'Decline'} /> */}
                    </Box>
                </Box>
                <Box>
                    <WhiteButton onClick={() => handleViewProfile(_id)} text={'View Profile'} />
                </Box>
            </CardContent>
        </Card>
    </>
    )
}

export default ClientsCard
